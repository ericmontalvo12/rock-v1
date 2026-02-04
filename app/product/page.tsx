"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Truck, Tag } from "lucide-react";

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
    subtitle: "Free Shipping + Priority Processing",
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

const benefits = [
  "7 ingredients dosed based on published research",
  "Fully disclosed label — no proprietary blends",
  "Supports testosterone, strength, and recovery naturally",
];

const productSections = [
  {
    title: "How to Take",
    content: (
      <div className="space-y-4 text-text-secondary text-center">
        <p>
          Take 3 capsules daily with food, preferably at the same time each day.
        </p>
        <p className="text-sm">
          For best results, use consistently for at least 30 days. This product supports
          healthy testosterone levels over time — not an acute pre-workout or stimulant.
          Results vary, but most users report changes in energy and recovery within 2–4 weeks.
        </p>
        <div className="pt-2">
          <p>
            <strong className="text-text-primary">Serving Size:</strong> 3 Capsules
          </p>
          <p>
            <strong className="text-text-primary">Servings Per Container:</strong> 30 (30-day supply)
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Who It's For",
    content: (
      <div className="space-y-4 text-text-secondary text-center">
        <p className="font-medium text-text-primary">Peak Performance is designed for:</p>
        <ul className="list-disc space-y-2 text-sm inline-block text-left">
          <li>Men who train regularly and prioritize long-term performance</li>
          <li>Men looking to support healthy testosterone levels naturally</li>
          <li>Men focused on recovery, energy, and consistency — not shortcuts</li>
        </ul>
        <p className="text-sm pt-2">
          <strong className="text-text-primary">Not for:</strong> Men under 18, those on testosterone
          replacement therapy (consult your doctor), or those expecting immediate, dramatic changes.
          This is a long-term support formula, not a quick fix.
        </p>
      </div>
    ),
  },
  {
    title: "Supplement Facts",
    content: (
      <div className="space-y-6 text-text-secondary text-center">
        <div>
          <h4 className="text-text-primary font-semibold mb-3">
            Amount Per Serving
          </h4>
          <ul className="space-y-2 text-sm inline-block text-left">
            <li>Vitamin D (as Cholecalciferol) - 75 mcg (3,000 IU)</li>
            <li>Magnesium (as Magnesium Bisglycinate) - 300 mg</li>
            <li>Zinc (as Zinc Citrate) - 30 mg</li>
            <li>Fenugreek Seed Extract (standardized to 50% saponins) - 500 mg</li>
            <li>Ashwagandha Root Extract (KSM-66) - 500 mg</li>
            <li>Tongkat Ali Root Extract (1% Eurycomanone) - 300 mg</li>
            <li>Boron (as Boron Citrate) - 9 mg</li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-3">
            Other Ingredients
          </h4>
          <p className="text-sm">
            Vegetable cellulose (capsule), rice flour, magnesium stearate.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Shipping & Guarantee",
    content: (
      <div className="space-y-4 text-text-secondary text-center">
        <p className="text-sm">
          <strong className="text-text-primary">Shipping:</strong> Free on 2+ bottles.
          All orders ship within 24 hours. Delivery typically takes 4–7 business days.
        </p>
        <p className="text-sm">
          <strong className="text-text-primary">30-Day Money-Back Guarantee:</strong> If you're
          not satisfied for any reason, contact us within 30 days for a full refund.
          No questions asked.
        </p>
        <p className="text-xs text-text-muted pt-2">
          We stand behind this formula. If it doesn't meet your expectations, we don't want your money.
        </p>
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
        className="w-full py-5 sm:py-4 flex items-center justify-center sm:justify-between text-center sm:text-left min-h-[56px] sm:min-h-0 gap-3"
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
            <div className="pb-5 sm:pb-4 text-left">{content}</div>
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

export default function ProductPage() {
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

  const handleQuantityChange = (newQty: number) => {
    const clampedQty = Math.max(1, Math.min(20, newQty));
    setQuantity(clampedQty);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      handleQuantityChange(value);
    }
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

  const handleBuyNow = () => {
    addToCart(
      {
        id: "peak-performance",
        name: "Peak Performance",
        price: pricing.perBottle,
        image: "/product-main.png",
      },
      quantity
    );
    router.push("/cart");
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
            <div className="order-2 lg:order-2 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-3">
                Peak Performance
              </h1>

              <p className="text-base sm:text-lg text-text-secondary mb-6">
                Research-backed testosterone support for men who train
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-6 inline-block sm:block text-left">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-text-secondary text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Differentiation Block */}
              <div className="bg-surface border border-border rounded-lg p-4 mb-8">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Why This Formula Is Different</h3>
                <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  <p>• Every ingredient backed by human studies on testosterone or performance</p>
                  <p>• Doses aligned with published research — not underdosed or inflated</p>
                  <p>• Fully disclosed label with exact amounts and standardized extracts</p>
                  <p>• Third-party tested for purity, heavy metals, and contaminants</p>
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
                {quantity > 3 && !matchingBundle && (
                  <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                    Best value pricing applied
                  </span>
                )}
              </div>

              {/* Add to Cart */}
              <div className="mb-4">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  {addedToCart ? "Added!" : `Add to Cart — $${totalPrice.toFixed(2)}`}
                </Button>
              </div>

              {/* Trust strip */}
              <p className="text-xs text-text-muted text-center sm:text-left mb-8">
                Ships within 24 hours • 30-day money-back guarantee • No subscriptions or tricks
              </p>

              {/* Accordion Sections */}
              <div className="border-t border-border text-center sm:text-left">
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
