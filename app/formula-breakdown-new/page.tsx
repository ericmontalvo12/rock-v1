"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Shield, ChevronDown, ExternalLink, Plus } from "lucide-react";

// Data for the Grouped Breakdown (Section 2)
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
        whyHere: "Functions as a hormone precursor essential for testosterone synthesis. Research links low Vitamin D to lower testosterone.",
        benefits: [
          "Supports healthy testosterone levels",
          "Supports calcium absorption",
          "Supports immune function",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/21154195/",
      },
      {
        name: "Magnesium",
        form: "Bisglycinate",
        dosage: "300 mg",
        whyHere: "Required for over 300 enzymatic reactions including testosterone production. Bisglycinate form ensures superior absorption.",
        benefits: [
          "Supports testosterone production",
          "Supports sleep quality",
          "Supports energy metabolism",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/20352370/",
      },
      {
        name: "Zinc",
        form: "Citrate",
        dosage: "30 mg",
        whyHere: "Directly involved in testosterone synthesis at the cellular level. Active men lose zinc through sweat faster than they replace it.",
        benefits: [
          "Plays a role in testosterone synthesis",
          "Supports protein synthesis",
          "Supports recovery",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/8875519/",
      },
      {
        name: "Boron",
        form: "Citrate",
        dosage: "9 mg",
        whyHere: "Influences SHBG (sex hormone-binding globulin), freeing more testosterone for use. Also improves Vitamin D and magnesium utilization.",
        benefits: [
          "Supports free testosterone",
          "Supports Vitamin D utilization",
          "Works synergistically with other minerals",
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
        whyHere: "KSM-66 is backed by 24+ human studies. Research associates it with reduced cortisol, improved recovery, and better testosterone levels.",
        benefits: [
          "Associated with lower cortisol",
          "Supports healthy testosterone",
          "Supports stress adaptation",
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
        whyHere: "Human studies link it to increased free testosterone by influencing SHBG and supporting the HPG axis.",
        benefits: [
          "Supports free testosterone",
          "Supports energy levels",
          "May balance stress hormones",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/21671978/",
      },
      {
        name: "Fenugreek",
        form: "50% Saponins Extract",
        dosage: "500 mg",
        whyHere: "Standardized saponins influence enzymes involved in testosterone metabolism. Research in resistance-trained men links it to improvements in free testosterone.",
        benefits: [
          "Supports free testosterone",
          "Supports strength output",
          "May support body composition",
        ],
        research: "https://pubmed.ncbi.nlm.nih.gov/32048383/",
      },
    ],
  },
];

// Data for the Ingredient Library (Section 3)
const ingredients = [
  {
    name: "Vitamin D3",
    form: "Cholecalciferol (D3)",
    dosage: "3,000 IU (75 mcg)",
    image: "/ingredients/vitamin-d3.png",
    overview: "Vitamin D3 acts as a hormone precursor and is strongly associated with testosterone production and overall metabolic function.",
    source: "Lanolin-derived cholecalciferol, standardized for potency, third-party tested for purity and potency.",
    benefits: [
      "Supports healthy testosterone levels",
      "Supports calcium absorption",
      "Supports muscle function and recovery",
      "Supports immune function",
    ],
    background: "Research shows an association between adequate Vitamin D levels and healthy testosterone in men. Modern indoor lifestyles contribute to widespread deficiency among active individuals.",
    research: [
      { title: "Effect of vitamin D supplementation on testosterone levels in men", url: "https://pubmed.ncbi.nlm.nih.gov/21154195/" },
      { title: "Association of vitamin D status with serum androgen levels in men", url: "https://pubmed.ncbi.nlm.nih.gov/20197091/" },
    ],
  },
  {
    name: "Magnesium",
    form: "Magnesium Bisglycinate",
    dosage: "300 mg",
    image: "/magnesium-new.png",
    overview: "Magnesium bisglycinate delivers superior absorption without GI distress and is involved in over 300 enzymatic reactions tied to recovery and performance.",
    source: "Chelated bisglycinate form, verified for bioavailability, third-party tested for purity and potency.",
    benefits: [
      "Supports testosterone production",
      "Supports sleep quality",
      "May reduce muscle cramps",
      "Supports energy metabolism",
    ],
    background: "Magnesium deficiency is common among athletes due to sweat losses. Studies link adequate magnesium intake to free testosterone levels and improved strength outcomes.",
    research: [
      { title: "Magnesium and testosterone in men", url: "https://pubmed.ncbi.nlm.nih.gov/20352370/" },
      { title: "The interplay between magnesium and testosterone in men", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3958794/" },
    ],
  },
  {
    name: "Zinc",
    form: "Zinc Citrate",
    dosage: "30 mg",
    image: "/ingredients/zinc.png",
    overview: "Zinc plays a critical role in testosterone synthesis and immune defense. Zinc citrate provides optimal absorption to support the enzymatic processes involved in male hormone production.",
    source: "Citrate-bound zinc, verified for elemental content, third-party tested for purity and potency.",
    benefits: [
      "Plays a role in testosterone synthesis",
      "Supports protein synthesis",
      "Supports immune function",
      "Supports recovery",
    ],
    background: "Zinc is lost through sweat during intense training, making supplementation common for athletes. Research shows that zinc deficiency is associated with lower testosterone levels in men.",
    research: [
      { title: "Zinc status and serum testosterone levels in adult males", url: "https://pubmed.ncbi.nlm.nih.gov/8875519/" },
      { title: "Effect of zinc administration on testosterone levels", url: "https://pubmed.ncbi.nlm.nih.gov/6786094/" },
    ],
  },
  {
    name: "Fenugreek",
    form: "50% Saponins Extract",
    dosage: "500 mg",
    image: "/fenugreek-new.png",
    overview: "Fenugreek seed extract standardized to 50% saponins is associated with healthy testosterone levels and exercise performance in human studies.",
    source: "Seed extract, standardized to 50% saponins, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Supports strength output",
      "Associated with performance",
      "May support body composition",
    ],
    background: "Human studies associate fenugreek extract with changes in testosterone levels and strength markers in resistance-trained men.",
    research: [
      { title: "Fenugreek extract and testosterone in resistance-trained men", url: "https://pubmed.ncbi.nlm.nih.gov/32048383/" },
      { title: "Fenugreek supplementation and male sexual function", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6191980/" },
    ],
  },
  {
    name: "Ashwagandha",
    form: "KSM-66 Root Extract",
    dosage: "500 mg",
    image: "/ashwagandha-new.png",
    overview: "The most researched ashwagandha extract. KSM-66 is supported by over 20 human studies associating it with cortisol reduction, recovery, and healthy testosterone levels in active men.",
    source: "KSM-66 root extract, standardized for withanolides, third-party tested for purity and potency.",
    benefits: [
      "Associated with lower cortisol",
      "Supports healthy testosterone",
      "Supports muscle recovery",
      "Supports stress adaptation",
    ],
    background: "KSM-66 is backed by 24+ human studies. Research associates it with improvements in testosterone, strength, and recovery in men who train.",
    research: [
      { title: "Withania somnifera improves semen quality in stressed males", url: "https://pubmed.ncbi.nlm.nih.gov/19789200/" },
      { title: "Ashwagandha supplementation and testosterone in overweight men", url: "https://pubmed.ncbi.nlm.nih.gov/31517876/" },
    ],
  },
  {
    name: "Tongkat Ali",
    form: "1% Eurycomanone Extract",
    dosage: "300 mg",
    image: "/tongkat-ali-new.png",
    overview: "Tongkat Ali root extract standardized to 1% eurycomanone is associated with free testosterone, energy, and training drive in human studies.",
    source: "Root extract, standardized to 1% eurycomanone, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Supports energy levels",
      "May balance stress hormones",
      "Supports training drive",
    ],
    background: "Human studies associate Tongkat Ali with free testosterone levels, stress adaptation, and vitality.",
    research: [
      { title: "Eurycoma longifolia and androgenic status in moderately stressed males", url: "https://pubmed.ncbi.nlm.nih.gov/21671978/" },
      { title: "Tongkat Ali effects on stress hormones and testosterone", url: "https://pubmed.ncbi.nlm.nih.gov/23342982/" },
    ],
  },
  {
    name: "Boron",
    form: "Boron Citrate",
    dosage: "9 mg",
    image: "/boron.png",
    overview: "Boron citrate is associated with free testosterone levels and is thought to influence SHBG and the metabolism of key hormones.",
    source: "Citrate-bound boron, verified for elemental content, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Supports Vitamin D utilization",
      "Supports bone density",
      "Works with other minerals",
    ],
    background: "Research links boron supplementation to changes in free testosterone and SHBG levels.",
    research: [
      { title: "Comparative effects of daily boron supplementation on plasma steroid hormones", url: "https://pubmed.ncbi.nlm.nih.gov/21129941/" },
      { title: "Nothing boring about boron and testosterone", url: "https://pubmed.ncbi.nlm.nih.gov/28859553/" },
    ],
  },
];

type Ingredient = (typeof ingredients)[number];

type IngredientShowcaseProps = {
  ingredients: Ingredient[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

function IngredientShowcase({
  ingredients,
  selectedIndex,
  onSelect,
}: IngredientShowcaseProps) {
  const selected = ingredients[selectedIndex];
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl lg:rounded-3xl border border-gray-200 shadow-md pt-4 lg:pt-6 px-6 lg:px-10 pb-6 lg:pb-10">
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left: Ingredient Names */}
        <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 px-4 lg:px-0 -mx-4 lg:mx-0 scrollbar-hide snap-x snap-mandatory">
          {ingredients.map((ingredient, index) => (
            <button
              key={ingredient.name}
              onClick={() => onSelect(index)}
              className={`text-left px-3 py-2.5 lg:px-4 lg:py-3.5 text-sm lg:text-base rounded-lg whitespace-nowrap lg:whitespace-normal transition-all duration-300 snap-start flex-shrink-0 relative ${
                selectedIndex === index
                  ? "text-primary font-semibold bg-primary/10 border-l-3 border-primary shadow-sm"
                  : "text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50 hover:border-l-2 hover:border-primary/30 cursor-pointer"
              }`}
            >
              {ingredient.name}
            </button>
          ))}
        </div>

        {/* Center: Ingredient Image */}
        <div className="lg:col-span-4 flex justify-center items-center mb-4 lg:mb-0">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-gray-50 to-white border-4 border-primary/15 shadow-xl shadow-primary/5 flex items-center justify-center overflow-hidden">
              <Image
                src={
                  selected.image ||
                  `https://placehold.co/300x300/f8fafc/2d94ff?text=${encodeURIComponent(
                    selected.name
                  )}`
                }
                alt={selected.name}
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Right: Ingredient Details Card - More premium, less neon */}
        <motion.div
          key={`details-${selectedIndex}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary/85 to-primary/95 border border-primary/80 overflow-hidden w-full"
        >
          <div className="p-4 sm:p-5 lg:p-6">
            {/* Header */}
            <h3 className="text-2xl font-bold text-white italic mb-2">
              {selected.name}
            </h3>
            <p className="text-white/85 text-sm leading-relaxed mb-4">
              {selected.overview}
            </p>

            {/* Info Table */}
            <div className="bg-white/10 rounded-xl p-4 mb-4 space-y-2.5">
              <div className="flex justify-between items-start border-b border-white/20 pb-2.5">
                <span className="text-white/70 text-sm font-medium">
                  Dose
                </span>
                <span className="text-white text-sm text-right max-w-[60%]">
                  {selected.dosage}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-white/70 text-sm font-medium">
                  Form
                </span>
                <span className="text-white text-sm text-right max-w-[60%]">
                  {selected.form}
                </span>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2.5">Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selected.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-white/90"
                  >
                    <Check className="w-3 h-3 text-white flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Dropdown */}
            <div className="space-y-1.5">
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === "background" ? null : "background"
                  )
                }
                className="w-full flex items-center justify-between py-3 border-t border-white/20 text-white"
              >
                <span className="font-medium text-sm">Background</span>
                <Plus
                  className={`w-4 h-4 transition-transform ${
                    expandedSection === "background" ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedSection === "background" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/80 text-sm pb-2">
                      {selected.background}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Research Links */}
            {selected.research && selected.research.length > 0 && (
              <div className="mt-3 pt-3 border-t border-white/20">
                <h4 className="text-white font-semibold text-sm mb-1.5">Research</h4>
                <ul className="space-y-0.5">
                  {selected.research.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-xs hover:text-white underline"
                      >
                        {item.title} (PubMed)
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function FormulaBreakdownNewPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("foundation");
  const [selectedIngredient, setSelectedIngredient] = useState(0);

  const scrollToLibrary = () => {
    const element = document.getElementById("ingredient-library");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">

        {/* SECTION 1 — HERO */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Inside the Formula
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              7 ingredients dosed based on published research.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8 text-gray-600 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                No fillers
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                No proprietary blends
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/product">
                <Button size="lg" className="h-12 px-8 text-base">
                  View Peak Performance
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <button
                onClick={scrollToLibrary}
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                Jump to Ingredient Library →
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2 — GROUPED BREAKDOWN */}
        <section className="bg-[#F7F9FC] py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                The Full Breakdown
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                7 ingredients. Fully disclosed doses. Each one chosen for a specific role — not to pad a label.
              </p>
            </div>

            <div className="space-y-4">
              {ingredientCategories.map((category, catIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {category.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {category.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-sm font-medium">
                        {category.ingredients.length} ingredient{category.ingredients.length > 1 ? 's' : ''}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
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
                        <div className="px-5 pb-5 grid gap-4 sm:grid-cols-2">
                          {category.ingredients.map((ingredient) => (
                            <div
                              key={ingredient.name}
                              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden"
                            >
                              {/* Blue accent line */}
                              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

                              {/* Header */}
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                  <h4 className="text-gray-900 font-semibold text-base">
                                    {ingredient.name}
                                  </h4>
                                  <p className="text-gray-500 text-xs">
                                    {ingredient.form}
                                  </p>
                                </div>
                                <span className="text-primary font-semibold text-sm whitespace-nowrap">
                                  {ingredient.dosage}
                                </span>
                              </div>

                              {/* Why it's here */}
                              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                {ingredient.whyHere}
                              </p>

                              {/* Benefits */}
                              <div className="space-y-1.5 mb-4">
                                {ingredient.benefits.map((benefit, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-xs">{benefit}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Research link */}
                              <a
                                href={ingredient.research}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-primary text-xs font-medium hover:underline"
                              >
                                View study
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — INGREDIENT LIBRARY */}
        <section id="ingredient-library" className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Ingredient Library
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Below is a breakdown of the exact ingredients used in Peak Performance and why each one matters.
              </p>
            </div>

            <IngredientShowcase
              ingredients={ingredients}
              selectedIndex={selectedIngredient}
              onSelect={setSelectedIngredient}
            />
          </div>
        </section>

        {/* SECTION 4 — BATCH TESTED */}
        <section className="bg-[#F7F9FC] py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Batch Tested
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Every batch is tested before it ships to confirm the label matches what's in the bottle.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Batch Tested", "Heavy Metals Tested"].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm text-gray-700"
                >
                  <Check className="w-4 h-4 text-primary" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — CTA */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Ready to start?
            </h2>
            <p className="text-gray-600 mb-8">
              Pricing, guarantee, and the full Supplement Facts are on the product page.
            </p>
            <Link href="/product">
              <Button size="lg" className="h-12 px-8 text-base">
                View Peak Performance
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
