import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const promoCodes = await stripe.promotionCodes.list({ code, active: true, limit: 1 });

  if (promoCodes.data.length === 0) {
    return NextResponse.json({ error: "Invalid or expired discount code." }, { status: 400 });
  }

  const promo = promoCodes.data[0];
  const coupon = promo.coupon;

  return NextResponse.json({
    promotionCodeId: promo.id,
    percentOff: coupon.percent_off ?? null,
    amountOff: coupon.amount_off ?? null,
  });
}
