"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, Shield, Brain, FlaskConical, ShieldCheck } from "lucide-react";

export default function HomeV2() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
          {/* Background - mountain landscape only, no product */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-bg-v3.jpg')" }}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
                {/* Split Headline */}
                <h1 className="mb-6">
                  <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-3">
                    Men Who Refuse<br />Passive Decline
                  </span>
                  <span className="block text-lg sm:text-xl lg:text-2xl text-white/80 font-medium">
                    Testosterone Support Built on Research
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-white/70 text-base sm:text-lg mb-8">
                  If testosterone support supplements haven't worked before,<br />
                  it wasn't your fault.
                </p>

                {/* Visual TL;DR Icon Row - principles, not features */}
                <div className="flex flex-wrap gap-x-8 sm:gap-x-10 gap-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5 text-white/50" />
                    <span className="text-white/60 text-sm">Function over stimulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-3.5 h-3.5 text-white/50" />
                    <span className="text-white/60 text-sm">Free testosterone focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-white/50" />
                    <span className="text-white/60 text-sm">No stimulants · No shutdown</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link href="/product-v2">
                    <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto shadow-lg shadow-primary/20">
                      Start Optimizing
                    </Button>
                  </Link>
                  <Link href="/formula-v2">
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                      View the Formula
                    </Button>
                  </Link>
                </div>
            </motion.div>
          </div>
        </section>

        {/* CREDIBILITY STRIP */}
        <section className="py-5 bg-zinc-900 border-y border-zinc-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center justify-center sm:justify-start gap-3 border-l-2 border-primary pl-3">
                <span className="text-zinc-300 text-sm font-medium">
                  Fully disclosed, evidence-based formula
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 border-l-2 border-primary pl-3">
                <span className="text-zinc-300 text-sm font-medium">
                  Clinically relevant dosing with no proprietary blends
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 border-l-2 border-primary pl-3">
                <span className="text-zinc-300 text-sm font-medium">
                  A foundational protocol, not a shortcut
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PAIN + IDENTITY */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Setup - readable, clearly secondary */}
              <p className="text-zinc-600 text-base leading-relaxed">
                You're not exhausted because you're lazy.<br />
                You're not losing muscle because you "fell off."<br />
                You're not unmotivated because you lost discipline.
              </p>

              {/* Hinge - elevated, the turn */}
              <div className="text-zinc-800 text-lg sm:text-xl font-medium leading-relaxed max-w-xl mx-auto mt-14">
                <p className="mb-2">You're training. Eating better. Trying to sleep.</p>
                <p>But your body isn't responding the way it used to.</p>
              </div>

              {/* Recognition - negation then truth */}
              <div className="mt-14 mb-10">
                <p className="text-zinc-600 text-base sm:text-lg mb-2">
                  You don't feel broken.
                </p>
                <p className="text-zinc-900 text-base sm:text-lg font-medium">
                  Just muted.
                </p>
              </div>

              {/* Pause - tightened for realization → punch flow */}
              <div className="flex justify-center my-8 sm:my-10">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
              </div>

              {/* Anchor - maximum weight, visually isolated */}
              <div className="max-w-sm mx-auto py-8 border-y border-zinc-100">
                <p className="text-zinc-900 text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                  Less edge.<br />
                  Less drive.<br />
                  Less presence.
                </p>
              </div>

              {/* Close - bridges to next section */}
              <p className="text-zinc-500 text-sm tracking-wide mt-12">
                Hard to explain unless you've felt it.
              </p>
              <p className="text-zinc-600 text-sm font-medium mt-6 tracking-wide">
                But there's a reason.
              </p>
            </motion.div>
          </div>
        </section>

        {/* REMOVE SELF-BLAME - transitional bridge */}
        <section className="py-12 sm:py-16 bg-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
                Why Nothing Seems to Work
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                You can do everything right and still feel off.
              </p>
              <p className="text-text-primary text-base sm:text-lg font-semibold mb-4 bg-zinc-50 inline-block px-3 py-1.5 rounded border border-zinc-200/60">
                It's not effort. It's physiology.
              </p>
              <div className="border-t border-zinc-200 pt-4 mt-6">
                <p className="text-zinc-400 text-xs tracking-wide">
                  Basic endocrinology. Not a sales pitch.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE REFRAME */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-surface/30">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                What Most Men Never Get Told
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                Normal Levels ≠ Normal Function
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                You can have normal testosterone on paper and still feel tired, soft, and unmotivated.
              </p>

              {/* Visual: Total T vs Free T - teaching moment */}
              <div className="my-8 py-5 bg-zinc-50/50 rounded-xl">
                <div className="flex justify-center items-center gap-8 sm:gap-12">
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-zinc-300 flex items-center justify-center mb-3 mx-auto">
                      <span className="text-zinc-400 text-xs font-medium">Total T</span>
                    </div>
                    <p className="text-zinc-500 text-xs">What labs measure</p>
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <span className="text-3xl">→</span>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-3 border-primary bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                      <span className="text-primary text-sm sm:text-base font-semibold">Free T</span>
                    </div>
                    <p className="text-zinc-500 text-xs">What your body uses</p>
                  </div>
                </div>
              </div>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-5">
                If testosterone is bound up or blocked, raising the number on a lab test won't change how you feel.
              </p>

              {/* Emphasized conclusion */}
              <div className="inline-block border-t border-zinc-200 pt-5">
                <p className="text-text-primary text-lg sm:text-xl font-semibold">
                  That's why most supplements don't work the way people expect.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE MECHANISM */}
        <section id="mechanism" className="py-16 sm:py-24 bg-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                The Real Issue
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                Free Testosterone Is What Actually Matters
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                The portion of testosterone your body can actually use is called <span className="text-text-primary font-medium">free testosterone</span>. In modern men, it's often limited by:
              </p>

              {/* Flow diagram */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-zinc-500 text-xs sm:text-sm font-mono mb-5">
                <span className="px-3 py-1.5 bg-zinc-100 rounded">Stress</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-zinc-100 rounded">Deficiencies</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-zinc-100 rounded">Binding</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-red-100 text-red-500 font-semibold rounded">Low Free T</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-50 p-3 rounded-2xl mb-8"
            >
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-background p-5 rounded-xl border border-border-subtle border-t-2 border-t-primary/30 text-center">
                  <span className="font-mono text-sm text-primary/70 mb-1.5 block">①</span>
                  <p className="text-text-primary font-semibold mb-1.5">Chronic Stress</p>
                  <p className="text-text-muted text-sm">High cortisol blocks testosterone from doing its job</p>
                </div>
                <div className="bg-background p-5 rounded-xl border border-border-subtle border-t-2 border-t-primary/30 text-center">
                  <span className="font-mono text-sm text-primary/70 mb-1.5 block">②</span>
                  <p className="text-text-primary font-semibold mb-1.5">Nutrient Gaps</p>
                  <p className="text-text-muted text-sm">Missing zinc, magnesium, or D3 limits what your body can produce</p>
                </div>
                <div className="bg-background p-5 rounded-xl border border-border-subtle border-t-2 border-t-primary/30 text-center">
                  <span className="font-mono text-sm text-primary/70 mb-1.5 block">③</span>
                  <p className="text-text-primary font-semibold mb-1.5">Binding Proteins</p>
                  <p className="text-text-muted text-sm">SHBG locks testosterone up so your body can't use it</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center pt-6 border-t border-zinc-200"
            >
              <p className="text-text-secondary text-base leading-relaxed mb-2">
                Most products try to force numbers higher instead of fixing the conditions that stop testosterone from working.
              </p>
              <p className="text-text-primary text-lg font-semibold">
                So they disappoint, even when the label looks impressive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* POSITIONING AGAINST EXTREMES */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Most Men Choose Between Two Bad Options
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">Path 1: Generic Test Boosters</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm mb-4">
                  <li>• Underdosed ingredients</li>
                  <li>• Poor formulation</li>
                  <li>• Ignore how testosterone actually works</li>
                </ul>
                <p className="text-red-500 text-sm font-medium">
                  → Wasted money. Nothing changes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">Path 2: Jump Straight to TRT</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm mb-4">
                  <li>• Effective, but serious</li>
                  <li>• Lifelong injections</li>
                  <li>• Fertility concerns, dependency, shutdown</li>
                </ul>
                <p className="text-red-500 text-sm font-medium">
                  → A real commitment. Real trade-offs.
                </p>
              </motion.div>
            </div>

            {/* Connector arrow */}
            <div className="flex justify-center my-6">
              <div className="flex flex-col items-center text-zinc-300">
                <div className="w-px h-10 bg-zinc-300"></div>
                <span className="text-xl">↓</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 border-2 border-primary p-8 rounded-2xl text-center shadow-lg shadow-primary/10"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">The Third Path: Intelligent Optimization</h3>
              </div>
              <p className="text-text-secondary text-base max-w-2xl mx-auto">
                Rock Mountain Performance exists for men who want to <span className="text-text-primary font-medium">optimize what their body already produces</span> before replacing it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* THE RMP APPROACH */}
        <section className="py-16 sm:py-24 bg-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Our Approach
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                Function Over Stimulation
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
                Rock Mountain Performance focuses on testosterone <span className="text-text-primary font-medium">function</span>, not stimulation. That means supporting:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid sm:grid-cols-3 gap-0 mb-12"
            >
              <div className="px-8 py-6 sm:border-r sm:border-zinc-200">
                <span className="font-mono text-sm text-primary tracking-wider mb-3 block">01</span>
                <p className="text-text-primary font-semibold text-lg mb-2">Nutrient Sufficiency</p>
                <p className="text-text-muted text-sm">Fill the gaps that limit natural production</p>
              </div>
              <div className="px-8 py-6 sm:border-r sm:border-zinc-200">
                <span className="font-mono text-sm text-primary tracking-wider mb-3 block">02</span>
                <p className="text-text-primary font-semibold text-lg mb-2">Stress Hormone Balance</p>
                <p className="text-text-muted text-sm">Reduce cortisol interference</p>
              </div>
              <div className="px-8 py-6">
                <span className="font-mono text-sm text-primary tracking-wider mb-3 block">03</span>
                <p className="text-text-primary font-semibold text-lg mb-2">Testosterone Availability</p>
                <p className="text-text-muted text-sm">Support signaling and free T levels</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="border-t-2 border-primary/30 pt-8 max-w-md mx-auto">
                <p className="text-text-primary text-lg font-medium mb-2">
                  No stimulants. No proprietary blends. No shutdown.
                </p>
                <p className="text-text-secondary text-base">
                  A rational, evidence-based approach for men who want agency over their health.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FORMULA TEASER */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                View the Formula
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                Every Ingredient Earns Its Place
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
                Every ingredient was chosen to serve a role, not to fill space on a label. Not to "boost testosterone" in isolation, but to support the conditions that allow testosterone to work.
              </p>

              {/* Formula preview - clinical styling */}
              <div className="bg-white border-2 border-zinc-100 rounded-xl p-6 mb-10 max-w-md mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <FlaskConical className="w-3.5 h-3.5 text-zinc-400" />
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Sample from the formula</p>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-baseline border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-600 text-sm">Tongkat Ali (10:1)</span>
                    <span className="text-zinc-700 text-sm font-mono font-medium">400mg</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-600 text-sm">Ashwagandha KSM-66®</span>
                    <span className="text-zinc-700 text-sm font-mono font-medium">600mg</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-600 text-sm">Zinc (as Picolinate)</span>
                    <span className="text-zinc-700 text-sm font-mono font-medium">30mg</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-600 text-sm">Boron (as Citrate)</span>
                    <span className="text-zinc-700 text-sm font-mono font-medium">10mg</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 mt-4">+ 6 more clinically dosed ingredients</p>
              </div>

              <div className="flex justify-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Fully disclosed</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Clinical doses</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Check className="w-4 h-4 text-primary" />
                  <span>No fillers</span>
                </div>
              </div>

              <p className="text-text-muted text-sm mb-8">
                You deserve to know exactly what you're taking.
              </p>

              <Link href="/formula">
                <Button size="lg" className="h-12 px-8 text-base">
                  See the Full Formula
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-16 sm:py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                Who This Is (And Isn't) For
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background p-8 rounded-2xl border border-zinc-200"
              >
                <h3 className="text-base font-semibold text-text-primary mb-6 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  This is NOT for you if:
                </h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 text-sm">—</span>
                    <span>You want a stimulant or overnight fix</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 text-sm">—</span>
                    <span>You're looking for hype or exaggerated promises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 text-sm">—</span>
                    <span>You're already committed to TRT and not open to optimization</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary/5 p-8 rounded-2xl border-2 border-primary"
              >
                <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  This IS for you if:
                </h3>
                <ul className="space-y-4 text-text-secondary">
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
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                From Real Users
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-6 sm:p-8 rounded-2xl border border-border-subtle relative"
              >
                <span className="absolute top-4 left-6 text-6xl text-zinc-200 font-serif leading-none">"</span>
                <p className="text-text-secondary text-base leading-relaxed mb-4 pt-6">
                  I didn't feel wired or 'amped.' I just felt normal again, in a good way. Morning energy came back. Training felt productive. After a few weeks, I realized I wasn't dragging myself through the day anymore.
                </p>
                <p className="text-xs font-medium tracking-wide text-zinc-500">
                  — M.R., 38, Colorado
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-surface p-6 sm:p-8 rounded-2xl border-l-4 border-primary/30 border-t border-r border-b border-t-border-subtle border-r-border-subtle border-b-border-subtle"
              >
                <p className="text-text-secondary text-base leading-relaxed mb-4 pl-2">
                  I've tried multiple test boosters. This was the first time I understood why the others didn't work.
                </p>
                <p className="text-xs font-medium tracking-wide text-zinc-500 pl-2">
                  — J.T., 42, Texas
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted text-sm text-center mt-12"
            >
              Results vary. Optimization takes consistency.
            </motion.p>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="py-16 sm:py-20 bg-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-5xl sm:text-6xl font-bold text-primary block mb-2">60</span>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
                Day Money-Back Guarantee
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                We don't expect blind trust. Every order is backed by a full 60-day guarantee.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                Not because we sell stimulants or quick spikes, but because real optimization takes time.
              </p>
              <p className="text-text-primary text-lg font-medium">
                If you don't feel a meaningful difference, you get your money back.
              </p>
              <p className="text-xs tracking-widest uppercase text-zinc-400 mt-6">
                No pressure. No games.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-zinc-600 text-lg sm:text-xl mb-4">
                If you're not ready for injections but you're done feeling off:
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Optimize first. Decide later.
              </h2>
              <p className="text-zinc-500 text-base sm:text-lg mb-10">
                Rock Mountain Performance is the smartest place to start.
              </p>

              <Link href="/product">
                <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-primary/20">
                  Start Optimization
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              {/* Trust reminder */}
              <p className="text-xs text-zinc-400 mt-10 tracking-wide">
                Fully disclosed formula · 60-day guarantee · No proprietary blends
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
