"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ArrowRight, Star, Shield, FlaskConical, FileText, Lock, Zap, TrendingUp, Target, Layers, X } from "lucide-react";
import { getBundleTotal, getRegularBundleTotal, getPricePerBottle, isSaleActive } from "@/lib/sale";
import { SaleCountdown } from "@/components/SaleCountdown";

const SALE_ACTIVE = isSaleActive();

const REVIEW_SUBMISSION_ENABLED = true;

const BUNDLES = [
  {
    qty: 1,
    label: "Buy 1 Bottle",
    pricePerBottle: getPricePerBottle(1),
    total: getBundleTotal(1),
    regularTotal: getRegularBundleTotal(1),
    badge: SALE_ACTIVE ? "20% OFF" : null,
    perks: ["$9.99 shipping", "30-day guarantee"],
  },
  {
    qty: 2,
    label: "Buy 2 Bottles",
    pricePerBottle: getPricePerBottle(2),
    total: getBundleTotal(2),
    regularTotal: getRegularBundleTotal(2),
    badge: "FREE SHIPPING",
    perks: ["Free shipping", "30-day guarantee"],
  },
  {
    qty: 3,
    label: "Buy 3 Bottles",
    pricePerBottle: getPricePerBottle(3),
    total: getBundleTotal(3),
    regularTotal: getRegularBundleTotal(3),
    badge: "BEST VALUE",
    perks: ["20% off", "Free shipping", "30-day guarantee"],
  },
];

const corePrinciples = [
  {
    title: "Foundational nutrients enable natural production",
    description: "Zinc, magnesium, vitamin D3, and fenugreek provide the raw materials and enzymatic support testosterone synthesis requires.",
  },
  {
    title: "Stress balance restores hormonal function",
    description: "Ashwagandha and Tongkat Ali lower cortisol, removing a barrier that suppresses natural testosterone production.",
  },
  {
    title: "Free testosterone availability",
    description: "Boron reduces SHBG to make more of your existing testosterone available for use.",
  },
];

const galleryImages = [
  { src: "/product-bottle.png", alt: "Peak Performance Bottle" },
  { src: "/product-lifestyle.jpg", alt: "Higher Testosterone & Free Testosterone Availability" },
  { src: "/supplement-facts-new.png", alt: "Supplement Facts" },
  { src: "/how-to-use.jpg", alt: "How to Use" },
];

const ingredientTabs = [
  { id: "foundational", label: "Foundational Hormone Support" },
  { id: "stress", label: "Stress & Cortisol Balance" },
  { id: "availability", label: "Free Testosterone Availability" },
] as const;

type TabId = typeof ingredientTabs[number]["id"];

const ingredients = [
  {
    name: "Vitamin D3",
    category: "foundational" as TabId,
    form: "Cholecalciferol",
    dosage: "3,000 IU",
    image: "/vitamin-d3.png",
    shortDesc: "Clinically shown to increase testosterone levels in men with low vitamin D status.",
    fullDesc: "A 12-month randomized controlled trial found that men supplementing with vitamin D experienced a significant increase in total testosterone, free testosterone, and bioactive testosterone compared to placebo. Most men training indoors are deficient without knowing it.",
    benefits: [
      "Increased total testosterone in clinical trials",
      "Supports free and bioactive testosterone levels",
      "Corrects a deficiency linked to low T",
    ],
    research: [
      { title: "Effect of vitamin D supplementation on testosterone levels in men", url: "https://www.thieme-connect.de/products/ejournals/abstract/10.1055/s-0030-1269854" },
    ],
  },
  {
    name: "Magnesium",
    category: "foundational" as TabId,
    form: "Bisglycinate",
    dosage: "28.6 mg",
    image: "/magnesium.png",
    shortDesc: "Directly correlated with testosterone levels — higher magnesium means higher T.",
    fullDesc: "Research shows a strong positive correlation between magnesium levels and testosterone in men. Athletes lose magnesium through sweat, and studies confirm that supplementation supports both total and free testosterone, especially in active men.",
    benefits: [
      "Positively correlated with testosterone levels",
      "Supports both total and free testosterone",
      "Essential mineral depleted by training",
    ],
    research: [
      { title: "Magnesium and testosterone in men", url: "https://pubmed.ncbi.nlm.nih.gov/20352370/" },
    ],
  },
  {
    name: "Zinc",
    category: "foundational" as TabId,
    form: "Citrate",
    dosage: "20 mg",
    image: "/zinc.png",
    shortDesc: "Essential for testosterone synthesis — zinc deficiency directly lowers T levels.",
    fullDesc: "Zinc is required for testosterone production at the cellular level. Clinical research shows that zinc-deficient men have significantly lower testosterone, and supplementation restores levels. It's one of the most well-established testosterone support nutrients.",
    benefits: [
      "Required for testosterone synthesis",
      "Restores T levels in deficient men",
      "One of the most studied T-support minerals",
    ],
    research: [
      { title: "Zinc status and serum testosterone levels in adult males", url: "https://pubmed.ncbi.nlm.nih.gov/8875519/" },
    ],
  },
  {
    name: "Boron",
    category: "availability" as TabId,
    form: "Citrate",
    dosage: "9 mg",
    image: "/boron.png",
    shortDesc: "Shown to increase free testosterone by reducing SHBG in just one week.",
    fullDesc: "A study found that just 10mg of boron daily significantly increased free testosterone and DHT while decreasing estradiol and SHBG after only 7 days. Boron doesn't just support T — it makes more of it available for your body to use.",
    benefits: [
      "Increases free testosterone levels",
      "Reduces SHBG (testosterone-binding protein)",
      "Effects observed in just 7 days",
    ],
    research: [
      { title: "Comparative effects of daily boron supplementation on plasma steroid hormones", url: "https://pubmed.ncbi.nlm.nih.gov/21129941/" },
    ],
  },
  {
    name: "Ashwagandha",
    category: "stress" as TabId,
    form: "KSM-66 Root Extract",
    dosage: "500 mg",
    image: "/ashwagandha.png",
    shortDesc: "Clinically proven to increase testosterone by 14-17% while lowering cortisol.",
    fullDesc: "Multiple studies on KSM-66 show significant testosterone increases (14-17%) alongside cortisol reductions. High cortisol suppresses testosterone production — by managing stress hormones, ashwagandha indirectly unlocks your body's natural T production.",
    benefits: [
      "14-17% testosterone increase in studies",
      "Reduces cortisol (which suppresses T)",
      "Dual-action: direct and indirect T support",
    ],
    research: [
      { title: "Ashwagandha supplementation and testosterone in overweight men", url: "https://pubmed.ncbi.nlm.nih.gov/31517876/" },
    ],
  },
  {
    name: "Tongkat Ali",
    category: "stress" as TabId,
    form: "200:1 Eurycomanone",
    dosage: "300 mg",
    image: "/tongkat-ali.png",
    shortDesc: "Shown to increase testosterone by 37% in a 4-week clinical study.",
    fullDesc: "In a controlled 4-week study, Tongkat Ali increased testosterone by 37% while reducing cortisol by 16%. It works by stimulating the release of free testosterone from SHBG and supporting the hypothalamic-pituitary-gonadal axis.",
    benefits: [
      "37% testosterone increase in 4 weeks",
      "Reduces cortisol by 16%",
      "Releases bound testosterone from SHBG",
    ],
    research: [
      { title: "Eurycoma longifolia and androgenic status in moderately stressed males", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3669033/" },
    ],
  },
  {
    name: "Fenugreek",
    category: "foundational" as TabId,
    form: "50% Saponins Extract",
    dosage: "500 mg",
    image: "/fenugreek.png",
    shortDesc: "Meta-analysis confirms significant testosterone increases across multiple trials.",
    fullDesc: "A 2020 meta-analysis of clinical trials found that fenugreek extract significantly increases total testosterone levels in men. It works by inhibiting enzymes that convert testosterone to estrogen, keeping more T in circulation.",
    benefits: [
      "Significant T increase across multiple studies",
      "Inhibits testosterone-to-estrogen conversion",
      "Meta-analysis confirmed effectiveness",
    ],
    research: [
      { title: "Effect of fenugreek extract supplement on testosterone levels in male: A meta-analysis of clinical trials", url: "https://pubmed.ncbi.nlm.nih.gov/32048383/" },
    ],
  },
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
            <li>Magnesium (Bisglycinate) — 28.6 mg</li>
            <li>Zinc (Citrate) — 20 mg</li>
            <li>Fenugreek Seed Extract (50% saponins) — 500 mg</li>
            <li>Ashwagandha Root Extract (KSM-66) — 500 mg</li>
            <li>Tongkat Ali Root Extract (200:1 Eurycomanone) — 300 mg</li>
            <li>Boron (Citrate) — 9 mg</li>
          </ul>
        </div>
        <p className="text-sm text-text-muted text-center">
          Each dose matches or exceeds what was used in peer-reviewed human studies. No label dressing. No filler.
        </p>
        <div className="text-center pt-2">
          <button
            onClick={() => document.getElementById('ingredient-library')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
          >
            See the full research breakdown
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "30-Day Guarantee",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm">
          Try Peak Performance for 30 days. If you don't notice a difference, contact us for a full refund.
        </p>
        <p className="text-sm text-text-muted">
          We give you 30 days because that's the window where real, consistent support starts to show.
        </p>
        <div className="pt-2">
          <p className="text-sm font-medium text-text-primary mb-2">Shipping</p>
          <ul className="space-y-1 text-sm">
            <li>• Ships within 1-2 business days</li>
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

interface ProductReview {
  id: number;
  name: string;
  rating: number;
  quote: string;
  createdAt: string;
}

export default function ProductV2Page() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedBundle, setSelectedBundle] = useState(1);
  const { addToCart } = useCart();

  const [activeTab, setActiveTab] = useState<TabId>("foundational");
  const [selectedIngredientIndex, setSelectedIngredientIndex] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const filteredIngredients = ingredients.filter((ing) => ing.category === activeTab);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setSelectedIngredientIndex(0);
    setShowFullDesc(false);
  };

  const handleIngredientSelect = (index: number) => {
    setSelectedIngredientIndex(index);
    setShowFullDesc(false);
  };

  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverage, setReviewAverage] = useState(0);

  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewQuote, setReviewQuote] = useState("");
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const loadReviews = () => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setReviewCount(data.count || 0);
        setReviewAverage(data.average || 0);
      })
      .catch(() => {});
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError("");
    if (reviewRating < 1) {
      setReviewError("Select a star rating.");
      return;
    }
    setReviewSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: reviewName.trim(),
          email: reviewEmail.trim(),
          rating: reviewRating,
          quote: reviewQuote.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setReviewError(data.error || "Something went wrong. Try again.");
      } else {
        setReviewSuccess(true);
        setReviewName("");
        setReviewEmail("");
        setReviewRating(0);
        setReviewQuote("");
        loadReviews();
      }
    } catch {
      setReviewError("Something went wrong. Try again.");
    } finally {
      setReviewSubmitting(false);
    }
  };

  const handleAddToCart = () => {
    const bundle = BUNDLES.find((b) => b.qty === selectedBundle)!;
    addToCart(
      {
        id: "peak-performance",
        name: "Peak Performance",
        price: bundle.pricePerBottle,
        image: "/product-bottle.png",
      },
      bundle.qty
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

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
              {REVIEW_SUBMISSION_ENABLED && (
                <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-sm">
                  {reviewCount > 0 ? (
                    <>
                      <div className="flex items-center gap-1">
                        <StarRating rating={Math.round(reviewAverage)} />
                      </div>
                      <span className="text-gray-300">|</span>
                      <button
                        onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-primary hover:underline"
                      >
                        {reviewCount} review{reviewCount === 1 ? "" : "s"}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-primary hover:underline"
                    >
                      Be the first to leave a review
                    </button>
                  )}
                </div>
              )}

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

              {/* Sale banner */}
              {SALE_ACTIVE && (
                <div className="flex items-center justify-between gap-3 bg-primary/10 border border-primary/20 rounded-lg px-4 py-2.5 mb-4">
                  <p className="text-sm font-semibold text-primary">20% Off Sale — Ends In</p>
                  <SaleCountdown className="text-sm font-bold text-primary tabular-nums" />
                </div>
              )}

              {/* Bundle Options */}
              <div className="space-y-3 mb-4">
                {BUNDLES.map((bundle) => (
                  <button
                    key={bundle.qty}
                    onClick={() => setSelectedBundle(bundle.qty)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedBundle === bundle.qty
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedBundle === bundle.qty ? "border-primary" : "border-gray-300"
                        }`}>
                          {selectedBundle === bundle.qty && (
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-text-primary text-sm">{bundle.label}</p>
                            {bundle.badge && (
                              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                {bundle.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-text-muted mt-0.5">
                            {bundle.perks.join(" • ")}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 justify-end">
                          {bundle.total < bundle.regularTotal && (
                            <p className="text-xs text-text-muted line-through">${bundle.regularTotal.toFixed(2)}</p>
                          )}
                          <p className="font-bold text-text-primary">${bundle.total.toFixed(2)}</p>
                        </div>
                        {bundle.qty > 1 && (
                          <p className="text-xs text-text-muted">${bundle.pricePerBottle.toFixed(2)}/bottle</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="mb-4">
                <Button size="lg" className="w-full" onClick={handleAddToCart}>
                  {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-8 text-xs text-text-muted">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />30-Day Guarantee</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />No commitment</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />Ships in 1-2 Days</span>
              </div>

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

          {/* Inside the Formula */}
          <section id="ingredient-library" className="mt-16 sm:mt-24">
            <div className="text-center mb-6">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">What's Inside</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Every Ingredient. Every Dose. Fully Transparent.
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {ingredientTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-md"
                        : "bg-white text-gray-600 border border-gray-300 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ==================== MOBILE: Unified Module ==================== */}
            <div className="lg:hidden bg-white rounded-2xl border border-gray-200 shadow-lg p-4 overflow-hidden">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-hide"
                style={{ touchAction: "pan-x pinch-zoom" }}
              >
                {filteredIngredients.map((ingredient, index) => (
                  <button
                    key={ingredient.name}
                    onClick={() => handleIngredientSelect(index)}
                    className={`flex-shrink-0 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedIngredientIndex === index
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {ingredient.name}
                  </button>
                ))}
              </motion.div>

              <div className="flex justify-center py-3">
                <motion.div
                  key={filteredIngredients[selectedIngredientIndex]?.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-50 to-white border-3 border-primary/10 shadow-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={filteredIngredients[selectedIngredientIndex]?.image || "/vitamin-d3.png"}
                      alt={filteredIngredients[selectedIngredientIndex]?.name || "Ingredient"}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                key={`panel-mobile-${filteredIngredients[selectedIngredientIndex]?.name}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-gradient-to-b from-[#5B9BD5] to-[#4A8BC9] overflow-hidden shadow-lg border border-white/[0.18] -mx-1"
              >
                <div className="p-4 border border-white/[0.08] rounded-xl m-[1px]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {filteredIngredients[selectedIngredientIndex]?.name}
                    </h3>
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/20 text-white">
                      {filteredIngredients[selectedIngredientIndex]?.dosage}
                    </span>
                  </div>
                  <p className="text-white/70 text-xs mb-3">
                    {filteredIngredients[selectedIngredientIndex]?.form}
                  </p>
                  <p className="text-white text-sm leading-relaxed mb-3">
                    {filteredIngredients[selectedIngredientIndex]?.shortDesc}
                  </p>
                  <div className="mb-3">
                    <h4 className="text-white/80 font-medium text-[10px] mb-1.5 uppercase tracking-wide">
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {filteredIngredients[selectedIngredientIndex]?.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <div className="w-3.5 h-3.5 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2 h-2 text-white" />
                          </div>
                          <span className="text-white text-xs leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {filteredIngredients[selectedIngredientIndex]?.research?.[0] && (
                    <a
                      href={filteredIngredients[selectedIngredientIndex].research[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#4A8BC9] font-semibold text-xs hover:bg-white/95 transition-colors shadow-sm"
                    >
                      See the Research
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* ==================== DESKTOP: 3-Column Layout ==================== */}
            <div className="hidden lg:block bg-white rounded-3xl border border-gray-200 shadow-lg pt-5 px-6 pb-8 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-5 items-stretch">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="lg:col-span-3 flex flex-col gap-1.5"
                >
                  {filteredIngredients.map((ingredient, index) => (
                    <button
                      key={ingredient.name}
                      onClick={() => handleIngredientSelect(index)}
                      className={`text-left px-3 py-2.5 rounded-xl transition-all duration-200 ${
                        selectedIngredientIndex === index
                          ? "bg-primary/10 border-l-4 border-primary"
                          : "hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm ${selectedIngredientIndex === index ? "text-primary font-semibold" : "text-gray-700 font-medium"}`}>
                          {ingredient.name}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          selectedIngredientIndex === index
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {ingredient.dosage}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>

                <div className="lg:col-span-3 flex justify-center items-center py-2">
                  <motion.div
                    key={filteredIngredients[selectedIngredientIndex]?.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-50 to-white border-4 border-primary/10 shadow-lg flex items-center justify-center overflow-hidden">
                      <Image
                        src={filteredIngredients[selectedIngredientIndex]?.image || "/vitamin-d3.png"}
                        alt={filteredIngredients[selectedIngredientIndex]?.name || "Ingredient"}
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl -z-10" />
                  </motion.div>
                </div>

                <motion.div
                  key={`panel-${filteredIngredients[selectedIngredientIndex]?.name}`}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#5B9BD5] to-[#4A8BC9] overflow-hidden shadow-xl border border-white/[0.18]"
                >
                  <div className="p-6 border border-white/[0.08] rounded-2xl m-[1px]">
                    <h3 className="text-2xl font-bold text-white mb-1.5">
                      {filteredIngredients[selectedIngredientIndex]?.name}
                    </h3>

                    <div className="mb-4">
                      <p className="text-white text-base leading-relaxed">
                        {filteredIngredients[selectedIngredientIndex]?.shortDesc}
                      </p>
                      {!showFullDesc ? (
                        <button
                          onClick={() => setShowFullDesc(true)}
                          className="inline-flex items-center gap-1 text-white/80 text-sm mt-2 hover:text-white transition-colors"
                        >
                          Read more
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      ) : (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-white/90 text-base leading-relaxed mt-2"
                        >
                          {filteredIngredients[selectedIngredientIndex]?.fullDesc}
                        </motion.p>
                      )}
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/10">
                      <div className="flex justify-between items-center border-b border-white/15 pb-2 mb-2">
                        <span className="text-white/90 text-sm">Dose</span>
                        <span className="text-white font-semibold text-sm">
                          {filteredIngredients[selectedIngredientIndex]?.dosage}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/90 text-sm">Form</span>
                        <span className="text-white text-sm text-right max-w-[65%]">
                          {filteredIngredients[selectedIngredientIndex]?.form}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-medium text-xs mb-2 uppercase tracking-wide">
                        Key Benefits
                      </h4>
                      <ul className="space-y-1.5">
                        {filteredIngredients[selectedIngredientIndex]?.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-white text-sm leading-snug">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {filteredIngredients[selectedIngredientIndex]?.research?.[0] && (
                      <a
                        href={filteredIngredients[selectedIngredientIndex].research[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#4A8BC9] font-semibold text-sm hover:bg-white/95 transition-colors shadow-sm"
                      >
                        See the Research
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
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

          {/* Reviews */}
          {REVIEW_SUBMISSION_ENABLED && (
          <section id="reviews" className="mt-16 sm:mt-24 scroll-mt-24">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Reviews</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Customer Reviews</h2>
              {reviewCount > 0 && (
                <div className="flex items-center justify-center gap-2 mt-3">
                  <StarRating rating={Math.round(reviewAverage)} />
                  <span className="text-gray-600 text-sm">
                    {reviewAverage.toFixed(1)} out of 5 ({reviewCount} review{reviewCount === 1 ? "" : "s"})
                  </span>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Review list */}
              <div className="space-y-4">
                {reviews.length === 0 ? (
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center text-gray-500 text-sm">
                    No reviews yet. Be the first to share your experience.
                  </div>
                ) : (
                  reviews.map((review) => (
                    <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{review.name}</span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          <Check className="w-3 h-3" />
                          Verified Buyer
                        </span>
                      </div>
                      <StarRating rating={review.rating} />
                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">{review.quote}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Write a review form */}
              {REVIEW_SUBMISSION_ENABLED ? (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 h-fit">
                  <h3 className="font-bold text-gray-900 mb-1">Write a Review</h3>
                  <p className="text-gray-500 text-sm mb-5">
                    Only verified purchasers can leave a review. We'll check your email against your order.
                  </p>

                  {reviewSuccess ? (
                    <div className="text-center py-6">
                      <Check className="w-10 h-10 text-primary mx-auto mb-3" />
                      <p className="font-semibold text-gray-900">Thanks for your review!</p>
                      <p className="text-gray-500 text-sm mt-1">It's now live on this page.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-700 mb-1 block">Your Rating</label>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setReviewRating(star)}
                              aria-label={`${star} star${star === 1 ? "" : "s"}`}
                            >
                              <Star
                                className={`w-6 h-6 ${star <= reviewRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="review-name" className="text-sm text-gray-700 mb-1 block">Name</label>
                        <input
                          id="review-name"
                          type="text"
                          required
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="review-email" className="text-sm text-gray-700 mb-1 block">
                          Email <span className="text-gray-400">(used only to verify your purchase, not shown publicly)</span>
                        </label>
                        <input
                          id="review-email"
                          type="email"
                          required
                          value={reviewEmail}
                          onChange={(e) => setReviewEmail(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="review-quote" className="text-sm text-gray-700 mb-1 block">Your Review</label>
                        <textarea
                          id="review-quote"
                          required
                          minLength={10}
                          rows={4}
                          value={reviewQuote}
                          onChange={(e) => setReviewQuote(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      {reviewError && <p className="text-red-500 text-sm">{reviewError}</p>}

                      <Button type="submit" className="w-full" disabled={reviewSubmitting}>
                        {reviewSubmitting ? "Submitting..." : "Submit Review"}
                      </Button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 h-fit flex items-center justify-center text-center text-gray-500 text-sm min-h-[200px]">
                  Review submissions are temporarily paused. Check back soon.
                </div>
              )}
            </div>
          </section>
          )}

          {/* Final CTA */}
          <section className="mt-16 sm:mt-24">
            <div className="bg-gradient-to-br from-[#5B9BD5] to-[#4A8BC9] rounded-2xl overflow-hidden shadow-xl">
              <div className="grid sm:grid-cols-2 items-center gap-6 p-8 sm:p-12">
                <div className="flex items-center justify-center order-2 sm:order-1">
                  <div className="relative">
                    <Image
                      src="/product-bottle.png"
                      alt="Peak Performance Bottle"
                      width={220}
                      height={280}
                      className="relative z-10 w-40 sm:w-56 h-auto"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-4 sm:h-5 bg-black/25 rounded-full blur-md" />
                  </div>
                </div>
                <div className="text-center sm:text-left order-1 sm:order-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Ready to Feel Like Yourself Again?
                  </h2>
                  <p className="text-white/80 mb-6">
                    Buy now and start feeling the difference.
                  </p>
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    className="bg-white text-[#4A8BC9] hover:bg-white/90 px-12"
                  >
                    {addedToCart ? "Added to Cart!" : "Buy Now"}
                  </Button>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mt-4 text-sm text-white/80">
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4" />30-Day Guarantee</span>
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4" />No Commitment</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5">
              {SALE_ACTIVE && (
                <p className="text-xs text-gray-400 line-through">
                  ${BUNDLES.find((b) => b.qty === selectedBundle)!.regularTotal.toFixed(2)}
                </p>
              )}
              <p className="font-bold text-gray-900">
                ${BUNDLES.find((b) => b.qty === selectedBundle)!.total.toFixed(2)}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              {selectedBundle} bottle{selectedBundle > 1 ? "s" : ""} • One-time
            </p>
          </div>
          <Button className="flex-1" onClick={handleAddToCart}>
            {addedToCart ? "Added!" : "Add to Cart"}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
