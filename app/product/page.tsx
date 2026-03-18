"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { EmbeddedCheckoutModal } from "@/components/EmbeddedCheckout";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ArrowRight, Star, Shield, FlaskConical, FileText, Lock, Zap, TrendingUp, Target, Layers, X, RefreshCw, Truck } from "lucide-react";

const RETAIL_PRICE = 49.99;

const subscribeOptions = [
  {
    id: "1mo",
    label: "1 Month Supply",
    billing: "every month",
    priceTotal: 42.49,
    perMonth: 42.49,
    originalTotal: 49.99,
    savePercent: 15,
    bottles: 1,
    intervalCount: 1,
    badge: null as string | null,
  },
  {
    id: "3mo",
    label: "3 Month Supply",
    billing: "every 3 months",
    priceTotal: 104.97,
    perMonth: 34.99,
    originalTotal: 149.97,
    savePercent: 30,
    bottles: 3,
    intervalCount: 3,
    badge: "Most Popular" as string | null,
  },
  {
    id: "6mo",
    label: "6 Month Supply",
    billing: "every 6 months",
    priceTotal: 179.96,
    perMonth: 29.99,
    originalTotal: 299.94,
    savePercent: 40,
    bottles: 6,
    intervalCount: 6,
    badge: null as string | null,
  },
];

const corePrinciples = [
  {
    title: "Free testosterone availability",
    description: "Fenugreek and boron reduce SHBG to unlock testosterone already present in your system.",
  },
  {
    title: "Stress balance restores hormonal function",
    description: "Ashwagandha and magnesium lower cortisol, allowing testosterone to work as intended.",
  },
  {
    title: "Foundational nutrients enable natural production",
    description: "Zinc, magnesium, and vitamin D3 provide the raw materials testosterone synthesis requires.",
  },
];

const galleryImages = [
  { src: "/product-bottle.png", alt: "Peak Performance Bottle" },
  { src: "/product-lifestyle.jpg", alt: "Higher Testosterone & Free Testosterone Availability" },
  { src: "/supplement-facts-new.jpg", alt: "Supplement Facts" },
  { src: "/how-to-use.jpg", alt: "How to Use" },
];

const ingredients = [
  { name: "Vitamin D3", dose: "3,000 IU", image: "/vitamin-d3.png" },
  { name: "Ashwagandha", dose: "500mg KSM-66", image: "/ashwagandha.png" },
  { name: "Tongkat Ali", dose: "300mg 200:1", image: "/tongkat-ali.png" },
  { name: "Fenugreek", dose: "500mg", image: "/fenugreek.png" },
  { name: "Magnesium", dose: "30mg", image: "/magnesium.png" },
  { name: "Zinc", dose: "20mg", image: "/zinc.png" },
  { name: "Boron", dose: "9mg", image: "/boron.png" },
];

const timeline = [
  { week: "Week 1-2", title: "Foundation Building", description: "Ingredients accumulate in your system", icon: Layers },
  { week: "Week 2-4", title: "Energy Stabilizes", description: "More consistent energy through the day", icon: Zap },
  { week: "Week 4-6", title: "Recovery Improves", description: "Better training recovery and mental clarity", icon: TrendingUp },
  { week: "Week 6-8", title: "Full Effect", description: "Libido returns, body composition shifts", icon: Target },
];

const comparisonRows = [
  { typical: "Hidden dosages", peak: "Full label transparency" },
  { typical: "Underdosed ingredients", peak: "Human-study dosing" },
  { typical: "Hype-driven ingredient selection", peak: "Purpose-built formulation" },
  { typical: "Short-term marketing claims", peak: "Support for energy, recovery, and drive" },
];

// =============================================================================
// ORIGINAL REVIEWS DATA (uncomment after launch)
// =============================================================================
/*
const reviews = [
  {
    name: "Mike T.",
    age: 34,
    rating: 5,
    title: "Finally something that actually works",
    text: "I was skeptical after trying other testosterone boosters. But after 6 weeks, my energy is noticeably better and recovery from the gym is way faster. This isn't a miracle pill - it's a slow build that actually delivers.",
    verified: true,
  },
  {
    name: "Jason R.",
    age: 42,
    rating: 5,
    title: "Wish I found this sooner",
    text: "At 42, I was feeling sluggish and my drive was gone. Started this formula and by week 4, I felt like myself again. The research-backed dosing makes a real difference.",
    verified: true,
  },
  {
    name: "David K.",
    age: 29,
    rating: 5,
    title: "Solid formula, no BS",
    text: "I appreciate the transparency - no proprietary blends, just research-backed doses. Sleep improved first, then energy, then everything else followed. Exactly as described.",
    verified: true,
  },
  {
    name: "Chris M.",
    age: 38,
    rating: 5,
    title: "Takes time but worth it",
    text: "Didn't feel anything for the first 2 weeks. Almost gave up. But by week 5, the difference was clear. More focus, better workouts, and my wife noticed too. Patience pays off.",
    verified: true,
  },
  {
    name: "Marcus L.",
    age: 31,
    rating: 5,
    title: "Did my research - this one checks out",
    text: "I spent weeks comparing formulas before buying. Most testosterone boosters are underdosed garbage. This one actually has the doses that match the studies. Three months in and I'm recovering faster and hitting PRs again.",
    verified: true,
  },
  {
    name: "Tony B.",
    age: 47,
    rating: 5,
    title: "Feeling like I did in my 30s",
    text: "At 47, I figured feeling tired all the time was just part of getting older. Gave this a shot and after about 6 weeks, my energy is back and I'm not dragging through the afternoon anymore. Solid product.",
    verified: true,
  },
  {
    name: "Ryan S.",
    age: 36,
    rating: 5,
    title: "Recovery is night and day",
    text: "I train 5x a week and was constantly sore and beaten down. Started Peak Performance and within a month my recovery improved significantly. I can actually push hard without feeling wrecked the next day.",
    verified: true,
  },
  {
    name: "Andrew P.",
    age: 33,
    rating: 4,
    title: "Good results, takes consistency",
    text: "Works as advertised. Took about 5 weeks before I noticed real changes. Energy is better, mood is more stable, and workouts feel stronger. Consistency pays off.",
    verified: true,
  },
  {
    name: "Kevin H.",
    age: 40,
    rating: 5,
    title: "Wife noticed before I did",
    text: "About a month in, my wife asked what I was doing differently. More energy, better mood, and let's just say things improved in other areas too. The transparent label sold me, the results kept me.",
    verified: true,
  },
];
*/


const productSections = [
  {
    title: "Who This Is For",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm">This formula was built for men who:</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Feel off but aren't broken — energy lower, drive dulled, recovery slower</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Have tried generic boosters and seen nothing change</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Understand that free testosterone availability matters more than total T</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Are ready to commit to consistent daily support</span>
          </li>
        </ul>
        <p className="text-sm text-text-muted pt-2 text-center">
          Designed to support energy, drive, and recovery — the way your body is meant to function.
        </p>
      </div>
    ),
  },
  {
    title: "What to Expect",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm">
          Peak Performance is designed for consistent, foundational support.
        </p>
        <p className="text-sm font-medium text-text-primary">Over 4–8 weeks of daily use, most men notice:</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Energy becomes more stable through the day</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Recovery from training improves</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Mental clarity sharpens gradually</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Libido begins to return — not dramatic, but consistent</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Body composition shifts when training and diet support it</span>
          </li>
        </ul>
        <p className="text-sm text-text-muted">These changes are progressive. They compound with consistency.</p>
      </div>
    ),
  },
  {
    title: "How to Use It",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <div>
          <p className="text-sm">Three capsules, once daily with food.</p>
        </div>
        <div>
          <p className="text-sm">Morning with breakfast or early afternoon. Consistency matters more than exact timing.</p>
        </div>
        <div>
          <p className="text-sm">Minimum 30-day commitment before evaluating response.</p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 mt-2">
          <p className="text-sm text-text-muted">
            Do not combine with other testosterone support supplements or hormone-modulating compounds without consulting your doctor.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Full Ingredient List",
    content: (
      <div className="space-y-6 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm text-center">Seven ingredients. Clinical dosing. Fully disclosed. No proprietary blends.</p>
        <div>
          <ul className="space-y-2 text-sm">
            <li>Vitamin D3 (Cholecalciferol) — 3,000 IU</li>
            <li>Magnesium (Bisglycinate) — 30 mg</li>
            <li>Zinc (Citrate) — 20 mg</li>
            <li>Fenugreek Seed Extract (50% saponins) — 500 mg</li>
            <li>Ashwagandha Root Extract (KSM-66) — 500 mg</li>
            <li>Tongkat Ali Root Extract (1% Eurycomanone) — 300 mg</li>
            <li>Boron (Citrate) — 9 mg</li>
          </ul>
        </div>
        <p className="text-sm text-text-muted text-center">
          Each dose matches or exceeds what was used in peer-reviewed human studies. No label dressing. No filler.
        </p>
        <div className="text-center pt-2">
          <Link href="/formula" className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
            See the full research breakdown
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "30-Day Guarantee",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm">
          Try Peak Performance for 30 days. If you don't notice a difference, contact us for a full refund — no friction, no deflection.
        </p>
        <p className="text-sm text-text-muted">
          We give you 30 days because that's the window where real, consistent support starts to show.
        </p>
        <div className="pt-2">
          <p className="text-sm font-medium text-text-primary mb-2">Pre-Order Shipping</p>
          <ul className="space-y-1 text-sm">
            <li>• Ships as soon as production is complete</li>
            <li>• Free shipping on orders of 2+ bottles</li>
            <li>• You'll receive tracking once your order ships</li>
          </ul>
        </div>
      </div>
    ),
  },
];

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full py-5 sm:py-4 flex items-center justify-center text-center min-h-[56px] sm:min-h-0 gap-3"
      >
        <span className="font-semibold text-text-primary">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 sm:pb-4">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function ProductV2Page() {
  const [purchaseType, setPurchaseType] = useState<"subscribe" | "one-time">("subscribe");
  const [selectedSubscribeId, setSelectedSubscribeId] = useState("3mo");
  const [showSubscribeCheckout, setShowSubscribeCheckout] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  const selectedSub = subscribeOptions.find((o) => o.id === selectedSubscribeId)!;

  const handleSubscribeNow = () => {
    setShowSubscribeCheckout(true);
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: "peak-performance",
        name: "Peak Performance",
        price: RETAIL_PRICE,
        image: "/product-v3.webp",
      },
      1
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const subscribeCheckoutItems = [{
    name: `Peak Performance — ${selectedSub.label}`,
    price: selectedSub.priceTotal,
    quantity: 1,
    image: `${typeof window !== "undefined" ? window.location.origin : ""}/product-v3.webp`,
    isSubscription: true,
    subscriptionIntervalCount: selectedSub.intervalCount,
  }];

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-28 sm:pt-32 pb-24 sm:pb-24 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Product Image Gallery */}
            <div className="relative order-1 lg:order-1">
              <div className="lg:sticky lg:top-32">
                {/* Main Image */}
                <div className="rounded-2xl border border-border overflow-hidden flex items-center justify-center max-w-[500px] lg:max-w-none mx-auto mb-4 lg:w-[550px] bg-neutral-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={galleryImages[activeImage].src}
                        alt={galleryImages[activeImage].alt}
                        width={550}
                        height={650}
                        className="w-full h-auto"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex justify-center gap-3 max-w-[400px] lg:max-w-none mx-auto">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-20 rounded-lg border-2 overflow-hidden transition-all bg-white ${
                        activeImage === index
                          ? "border-primary"
                          : "border-border hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full p-1"
                      />
                    </button>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex justify-center items-center -space-x-6 sm:-space-x-20 lg:-space-x-32 -mt-[30px]">
                  <Image
                    src="/gmp-certified.png"
                    alt="GMP Certified"
                    width={300}
                    height={300}
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[300px] lg:h-[300px] object-contain"
                  />
                  <Image
                    src="/made-in-usa.png"
                    alt="Made in USA"
                    width={300}
                    height={300}
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[300px] lg:h-[300px] object-contain"
                  />
                  <Image
                    src="/lab-tested.png"
                    alt="Lab Tested"
                    width={300}
                    height={300}
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[300px] lg:h-[300px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-2 lg:order-2 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                Peak Performance
              </h1>

              {/* Social Proof Bar */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-sm">
                {/* Reviews link - uncomment after launch when reviews are available */}
                {/*
                <div className="flex items-center gap-1">
                  <StarRating rating={5} />
                </div>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary hover:underline"
                >
                  9 reviews
                </button>
                */}
              </div>

              <p className="text-sm sm:text-base text-text-secondary mb-6">
                A foundational testosterone support formula designed to help your body respond the way it used to.
              </p>

              {/* Core Principles */}
              <div className="bg-surface border border-border rounded-lg p-4 sm:p-5 mb-8 text-left">
                <h3 className="text-sm font-semibold text-text-primary mb-4 text-center">Core Principles</h3>
                <div className="space-y-4">
                  {corePrinciples.map((principle, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-text-primary">{principle.title}</p>
                        <p className="text-xs sm:text-sm text-text-muted">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Type Toggle */}
              <div className="flex rounded-lg border border-border overflow-hidden mb-4">
                <button
                  onClick={() => setPurchaseType("subscribe")}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
                    purchaseType === "subscribe"
                      ? "bg-primary text-white"
                      : "bg-surface text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Subscribe &amp; Save
                </button>
                <button
                  onClick={() => setPurchaseType("one-time")}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
                    purchaseType === "one-time"
                      ? "bg-primary text-white"
                      : "bg-surface text-text-secondary hover:text-text-primary"
                  }`}
                >
                  One Time Purchase
                </button>
              </div>

              {purchaseType === "subscribe" ? (
                <>
                  {/* Subscribe & Save badges */}
                  <div className="flex items-center justify-center gap-3 mb-3 text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-primary" />
                      Free shipping on 3 &amp; 6 month
                    </span>
                    <span className="text-border">|</span>
                    <span className="flex items-center gap-1">
                      <RefreshCw className="w-3.5 h-3.5 text-primary" />
                      Cancel anytime
                    </span>
                  </div>

                  {/* Subscribe Options */}
                  <div className="space-y-3 mb-4">
                    {subscribeOptions.map((opt) => {
                      const isSelected = selectedSubscribeId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setSelectedSubscribeId(opt.id)}
                          className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all text-left relative ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          {opt.badge && (
                            <span className="absolute -top-2.5 right-3 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold rounded bg-primary text-white">
                              {opt.badge}
                            </span>
                          )}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                isSelected ? "border-primary" : "border-text-muted"
                              }`}>
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                              </div>
                              <div className="min-w-0">
                                <p className="font-semibold text-text-primary text-sm sm:text-base">{opt.label}</p>
                                <p className="text-xs text-text-muted">{opt.billing}</p>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="font-bold text-text-primary text-sm sm:text-base">${opt.priceTotal.toFixed(2)}</p>
                              <p className="text-[10px] sm:text-xs text-green-600 font-medium">
                                SAVE {opt.savePercent}%&nbsp;
                                <span className="text-text-muted line-through font-normal">${opt.originalTotal.toFixed(2)}</span>
                              </p>
                              <p className="text-[10px] sm:text-xs text-text-muted">${opt.perMonth.toFixed(2)}/mo</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Subscribe CTA */}
                  <div className="mb-4">
                    <Button size="lg" className="w-full" onClick={handleSubscribeNow}>
                      Subscribe Now — ${selectedSub.priceTotal.toFixed(2)}/{selectedSub.id === "1mo" ? "mo" : selectedSub.id === "3mo" ? "3 mo" : "6 mo"}
                    </Button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-8 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />Cancel anytime</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />30-Day Guarantee</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />Secure checkout</span>
                  </div>
                </>
              ) : (
                <>
                  {/* One Time Purchase */}
                  <div className="p-4 sm:p-5 rounded-lg border-2 border-border mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-text-primary">1 Month Supply</p>
                        <p className="text-xs text-text-muted mt-0.5">One-time purchase, no commitment</p>
                      </div>
                      <p className="font-bold text-text-primary text-lg">${RETAIL_PRICE.toFixed(2)}</p>
                    </div>
                  </div>

                  {/* One Time CTA */}
                  <div className="mb-4">
                    <Button size="lg" className="w-full" onClick={handleAddToCart}>
                      {addedToCart ? "Added to Cart!" : "Add to Cart"}
                    </Button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-8 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />30-Day Guarantee</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />No commitment</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />First Production Run</span>
                  </div>
                </>
              )}

              {/* Subscribe checkout modal (subscription flow) */}
              {showSubscribeCheckout && (
                <EmbeddedCheckoutModal
                  cartItems={subscribeCheckoutItems}
                  onClose={() => setShowSubscribeCheckout(false)}
                />
              )}

              {/* Accordion Sections */}
              <div className="border-t border-border">
                {productSections.map((section, index) => (
                  <AccordionItem
                    key={section.title}
                    title={section.title}
                    content={section.content}
                    isOpen={openSection === index}
                    onToggle={() =>
                      setOpenSection(openSection === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ============ NEW SECTIONS BELOW ============ */}

          {/* Ingredient Showcase */}
          <section className="mt-16 sm:mt-24">
            <div className="text-center mb-8">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">What's Inside</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">7 Research-Backed Ingredients</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-shrink-0 w-[140px] sm:w-[160px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <div className="aspect-square bg-gray-50 relative">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-bold text-gray-900 text-sm">{ingredient.name}</p>
                    <p className="text-primary text-xs font-medium">{ingredient.dose}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/formula" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
                See full formula breakdown
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* The Difference */}
          <section className="mt-16 sm:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">
                The Difference
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Why Peak Performance Is Different
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto"
            >
              {/* Product Images */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex justify-center items-end h-[200px] sm:h-[240px]">
                  <Image
                    src="/typical-boosters.jpg"
                    alt="Typical Testosterone Boosters"
                    width={300}
                    height={240}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="flex justify-center items-end h-[200px] sm:h-[240px]">
                  <Image
                    src="/difference-peak.jpg"
                    alt="Peak Performance"
                    width={300}
                    height={240}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-gray-100 rounded-xl px-4 py-3 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Typical Testosterone Booster
                  </span>
                </div>
                <div className="bg-primary rounded-xl px-4 py-3 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    Peak Performance
                  </span>
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-2">
                {comparisonRows.map((row, index) => (
                  <div key={index} className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 bg-gray-50 border border-gray-200/80 rounded-xl px-4 py-3">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-snug">{row.typical}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-primary/[0.05] border border-primary/20 rounded-xl px-4 py-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium leading-snug">{row.peak}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Benefits Timeline */}
          <section className="mt-16 sm:mt-24">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">What To Expect</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Results Over Time</h2>
              <p className="text-gray-600 mt-2">Designed for consistent, foundational support that builds over time.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 text-center relative"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-primary font-semibold text-sm mb-1">{item.week}</p>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 sm:mt-24 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Feel Like Yourself Again?</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Subscribe and save up to 40%, or try a single bottle risk-free.
              </p>
              <Button size="lg" onClick={handleSubscribeNow} className="px-12">
                Subscribe &amp; Save
              </Button>
              <p className="text-sm text-gray-500 mt-4">Cancel anytime • 30-day guarantee</p>
            </div>
          </section>

        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            {purchaseType === "subscribe" ? (
              <>
                <p className="font-bold text-gray-900">${selectedSub.priceTotal.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{selectedSub.label} • Subscribe</p>
              </>
            ) : (
              <>
                <p className="font-bold text-gray-900">${RETAIL_PRICE.toFixed(2)}</p>
                <p className="text-xs text-gray-500">1 bottle • One-time</p>
              </>
            )}
          </div>
          <Button className="flex-1" onClick={purchaseType === "subscribe" ? handleSubscribeNow : handleAddToCart}>
            {purchaseType === "subscribe" ? "Subscribe" : addedToCart ? "Added!" : "Add to Cart"}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
