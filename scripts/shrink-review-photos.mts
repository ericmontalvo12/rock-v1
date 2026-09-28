/**
 * One-off maintenance: shrink review photos that were stored at full
 * resolution, before uploads were capped.
 *
 * Photos live in Postgres as base64 data URLs. Four full-size phone photos made
 * the review list ~5.5MB per request, which burned through Neon's transfer
 * allowance and suspended the database. The app now shrinks on upload and
 * re-encodes oversized rows when serving them, but the rows themselves are
 * still large - this rewrites them in place so they stop costing egress and
 * storage.
 *
 * Safe to re-run: rows already under the threshold are skipped.
 *
 * Usage:
 *   DATABASE_URL='postgres://...' npx tsx scripts/shrink-review-photos.mts
 *   DATABASE_URL='postgres://...' npx tsx scripts/shrink-review-photos.mts --apply
 *
 * Without --apply it only reports what it would do.
 */
import { neon } from "@neondatabase/serverless";
import {
  PHOTO_REENCODE_THRESHOLD_BYTES,
  shrinkPhoto,
} from "../lib/review-photos";

const apply = process.argv.includes("--apply");

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
if (!connectionString) {
  console.error("Set DATABASE_URL (or POSTGRES_URL) before running this.");
  process.exit(1);
}
const sql = neon(connectionString);

const kb = (bytes: number) => `${(bytes / 1024).toFixed(0)}KB`;

const rows = (await sql`
  SELECT id, photo_data_url
  FROM reviews
  WHERE photo_data_url IS NOT NULL
  ORDER BY id
`) as Array<{ id: number; photo_data_url: string }>;

console.log(
  `${rows.length} review(s) with a photo. ${apply ? "Applying changes." : "Dry run - pass --apply to write."}\n`
);

let before = 0;
let after = 0;
let rewritten = 0;

for (const row of rows) {
  const match = /^data:([^;,]+);base64,([\s\S]*)$/.exec(row.photo_data_url);
  if (!match) {
    console.log(`#${row.id}: not a base64 data URL, skipped`);
    continue;
  }

  const original = Buffer.from(match[2], "base64");
  before += original.byteLength;

  if (original.byteLength <= PHOTO_REENCODE_THRESHOLD_BYTES) {
    after += original.byteLength;
    console.log(`#${row.id}: ${kb(original.byteLength)} already small, skipped`);
    continue;
  }

  const shrunk = await shrinkPhoto(original);
  if (!shrunk) {
    after += original.byteLength;
    console.log(`#${row.id}: could not decode, left untouched`);
    continue;
  }

  after += shrunk.body.byteLength;
  const saved = original.byteLength - shrunk.body.byteLength;
  console.log(
    `#${row.id}: ${kb(original.byteLength)} -> ${kb(shrunk.body.byteLength)} (saves ${kb(saved)})`
  );

  if (apply) {
    const dataUrl = `data:${shrunk.contentType};base64,${shrunk.body.toString("base64")}`;
    await sql`UPDATE reviews SET photo_data_url = ${dataUrl} WHERE id = ${row.id}`;
    rewritten++;
  }
}

console.log(
  `\nTotal decoded photo bytes: ${kb(before)} -> ${kb(after)} (${(((before - after) / Math.max(before, 1)) * 100).toFixed(0)}% smaller)`
);
console.log(apply ? `${rewritten} row(s) rewritten.` : "No rows written (dry run).");
