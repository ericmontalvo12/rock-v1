import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

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
      console.log("=======================");

      // TODO: Save order to database
      // TODO: Update inventory

      // Forward order to HighLevel for confirmation email
      try {
        await fetch("https://services.leadconnectorhq.com/hooks/EakYnXEQy1hvVFmdShYB/webhook-trigger/7VJ6AHSjoT5le9ZcK4WZ", {
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
          }),
        });
      } catch (err) {
        console.error("Failed to send order confirmation to HighLevel:", err);
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
