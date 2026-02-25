"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, Brain, Sparkles, Lock } from "lucide-react";

export function EducationBlock() {
  return (
    <div>
      {/* SECTION B: Education / Problem Awareness */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          {/* Section header - matching "The Real Issue" style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              What Most Men Never Get Told
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Normal Levels ≠ Normal Function
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
              The number on a lab report won't change how you feel.
            </p>
          </motion.div>

          {/* Main container - softer shadow than inner cards */}
          <div className="relative rounded-[32px] p-5 sm:p-7 lg:p-8 border border-gray-200/40 shadow-[0_2px_16px_rgba(0,0,0,0.02)] bg-gradient-to-br from-primary/[0.015] via-white to-primary/[0.02]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.03)_0%,_transparent_50%)] pointer-events-none"></div>

            <div className="relative grid lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
              {/* Left: Content block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] flex flex-col"
              >
                <p className="text-gray-600 text-sm sm:text-[15px] lg:text-[16px] leading-[1.8] mb-6">
                  You can have normal testosterone on paper and still feel tired, flat, and unmotivated. If testosterone is bound or cortisol is elevated, the number won't change how you feel.
                </p>
                <p className="text-gray-900 text-sm sm:text-[15px] lg:text-[16px] font-semibold leading-[1.75] mb-6">
                  That's why most supplements fail — they chase total testosterone instead of supporting functional availability.
                </p>

                {/* Affects line - simple text */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-[11px] sm:text-xs text-gray-400">Affects: <span className="text-gray-500">Energy</span> · <span className="text-gray-500">Drive</span> · <span className="text-gray-500">Recovery</span></span>
                </div>
              </motion.div>

              {/* Right: UI Module Card - tighter padding */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-4 lg:p-4 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] flex flex-col"
              >
                {/* Label chip - small, doesn't compete */}
                <span className="inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-2 self-start">
                  Function
                </span>

                {/* Two mini-cards with arrow - fixed size compact cards */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  {/* Lab Report card - fixed size */}
                  <div className="w-[140px] h-[130px] sm:w-[180px] sm:h-[150px] lg:w-[200px] lg:h-[160px] bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-center">
                    <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-primary/70 font-medium mb-0.5 text-center">Lab Report</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-0.5 whitespace-nowrap text-center">Total T</p>
                    <div className="flex items-center justify-center gap-1 text-primary/60 mb-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-medium">Normal</span>
                    </div>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-400 text-center">What labs measure</p>
                  </div>

                  {/* Arrow - vertically centered */}
                  <div className="flex-shrink-0 text-gray-300 text-base sm:text-lg lg:text-xl">→</div>

                  {/* Free T card - fixed size (identical) */}
                  <div className="w-[140px] h-[130px] sm:w-[180px] sm:h-[150px] lg:w-[200px] lg:h-[160px] bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-center">
                    <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-primary/70 font-medium mb-1.5 text-center">Free T</p>
                    {/* Mini sliders */}
                    <div className="space-y-1 sm:space-y-1.5 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-gray-500 w-9 sm:w-10 lg:w-11 text-left">Energy</span>
                        <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                          <div className="absolute left-0 top-0 h-1 w-1/3 bg-primary/60 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-gray-500 w-9 sm:w-10 lg:w-11 text-left">Drive</span>
                        <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                          <div className="absolute left-0 top-0 h-1 w-2/5 bg-primary/60 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-gray-500 w-9 sm:w-10 lg:w-11 text-left">Recovery</span>
                        <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                          <div className="absolute left-0 top-0 h-1 w-1/4 bg-primary/60 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-400 text-center">What your body uses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Mechanism */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              The Real Issue
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What Actually Limits Testosterone Function
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
              Three factors most formulas ignore.
            </p>
          </motion.div>

          {/* Cards container with radial gradient background - matching first section */}
          <div className="relative rounded-[32px] p-5 sm:p-7 lg:p-8 border border-gray-200/40 shadow-[0_2px_16px_rgba(0,0,0,0.02)] bg-gradient-to-br from-primary/[0.015] via-white to-primary/[0.02]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.03)_0%,_transparent_50%)] pointer-events-none"></div>

            <div className="relative grid md:grid-cols-3 gap-5 lg:gap-6">
              {/* Card 1: Chronic Stress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="group bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Top row: Icon + Mini visual */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  {/* Normalized visual container */}
                  <div className="w-[80px] lg:w-[88px] h-10 lg:h-11 bg-gray-50 rounded-lg flex items-end justify-center gap-[3px] pb-2">
                    <div className="w-1.5 bg-primary/30 rounded-sm h-2"></div>
                    <div className="w-1.5 bg-primary/40 rounded-sm h-3"></div>
                    <div className="w-1.5 bg-primary/60 rounded-sm h-5"></div>
                    <div className="w-1.5 bg-primary/80 rounded-sm h-4"></div>
                    <div className="w-1.5 bg-primary rounded-sm h-2.5"></div>
                    <div className="w-1.5 bg-primary/50 rounded-sm h-3"></div>
                  </div>
                </div>

                {/* Label chip */}
                <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-3">
                  Stress
                </span>

                <h3 className="text-gray-900 font-bold text-base sm:text-[17px] lg:text-lg mb-2 lg:mb-3">Chronic Stress</h3>
                <p className="text-gray-600 text-sm lg:text-[15px] leading-[1.7]">Elevated cortisol directly suppresses testosterone signaling.</p>
              </motion.div>

              {/* Card 2: Nutrient Gaps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Top row: Icon + Mini visual */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  {/* Normalized visual container */}
                  <div className="w-[80px] lg:w-[88px] h-10 lg:h-11 bg-gray-50 rounded-lg flex items-center justify-center gap-1.5">
                    <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-[8px] lg:text-[9px] font-bold text-gray-400">Zn</span>
                    </div>
                    <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-[8px] lg:text-[9px] font-bold text-gray-400">Mg</span>
                    </div>
                    <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-[8px] lg:text-[9px] font-bold text-gray-400">D3</span>
                    </div>
                  </div>
                </div>

                {/* Label chip */}
                <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-3">
                  Inputs
                </span>

                <h3 className="text-gray-900 font-bold text-base sm:text-[17px] lg:text-lg mb-2 lg:mb-3">Nutrient Gaps</h3>
                <p className="text-gray-600 text-sm lg:text-[15px] leading-[1.7]">Without zinc, magnesium, and D3, your body lacks the raw materials.</p>
              </motion.div>

              {/* Card 3: Bound Testosterone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Top row: Icon + Mini visual */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  {/* Normalized visual container */}
                  <div className="w-[80px] lg:w-[88px] h-10 lg:h-11 bg-gray-50 rounded-lg flex items-center justify-center gap-1">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary/20 border border-primary/30"></div>
                    <div className="w-2.5 h-[2px] bg-gray-300 rounded-full"></div>
                    <Lock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" />
                    <div className="w-2.5 h-[2px] bg-gray-300 rounded-full"></div>
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-gray-200 border border-gray-300"></div>
                  </div>
                </div>

                {/* Label chip */}
                <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-3">
                  SHBG
                </span>

                <h3 className="text-gray-900 font-bold text-base sm:text-[17px] lg:text-lg mb-2 lg:mb-3">Bound Testosterone</h3>
                <p className="text-gray-600 text-sm lg:text-[15px] leading-[1.7]">SHBG locks testosterone where it can't be used. Free T is what matters.</p>
              </motion.div>
            </div>
          </div>

          {/* Conclusion - tighter spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-6 sm:mt-8 max-w-2xl mx-auto"
          >
            <p className="text-gray-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
              Most products chase numbers. They don't fix the conditions that determine whether testosterone actually works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION: Ingredients Preview */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          {/* Header - matching other sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              The Formula
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What's Inside
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
              7 ingredients. Clinical doses. Fully disclosed.
            </p>
          </motion.div>

          {/* Main container - matching other sections */}
          <div className="relative rounded-[32px] p-5 sm:p-7 lg:p-8 border border-gray-200/40 shadow-[0_2px_16px_rgba(0,0,0,0.02)] bg-gradient-to-br from-primary/[0.015] via-white to-primary/[0.02]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.03)_0%,_transparent_50%)] pointer-events-none"></div>

            {/* Ingredients Grid - Row 1: 4 items */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-4 sm:mb-5 lg:mb-6"
              >
                {[
                  { name: "Vitamin D3", dose: "3,000 IU", icon: "D3" },
                  { name: "Zinc", dose: "30 mg", icon: "Zn" },
                  { name: "Magnesium", dose: "300 mg", icon: "Mg" },
                  { name: "Ashwagandha", dose: "500 mg", icon: "KSM" },
                ].map((ingredient, index) => (
                  <motion.div
                    key={ingredient.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center"
                  >
                    {/* Circular icon with glow */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_24px_rgba(59,130,246,0.2)] transition-shadow">
                      <span className="text-base sm:text-lg font-bold text-primary">{ingredient.icon}</span>
                    </div>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base mb-2">{ingredient.name}</p>
                    <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary bg-primary/[0.08] px-2.5 py-1 rounded-full">
                      {ingredient.dose}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Row 2: 3 items centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-[calc(75%-12px)] lg:max-w-none mx-auto lg:mx-0 lg:w-3/4 lg:mx-auto"
              >
                {[
                  { name: "Tongkat Ali", dose: "300 mg", icon: "LJ" },
                  { name: "Fenugreek", dose: "500 mg", icon: "FG" },
                  { name: "Boron", dose: "9 mg", icon: "B" },
                ].map((ingredient, index) => (
                  <motion.div
                    key={ingredient.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className={`group bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center ${index === 2 ? 'col-span-2 lg:col-span-1 max-w-[calc(50%-8px)] lg:max-w-none mx-auto lg:mx-0' : ''}`}
                  >
                    {/* Circular icon with glow */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_24px_rgba(59,130,246,0.2)] transition-shadow">
                      <span className="text-base sm:text-lg font-bold text-primary">{ingredient.icon}</span>
                    </div>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base mb-2">{ingredient.name}</p>
                    <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary bg-primary/[0.08] px-2.5 py-1 rounded-full">
                      {ingredient.dose}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              href="/formula"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              See the research behind each ingredient
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION D: Qualification */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          {/* Section header - matching other sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              Is This Right For You
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Who This Is (And Isn't) For
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
              Honest expectations before you commit.
            </p>
          </motion.div>

          {/* Main container - matching other sections */}
          <div className="relative rounded-[32px] p-5 sm:p-7 lg:p-8 border border-gray-200/40 shadow-[0_2px_16px_rgba(0,0,0,0.02)] bg-gradient-to-br from-primary/[0.015] via-white to-primary/[0.02]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.03)_0%,_transparent_50%)] pointer-events-none"></div>

            <div className="relative grid md:grid-cols-2 gap-5 lg:gap-6">
              {/* NOT for you */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
              >
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-red-50 flex items-center justify-center">
                    <X className="w-5 h-5 lg:w-5 lg:h-5 text-red-500" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-red-500/70 bg-red-50 px-2 py-0.5 rounded mb-1">
                      Not Ideal
                    </span>
                    <h3 className="text-gray-900 font-bold text-base sm:text-[17px] lg:text-lg">This is NOT for you if:</h3>
                  </div>
                </div>

                <ul className="space-y-3.5 text-gray-600 text-sm lg:text-[15px] leading-[1.7]">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                    <span>You want a stimulant buzz or overnight fix</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                    <span>You're looking for exaggerated promises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                    <span>You expect results without consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                    <span>You want something you can "feel" on day one</span>
                  </li>
                </ul>
              </motion.div>

              {/* IS for you */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-primary/30 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/50 transition-all duration-200"
              >
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 lg:w-5 lg:h-5 text-primary" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-1">
                      Good Fit
                    </span>
                    <h3 className="text-gray-900 font-bold text-base sm:text-[17px] lg:text-lg">This IS for you if:</h3>
                  </div>
                </div>

                <ul className="space-y-3.5 text-gray-600 text-sm lg:text-[15px] leading-[1.7]">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>You feel off — not broken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Energy, drive, and recovery have slipped</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Generic boosters haven't moved the needle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>You value consistency over stimulation</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
