import { NextResponse } from "next/server";

// This redirect-based checkout route is not used — the site uses
// the embedded checkout flow at /api/checkout-embedded instead.
export async function POST() {
  return NextResponse.json(
    { error: "Use the embedded checkout flow." },
    { status: 410 }
  );
}
