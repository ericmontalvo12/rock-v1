"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ArrowRight, Star, Shield, FlaskConical, FileText, Lock, Zap, TrendingUp, Target, Layers } from "lucide-react";

const bundleOptions = [
  {
    id: "1-bottle",
    quantity: 1,
    label: "Starter — 30 Days",
    subtitle: "Minimum window to evaluate response.",
    price: 49.99,
    perBottle: 49.99,
    badge: null,
    freeShipping: false,
    showPerBottle: false,
  },
  {
    id: "2-bottles",
    quantity: 2,
    label: "Recommended — 60 Days",
    subtitle: "Sufficient time for measurable functional changes.",
    price: 99.98,
    perBottle: 49.99,
    badge: "Recommended",
    freeShipping: true,
    showPerBottle: false,
  },
  {
    id: "3-bottles",
    quantity: 3,
    label: "Best Value — 90 Days",
    subtitle: "Maximum consistency. Best long-term value.",
    price: 134.97,
    perBottle: 44.99,
    badge: "Best Value",
    freeShipping: true,
    showPerBottle: true,
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
    text: "At 42, I was feeling sluggish and my drive was gone. Started this formula and by week 4, I felt like myself again. The clinical dosing makes a real difference.",
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
];

const trustItems = [
  { icon: Shield, title: "30-Day Guarantee", desc: "Full refund if you don't notice a difference" },
  { icon: FlaskConical, title: "Batch Tested", desc: "Every batch verified for purity" },
  { icon: FileText, title: "Research-Backed", desc: "Doses match published studies" },
  { icon: Lock, title: "No Auto-Ship", desc: "One-time purchase, no tricks" },
];

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
            <span>Are committed to consistency, not stimulation</span>
          </li>
        </ul>
        <p className="text-sm text-text-muted pt-2 text-center">
          If you want an immediate effect, this isn't it. If you want to restore function over time, the approach is here.
        </p>
      </div>
    ),
  },
  {
    title: "What to Expect",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm">
          This is not a stimulant. There is no immediate response on day one.
        </p>
        <p className="text-sm font-medium text-text-primary">Over 4–8 weeks of consistent use, most men notice:</p>
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
          The window is 30 days because real change requires consistency. This isn't a stimulant that works on day one and fades by week two.
        </p>
        <div className="pt-2">
          <p className="text-sm font-medium text-text-primary mb-2">Shipping</p>
          <ul className="space-y-1 text-sm">
            <li>• Ships within 2 business days</li>
            <li>• Free shipping on orders of 2+ bottles</li>
            <li>• No automatic subscriptions unless you opt in</li>
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

// Pricing logic helper
function getPricing(qty: number) {
  if (qty >= 3) {
    return { perBottle: 44.99, freeShipping: true, dealName: "Best Value" };
  } else if (qty === 2) {
    return { perBottle: 49.99, freeShipping: true, dealName: "Free Shipping" };
  } else {
    return { perBottle: 49.99, freeShipping: false, dealName: null };
  }
}

export default function ProductV2Page() {
  const [quantity, setQuantity] = useState(2);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const { addToCart } = useCart();
  const router = useRouter();

  const pricing = getPricing(quantity);
  const totalPrice = pricing.perBottle * quantity;

  // Determine which bundle option matches the current quantity (if any)
  const matchingBundle = bundleOptions.find((b) => b.quantity === quantity);

  const handleBundleSelect = (bundleQty: number) => {
    setQuantity(bundleQty);
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: "peak-performance",
        name: "Peak Performance",
        price: pricing.perBottle,
        image: "/product-v3.webp",
      },
      quantity
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

                {/* Trust Badges on Desktop */}
                <div className="hidden lg:flex justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FlaskConical className="w-4 h-4 text-primary" />
                    <span>Batch Tested</span>
                  </div>
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
                <div className="flex items-center gap-1">
                  <StarRating rating={5} />
                </div>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary hover:underline"
                >
                  127 reviews
                </button>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1 text-gray-600">
                  <Check className="w-4 h-4 text-primary" />
                  2,847+ sold
                </span>
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

              {/* Bundle Selector */}
              <div className="space-y-3 mb-4">
                {bundleOptions.map((bundle) => {
                  const isSelected = matchingBundle?.id === bundle.id;
                  return (
                    <button
                      key={bundle.id}
                      onClick={() => handleBundleSelect(bundle.quantity)}
                      className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all text-left relative ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-border-subtle"
                      }`}
                    >
                      {bundle.badge && (
                        <span className={`absolute -top-2 sm:-top-2.5 right-2 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded ${
                          bundle.badge === "Best Value"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}>
                          {bundle.badge}
                        </span>
                      )}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? "border-primary"
                              : "border-text-secondary"
                          }`}>
                            {isSelected && (
                              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-text-primary text-sm sm:text-base">{bundle.label}</p>
                            <p className="text-xs text-text-muted">{bundle.subtitle}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-bold text-text-primary text-sm sm:text-base">${bundle.price.toFixed(2)}</p>
                          {bundle.freeShipping && bundle.quantity === 2 && (
                            <p className="text-[10px] sm:text-xs text-primary">Free Shipping</p>
                          )}
                          {bundle.quantity === 3 && (
                            <p className="text-[10px] sm:text-xs text-primary">Save 10% + Free Shipping</p>
                          )}
                          {bundle.showPerBottle && (
                            <p className="text-[10px] sm:text-xs text-text-muted">${bundle.perBottle.toFixed(2)}/bottle</p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Risk Reversal */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-6 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                  30-Day Money-Back Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                  No subscriptions
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                  Ships in 2 business days
                </span>
              </div>

              {/* Add to Cart */}
              <div className="mb-8">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  {addedToCart ? "Added!" : "Add to Cart"}
                </Button>
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

          {/* Benefits Timeline */}
          <section className="mt-16 sm:mt-24">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">What To Expect</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Results Over Time</h2>
              <p className="text-gray-600 mt-2">This is not a stimulant. Real change takes consistency.</p>
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

          {/* Customer Reviews */}
          <section id="reviews" className="mt-16 sm:mt-24 scroll-mt-32">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Customer Reviews</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What Men Are Saying</h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <StarRating rating={5} />
                <span className="text-gray-500">127 verified reviews</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <StarRating rating={review.rating} />
                    {review.verified && (
                      <span className="text-xs text-green-600 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-4">{review.text}</p>
                  <p className="text-gray-500 text-sm font-medium">{review.name}, {review.age}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Trust Grid */}
          <section className="mt-16 sm:mt-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 sm:mt-24 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Feel Like Yourself Again?</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Start with the 60-day supply. Give it time to work. If you don't notice a difference, get your money back.
              </p>
              <Button size="lg" onClick={handleAddToCart} className="px-12">
                {addedToCart ? "Added!" : "Get Started"}
              </Button>
              <p className="text-sm text-gray-500 mt-4">30-day money-back guarantee • Free shipping on 2+ bottles</p>
            </div>
          </section>

        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
            <p className="text-xs text-gray-500">{quantity} bottle{quantity > 1 ? 's' : ''}</p>
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
