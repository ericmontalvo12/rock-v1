"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
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

          {/* Cards container with radial gradient background */}
          <div className="relative rounded-[28px] p-5 sm:p-7 border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-gradient-to-br from-primary/[0.02] via-white to-primary/[0.03]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.04)_0%,_transparent_60%)] pointer-events-none"></div>

            <div className="relative grid md:grid-cols-3 gap-5">
              {/* Card 1: Chronic Stress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Top row: Icon + Mini visual */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  {/* Normalized visual container */}
                  <div className="w-[72px] h-9 bg-gray-50 rounded-lg flex items-end justify-center gap-[3px] pb-1.5">
                    <div className="w-1 bg-primary/30 rounded-sm h-1.5"></div>
                    <div className="w-1 bg-primary/40 rounded-sm h-2.5"></div>
                    <div className="w-1 bg-primary/60 rounded-sm h-4"></div>
                    <div className="w-1 bg-primary/80 rounded-sm h-3"></div>
                    <div className="w-1 bg-primary rounded-sm h-2"></div>
                    <div className="w-1 bg-primary/50 rounded-sm h-2.5"></div>
                  </div>
                </div>

                {/* Label chip - smaller */}
                <span className="inline-block text-[9px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-1.5 py-0.5 rounded mb-2.5">
                  Stress
                </span>

                <h3 className="text-gray-900 font-bold text-base sm:text-[17px] mb-2">Chronic Stress</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">Elevated cortisol directly suppresses testosterone signaling.</p>
              </motion.div>

              {/* Card 2: Nutrient Gaps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Top row: Icon + Mini visual */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  {/* Normalized visual container */}
                  <div className="w-[72px] h-9 bg-gray-50 rounded-lg flex items-center justify-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-[7px] font-bold text-gray-400">Zn</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-[7px] font-bold text-gray-400">Mg</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-[7px] font-bold text-gray-400">D3</span>
                    </div>
                  </div>
                </div>

                {/* Label chip - smaller */}
                <span className="inline-block text-[9px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-1.5 py-0.5 rounded mb-2.5">
                  Inputs
                </span>

                <h3 className="text-gray-900 font-bold text-base sm:text-[17px] mb-2">Nutrient Gaps</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">Without zinc, magnesium, and D3, your body lacks the raw materials.</p>
              </motion.div>

              {/* Card 3: Bound Testosterone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Top row: Icon + Mini visual */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  {/* Normalized visual container */}
                  <div className="w-[72px] h-9 bg-gray-50 rounded-lg flex items-center justify-center gap-0.5">
                    <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30"></div>
                    <div className="w-2 h-[2px] bg-gray-300 rounded-full"></div>
                    <Lock className="w-3 h-3 text-gray-400" />
                    <div className="w-2 h-[2px] bg-gray-300 rounded-full"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300"></div>
                  </div>
                </div>

                {/* Label chip - smaller */}
                <span className="inline-block text-[9px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-1.5 py-0.5 rounded mb-2.5">
                  SHBG
                </span>

                <h3 className="text-gray-900 font-bold text-base sm:text-[17px] mb-2">Bound Testosterone</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">SHBG locks testosterone where it can't be used. Free T is what matters.</p>
              </motion.div>
            </div>
          </div>

          {/* Conclusion - tighter spacing, connected feel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8 sm:mt-10 max-w-xl mx-auto"
          >
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Most products chase numbers. They don't fix the conditions that determine whether testosterone actually works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION: Ingredients Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What's Inside
            </h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              7 ingredients. Clinical doses. Fully disclosed.
            </p>
          </motion.div>

          {/* Ingredients Grid - Row 1: 4 items */}
          <div className="max-w-4xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5"
            >
              {[
                { name: "Vitamin D3", dose: "3,000 IU", image: "/ingredients/vitamin-d3.jpg" },
                { name: "Zinc", dose: "30 mg", image: "/ingredients/zinc.jpg" },
                { name: "Magnesium", dose: "300 mg", image: "/ingredients/magnesium.jpg" },
                { name: "Ashwagandha", dose: "500 mg", image: "/ingredients/ashwagandha.jpg" },
              ].map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl p-5 sm:p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-xl bg-white border border-gray-200 overflow-hidden flex items-center justify-center shadow-sm">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-medium text-primary">${ingredient.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <p className="text-gray-900 font-semibold text-base mb-1">{ingredient.name}</p>
                  <p className="text-primary text-sm font-medium">{ingredient.dose}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2: 3 items centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto"
            >
              {[
                { name: "Tongkat Ali", dose: "300 mg", image: "/ingredients/tongkat-ali.jpg" },
                { name: "Fenugreek", dose: "500 mg", image: "/ingredients/fenugreek.jpg" },
                { name: "Boron", dose: "9 mg", image: "/ingredients/boron.jpg" },
              ].map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className={`bg-gray-50 rounded-2xl p-5 sm:p-6 hover:bg-gray-100 transition-colors ${index === 2 ? 'col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-xl bg-white border border-gray-200 overflow-hidden flex items-center justify-center shadow-sm">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-medium text-primary">${ingredient.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <p className="text-gray-900 font-semibold text-base mb-1">{ingredient.name}</p>
                  <p className="text-primary text-sm font-medium">{ingredient.dose}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
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
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Who This Is (And Isn't) For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* NOT for you */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-7 rounded-2xl border border-gray-200"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2.5">
                <span className="w-5 shrink-0 flex justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </span>
                <span className="flex-1">This is NOT for you if:</span>
              </h3>
              <ul className="space-y-3.5 text-gray-600 leading-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-gray-400 mt-0.5">—</span>
                  <span className="flex-1">You want a stimulant buzz or overnight fix</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-gray-400 mt-0.5">—</span>
                  <span className="flex-1">You're looking for exaggerated promises</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-gray-400 mt-0.5">—</span>
                  <span className="flex-1">You expect results without consistency</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-gray-400 mt-0.5">—</span>
                  <span className="flex-1">You want something you can "feel" on day one</span>
                </li>
              </ul>
            </motion.div>

            {/* IS for you */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 p-7 rounded-2xl border border-primary"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2.5">
                <span className="w-5 shrink-0 flex justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </span>
                <span className="flex-1">This IS for you if:</span>
              </h3>
              <ul className="space-y-3.5 text-gray-700 leading-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-primary mt-0.5">—</span>
                  <span className="flex-1">You feel off — not broken</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-primary mt-0.5">—</span>
                  <span className="flex-1">Energy, drive, and recovery have slipped</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-primary mt-0.5">—</span>
                  <span className="flex-1">Generic boosters haven't moved the needle</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 shrink-0 flex justify-center text-primary mt-0.5">—</span>
                  <span className="flex-1">You value consistency over stimulation</span>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
