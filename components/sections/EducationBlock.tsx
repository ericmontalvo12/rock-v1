"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, X, Brain, Sparkles, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

// Ingredient data for carousel
const ingredients = [
  { name: "Ashwagandha", dose: "500mg KSM-66", benefit: "Manages cortisol response", image: "/ashwagandha.png" },
  { name: "Tongkat Ali", dose: "300mg 100:1", benefit: "Supports free testosterone", image: "/tongkat-ali-new.jpg" },
  { name: "Fenugreek", dose: "500mg", benefit: "Influences T metabolism", image: "/fenugreek.png" },
  { name: "Magnesium", dose: "300mg", benefit: "Enzymatic cofactor", image: "/magnesium.png" },
  { name: "Zinc", dose: "30mg", benefit: "T synthesis support", image: "/zinc.png" },
  { name: "Vitamin D3", dose: "3,000 IU", benefit: "Hormone precursor", image: "/ingredients/vitamin-d3.jpg" },
  { name: "Boron", dose: "9mg", benefit: "Reduces SHBG binding", image: "/boron.png" },
];

export function EducationBlock() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.scrollWidth / ingredients.length;
      carouselRef.current.scrollTo({ left: slideWidth * index, behavior: "smooth" });
      setActiveSlide(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.scrollWidth / ingredients.length;
      const newActive = Math.round(carouselRef.current.scrollLeft / slideWidth);
      setActiveSlide(newActive);
    }
  };

  return (
    <div>
      {/* SECTION: 3-Panel Problem Story */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              Why You Can Feel Off
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              With "Normal" Testosterone
            </h2>
          </motion.div>

          {/* 3-Panel Grid */}
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Panel A: Normal ≠ Function */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
            >
              <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-4">
                The Gap
              </span>
              <h3 className="text-gray-900 font-bold text-lg mb-4">Normal levels ≠ normal function</h3>

              {/* Visual: Total T → Free T */}
              <div className="flex items-center justify-center gap-3 mb-5 py-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-primary">Total T</span>
                  </div>
                  <span className="text-[10px] text-gray-400">Labs measure</span>
                </div>
                <div className="text-gray-300 text-xl">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center mb-1">
                    <span className="text-[10px] font-bold text-gray-500">Free T</span>
                  </div>
                  <span className="text-[10px] text-gray-400">You feel</span>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                  <span>Total T can look "fine" on labs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                  <span>Free T is what you actually feel</span>
                </li>
              </ul>
            </motion.div>

            {/* Panel B: The 3 Limiters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
            >
              <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-4">
                The Problem
              </span>
              <h3 className="text-gray-900 font-bold text-lg mb-4">The 3 limiters</h3>

              <div className="space-y-3">
                {/* Stress */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Stress overload</p>
                    <p className="text-xs text-gray-500">Blunts drive + recovery</p>
                  </div>
                </div>

                {/* Inputs */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Missing inputs</p>
                    <p className="text-xs text-gray-500">D3, zinc, magnesium deficiencies</p>
                  </div>
                </div>

                {/* SHBG */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">SHBG binding</p>
                    <p className="text-xs text-gray-500">Locks up testosterone</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Panel C: Built to Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
            >
              <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-4">
                The Solution
              </span>
              <h3 className="text-gray-900 font-bold text-lg mb-4">Built to address all three</h3>

              <div className="flex gap-4">
                {/* Product bottle */}
                <div className="w-36 sm:w-40 flex-shrink-0">
                  <Image
                    src="/bottle-new.png"
                    alt="Peak Performance bottle"
                    width={160}
                    height={260}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>

                {/* Callouts */}
                <div className="flex-1 space-y-3">
                  <div className="p-2.5 bg-gray-50 rounded-lg border-l-2 border-primary">
                    <p className="text-xs font-semibold text-gray-900">Stress support</p>
                    <p className="text-[10px] text-gray-500">KSM-66 Ashwagandha</p>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-lg border-l-2 border-primary">
                    <p className="text-xs font-semibold text-gray-900">Key inputs</p>
                    <p className="text-[10px] text-gray-500">D3 + Zinc + Magnesium</p>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-lg border-l-2 border-primary">
                    <p className="text-xs font-semibold text-gray-900">Free T support</p>
                    <p className="text-[10px] text-gray-500">Boron + Tongkat + Fenugreek</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link href="/formula">
              <Button size="lg">See the full formula</Button>
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Built for stress, inputs, and Free T support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION: Ingredients Gallery */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              The Formula
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              7 Ingredients. Clinical Doses.
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Arrow buttons - desktop only */}
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous ingredient"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => scrollToSlide(Math.min(ingredients.length - 1, activeSlide + 1))}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next ingredient"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Carousel */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto scroll-snap-x-mandatory scrollbar-hide pb-4 overscroll-x-contain"
              style={{ scrollSnapType: "x mandatory", touchAction: "pan-x pinch-zoom" }}
            >
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-shrink-0 w-[260px] sm:w-[300px]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Image */}
                  <div className="aspect-square bg-gray-50 relative">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-4 text-center">
                    <p className="font-bold text-gray-900">{ingredient.name}</p>
                    <p className="text-primary text-sm font-medium mt-1">{ingredient.dose}</p>
                    <p className="text-gray-500 text-sm mt-2">{ingredient.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {ingredients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Research Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-xl mx-auto"
          >
            <Accordion>
              <AccordionItem trigger="Show the research behind each ingredient">
                <ul className="space-y-2">
                  <li><Link href="/formula#ashwagandha" className="text-primary hover:underline">Ashwagandha (KSM-66) →</Link></li>
                  <li><Link href="/formula#tongkat" className="text-primary hover:underline">Tongkat Ali →</Link></li>
                  <li><Link href="/formula#fenugreek" className="text-primary hover:underline">Fenugreek →</Link></li>
                  <li><Link href="/formula#magnesium" className="text-primary hover:underline">Magnesium →</Link></li>
                  <li><Link href="/formula#zinc" className="text-primary hover:underline">Zinc →</Link></li>
                  <li><Link href="/formula#vitamin-d3" className="text-primary hover:underline">Vitamin D3 →</Link></li>
                  <li><Link href="/formula#boron" className="text-primary hover:underline">Boron →</Link></li>
                </ul>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* SECTION: Who This Is For - Photo Split */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[400px]"
            >
              <Image
                src="/gym-lifestyle.jpg"
                alt="Peak Performance in the gym"
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
            </motion.div>

            {/* Right: Lists */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                Is This Right For You
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Who This Is For
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Not Ideal */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Not ideal if:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                      <span>Looking for overnight results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                      <span>Want stimulant-based energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                      <span>Expect results without consistency</span>
                    </li>
                  </ul>
                </div>

                {/* Good Fit */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Good fit if:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Feel off but not broken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Energy and drive have slipped</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Value consistency over stimulation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-500 text-sm italic">
                Not a stimulant. Not an overnight fix.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
