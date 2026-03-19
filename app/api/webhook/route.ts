import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function verifySquareSignature(
  body: string,
  signature: string,
  signatureKey: string,
  notificationUrl: string
): boolean {
  const hash = crypto
    .createHmac("sha256", signatureKey)
    .update(notificationUrl + body)
    .digest("base64");
  return hash === signature;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-square-hmacsha256-signature");
  const signatureKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const notificationUrl = `${siteUrl}/api/webhook`;

  if (!signature || !signatureKey) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  if (!verifySquareSignature(body, signature, signatureKey, notificationUrl)) {
    console.error("Square webhook signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let event: any;
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  console.log("=== SQUARE WEBHOOK ===");
  console.log("Event type:", event.type);

  switch (event.type) {
    case "payment.completed": {
      const payment = event.data?.object?.payment;
      console.log("Payment ID:", payment?.id);
      console.log("Status:", payment?.status);
      console.log("Buyer email:", payment?.buyer_email_address);
      console.log(
        "Amount:",
        payment?.amount_money?.amount,
        payment?.amount_money?.currency
      );
      break;
    }

    case "subscription.created": {
      const sub = event.data?.object?.subscription;
      console.log("Subscription ID:", sub?.id);
      console.log("Customer ID:", sub?.customer_id);
      console.log("Plan variation ID:", sub?.plan_variation_id);
      break;
    }

    case "subscription.updated": {
      const sub = event.data?.object?.subscription;
      console.log("Subscription updated:", sub?.id, "Status:", sub?.status);
      break;
    }

    default:
      console.log("Unhandled event:", event.type);
  }

  console.log("======================");

  return NextResponse.json({ received: true });
}
