"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Shield, Plus } from "lucide-react";

const ingredients = [
  {
    name: "Vitamin D3",
    form: "Cholecalciferol (D3)",
    dosage: "3,000 IU (75 mcg)",
    image: "/ingredients/vitamin-d3.png",
    overview: "The foundation of hormonal health. Vitamin D3 acts as a hormone precursor, directly influencing testosterone production and overall metabolic function.",
    source: "Lanolin-derived cholecalciferol, standardized for potency, third-party tested for purity and potency.",
    benefits: [
      "Supports healthy testosterone levels",
      "Enhances calcium absorption",
      "Supports muscle function + recovery",
      "Modulates immune function",
    ],
    background: "Research shows that men with sufficient Vitamin D levels have significantly higher testosterone than those deficient. Modern indoor lifestyles leave most men deficient, making supplementation essential for peak performance.",
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
    overview: "The master mineral for recovery and performance. Magnesium bisglycinate delivers superior absorption without GI distress, supporting over 300 enzymatic reactions.",
    source: "Chelated bisglycinate form, verified for bioavailability, third-party tested for purity and potency.",
    benefits: [
      "Supports testosterone production",
      "Enhances sleep quality",
      "Reduces muscle cramps",
      "Supports energy metabolism",
    ],
    background: "Magnesium deficiency is epidemic among athletes due to sweat losses. Studies link adequate magnesium to free testosterone levels and improved strength gains. The bisglycinate form ensures you absorb what you take.",
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
    overview: "Essential for testosterone synthesis and immune defense. Zinc citrate provides optimal absorption to support the enzymatic processes that drive male hormone production.",
    source: "Citrate-bound zinc, verified for elemental content, third-party tested for purity and potency.",
    benefits: [
      "Critical for testosterone synthesis",
      "Supports protein synthesis",
      "Strengthens immune function",
      "Aids recovery optimization",
    ],
    background: "Zinc is lost through sweat during intense training, making supplementation crucial for athletes. Research demonstrates that zinc-deficient men experience significant drops in testosterone.",
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
    overview: "Ancient herb backed by modern science. Fenugreek seed extract standardized to 50% saponins supports healthy testosterone levels and enhances exercise performance.",
    source: "Seed extract, standardized to 50% saponins, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Enhances strength output",
      "Improves performance",
      "Aids body composition",
    ],
    background: "Clinical studies show fenugreek extract significantly increases both total and free testosterone while improving strength markers. The saponin compounds inhibit enzymes that convert testosterone to estrogen.",
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
    overview: "The most clinically studied ashwagandha extract. KSM-66 is proven to reduce cortisol, enhance recovery, and support healthy testosterone levels in active men.",
    source: "KSM-66 root extract, standardized for withanolides, third-party tested for purity and potency.",
    benefits: [
      "Reduces cortisol levels",
      "Supports healthy testosterone",
      "Enhances muscle recovery",
      "Improves stress adaptation",
    ],
    background: "KSM-66 is backed by 24+ clinical studies. Research shows significant improvements in testosterone, strength, and recovery in men who train. It works by modulating the stress response and lowering cortisol.",
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
    overview: "Tongkat Ali root extract standardized to 1% eurycomanone supports free testosterone, energy, and training drive by aiding the body's stress and hormonal response.",
    source: "Root extract, standardized to 1% eurycomanone, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Enhances energy levels",
      "Balances stress hormones",
      "Improves training drive",
    ],
    background: "Clinical studies suggest Tongkat Ali supports free testosterone levels, stress adaptation, and overall vitality. Modern research confirms its ability to support testosterone by reducing SHBG and cortisol.",
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
    overview: "The overlooked optimizer. Boron citrate supports free testosterone by influencing SHBG levels and enhancing the metabolism of key hormones.",
    source: "Citrate-bound boron, verified for elemental content, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Enhances Vitamin D utilization",
      "Supports bone density",
      "Synergizes with other minerals",
    ],
    background: "Research shows that boron supplementation can increase free testosterone by reducing SHBG within just one week. It also enhances the body's use of Vitamin D and magnesium.",
    research: [
      { title: "Comparative effects of daily boron supplementation on plasma steroid hormones", url: "https://pubmed.ncbi.nlm.nih.gov/21129941/" },
      { title: "Nothing boring about boron and testosterone", url: "https://pubmed.ncbi.nlm.nih.gov/28859553/" },
    ],
  },
];

const certifications = [
  "Third-Party Verified",
  "Heavy Metal Tested",
  "Pesticide Screened",
  "Allergen Free",
];

const researchCards = [
  {
    title: "Vitamin D Supplementation and Testosterone Levels",
    description: "Clinical trial showing testosterone increases in men with low vitamin D.",
    url: "https://pubmed.ncbi.nlm.nih.gov/21154195/",
  },
  {
    title: "Ashwagandha (KSM-66) and Male Hormonal Health",
    description: "Randomized study linking stress reduction with improved testosterone markers.",
    url: "https://pubmed.ncbi.nlm.nih.gov/31517876/",
  },
  {
    title: "Tongkat Ali and Free Testosterone Support",
    description: "Human data supporting androgen balance and stress adaptation in men.",
    url: "https://pubmed.ncbi.nlm.nih.gov/21671978/",
  },
  {
    title: "Zinc Status and Testosterone Regulation",
    description: "Classic human evidence showing zinc deficiency lowers testosterone and supplementation restores levels.",
    url: "https://pubmed.ncbi.nlm.nih.gov/8875519/",
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
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left: Ingredient Names */}
      <div className="lg:col-span-3 flex lg:flex-col gap-3 lg:gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 px-4 lg:px-0 -mx-4 lg:mx-0 scrollbar-hide snap-x snap-mandatory">
        {ingredients.map((ingredient, index) => (
          <button
            key={ingredient.name}
            onClick={() => onSelect(index)}
            className={`text-left px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base rounded-lg whitespace-nowrap lg:whitespace-normal transition-all duration-300 snap-start flex-shrink-0 ${
              selectedIndex === index
                ? "text-primary font-semibold bg-primary/10 border-l-2 border-primary"
                : "text-text-muted hover:text-text-secondary hover:bg-surface/50"
            }`}
          >
            {ingredient.name}
          </button>
        ))}
      </div>

      {/* Center: Ingredient Image */}
      <div className="lg:col-span-3 flex justify-center items-start mb-4 lg:mb-0">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[160px] lg:max-h-none"
        >
          <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-surface to-background border-4 border-primary/20 shadow-2xl shadow-primary/10 flex items-center justify-center overflow-hidden">
            <Image
              src={
                selected.image ||
                `https://placehold.co/300x300/141414/2d94ff?text=${encodeURIComponent(
                  selected.name
                )}`
              }
              alt={selected.name}
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl -z-10" />
        </motion.div>
      </div>

      {/* Right: Ingredient Details Card */}
      <motion.div
        key={`details-${selectedIndex}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:col-span-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary/90 to-primary border border-primary overflow-hidden w-full"
      >
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <h3 className="text-2xl font-bold text-background italic mb-3">
            {selected.name}
          </h3>
          <p className="text-background/80 text-sm leading-relaxed mb-6">
            {selected.overview}
          </p>

          {/* Info Table */}
          <div className="bg-background/10 rounded-xl p-4 mb-6 space-y-3">
            <div className="flex justify-between items-start border-b border-background/20 pb-3">
              <span className="text-background/70 text-sm font-medium">
                Dose
              </span>
              <span className="text-background text-sm text-right max-w-[60%]">
                {selected.dosage}
              </span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-background/70 text-sm font-medium">
                Form
              </span>
              <span className="text-background text-sm text-right max-w-[60%]">
                {selected.form}
              </span>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="text-background font-semibold mb-3">Benefits</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selected.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-background/90"
                >
                  <Check className="w-3 h-3 text-background flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Background Dropdown */}
          <div className="space-y-2">
            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === "background" ? null : "background"
                )
              }
              className="w-full flex items-center justify-between py-3 border-t border-background/20 text-background"
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
                  <p className="text-background/80 text-sm pb-3">
                    {selected.background}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Research Links - Always Visible */}
          {selected.research && selected.research.length > 0 && (
            <div className="mt-4 pt-4 border-t border-background/20">
              <h4 className="text-background font-semibold text-sm mb-2">Research</h4>
              <ul className="space-y-1">
                {selected.research.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background/80 text-xs hover:text-background underline"
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
  );
}

export default function FormulaPage() {
  const [selectedIngredient, setSelectedIngredient] = useState(0);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Inside the Formula
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            7 clinically dosed ingredients. No fillers. No proprietary blends.
          </p>
        </section>

        {/* Ingredient Library */}
        <section className="bg-surface/50 py-16 sm:py-20 mb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Ingredient Library
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
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

        {/* Verified for Purity */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Verified for Purity
            </h2>
            <p className="text-text-secondary mb-8">
              Every batch is independently tested for heavy metals, pesticides, and contaminants.
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-3 rounded-lg bg-surface border border-border w-full sm:w-auto"
                >
                  <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-text-primary">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="bg-surface/50 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Research Behind the Formula
              </h2>
              <p className="text-text-secondary">
                Peer-reviewed evidence informing each ingredient choice.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {researchCards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl bg-background border border-border"
                >
                  <h3 className="font-semibold text-text-primary mb-2">{card.title}</h3>
                  <p className="text-sm text-text-secondary mb-3">{card.description}</p>
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-3"
                  >
                    View on PubMed →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
