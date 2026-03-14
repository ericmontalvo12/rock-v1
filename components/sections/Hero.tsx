"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-start sm:items-center pt-[72px] sm:pt-[88px] pb-8 sm:pb-0 overflow-hidden">
      {/* Background image - Mobile */}
      <div className="absolute inset-0 top-[72px] sm:hidden">
        <Image
          src="/hero-mountain.jpg"
          alt="Hero background"
          fill
          className="object-cover object-[70%_center]"
          priority
        />
      </div>
      {/* Background image - Desktop */}
      <div className="absolute inset-0 top-[80px] hidden sm:block">
        <Image
          src="/hero-mountain.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient overlay - Mobile: top gradient, Desktop: left gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent sm:bg-gradient-to-r sm:from-black/55 sm:via-black/30 sm:to-transparent lg:to-60%" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-0 sm:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-center lg:text-left max-w-[340px] sm:max-w-none mx-auto"
          >
            {/* Headline */}
            <h1 className="text-[28px] sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-5 leading-[1.15]">
              Built for Men Who Read Labels
            </h1>

            {/* Subheadline - shorter on mobile */}
            <p className="text-white/85 text-[15px] sm:text-lg mb-5 sm:mb-8 leading-relaxed max-w-[300px] sm:max-w-md mx-auto lg:mx-0">
              Research-backed testosterone support for energy, drive, and recovery.
            </p>

            {/* Trust indicators - HIDDEN on mobile, shown on sm+ */}
            <div className="hidden sm:grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/80 max-w-sm mx-auto lg:mx-0 mb-8 sm:mb-10">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Research-Backed</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Fully Disclosed Labels</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Batch Tested</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">30-Day Guarantee</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center lg:justify-start">
              <Link href="/product" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 text-[15px] rounded-lg sm:h-12 sm:text-base sm:px-8">
                  Pre-Order Now
                </Button>
              </Link>
              <Link href="/formula" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-[15px] rounded-lg sm:h-12 sm:text-base sm:px-8 border-white/80 text-white hover:bg-white/10">
                  Inside the Formula
                </Button>
              </Link>
            </div>

            {/* Pre-order note */}
            <p className="text-white/50 text-xs sm:text-sm mt-4">
              Pre-orders now open. Ships once production is complete.
            </p>

          </motion.div>

        </div>
      </div>

      {/* Mobile Trust Bar - positioned at bottom of hero */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-8 pb-4">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-4">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-white/80 text-xs font-medium">Research-Backed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-white/80 text-xs font-medium">Fully Disclosed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-white/80 text-xs font-medium">Batch Tested</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-white/80 text-xs font-medium">30-Day Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
