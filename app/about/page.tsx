"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  FlaskConical,
  FileText,
  Shield,
  AlertTriangle,
  Eye,
  Beaker
} from "lucide-react";

export default function About() {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">

        {/* Hero - Split Layout */}
        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                  About Rock Mountain Performance
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-6 leading-tight max-w-xl mx-auto lg:mx-0">
                  Finally, a formula backed by human studies.
                </h1>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors text-sm"
                  >
                    Get Peak Performance
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/formula"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors text-sm"
                  >
                    Inside the Formula
                  </Link>
                </div>
              </motion.div>

              {/* Right: Bottle Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">
                  <Image
                    src="/bottle-formula.webp"
                    alt="Peak Performance Bottle"
                    width={340}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem - Visual Cards */}
        <section className="bg-[#F7F9FC] py-12 sm:py-14 border-y border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                The Problem We Saw
              </h2>
              <p className="text-gray-600 text-sm max-w-xl mx-auto">
                Most testosterone supplements are built for marketing, not results.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">Underdosed Formulas</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Active ingredients at 20% of clinically studied doses. Looks good on labels, doesn't work in practice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">Proprietary Blends</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Hidden behind "complexes" to avoid scrutiny. No way to verify what you're actually getting.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                  <Beaker className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">Ingredients With No Evidence</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fillers and unproven compounds added for label appeal, not results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach - Icon Row */}
        <section className="bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                How We Formulate
              </h2>
              <p className="text-gray-600 text-sm max-w-xl mx-auto">
                Three principles. No compromises.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <FlaskConical className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">Research First</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every ingredient backed by peer-reviewed human studies. No research, no inclusion.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">Research-Backed Doses</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every ingredient dosed at levels shown effective in human studies. Not reduced for cost.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">Full Disclosure</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  No proprietary blends. Every ingredient and dose listed. Verify it yourself.
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-gray-500 text-sm mt-6 max-w-2xl mx-auto"
            >
              We built this for real, lasting change — the kind you measure in how you recover, perform, and feel over time.
            </motion.p>
          </div>
        </section>

        {/* Who It's For / Not For - Side by Side */}
        <section className="bg-[#F7F9FC] py-12 sm:py-14 border-y border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Is This Right For You?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-lg mx-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Built for men who:</h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  Want real hormonal support backed by research
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  Value fully disclosed ingredients at effective doses
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  Are ready to support energy, drive, and recovery
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* What We're Not - Compact */}
        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                What We're Not
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto mb-4">
                Not a lifestyle brand. Not influencer-founded. We're athletes who got tired of taking supplements we didn't trust — so we built what should exist.
              </p>
              <p className="text-gray-900 font-medium text-sm">
                If it works, you'll know from how you feel. If not, we refund you. Simple.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="bg-[#F7F9FC] py-12 sm:py-14 border-y border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Founder Avatars Placeholder */}
              <div className="flex justify-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center text-gray-400 text-xs font-medium">
                  NH
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center text-gray-400 text-xs font-medium">
                  EM
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Nikolas Hrach & Eric Montalvo
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                Co-Founders, Rock Mountain Performance
              </p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
                We've been training for years and got tired of supplements that didn't deliver. So we made one that does.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Ready to Feel the Difference?
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                See the full formula and try it risk-free.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
                >
                  Get Peak Performance
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/formula"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Inside the Formula
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
