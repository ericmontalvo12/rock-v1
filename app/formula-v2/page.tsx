"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Shield, ChevronDown, ExternalLink } from "lucide-react";

const ingredientCategories = [
  {
    id: "foundation",
    title: "Foundational Support",
    subtitle: "Fill the nutrient gaps that limit production",
    ingredients: [
      {
        name: "Vitamin D3",
        form: "Cholecalciferol",
        dosage: "3,000 IU",
        role: "Functions as a hormone precursor essential for testosterone synthesis. Research links low Vitamin D to lower testosterone — and most men who train indoors are deficient without knowing it.",
        research: "https://pubmed.ncbi.nlm.nih.gov/21154195/",
      },
      {
        name: "Magnesium",
        form: "Bisglycinate",
        dosage: "300 mg",
        role: "Required for over 300 enzymatic reactions, including those involved in testosterone production. Bisglycinate is used for superior absorption without digestive issues. Lost daily through sweat during training.",
        research: "https://pubmed.ncbi.nlm.nih.gov/20352370/",
      },
      {
        name: "Zinc",
        form: "Citrate",
        dosage: "30 mg",
        role: "Directly involved in testosterone synthesis at the cellular level. Research shows deficiency suppresses testosterone — and active men lose zinc through sweat faster than they replace it.",
        research: "https://pubmed.ncbi.nlm.nih.gov/8875519/",
      },
      {
        name: "Boron",
        form: "Citrate",
        dosage: "9 mg",
        role: "Influences SHBG (sex hormone-binding globulin), freeing more testosterone for use. Also improves how the body utilizes Vitamin D and magnesium — amplifying their effects.",
        research: "https://pubmed.ncbi.nlm.nih.gov/21129941/",
      },
    ],
  },
  {
    id: "stress",
    title: "Stress Hormone Balance",
    subtitle: "Lower cortisol so testosterone signaling works",
    ingredients: [
      {
        name: "Ashwagandha",
        form: "KSM-66 Root Extract",
        dosage: "500 mg",
        role: "KSM-66 is backed by 24+ human studies. Research associates it with reduced cortisol, improved recovery, and better testosterone levels in men under physical and mental stress. When cortisol stays elevated, testosterone signaling gets suppressed — this helps restore the balance.",
        research: "https://pubmed.ncbi.nlm.nih.gov/31517876/",
      },
    ],
  },
  {
    id: "availability",
    title: "Testosterone Availability",
    subtitle: "Support the free testosterone your body can actually use",
    ingredients: [
      {
        name: "Tongkat Ali",
        form: "100:1 Extract (1% Eurycomanone)",
        dosage: "300 mg",
        role: "Human studies link it to increased free testosterone by influencing SHBG and supporting the HPG axis. Works with what your body already produces — not by forcing production artificially.",
        research: "https://pubmed.ncbi.nlm.nih.gov/21671978/",
      },
      {
        name: "Fenugreek",
        form: "50% Saponins Extract",
        dosage: "500 mg",
        role: "Standardized for furostanolic saponins, which influence enzymes involved in testosterone metabolism. Research in resistance-trained men links it to improvements in free testosterone and strength output.",
        research: "https://pubmed.ncbi.nlm.nih.gov/32048383/",
      },
    ],
  },
];

const allIngredients = ingredientCategories.flatMap(cat => cat.ingredients);

export default function FormulaV2Page() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("foundation");

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        {/* Hero - The Problem */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Inside the Formula
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Built to Fix the Real Problem
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Most testosterone supplements try to force production higher.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              But if stress hormones are elevated, key nutrients are missing, or testosterone is bound and inactive — higher production doesn't translate to how you feel.
            </p>
          </motion.div>
        </section>

        {/* Visual: Simple diagram placeholder */}
        {/* Visual: Consider adding a simple flow diagram here showing: Production → Bound by SHBG / Blocked by Cortisol → Little usable testosterone */}

        {/* The Approach */}
        <section className="bg-surface py-16 sm:py-20 mb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Three Problems. One Formula.
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Every ingredient in Peak Performance addresses one of these limiting factors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-background p-6 rounded-xl border border-border-subtle text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">
                  Nutrient Gaps
                </h3>
                <p className="text-text-muted text-sm">
                  Your body can't produce testosterone without the raw materials. We fill the gaps most men don't know they have.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background p-6 rounded-xl border border-border-subtle text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">
                  Cortisol Interference
                </h3>
                <p className="text-text-muted text-sm">
                  Chronic stress keeps cortisol elevated, which directly suppresses testosterone signaling. We address the interference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background p-6 rounded-xl border border-border-subtle text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">
                  Bound Testosterone
                </h3>
                <p className="text-text-muted text-sm">
                  SHBG binds testosterone and makes it unavailable. We support free testosterone — the portion your body can actually use.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ingredient Breakdown by Category */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              The Full Breakdown
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              7 ingredients. Fully disclosed doses. Each one chosen for a specific role — not to pad a label.
            </p>
          </motion.div>

          <div className="space-y-4">
            {ingredientCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-surface rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-surface-elevated transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {category.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-sm font-medium">
                      {category.ingredients.length} ingredient{category.ingredients.length > 1 ? 's' : ''}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-muted transition-transform ${
                        expandedCategory === category.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4">
                        {category.ingredients.map((ingredient, index) => (
                          <div
                            key={ingredient.name}
                            className="bg-background p-5 rounded-xl border border-border-subtle"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                              <div>
                                <h4 className="text-text-primary font-semibold text-lg">
                                  {ingredient.name}
                                </h4>
                                <p className="text-text-muted text-sm">
                                  {ingredient.form} • {ingredient.dosage}
                                </p>
                              </div>
                              <a
                                href={ingredient.research}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline flex-shrink-0"
                              >
                                View Study
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                              {ingredient.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What You Won't Find */}
        <section className="bg-surface py-16 sm:py-20 mb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                What's Not in the Formula
              </h2>
              <p className="text-text-secondary mb-8">
                We left out what doesn't belong.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <div className="flex items-center gap-3 text-left p-4 bg-background rounded-lg border border-border-subtle">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-text-secondary text-sm">Proprietary blends that hide real doses</span>
                </div>
                <div className="flex items-center gap-3 text-left p-4 bg-background rounded-lg border border-border-subtle">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-text-secondary text-sm">Stimulants that mask the real issue</span>
                </div>
                <div className="flex items-center gap-3 text-left p-4 bg-background rounded-lg border border-border-subtle">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-text-secondary text-sm">Underdosed ingredients for label appeal</span>
                </div>
                <div className="flex items-center gap-3 text-left p-4 bg-background rounded-lg border border-border-subtle">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-text-secondary text-sm">Cheap fillers to cut costs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Verified for Purity */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Independently Verified
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Every batch is third-party tested before it ships. We verify what's on the label is what's in the bottle — and nothing else.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Heavy Metals", "Pesticides", "Potency", "Microbial"].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-sm text-text-secondary"
                >
                  <Check className="w-4 h-4 text-primary" />
                  {cert} Tested
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Summary Strip */}
        <section className="bg-primary/5 border-y border-primary/20 py-10 mb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-text-primary mb-1">7</p>
                <p className="text-text-muted text-sm">Active Ingredients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary mb-1">100%</p>
                <p className="text-text-muted text-sm">Disclosed Doses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary mb-1">0</p>
                <p className="text-text-muted text-sm">Proprietary Blends</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary mb-1">0</p>
                <p className="text-text-muted text-sm">Stimulants</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Now You Know What's Inside
            </h2>
            <p className="text-text-secondary mb-8">
              If the approach makes sense, the product page has everything else — pricing, guarantee, and how to get started.
            </p>
            <Link href="/product">
              <Button size="lg" className="h-12 px-8 text-base">
                View Peak Performance
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
