import Stripe from "stripe";
import { NextResponse } from "next/server";

type CartItem = {
  name: string;
  price: number; // dollars
  quantity: number;
  image?: string;
  isSubscription?: boolean;
  subscriptionIntervalCount?: number; // billing every N months
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
    const { cartItems, promotionCodeId } = (await req.json()) as {
      cartItems: CartItem[];
      promotionCodeId?: string;
    };

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const isSubscription = cartItems.some((item) => item.isSubscription);

    if (isSubscription) {
      // Subscription checkout
      const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
        cartItems.map((item) => ({
          quantity: item.quantity,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(item.price * 100),
            product_data: {
              name: item.name,
              ...(item.image ? { images: [item.image] } : {}),
            },
            recurring: {
              interval: "month" as const,
              interval_count: item.subscriptionIntervalCount ?? 1,
            },
          },
        }));

      const session = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        mode: "subscription",
        line_items,
        shipping_address_collection: { allowed_countries: ["US"] },
        return_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      });

      return NextResponse.json({ clientSecret: session.client_secret });
    }

    // One-time payment checkout
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(item.price * 100),
          product_data: {
            name: item.name,
            ...(item.image ? { images: [item.image] } : {}),
          },
        },
      }));

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const shippingCost = totalQuantity >= 2 ? 0 : 999;

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      line_items,
      ...(promotionCodeId
        ? { discounts: [{ promotion_code: promotionCodeId }] }
        : { allow_promotion_codes: true }),
      shipping_address_collection: { allowed_countries: ["US"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: shippingCost, currency: "usd" },
            display_name: shippingCost === 0 ? "Free Shipping" : "Standard Shipping",
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
  } catch (err: any) {
    console.error("Stripe embedded checkout error:", err);
    return NextResponse.json(
      { error: err?.message ?? "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
