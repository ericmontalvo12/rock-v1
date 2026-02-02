"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-start md:items-center pt-[88px] pb-10 md:pt-24 md:pb-0 overflow-hidden">
      {/* Background image - Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/hero-mobile.png')" }}
      />
      {/* Background image - Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/hero-bg-v3.jpg')" }}
      />

      {/* Left gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent lg:to-60%" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-[340px] sm:max-w-none mx-auto lg:mx-0"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              Built for Men Chasing Their Peak
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed">
              Fuel your strength, sharpen your focus,<br className="hidden sm:block" />
              and recover like you mean it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-0">
              <Link href="/product" className="w-full max-w-[320px] sm:max-w-none sm:w-auto mx-auto sm:mx-0">
                <Button size="lg" className="w-full sm:w-auto h-11 text-sm rounded-lg sm:h-12 sm:text-base sm:px-8 sm:rounded-md">Shop Now</Button>
              </Link>
              <Link href="#ingredients" className="w-full max-w-[320px] sm:max-w-none sm:w-auto mx-auto sm:mx-0">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 text-sm rounded-lg sm:h-12 sm:text-base sm:px-8 sm:rounded-md border-white text-white hover:bg-white/10">
                  View Ingredients
                </Button>
              </Link>
            </div>


            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/80 max-w-sm mx-auto lg:mx-0">
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
