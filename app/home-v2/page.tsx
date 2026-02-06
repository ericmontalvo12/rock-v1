"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, Shield } from "lucide-react";

export default function HomeV2() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-bg-v3.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Rock Mountain Performance
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Testosterone Support for Men Who Refuse Passive Decline
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 font-medium mb-4">
                If you've tried testosterone supplements before and felt nothing — it wasn't your fault.
              </p>

              <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
                Most products aren't designed to solve the problem you're actually dealing with.
                <br /><br />
                Rock Mountain Performance exists for men who want a smarter first step — before committing to injections, stimulants, or lifelong dependency.
                <br /><br />
                <span className="text-white font-medium">Optimize first. Replace later — if you even need to.</span>
              </p>

              <Link href="#mechanism">
                <Button size="lg" className="h-12 px-8 text-base">
                  See How It Works
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CREDIBILITY STRIP */}
        <section className="py-8 bg-surface border-y border-border-subtle">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  Fully disclosed, evidence-based formula
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  Clinically relevant dosing — no proprietary blends
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  Foundational protocol, not a shortcut
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PAIN + IDENTITY */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-text-primary text-lg sm:text-xl leading-relaxed mb-6">
                You're not exhausted because you're lazy.
              </p>
              <p className="text-text-primary text-lg sm:text-xl leading-relaxed mb-6">
                You're not losing muscle because you "fell off."
              </p>
              <p className="text-text-primary text-lg sm:text-xl leading-relaxed mb-8">
                And you're not unmotivated because you lost discipline.
              </p>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                You're doing the work — training, eating better, trying to sleep — but your body isn't responding the way it used to.
              </p>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                That's the frustrating part. You don't feel broken… you feel like a muted version of yourself.
              </p>

              <p className="text-text-primary text-lg sm:text-xl font-medium">
                Less edge. Less drive. Less presence.
              </p>
              <p className="text-text-muted text-base mt-4">
                And it's hard to explain to anyone who hasn't felt it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* REMOVE SELF-BLAME */}
        <section className="py-16 sm:py-20 bg-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                Why This Feels So Confusing
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                You can do everything "right" and still feel off.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                Because effort isn't the problem. <span className="text-text-primary font-medium">Physiology is.</span>
              </p>
              <p className="text-text-muted text-base">
                And most products never explain that.
              </p>
            </motion.div>
          </div>
        </section>

        {/* THE REFRAME */}
        <section className="py-16 sm:py-24 bg-background">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8">
                You can have normal testosterone levels on paper and still feel tired, soft, and unmotivated.
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                Because testosterone only works if your body can actually use it.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                If it's blocked, bound, or suppressed by stress and deficiencies, raising a number doesn't change how you feel.
              </p>
              <p className="text-text-primary text-lg font-medium">
                That's why so many supplements fail.
              </p>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8">
                Free Testosterone Is What Actually Matters
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                The portion of testosterone your body can actually use is called <span className="text-text-primary font-medium">free testosterone</span>. In modern men, it's often limited by:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid sm:grid-cols-3 gap-6 mb-10"
            >
              <div className="bg-background p-6 rounded-xl border border-border-subtle text-center">
                <p className="text-text-primary font-medium mb-2">Chronic Stress</p>
                <p className="text-text-muted text-sm">Elevated cortisol suppresses testosterone signaling</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border-subtle text-center">
                <p className="text-text-primary font-medium mb-2">Nutrient Gaps</p>
                <p className="text-text-muted text-sm">Key micronutrient insufficiencies limit production</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border-subtle text-center">
                <p className="text-text-primary font-medium mb-2">Binding Proteins</p>
                <p className="text-text-muted text-sm">SHBG keeps testosterone inactive and unavailable</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                Most products try to force numbers higher instead of fixing the conditions that stop testosterone from working.
              </p>
              <p className="text-text-primary text-lg font-medium">
                So they disappoint — even when the label looks impressive.
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
                Most Men End Up Choosing Between Two Bad Options
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-8 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">Path 1: Generic Test Boosters</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm mb-4">
                  <li>• Underdosed ingredients</li>
                  <li>• Poorly formulated</li>
                  <li>• Ignore how testosterone actually functions</li>
                </ul>
                <p className="text-text-muted text-sm font-medium">
                  → Wasted money. No real change.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-8 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">Path 2: Jump Straight to TRT</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm mb-4">
                  <li>• Effective — but serious</li>
                  <li>• Lifelong injections</li>
                  <li>• Fertility concerns, dependency, shutdown</li>
                </ul>
                <p className="text-text-muted text-sm font-medium">
                  → A major commitment with real trade-offs.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">The Third Path: Intelligent Optimization</h3>
              </div>
              <p className="text-text-secondary text-base max-w-2xl mx-auto">
                Rock Mountain Performance was built for men who want to <span className="text-text-primary font-medium">optimize what their body already produces</span> before replacing it.
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
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                Rock Mountain Performance focuses on testosterone <span className="text-text-primary font-medium">function</span>, not stimulation. That means supporting:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid sm:grid-cols-3 gap-6 mb-10"
            >
              <div className="p-6">
                <p className="text-text-primary font-semibold text-lg mb-2">Nutrient Sufficiency</p>
                <p className="text-text-muted text-sm">Fill the gaps that limit natural production</p>
              </div>
              <div className="p-6">
                <p className="text-text-primary font-semibold text-lg mb-2">Stress Hormone Balance</p>
                <p className="text-text-muted text-sm">Reduce cortisol interference</p>
              </div>
              <div className="p-6">
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
              <p className="text-text-primary text-lg font-medium mb-4">
                No stimulants. No proprietary blends. No shutdown.
              </p>
              <p className="text-text-secondary text-base">
                Just a rational, evidence-based approach for men who want agency over their health.
              </p>
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
                Inside the Formula
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                Every Ingredient Earns Its Place
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                Every ingredient was chosen to serve a role — not to fill space on a label.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                Not to "boost testosterone" in isolation, but to support the conditions that allow testosterone to work.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Fully disclosed doses</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Clinically relevant forms</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>No filler ingredients</span>
                </div>
              </div>

              <p className="text-text-muted text-base mb-8">
                If you're going to commit to a protocol, you deserve to know exactly what you're taking — and why.
              </p>

              <Link href="/formula">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
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
                className="bg-background p-8 rounded-2xl border border-border-subtle"
              >
                <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  This is NOT for you if:
                </h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You want a stimulant or overnight fix</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You're looking for hype or exaggerated promises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You're already committed to TRT and not open to optimization</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background p-8 rounded-2xl border border-primary/30"
              >
                <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  This IS for you if:
                </h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>You feel like yourself is still in there — just muted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>You value logic over marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>You want to exhaust smart options before injections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
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

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-8 rounded-2xl border border-border-subtle"
              >
                <p className="text-text-secondary text-base leading-relaxed mb-6 italic">
                  "I didn't feel wired or 'amped.' I just felt normal again — in a good way. Morning energy came back. Training felt productive. After a few weeks, I realized I wasn't dragging myself through the day anymore."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-surface p-8 rounded-2xl border border-border-subtle"
              >
                <p className="text-text-secondary text-base leading-relaxed mb-6 italic">
                  "I've tried multiple test boosters. This was the first time I understood why the others didn't work."
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted text-sm text-center mt-8"
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
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                60-Day Guarantee
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                We don't expect blind trust. Every order is backed by a 60-day guarantee.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                Not because we sell stimulants or quick spikes — but because real optimization takes time.
              </p>
              <p className="text-text-primary text-lg font-medium">
                If you don't feel a meaningful difference, you get your money back.
              </p>
              <p className="text-text-muted text-sm mt-4">
                No pressure. No games.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                If you're not ready for injections but you're done feeling off…
              </h2>
              <p className="text-text-secondary text-lg sm:text-xl mb-4">
                Rock Mountain Performance is the smartest place to start.
              </p>
              <p className="text-text-primary text-xl font-semibold mb-10">
                Optimize first. Decide later.
              </p>

              <Link href="/product">
                <Button size="lg" className="h-14 px-10 text-lg">
                  Start Optimization
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
