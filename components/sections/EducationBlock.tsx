"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                You can have normal testosterone on paper and still feel tired, soft, and unmotivated.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                If testosterone is bound up or blocked, raising the number on a lab test won't change how you feel.
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-900 text-lg sm:text-xl font-semibold">
                  That's why most supplements don't work the way people expect.
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
              Free Testosterone Is What Actually Matters
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              The testosterone your body can actually use is called <span className="text-gray-900 font-medium">free testosterone</span>. In modern men, it's often limited by:
            </p>
          </motion.div>

          {/* Flow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono mb-10"
          >
            <span className="px-3 sm:px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm">Stress</span>
            <span className="text-gray-400">→</span>
            <span className="px-3 sm:px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm">Deficiencies</span>
            <span className="text-gray-400">→</span>
            <span className="px-3 sm:px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm">Binding</span>
            <span className="text-gray-400">→</span>
            <span className="px-3 sm:px-4 py-2 bg-red-50 text-red-600 font-semibold rounded-lg border border-red-200">Low Free T</span>
          </motion.div>

          {/* Three driver cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10"
          >
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-primary shadow-sm text-center">
              <span className="font-mono text-sm text-primary mb-2 block">①</span>
              <p className="text-gray-900 font-semibold mb-2">Chronic Stress</p>
              <p className="text-gray-500 text-sm">High cortisol blocks testosterone from doing its job</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-primary shadow-sm text-center">
              <span className="font-mono text-sm text-primary mb-2 block">②</span>
              <p className="text-gray-900 font-semibold mb-2">Nutrient Gaps</p>
              <p className="text-gray-500 text-sm">Missing zinc, magnesium, or D3 limits what your body can produce</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-primary shadow-sm text-center">
              <span className="font-mono text-sm text-primary mb-2 block">③</span>
              <p className="text-gray-900 font-semibold mb-2">Binding Proteins</p>
              <p className="text-gray-500 text-sm">SHBG locks testosterone up so your body can't use it</p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center pt-8 border-t border-gray-200"
          >
            <p className="text-gray-600 text-base leading-relaxed mb-3">
              Most products try to force numbers higher instead of fixing the conditions that stop testosterone from working.
            </p>
            <p className="text-gray-900 text-lg font-semibold">
              So they disappoint, even when the label looks impressive.
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
              What's Inside (and why)
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
                <p className="text-[#475569] text-sm leading-snug">Mineral support for recovery</p>
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
                <p className="text-[#475569] text-sm leading-snug">Cortisol and stress support</p>
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
                <p className="text-[#475569] text-sm leading-snug">Supports free testosterone</p>
              </div>
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Fenugreek</p>
                <p className="text-[#475569] text-sm leading-snug">Metabolic support</p>
              </div>
              <div className="bg-white border border-[#E6EAF0] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden min-h-[100px] col-span-2 lg:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                <p className="text-[#0F172A] font-bold text-base sm:text-lg mb-1.5">Boron</p>
                <p className="text-[#475569] text-sm leading-snug">Free T availability support</p>
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
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                This is NOT for you if:
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-0.5 text-sm">—</span>
                  <span>You want a stimulant or overnight fix</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-0.5 text-sm">—</span>
                  <span>You're looking for hype or exaggerated promises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-0.5 text-sm">—</span>
                  <span>You're already committed to TRT and not open to optimization</span>
                </li>
              </ul>
            </motion.div>

            {/* IS for you */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 p-6 sm:p-8 rounded-2xl border-2 border-primary"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                This IS for you if:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 text-base">→</span>
                  <span>You feel like yourself is still in there, just muted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 text-base">→</span>
                  <span>You value logic over marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 text-base">→</span>
                  <span>You want to exhaust smart options before injections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 text-base">→</span>
                  <span>You're willing to be consistent for real results</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16"
          >
            <Link href="/product">
              <Button size="lg" className="h-12 text-base px-8 rounded-md">
                View Peak Performance
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
