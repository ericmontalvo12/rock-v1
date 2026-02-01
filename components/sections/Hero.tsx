"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
              Clinically Dosed Testosterone Support
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Built for Strength, Energy, and Daily Performance
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
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-white/80">
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                No Proprietary Blends
              </span>
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Clinically Dosed
              </span>
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Science-Backed
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
