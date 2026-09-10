import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getPricePerBottle } from "@/lib/sale";

type CartItem = {
  name: string;
  price: number; // dollars
  quantity: number;
  image?: string;
  isSubscription?: boolean;
};

export async function POST(req: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error("Missing STRIPE_SECRET_KEY in environment (.env.local)");
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
      throw new Error("Missing NEXT_PUBLIC_SITE_URL in environment (.env.local)");
    }

    const stripe = new Stripe(secretKey);
    const { cartItems, promotionCodeId, email, fbp, fbc } = (await req.json()) as {
      cartItems: CartItem[];
      promotionCodeId?: string;
      email?: string;
      fbp?: string | null;
      fbc?: string | null;
    };

    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp =
      forwardedFor?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      req.headers.get("x-vercel-forwarded-for") ||
      null;
    const userAgent = req.headers.get("user-agent");

    const metaMetadata: Record<string, string> = {};
    if (fbp) metaMetadata.fbp = String(fbp).slice(0, 500);
    if (fbc) metaMetadata.fbc = String(fbc).slice(0, 500);
    if (clientIp) metaMetadata.client_ip = clientIp.slice(0, 100);
    if (userAgent) metaMetadata.client_ua = userAgent.slice(0, 500);

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const isSubscription = cartItems.some((item) => item.isSubscription);

    if (isSubscription) {
      const subItem = cartItems.find((item) => item.isSubscription);
      if (!subItem || subItem.name !== "Peak Performance") {
        return NextResponse.json(
          { error: "Subscriptions are only available for Peak Performance." },
          { status: 400 }
        );
      }

      const subscriptionPriceId = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;
      if (!subscriptionPriceId) {
        console.error("Missing STRIPE_SUBSCRIPTION_PRICE_ID env var");
        return NextResponse.json(
          { error: "Subscription checkout is not configured." },
          { status: 500 }
        );
      }

      const session = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        mode: "subscription",
        line_items: [{ price: subscriptionPriceId, quantity: 1 }],
        ...(email ? { customer_email: email } : {}),
        ...(Object.keys(metaMetadata).length
          ? { subscription_data: { metadata: metaMetadata } }
          : {}),
        allow_promotion_codes: true,
        shipping_address_collection: { allowed_countries: ["US"] },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 0, currency: "usd" },
              display_name: "Free Shipping",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 4 },
                maximum: { unit: "business_day", value: 7 },
              },
            },
          },
        ],
        return_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      });

      return NextResponse.json({ clientSecret: session.client_secret });
    }

    // One-time payment checkout — price recomputed server-side from quantity.
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.map((item) => {
        if (item.name !== "Peak Performance") {
          throw new Error(`Unknown product: ${item.name}`);
        }
        const quantity = Math.max(1, Math.min(Math.floor(item.quantity), 10));
        const unitPrice = getPricePerBottle(quantity);
        return {
          quantity,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(unitPrice * 100),
            product_data: {
              name: "Peak Performance",
              ...(item.image ? { images: [item.image] } : {}),
            },
          },
        };
      });

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      line_items,
      ...(Object.keys(metaMetadata).length ? { metadata: metaMetadata } : {}),
      ...(email ? { customer_email: email } : {}),
      ...(promotionCodeId
        ? { discounts: [{ promotion_code: promotionCodeId }] }
        : { allow_promotion_codes: true }),
      shipping_address_collection: { allowed_countries: ["US"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "usd" },
            display_name: "Free Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 4 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],
      return_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: unknown) {
    console.error("Stripe embedded checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
