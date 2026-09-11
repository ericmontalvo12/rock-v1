import { getReviews } from "@/lib/reviews-db";
import ProductPageClient from "./ProductPageClient";

export default async function ProductPage() {
  let initialReviews: Awaited<ReturnType<typeof getReviews>> = [];
  try {
    initialReviews = await getReviews();
  } catch {
    // Fall back to empty — the client can still submit/refresh reviews.
  }

  const count = initialReviews.length;
  const average =
    count > 0
      ? initialReviews.reduce((sum, r) => sum + r.rating, 0) / count
      : 0;

  return (
    <ProductPageClient
      initialReviews={initialReviews}
      initialReviewCount={count}
      initialReviewAverage={average}
    />
  );
}
