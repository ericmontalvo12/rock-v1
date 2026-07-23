import { neon } from "@neondatabase/serverless";
import Stripe from "stripe";

function getSql() {
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL (or POSTGRES_URL) in environment");
  }
  return neon(connectionString);
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  quote: string;
  createdAt: string;
}

async function ensureTable() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL,
      name TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
      quote TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
}

export async function getReviews(): Promise<Review[]> {
  await ensureTable();
  const sql = getSql();
  const rows = (await sql`
    SELECT id, name, rating, quote, created_at
    FROM reviews
    ORDER BY created_at DESC
  `) as Array<{
    id: number;
    name: string;
    rating: number;
    quote: string;
    created_at: string;
  }>;

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    rating: row.rating,
    quote: row.quote,
    createdAt: row.created_at,
  }));
}

export async function hasReviewForEmail(email: string): Promise<boolean> {
  await ensureTable();
  const sql = getSql();
  const rows = await sql`SELECT id FROM reviews WHERE email = ${email.toLowerCase()} LIMIT 1`;
  return rows.length > 0;
}

export async function insertReview(params: {
  email: string;
  name: string;
  rating: number;
  quote: string;
}) {
  await ensureTable();
  const sql = getSql();
  await sql`
    INSERT INTO reviews (email, name, rating, quote)
    VALUES (${params.email.toLowerCase()}, ${params.name}, ${params.rating}, ${params.quote})
  `;
}

// A review is only ever published if this returns true - the email must
// match a real, successfully completed Stripe charge.
export async function verifyPurchase(email: string): Promise<boolean> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return false;

  const stripe = new Stripe(secretKey);
  const sanitizedEmail = email.replace(/"/g, "");
  const result = await stripe.charges.search({
    query: `receipt_email:"${sanitizedEmail}" AND status:"succeeded"`,
  });
  return result.data.length > 0;
}
