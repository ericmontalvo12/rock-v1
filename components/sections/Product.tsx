"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const productFeatures = [
  "Supports natural hormone balance",
  "Enhances strength and recovery",
  "Reduces stress-related fatigue",
  "Made in the USA • No proprietary blends",
];

export function Product() {
  return (
    <section id="product" className="py-12 sm:py-16 lg:py-20 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 md:order-1 md:w-1/2"
          >
            <div className="relative aspect-square max-w-[320px] sm:max-w-md mx-auto">
              <div className="relative w-full h-full rounded-2xl border border-border overflow-hidden flex items-center justify-center">
                <Image
                  src="/product-main.png"
                  alt="Peak Performance - Testosterone Support Formula"
                  width={597}
                  height={597}
                  className="object-contain scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-2 md:w-1/2 text-center"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Testosterone Support
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Peak Performance
            </h2>

            <p className="text-lg text-text-secondary mb-8">
              One daily formula to support your strength, energy, and drive—so you can show up at your best, every day.
            </p>

            <ul className="space-y-3 mb-8 inline-block text-left">
              {productFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/product" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Buy Now
                </Button>
              </Link>
              <Link href="/product" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
