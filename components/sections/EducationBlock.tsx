"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

// Ingredient data for carousel
const ingredients = [
  { name: "Ashwagandha", dose: "500mg KSM-66", benefit: "Supports healthy stress response", image: "/ashwagandha.png" },
  { name: "Tongkat Ali", dose: "300mg 200:1", benefit: "Supports energy and free testosterone", image: "/tongkat-ali.png" },
  { name: "Fenugreek", dose: "500mg", benefit: "Supports free testosterone function", image: "/fenugreek.png" },
  { name: "Magnesium", dose: "30mg", benefit: "Supports recovery and stress balance", image: "/magnesium.png" },
  { name: "Zinc", dose: "20mg", benefit: "Key mineral for testosterone support", image: "/zinc.png" },
  { name: "Vitamin D3", dose: "3,000 IU", benefit: "Supports hormonal foundation", image: "/vitamin-d3.png" },
  { name: "Boron", dose: "9mg", benefit: "Supports free testosterone availability", image: "/boron.png" },
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
                  className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(33.333%-11px)]"
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
