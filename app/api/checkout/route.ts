import Stripe from "stripe";
import { NextResponse } from "next/server";

type CartItem = {
  name: string;
  price: number; // dollars
  quantity: number;
  image?: string;
};

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment (.env.local)");
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
if (!siteUrl) {
  throw new Error("Missing NEXT_PUBLIC_SITE_URL in environment (.env.local)");
}

const stripe = new Stripe(secretKey);

export async function POST(req: Request) {
  try {
    const { cartItems } = (await req.json()) as { cartItems: CartItem[] };

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Build line items for Stripe (convert dollars -> cents)
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

    // Shipping: free over $100, otherwise $9.99
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shippingCost = subtotal >= 100 ? 0 : 999; // cents

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
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
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: err?.message ?? "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
