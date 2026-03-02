"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-start md:items-center pt-[88px] pb-10 md:pt-24 md:pb-0 overflow-hidden">
      {/* Background image - Mobile (using Next Image for better positioning) */}
      <div className="absolute top-[72px] left-0 right-0 bottom-0 md:hidden">
        <Image
          src="/hero-v3.jpg"
          alt="Hero background"
          fill
          className="object-cover object-[center_65%]"
          priority
        />
      </div>
      {/* Background image - Desktop */}
      <div className="absolute top-[80px] left-0 right-0 bottom-0 hidden md:block">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
      </div>

      {/* Left gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent lg:to-60%" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[340px] sm:max-w-none mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 sm:mb-8 leading-tight">
              Testosterone Support<br />
              Built on Research
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/formula" className="w-full max-w-[320px] sm:max-w-none sm:w-auto mx-auto sm:mx-0">
                <Button size="lg" className="w-full sm:w-auto h-11 text-sm rounded-lg sm:h-12 sm:text-base sm:px-8 sm:rounded-md">Inside the Formula</Button>
              </Link>
              <Link href="/product" className="w-full max-w-[320px] sm:max-w-none sm:w-auto mx-auto sm:mx-0">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 text-sm rounded-lg sm:h-12 sm:text-base sm:px-8 sm:rounded-md border-white text-white hover:bg-white/10">
                  View Peak Performance
                </Button>
              </Link>
            </div>


            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/80 max-w-sm mx-auto">
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

          </motion.div>

        </div>
      </div>
    </section>
  );
}
