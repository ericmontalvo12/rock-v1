import { NextRequest, NextResponse } from "next/server";
import { getReviews, hasReviewForEmail, insertReview, verifyPurchase } from "@/lib/reviews-db";
import { REQUIRE_VERIFIED_PURCHASE, MAX_REVIEW_PHOTO_BYTES } from "@/lib/reviews-config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  try {
    const reviews = await getReviews();
    const count = reviews.length;
    const average =
      count > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;
    return NextResponse.json({ reviews, count, average });
  } catch (err) {
    console.error("Failed to fetch reviews:", err);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email");
    const name = formData.get("name");
    const rating = Number(formData.get("rating"));
    const quote = formData.get("quote");
    const photo = formData.get("photo");

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
    }
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Enter your name." }, { status: 400 });
    }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
    }
    if (!quote || typeof quote !== "string" || quote.trim().length < 10) {
      return NextResponse.json(
        { error: "Review must be at least 10 characters." },
        { status: 400 }
      );
    }

    let photoDataUrl: string | null = null;
    if (photo instanceof File && photo.size > 0) {
      if (!photo.type.startsWith("image/")) {
        return NextResponse.json({ error: "Photo must be an image." }, { status: 400 });
      }
      if (photo.size > MAX_REVIEW_PHOTO_BYTES) {
        return NextResponse.json({ error: "Photo must be under 2MB." }, { status: 400 });
      }
      const bytes = Buffer.from(await photo.arrayBuffer());
      photoDataUrl = `data:${photo.type};base64,${bytes.toString("base64")}`;
    }

    const alreadyReviewed = await hasReviewForEmail(email);
    if (alreadyReviewed) {
      return NextResponse.json(
        { error: "A review from this email already exists." },
        { status: 409 }
      );
    }

    // Always check purchase status so the "Verified Buyer" badge stays
    // accurate, even while REQUIRE_VERIFIED_PURCHASE is temporarily off.
    const verified = await verifyPurchase(email);
    if (REQUIRE_VERIFIED_PURCHASE && !verified) {
      return NextResponse.json(
        {
          error:
            "We couldn't find a completed order for this email, so we can't publish the review.",
        },
        { status: 403 }
      );
    }

    await insertReview({
      email,
      name: name.trim(),
      rating,
      quote: quote.trim(),
      photoDataUrl,
      verifiedPurchase: verified,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to submit review:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
