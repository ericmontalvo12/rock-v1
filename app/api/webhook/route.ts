import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { sendPurchaseToMetaCapi } from "@/lib/meta-capi";
import { SITE_URL } from "@/app/layout";
import { upsertOrder, type OrderLineItem } from "@/lib/orders-db";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook signature verification failed: ${errorMessage}`);
    return NextResponse.json(
      { error: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // Log order details (replace with database save in production)
      console.log("=== ORDER COMPLETED ===");
      console.log("Session ID:", session.id);
      console.log("Payment Status:", session.payment_status);
      console.log("Amount Total:", session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : "N/A");
      console.log("Customer Email:", session.customer_details?.email || "N/A");
      console.log("Shipping Address:", session.collected_information?.shipping_details?.address || "N/A");
      console.log("=======================");

      const shippingDetails = session.collected_information?.shipping_details;
      const shippingAddress = shippingDetails?.address;

      // Persist the order so it appears in the admin dashboard. Wrapped so a
      // database blip can never cause Stripe to see a failed webhook and stop
      // the confirmation email and Purchase event below from running.
      if (session.amount_total != null) {
        try {
          let lineItems: OrderLineItem[] = [];
          try {
            const li = await stripe.checkout.sessions.listLineItems(session.id, { limit: 20 });
            lineItems = li.data.map((item) => ({
              description: item.description ?? "Item",
              quantity: item.quantity ?? 1,
              amountTotal: (item.amount_total ?? 0) / 100,
            }));
          } catch (err) {
            console.error("Could not load line items for", session.id, err);
          }

          await upsertOrder({
            stripeSessionId: session.id,
            email: session.customer_details?.email ?? null,
            customerName: session.customer_details?.name ?? null,
            phone: session.customer_details?.phone ?? null,
            amountTotal: session.amount_total / 100,
            currency: session.currency ?? "usd",
            paymentStatus: session.payment_status,
            shippingName: shippingDetails?.name ?? null,
            addressLine1: shippingAddress?.line1 ?? null,
            addressLine2: shippingAddress?.line2 ?? null,
            city: shippingAddress?.city ?? null,
            state: shippingAddress?.state ?? null,
            postalCode: shippingAddress?.postal_code ?? null,
            country: shippingAddress?.country ?? null,
            lineItems,
            createdAt: new Date(session.created * 1000),
          });
        } catch (err) {
          console.error("Failed to save order to database:", err);
        }
      }

      // Forward order to HighLevel for confirmation email
      try {
        await fetch("https://services.leadconnectorhq.com/hooks/EakYnXEQy1hvVFmdShYB/webhook-trigger/0bc60e38-cd24-4372-84cf-86e540f8ef14", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: session.customer_details?.email || null,
            first_name: session.customer_details?.name?.split(" ")[0] || null,
            last_name: session.customer_details?.name?.split(" ").slice(1).join(" ") || null,
            order_id: session.id,
            amount_total: session.amount_total ? (session.amount_total / 100).toFixed(2) : null,
            currency: session.currency,
            payment_status: session.payment_status,
            shipping_name: shippingDetails?.name || null,
            shipping_address_line1: shippingAddress?.line1 || null,
            shipping_address_line2: shippingAddress?.line2 || null,
            shipping_address_city: shippingAddress?.city || null,
            shipping_address_state: shippingAddress?.state || null,
            shipping_address_postal_code: shippingAddress?.postal_code || null,
            shipping_address_country: shippingAddress?.country || null,
          }),
        });
      } catch (err) {
        console.error("Failed to send order confirmation to HighLevel:", err);
      }

      // Meta Purchase via the Conversions API.
      // The browser also fires Purchase from /success, but only if the
      // customer's browser actually loads the return_url - which frequently
      // does not happen in in-app browsers. This webhook fires for every
      // completed order, so it is the reliable path. Both carry the same
      // event_id (the session id) and Meta dedupes them.
      if (session.amount_total != null) {
        await sendPurchaseToMetaCapi({
          eventId: session.id,
          value: session.amount_total / 100,
          currency: session.currency || "usd",
          email: session.customer_details?.email,
          firstName: session.customer_details?.name?.split(" ")[0],
          lastName: session.customer_details?.name?.split(" ").slice(1).join(" "),
          phone: session.customer_details?.phone,
          city: shippingAddress?.city,
          state: shippingAddress?.state,
          zip: shippingAddress?.postal_code,
          country: shippingAddress?.country,
          fbp: session.metadata?.fbp,
          fbc: session.metadata?.fbc,
          // Captured from the browser when the session was created. The
          // headers on THIS request belong to Stripe's servers, not the buyer.
          clientIpAddress: session.metadata?.client_ip,
          clientUserAgent: session.metadata?.client_ua,
          // Stable per-customer id. Prefer the Stripe customer id; guest
          // checkouts have none, so fall back to the email (hashed in
          // meta-capi.ts either way).
          externalId:
            (typeof session.customer === "string"
              ? session.customer
              : session.customer?.id) ?? session.customer_details?.email,
          eventSourceUrl: `${SITE_URL}/success`,
          testEventCode: process.env.META_CAPI_TEST_EVENT_CODE,
        });
      }

      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`PaymentIntent ${paymentIntent.id} succeeded`);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
