// Client-safe review config (no server-only imports, so this can be
// imported from both the API route and client components).

// Whether a review requires a verified Stripe purchase before it publishes.
// Temporarily off so friends & family who received free bottles can leave
// reviews. Flip back to true once that batch has been submitted.
export const REQUIRE_VERIFIED_PURCHASE = false;

export const MAX_REVIEW_PHOTO_BYTES = 2 * 1024 * 1024; // 2MB
