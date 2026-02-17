"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

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
        description: "Functions as a hormone precursor required for testosterone synthesis. Low levels are directly associated with reduced testosterone output.",
        bullets: [
          "Precursor to steroid hormone production",
          "Supports calcium-dependent enzymatic processes",
          "Addresses indoor lifestyle deficiency",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/21154195/",
      },
      {
        name: "Magnesium",
        form: "Bisglycinate",
        dosage: "300 mg",
        description: "Required for 300+ enzymatic reactions including those governing testosterone production. Bisglycinate ensures absorption without GI distress.",
        bullets: [
          "Cofactor in testosterone synthesis",
          "Supports ATP production and recovery",
          "Replaces training-induced losses",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/20352370/",
      },
      {
        name: "Zinc",
        form: "Citrate",
        dosage: "30 mg",
        description: "Directly involved in Leydig cell function and testosterone synthesis. Deficiency suppresses production; active men deplete zinc through sweat.",
        bullets: [
          "Essential for Leydig cell function",
          "Supports protein synthesis pathways",
          "Counteracts exercise-induced depletion",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/8875519/",
      },
      {
        name: "Boron",
        form: "Citrate",
        dosage: "9 mg",
        description: "Modulates SHBG levels, increasing the proportion of free (bioavailable) testosterone. Also enhances Vitamin D and magnesium utilization.",
        bullets: [
          "Reduces SHBG binding",
          "Amplifies Vitamin D metabolism",
          "Synergistic with other minerals",
        ],
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
        description: "The most clinically studied ashwagandha extract. KSM-66 modulates the HPA axis, reducing cortisol and removing a key suppressor of testosterone signaling.",
        bullets: [
          "Lowers cortisol via HPA axis modulation",
          "24+ human clinical trials",
          "Supports recovery under chronic stress",
        ],
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
        description: "Influences SHBG and supports HPG axis signaling, increasing the proportion of testosterone that remains unbound and biologically active.",
        bullets: [
          "Reduces SHBG-bound testosterone",
          "Supports HPG axis function",
          "Enhances free testosterone ratio",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/21671978/",
      },
      {
        name: "Fenugreek",
        form: "50% Saponins Extract",
        dosage: "500 mg",
        description: "Furostanolic saponins inhibit enzymes that convert testosterone to estrogen, preserving active testosterone levels in resistance-trained men.",
        bullets: [
          "Inhibits aromatase activity",
          "Preserves free testosterone",
          "Studied in trained populations",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/32048383/",
      },
    ],
  },
];

export default function FormulaBreakdownV3Page() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("foundation");

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">

        {/* HEADER SECTION */}
        <section className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="text-center">
            <p className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              Formula Overview
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 tracking-tight">
              The Full Breakdown
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              7 ingredients. Fully disclosed doses. Each chosen for a specific role — not to pad a label.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/product">
                <Button size="lg" className="h-11 px-7 text-sm font-semibold">
                  View Peak Performance
                </Button>
              </Link>
              <Link
                href="/formula#ingredient-library"
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                Jump to Ingredient Library →
              </Link>
            </div>
          </div>
        </section>

        {/* HYBRID ACCORDION SECTION */}
        <section className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="space-y-3">
            {ingredientCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-0.5">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm font-medium">
                      {category.ingredients.length} ingredient{category.ingredients.length > 1 ? 's' : ''}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        expandedCategory === category.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        {/* Divider */}
                        <div className="h-px bg-gray-100 mb-5" />

                        {/* Ingredient Grid */}
                        <div className={`grid gap-4 ${
                          category.ingredients.length === 1
                            ? 'grid-cols-1 max-w-[540px] mx-auto'
                            : 'grid-cols-1 sm:grid-cols-2'
                        }`}>
                          {category.ingredients.map((ingredient) => (
                            <div
                              key={ingredient.name}
                              className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow"
                            >
                              {/* Card Header */}
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div>
                                  <h4 className="text-gray-900 font-semibold text-[15px]">
                                    {ingredient.name}
                                  </h4>
                                  <p className="text-gray-400 text-xs mt-0.5">
                                    {ingredient.form}
                                  </p>
                                </div>
                                <span className="text-primary font-semibold text-sm whitespace-nowrap">
                                  {ingredient.dosage}
                                </span>
                              </div>

                              {/* Description */}
                              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {ingredient.description}
                              </p>

                              {/* Micro-bullets */}
                              <ul className="space-y-1.5 mb-4">
                                {ingredient.bullets.map((bullet, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span className="text-gray-500 text-xs">{bullet}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* Research Link */}
                              <a
                                href={ingredient.research}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-gray-400 hover:text-primary text-xs font-medium transition-colors"
                              >
                                View study
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          <div className="text-center py-10 px-6 rounded-2xl bg-gray-50/70 border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Ready to start?
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              See pricing, guarantee, and how to run the full protocol.
            </p>
            <Link href="/product">
              <Button size="lg" className="h-11 px-7 text-sm font-semibold">
                View Peak Performance
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
