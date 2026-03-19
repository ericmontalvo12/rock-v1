import { SquareClient, SquareEnvironment } from "square";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { lookupPromoCode } from "@/lib/promo-codes";

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN!,
  environment: SquareEnvironment.Production,
});

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  image?: string;
  isSubscription?: boolean;
  subscriptionIntervalCount?: number;
};

type CustomerInfo = {
  email: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
};

export async function POST(req: Request) {
  try {
    const { token, cartItems, customerInfo, isSubscription, promotionCodeId } =
      (await req.json()) as {
        token: string;
        cartItems: CartItem[];
        customerInfo: CustomerInfo;
        isSubscription: boolean;
        promotionCodeId?: string;
      };

    if (!token || !cartItems?.length || !customerInfo) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const locationId = process.env.SQUARE_LOCATION_ID;
    if (!locationId) {
      throw new Error("Missing SQUARE_LOCATION_ID environment variable");
    }

    const subtotalCents = Math.round(
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100
    );
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const shippingCents = isSubscription || totalItems >= 2 ? 0 : 999;

    // Apply promo discount
    let discountCents = 0;
    if (promotionCodeId) {
      const promo = lookupPromoCode(promotionCodeId);
      if (promo) {
        if (promo.percentOff) {
          discountCents = Math.round(subtotalCents * (promo.percentOff / 100));
        } else if (promo.amountOff) {
          discountCents = promo.amountOff;
        }
      }
    }

    const totalCents = subtotalCents - discountCents + shippingCents;

    if (isSubscription) {
      // 1. Create Square customer
      const { customer } = await client.customers.create({
        idempotencyKey: randomUUID(),
        givenName: customerInfo.firstName,
        familyName: customerInfo.lastName,
        emailAddress: customerInfo.email,
        address: {
          addressLine1: customerInfo.addressLine1,
          locality: customerInfo.city,
          administrativeDistrictLevel1: customerInfo.state,
          postalCode: customerInfo.postalCode,
          country: "US",
        },
      });

      const customerId = customer!.id!;

      // 2. Save card on file
      const { card } = await client.cards.create({
        idempotencyKey: randomUUID(),
        sourceId: token,
        card: {
          customerId,
          billingAddress: { postalCode: customerInfo.postalCode },
        },
      });

      const cardId = card!.id!;

      // 3. Pick subscription plan variation ID
      // Create these in Square Dashboard → Items → Subscriptions
      const intervalCount =
        cartItems.find((i) => i.isSubscription)?.subscriptionIntervalCount ?? 1;
      const planVarId =
        intervalCount >= 6
          ? process.env.SQUARE_PLAN_6MO_ID
          : intervalCount >= 3
          ? process.env.SQUARE_PLAN_3MO_ID
          : process.env.SQUARE_PLAN_1MO_ID;

      if (!planVarId) {
        return NextResponse.json(
          { error: "Subscription plans are not configured yet. Please contact support." },
          { status: 500 }
        );
      }

      // 4. Create subscription
      const today = new Date().toISOString().split("T")[0];
      const { subscription } = await client.subscriptions.create({
        idempotencyKey: randomUUID(),
        locationId,
        planVariationId: planVarId,
        customerId,
        cardId,
        startDate: today,
      });

      await notifyHighLevel({
        email: customerInfo.email,
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
        orderId: subscription!.id!,
        amountTotal: (totalCents / 100).toFixed(2),
        paymentStatus: "SUBSCRIPTION_CREATED",
      });

      return NextResponse.json({ success: true, subscriptionId: subscription!.id });
    }

    // One-time payment
    const { payment } = await client.payments.create({
      sourceId: token,
      idempotencyKey: randomUUID(),
      amountMoney: {
        amount: BigInt(totalCents),
        currency: "USD",
      },
      locationId,
      buyerEmailAddress: customerInfo.email,
      shippingAddress: {
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
        addressLine1: customerInfo.addressLine1,
        locality: customerInfo.city,
        administrativeDistrictLevel1: customerInfo.state,
        postalCode: customerInfo.postalCode,
        country: "US",
      },
    });

    await notifyHighLevel({
      email: customerInfo.email,
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      orderId: payment!.id!,
      amountTotal: (totalCents / 100).toFixed(2),
      paymentStatus: payment!.status ?? "COMPLETED",
    });

    return NextResponse.json({ success: true, paymentId: payment!.id });
  } catch (err: any) {
    console.error("Square checkout error:", err);
    const message =
      err?.errors?.[0]?.detail ?? err?.message ?? "Payment failed. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function notifyHighLevel(data: {
  email: string;
  firstName: string;
  lastName: string;
  orderId: string;
  amountTotal: string;
  paymentStatus: string;
}) {
  try {
    await fetch(
      "https://services.leadconnectorhq.com/hooks/EakYnXEQy1hvVFmdShYB/webhook-trigger/7VJ6AHSjoT5le9ZcK4WZ",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          order_id: data.orderId,
          amount_total: data.amountTotal,
          currency: "usd",
          payment_status: data.paymentStatus,
        }),
      }
    );
  } catch (err) {
    console.error("Failed to notify HighLevel:", err);
  }
}
