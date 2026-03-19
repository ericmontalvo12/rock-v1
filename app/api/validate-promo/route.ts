import { NextResponse } from "next/server";
import { lookupPromoCode } from "@/lib/promo-codes";

export async function POST(req: Request) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const promo = lookupPromoCode(code);

  if (!promo) {
    return NextResponse.json(
      { error: "Invalid or expired discount code." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    promotionCodeId: code.toUpperCase(),
    percentOff: promo.percentOff ?? null,
    amountOff: promo.amountOff ?? null,
  });
}
