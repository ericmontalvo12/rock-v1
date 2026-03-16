"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] sm:min-h-screen flex items-start sm:items-center pt-[72px] sm:pt-[88px] pb-0 sm:pb-0 overflow-hidden">
      {/* Background image - Mobile */}
      <div className="absolute inset-0 top-[92px] sm:hidden">
        <Image
          src="/hero-mobile.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center"
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/50 sm:to-black/15 lg:to-65%" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-center lg:text-left max-w-[320px] sm:max-w-none mx-auto"
          >
            {/* Headline */}
            <h1 className="text-[26px] sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-2 sm:mb-5 leading-[1.15]">
              Built for Men Who Read Labels
            </h1>

            {/* Subheadline */}
            <p className="text-white/85 text-[14px] sm:text-lg mb-4 sm:mb-8 leading-relaxed max-w-[280px] sm:max-w-md mx-auto lg:mx-0">
              Research-backed testosterone support for energy, drive, and recovery.
            </p>

            {/* Trust indicators - HIDDEN on mobile, shown on sm+ */}
            <div className="hidden sm:grid grid-cols-2 gap-y-3 gap-x-5 text-sm text-white max-w-sm mx-auto lg:mx-0 mb-8 sm:mb-10">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">Research-Backed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">Fully Disclosed Labels</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">Batch Tested</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">30-Day Guarantee</span>
              </div>
            </div>

            {/* CTAs - Single CTA on mobile, both on desktop */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center lg:justify-start">
              <Link href="/product" className="w-full max-w-[280px] sm:max-w-none sm:w-auto mx-auto sm:mx-0">
                <Button size="lg" className="w-full sm:w-auto h-12 sm:h-12 text-[15px] sm:text-base rounded-lg sm:px-8">
                  Pre-Order Now
                </Button>
              </Link>
              {/* Secondary CTA - hidden on mobile */}
              <Link href="/formula" className="hidden sm:block sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-base rounded-lg sm:px-8 border-white/80 text-white hover:bg-white/10">
                  Inside the Formula
                </Button>
              </Link>
            </div>

            {/* Pre-order note */}
            <p className="text-white/50 text-[11px] sm:text-sm mt-3 sm:mt-4">
              Pre-orders open. Ships when production is complete.
            </p>

          </motion.div>

        </div>
      </div>

      {/* Mobile trust indicators - Bottom of hero */}
      <div className="sm:hidden absolute bottom-4 left-0 right-0 z-10 px-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-[280px] mx-auto">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-white text-[11px] font-medium">Research-Backed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-white text-[11px] font-medium">Fully Disclosed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-white text-[11px] font-medium">Batch Tested</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-white text-[11px] font-medium">30-Day Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
