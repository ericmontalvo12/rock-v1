"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";

export function EducationBlock() {
  return (
    <div>
      {/* SECTION B: Education / Problem Awareness */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
              What Most Men Never Get Told
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Heading + paragraph */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Normal Levels ≠ Normal Function
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                You can have normal testosterone on paper and still feel tired, flat, and unmotivated. If testosterone is bound or cortisol is elevated, the number on a lab report won't change how you feel.
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-900 text-lg sm:text-xl font-semibold">
                  That's why most supplements fail — they chase total testosterone instead of supporting functional testosterone availability.
                </p>
              </div>
            </motion.div>

            {/* Right: Total T vs Free T diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 mx-auto bg-white">
                    <span className="text-gray-500 text-sm sm:text-base font-medium">Total T</span>
                  </div>
                  <p className="text-gray-500 text-sm">What labs measure</p>
                </div>

                <div className="flex items-center text-gray-400">
                  <span className="text-4xl sm:text-5xl rotate-90 sm:rotate-0">→</span>
                </div>

                <div className="text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center mb-4 mx-auto shadow-lg shadow-primary/10">
                    <span className="text-primary text-base sm:text-lg font-semibold">Free T</span>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">What your body uses</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION C: Mechanism */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
              The Real Issue
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What Actually Limits Testosterone Function
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Three factors most formulas ignore.
            </p>
          </motion.div>

          {/* Three driver cards */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-base sm:text-lg">1</span>
              </div>
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">Chronic Stress</h3>
              <p className="text-gray-500 text-sm">Elevated cortisol directly suppresses testosterone signaling. Most formulas don't address it.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-base sm:text-lg">2</span>
              </div>
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">Nutrient Gaps</h3>
              <p className="text-gray-500 text-sm">Without sufficient zinc, magnesium, and D3, your body lacks the raw materials to produce testosterone at all.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-base sm:text-lg">3</span>
              </div>
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">Bound Testosterone</h3>
              <p className="text-gray-500 text-sm">SHBG locks testosterone in circulation where it can't be used. Free testosterone availability is what matters.</p>
            </motion.div>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center pt-8 border-t border-gray-200"
          >
            <p className="text-gray-900 text-lg font-semibold">
              Most products chase numbers. They don't fix the conditions that determine whether testosterone works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION: Ingredients Preview - PREMIUM */}
      <section className="py-16 sm:py-[88px] bg-[#F7F9FC] border-y border-[#E6EAF0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              Formula Overview
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
              What's Inside — and Why
            </h2>
            <p className="text-[#475569] text-base sm:text-lg max-w-lg mx-auto">
              7 research-backed ingredients. Fully disclosed. No proprietary blends.
            </p>
          </motion.div>

          {/* Premium Cards Grid - 3-1-3 Layout */}
          <div className="max-w-4xl mx-auto">
            {/* Row 1: 3 cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6"
            >
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Vitamin D3</p>
                <p className="text-[#475569] text-sm leading-snug">Hormone precursor support</p>
              </div>
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Zinc</p>
                <p className="text-[#475569] text-sm leading-snug">Testosterone synthesis support</p>
              </div>
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px] col-span-2 lg:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Magnesium</p>
                <p className="text-[#475569] text-sm leading-snug">Foundational mineral support</p>
              </div>
            </motion.div>

            {/* Row 2: 1 card centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex justify-center mb-5 sm:mb-6"
            >
              <div className="w-full max-w-[280px] sm:max-w-[300px] bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Ashwagandha</p>
                <p className="text-[#475569] text-sm leading-snug">Cortisol and stress balance</p>
              </div>
            </motion.div>

            {/* Row 3: 3 cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12"
            >
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Tongkat Ali</p>
                <p className="text-[#475569] text-sm leading-snug">Free testosterone availability</p>
              </div>
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Fenugreek</p>
                <p className="text-[#475569] text-sm leading-snug">SHBG reduction support</p>
              </div>
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px] col-span-2 lg:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Boron</p>
                <p className="text-[#475569] text-sm leading-snug">Free testosterone availability</p>
              </div>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors duration-200"
            >
              See full ingredient breakdown
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
