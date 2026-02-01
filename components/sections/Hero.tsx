"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg-new.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 break-words">
              Built for Men Chasing Their Peak
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed">
              Full-strength ingredients for drive,<br className="hidden sm:block" />
              recovery, and healthy testosterone
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/product">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link href="#ingredients">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Ingredients
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/80 max-w-sm">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">No Proprietary Blends</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Third-Party Tested</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Made in USA</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">30-Day Guarantee</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
