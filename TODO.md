# To-Do

Things that need a human with account access. Tick them off as you go.

---

## 1. Submit the sitemap to Google Search Console

**What it means:** A sitemap is a list of every page on your site. It already
exists at https://www.rockmountainperformance.com/sitemap.xml (18 URLs). But
Google doesn't automatically know to look at it. Search Console is Google's
free dashboard for site owners, and submitting the sitemap there is how you
say "here is every page I have, please index them." Without this, Google
finds pages slowly and may miss the articles entirely.

**Steps:**
1. Go to https://search.google.com/search-console
2. Sign in with a Google account
3. Click **Add property** → choose the **URL prefix** box (the right-hand one)
4. Enter `https://www.rockmountainperformance.com` exactly, including `https://` and `www`
5. Verify ownership. Easiest route is the **HTML tag** method — it gives you a
   `<meta name="google-site-verification" ...>` tag. Send me that tag and
   I'll add it to the site, then come back and click Verify.
   (If Vercel offers a DNS verification option, that works too.)
6. Once verified, open **Sitemaps** in the left sidebar
7. Type `sitemap.xml` in the box and click **Submit**

**Done when:** the sitemap shows status "Success" with 18 discovered URLs.
Indexing takes days to weeks after that — it is not instant.

---

## 2. Run the product page through the Rich Results Test

**What it means:** We added invisible structured data to the product page —
machine-readable code telling Google "this is a product, it costs $39.95,
shipping is free, it has N reviews averaging X stars." When Google accepts it,
your search listings can show gold stars and a price instead of just a blue
link. This tool checks whether Google can read it correctly.

I could not fully verify this myself: the star rating is pulled from the live
database, which my sandbox has no access to. Everything else validated.

**Steps:**
1. Go to https://search.google.com/test/rich-results
2. Paste `https://www.rockmountainperformance.com/product`
3. Click **Test URL** and wait for the crawl

**What you want to see:** a "Product" result detected, with no errors.

**Then check specifically:** expand the Product result and look for
`aggregateRating`. If it's there with a rating and review count, stars are
working. If it's missing, tell me — that means the page isn't reading the
reviews at render time and I need to fix it.

Warnings (as opposed to errors) about optional fields are fine to ignore.

---

## 3. Check Meta Events Manager

**What it means:** Confirming Facebook is actually receiving the purchase
data we send. The code is correct — I verified all four events are wired and
that Purchase reports the real Stripe amount and can't double-count. But
correct code doesn't prove the events are arriving. If Purchase never lands,
Meta can't learn who buys, so it shows your ads to random people.

**Steps:**
1. Open Meta Events Manager → select pixel `1812986660081810`
2. Open the **Overview** or **Test Events** tab
3. Confirm activity for: `PageView`, `AddToCart`, `InitiateCheckout`, `Purchase`

`PageView` should show plenty. `Purchase` will show zero until a real sale
happens — that alone isn't a bug. Use **Test Events** to watch your own
session live if you want to confirm the pipe works end to end.

---

## 4. Decide what happens when the sale ends — 28 Aug 2026

Prices revert to $49.99 automatically and the countdown disappears on its own,
so nothing breaks if you do nothing. But decide before the date whether you're
extending, ending, or replacing it rather than letting it lapse mid-campaign
while ads are running. One line change in `lib/sale.ts`.

---

## 5. Open engineering work (my side, not yours)

- **LCP 6.5s** — render-blocking JS (est. 1,810 ms) and unused JS (254 KiB).
  The real performance bottleneck. Images are *not* the problem: Lighthouse
  puts total image savings at 49 KiB.
- **Accessibility 91** — contrast ratios, links without discernible names,
  non-sequential heading order.
- **Best Practices 96** — missing CSP / HSTS headers, one image with a
  mismatched aspect ratio.

---

## Decisions for you (not bugs)

- The email popup offers **5% off**, which is **$2.00** on a $39.95 bottle.
  Probably too little to trade an email for. Raising it is a margin call.
- A "20% OFF" banner plus a second 5% code can read as pricing games to a
  cold visitor. Worth considering whether both should run at once.
