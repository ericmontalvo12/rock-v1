"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

// Transformation data - replace with real data later
const transformations = [
  {
    id: 1,
    name: "Erik, 30",
    verified: true,
    quote: "I got bloodwork and my testosterone was low, which honestly explained a lot. My energy was low, my recovery wasn't great, and I wasn't putting on muscle the way I should've. I started training consistently, cleaned up my sleep/food, and took Peak Performance every day. The difference in how I feel and how I look is crazy.",
    beforeImage: "/erik-before.jpg",
    afterImage: "/erik-after.jpg",
  },
  {
    id: 2,
    name: "David, 24",
    verified: true,
    quote: "I was fat, my T was low, and I felt like I had no gas in the tank. I got serious with training and diet, and I started taking Peak Performance every day. I leaned out hard, my workouts got way better, and I honestly feel like myself again.",
    beforeImage: "/david-before.jpg",
    afterImage: "/david-after.jpg",
  },
  {
    id: 3,
    name: "Ryan",
    verified: true,
    quote: "Skeptical at first since I've tried so many supplements. But this one actually delivered. Down 12 lbs of fat, up in strength, and my focus during workouts is locked in.",
    beforeImage: "https://placehold.co/400x600/e2e8f0/64748b?text=BEFORE",
    afterImage: "https://placehold.co/400x600/e2e8f0/64748b?text=AFTER",
  },
  {
    id: 4,
    name: "Derek",
    verified: true,
    quote: "At 42, I thought my best days were behind me. Peak Performance proved me wrong. I'm lifting heavier than I did in my 30s and the drive is back. Game changer.",
    beforeImage: "https://placehold.co/400x600/e2e8f0/64748b?text=BEFORE",
    afterImage: "https://placehold.co/400x600/e2e8f0/64748b?text=AFTER",
  },
];

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.scrollWidth / transformations.length;
      container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.scrollWidth / transformations.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const goNext = () => {
    const nextIndex = Math.min(activeIndex + 1, transformations.length - 1);
    scrollToIndex(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  return (
    <section id="transformations" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
            Transformations
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Real Results From Real Customers
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
            See why customers choose Peak Performance to upgrade their physique & performance.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Arrow Buttons */}
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-12 h-12 bg-white rounded-full border border-gray-200 shadow-lg items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={goNext}
            disabled={activeIndex === transformations.length - 1}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-12 h-12 bg-white rounded-full border border-gray-200 shadow-lg items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next transformation"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-snap-x-mandatory scrollbar-hide pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[calc(100vw-32px)] sm:w-[calc(100vw-48px)] lg:w-full"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Transformation Set: Quote + Before + After */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
                  {/* Quote Card */}
                  <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[280px] lg:min-h-[400px]">
                    {/* Top: Name + Verified */}
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <span className="text-lg font-bold text-gray-900">{transformation.name}</span>
                        {transformation.verified && (
                          <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                        )}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-600 text-base leading-relaxed line-clamp-6 lg:line-clamp-none">
                        "{transformation.quote}"
                      </p>
                    </div>

                    {/* Bottom spacer for alignment */}
                    <div className="mt-4">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Verified Customer</span>
                    </div>
                  </div>

                  {/* Before/After Images - Side by side on mobile, grid on desktop */}
                  <div className="grid grid-cols-2 lg:contents gap-3">
                    {/* Before Image Card */}
                    <div className="group relative rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 aspect-[3/4] lg:aspect-auto lg:min-h-[400px]">
                      <Image
                        src={transformation.beforeImage}
                        alt={`${transformation.name} before`}
                        fill
                        className="object-cover object-[0%_50%]"
                        unoptimized
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      {/* Before Pill */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-lg border border-gray-200/50">
                          BEFORE
                        </span>
                      </div>
                    </div>

                    {/* After Image Card */}
                    <div className="group relative rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 aspect-[3/4] lg:aspect-auto lg:min-h-[400px]">
                      <Image
                        src={transformation.afterImage}
                        alt={`${transformation.name} after`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      {/* After Pill */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-primary shadow-lg border border-primary/20">
                          AFTER
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {/* Mobile Arrows */}
            <button
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="lg:hidden w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to transformation ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Arrows */}
            <button
              onClick={goNext}
              disabled={activeIndex === transformations.length - 1}
              className="lg:hidden w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
