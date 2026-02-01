"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Minus, Plus } from "lucide-react";

const benefits = [
  "Science backed testosterone support",
  "Clinically dosed, no proprietary blends",
  "Built for strength, energy, and recovery",
];

const productSections = [
  {
    title: "Details",
    content: (
      <div className="space-y-4 text-text-secondary">
        <p>
          Rock Mountain Peak Performance is a daily testosterone support formula
          designed to support strength, energy, focus, and overall vitality.
          Built for men who train and prioritize consistency, it helps support
          performance and recovery without stimulants or shortcuts.
        </p>
        <div className="pt-2">
          <p>
            <strong className="text-text-primary">Serving Size:</strong> 3
            Capsules
          </p>
          <p>
            <strong className="text-text-primary">Servings Per Container:</strong>{" "}
            30
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Supplement Facts",
    content: (
      <div className="space-y-6 text-text-secondary">
        <div>
          <p className="text-sm mb-1">
            <strong className="text-text-primary">Serving Size:</strong> 3
            Capsules
          </p>
          <p className="text-sm">
            <strong className="text-text-primary">Servings Per Container:</strong>{" "}
            30
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-3">
            Amount Per Serving
          </h4>
          <ul className="space-y-2 text-sm">
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
      <div className="space-y-4 text-text-secondary">
        <div>
          <h4 className="text-text-primary font-semibold mb-2">Free Shipping</h4>
          <p className="text-sm">
            We offer free shipping on orders over $100 in the contiguous U.S.
            All orders are processed and shipped within one business day, with
            delivery typically taking between 4 to 7 business days.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "FAQ",
    content: (
      <div className="space-y-6 text-text-secondary text-sm">
        <div>
          <h4 className="text-text-primary font-semibold mb-2">
            What is Rock Mountain Peak Performance?
          </h4>
          <p>
            Rock Mountain Peak Performance is a daily testosterone support
            supplement designed to support energy, training performance,
            recovery, and overall vitality. It is formulated with clinically
            studied ingredients and transparent, research based dosing with no
            proprietary blends.
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-2">
            Who is this product for?
          </h4>
          <p className="mb-2">This product is best suited for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Men who train regularly or stay physically active</li>
            <li>
              Men focused on long term performance, recovery, and consistency
            </li>
            <li>
              Men looking to support healthy testosterone levels naturally
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-2">
            How do I take Rock Mountain Peak Performance?
          </h4>
          <p>
            Take the recommended daily serving consistently, preferably with
            food. For best results, use daily for at least 30 days alongside
            proper sleep, nutrition, and training.
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-2">
            How long does it take to notice results?
          </h4>
          <p>
            Most customers report subtle improvements in energy, recovery, and
            training performance within 2 to 4 weeks of consistent use.
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-2">
            Is this safe for daily use?
          </h4>
          <p>
            Yes. The formula is designed for daily, long term use and contains
            ingredients commonly used in sports nutrition. Always follow the
            recommended serving size.
          </p>
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
        className="w-full py-4 flex items-center justify-between text-left"
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
            <div className="pb-4">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: "peak-performance",
        name: "Peak Performance",
        price: 49.99,
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
        price: 49.99,
        image: "/product-main.png",
      },
      quantity
    );
    router.push("/cart");
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-32">
                <div className="aspect-square rounded-2xl border border-border overflow-hidden flex items-center justify-center" style={{ width: '446px', height: '446px' }}>
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
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
                Peak Performance
              </h1>

              <p className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                $49.99
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-3 text-text-secondary hover:text-text-primary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 text-text-primary font-medium min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-3 text-text-secondary hover:text-text-primary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 sm:flex-none sm:px-12"
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
