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
import { Check, ChevronDown, Truck, Tag, ArrowRight } from "lucide-react";

const bundleOptions = [
  {
    id: "1-bottle",
    quantity: 1,
    label: "1 Bottle",
    subtitle: "30-day supply",
    price: 49.99,
    perBottle: 49.99,
    badge: null,
    freeShipping: false,
  },
  {
    id: "2-bottles",
    quantity: 2,
    label: "2 Bottles",
    subtitle: "Free Shipping",
    price: 99.98,
    perBottle: 49.99,
    badge: "Most Popular",
    freeShipping: true,
  },
  {
    id: "3-bottles",
    quantity: 3,
    label: "3 Bottles",
    subtitle: "Save 10% + Free Shipping",
    price: 134.97,
    perBottle: 44.99,
    badge: "Best Value",
    freeShipping: true,
  },
];

const corePrinciples = [
  {
    title: "Free testosterone availability over total numbers",
    description: "Ingredients like fenugreek and boron reduce SHBG to unlock testosterone already in your system.",
  },
  {
    title: "Stress management creates hormonal balance",
    description: "Ashwagandha and magnesium lower cortisol, allowing testosterone to function.",
  },
  {
    title: "Foundational nutrients support natural production",
    description: "Zinc, magnesium, and vitamin D provide what your body needs to synthesize testosterone efficiently.",
  },
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
            <span>Feel off but aren't broken — energy is lower, drive has dulled, recovery takes longer</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Have tried generic test boosters and saw nothing happen</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Want to optimize naturally before considering injections</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Understand that free testosterone availability matters more than just total T</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Are willing to commit to consistency rather than chasing stimulation</span>
          </li>
        </ul>
        <p className="text-sm text-text-muted pt-2 text-center">
          If you're looking for a quick fix or a stimulant buzz, this isn't it. If you're looking to restore function over time, keep reading.
        </p>
      </div>
    ),
  },
  {
    title: "What to Expect",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm">
          This is not a stimulant. There is no immediate buzz, no jolt of energy, no performance spike on day one.
        </p>
        <p className="text-sm font-medium text-text-primary">What you're more likely to notice over the first 4–8 weeks:</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Energy feels more stable — less dragging in the afternoon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Recovery from training improves</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Mental clarity sharpens slightly, consistently</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Libido begins to return — not dramatic, but present</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Body composition shifts if training and diet are in place</span>
          </li>
        </ul>
        <p className="text-sm text-text-muted">These changes are subtle and progressive. They compound.</p>
        <div className="bg-surface border border-border rounded-lg p-4 mt-4">
          <p className="text-sm text-text-secondary">
            This formula is designed to support your body's natural response, not override it. If you're looking to feel something on day three, this will disappoint you. If you're looking to feel like yourself again by week six, this makes sense.
          </p>
          <p className="text-sm text-text-primary font-medium mt-2">
            Give it 60 days before deciding if it's working. Hormonal shifts don't happen overnight.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "How to Use It",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <div>
          <p className="text-sm font-medium text-text-primary mb-1">Daily Dose</p>
          <p className="text-sm">Three capsules, once daily with food.</p>
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary mb-1">Best Timing</p>
          <p className="text-sm">Morning with breakfast or early afternoon. Consistency matters more than exact timing.</p>
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary mb-1">Commitment Window</p>
          <p className="text-sm">Take it daily for at least 60 days before evaluating. Hormonal changes are gradual.</p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 mt-2">
          <p className="text-sm text-text-muted">
            <strong className="text-text-secondary">Important:</strong> Do not combine with other testosterone support supplements or hormone-modulating compounds unless discussed with your doctor. More is not better.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "You Might Be Wondering",
    content: (
      <div className="space-y-6 text-text-secondary text-left max-w-lg mx-auto">
        <div>
          <p className="text-sm font-medium text-text-primary mb-2">I've tried testosterone boosters before. Why would this be different?</p>
          <p className="text-sm">
            Most test boosters are underdosed or use cheap ingredient forms that don't absorb well. Many hide behind proprietary blends. This formula uses clinically validated doses of bioavailable forms — the same doses used in the studies. If you've only tried generic boosters with 100mg of fenugreek or unspecified extracts, you haven't tried what actually works.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary mb-2">Is this just placebo?</p>
          <p className="text-sm">
            The ingredients in this formula have been studied in randomized, placebo-controlled trials showing measurable increases in free testosterone, reductions in SHBG, and improvements in cortisol-to-testosterone ratios. Placebo doesn't change blood markers. That said, if you expect to feel something on day one, you'll be disappointed. This isn't designed to create a stimulant response.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary mb-2">Why not just do TRT?</p>
          <p className="text-sm">
            TRT works. But it's a commitment — often for life. It shuts down natural production, requires regular injections or application, and comes with fertility considerations and side effect management. For men who still have natural production and haven't optimized the basics, this is the rational first step. If it doesn't work, TRT is still an option. But if it does work, you've avoided a lifetime of dependency.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary mb-2">How long until I know if it's working?</p>
          <p className="text-sm">
            Most men notice subtle shifts in energy and recovery within 3–4 weeks. Libido and body composition changes take longer — 6–8 weeks. Blood work at 8–12 weeks will show measurable hormone changes if the formula is working for you. If you see no change by 60 days, it's likely not the right fit, and you're covered by the guarantee.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Full Ingredient List",
    content: (
      <div className="space-y-6 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm text-center">Seven ingredients. Fully disclosed dosing. No proprietary blends.</p>
        <div>
          <h4 className="text-text-primary font-semibold mb-3 text-center">
            Amount Per Serving
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Vitamin D (as Cholecalciferol) — 75 mcg (3,000 IU)</li>
            <li>Magnesium (as Magnesium Bisglycinate) — 300 mg</li>
            <li>Zinc (as Zinc Citrate) — 30 mg</li>
            <li>Fenugreek Seed Extract (50% saponins) — 500 mg</li>
            <li>Ashwagandha Root Extract (KSM-66) — 500 mg</li>
            <li>Tongkat Ali Root Extract (1% Eurycomanone) — 300 mg</li>
            <li>Boron (as Boron Citrate) — 9 mg</li>
          </ul>
        </div>
        <p className="text-sm text-text-muted text-center">
          Each dose matches or exceeds what's been validated in peer-reviewed research. No label dressing. No filler.
        </p>
        <div className="text-center pt-2">
          <Link href="/formula-v2" className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline">
            See the full breakdown and research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "60-Day Guarantee",
    content: (
      <div className="space-y-4 text-text-secondary text-left max-w-lg mx-auto">
        <p className="text-sm">
          Try Peak Performance for 60 days. If you don't feel the difference, contact us for a full refund.
        </p>
        <p className="text-sm">
          No hassle. No questions designed to talk you out of it. We respect that this either works for you or it doesn't.
        </p>
        <p className="text-sm text-text-muted">
          The window is 60 days because real hormonal shifts take time. We're not selling stimulants that work on day one and fade by week two.
        </p>
        <div className="pt-2">
          <p className="text-sm font-medium text-text-primary mb-2">Shipping</p>
          <ul className="space-y-1 text-sm">
            <li>• Ships within 2 business days</li>
            <li>• Free shipping on orders of 2+ bottles</li>
            <li>• No subscriptions or recurring charges unless you opt in</li>
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
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [addedToCart, setAddedToCart] = useState(false);
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
        image: "/product-main.png",
      },
      quantity
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Product Image */}
            <div className="relative order-1 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <div className="aspect-square rounded-2xl border border-border overflow-hidden flex items-center justify-center max-w-[340px] lg:max-w-none mx-auto mb-6 lg:mb-0 lg:w-[446px] lg:h-[446px]">
                  <Image
                    src="/product-main.png"
                    alt="Rock Mountain Peak Performance"
                    width={446}
                    height={446}
                    className="object-contain scale-110"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-2 lg:order-2 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-3">
                Peak Performance
              </h1>

              <p className="text-sm sm:text-base text-text-secondary mb-2">
                A foundational testosterone support formula designed to help your body respond the way it used to.
              </p>

              <p className="text-base sm:text-lg text-text-primary font-medium mb-6">
                What you do before TRT — or instead of it.
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
                        <span className="absolute -top-2 sm:-top-2.5 right-2 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded bg-primary text-white">
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
                            <p className="text-xs sm:text-sm text-text-secondary truncate">{bundle.subtitle}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-bold text-text-primary text-sm sm:text-base">${bundle.price.toFixed(2)}</p>
                          {bundle.quantity > 1 && (
                            <p className="text-[10px] sm:text-xs text-text-secondary">${bundle.perBottle.toFixed(2)}/bottle</p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Deal Status Indicator */}
              <div className="flex flex-wrap gap-3 mb-6 text-sm justify-center sm:justify-start">
                {pricing.freeShipping && (
                  <span className="inline-flex items-center gap-1.5 text-primary">
                    <Truck className="w-4 h-4" />
                    Free shipping applied
                  </span>
                )}
                {quantity >= 3 && (
                  <span className="inline-flex items-center gap-1.5 text-primary">
                    <Tag className="w-4 h-4" />
                    ${pricing.perBottle.toFixed(2)}/bottle applied
                  </span>
                )}
              </div>

              {/* Pre-CTA Context */}
              <div className="mb-4 text-center">
                <p className="text-sm text-text-muted mb-3">
                  If you've read this far, you understand what this is and what it isn't.
                  <br />
                  You know the mechanism. You've seen the dosing. You know the risk is controlled.
                </p>
              </div>

              {/* Add to Cart */}
              <div className="mb-4">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  {addedToCart ? "Added!" : `Start with Peak Performance — $${totalPrice.toFixed(2)}`}
                </Button>
              </div>

              {/* Trust strip */}
              <p className="text-xs text-text-muted text-center mb-8">
                Ships within 2 business days • 60-day money-back guarantee • No subscriptions or tricks
              </p>

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
        </div>
      </main>

      <Footer />
    </div>
  );
}
