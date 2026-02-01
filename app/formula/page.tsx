"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, ArrowRight, Shield, Plus } from "lucide-react";

const ingredients = [
  {
    name: "Vitamin D3",
    scientificName: "Cholecalciferol",
    dosage: "3,000 IU (75 mcg)",
    image: "/ingredients/vitamin-d3.png",
    overview: "The foundation of hormonal health. Vitamin D3 acts as a hormone precursor, directly influencing testosterone production and overall metabolic function.",
    sourcedFrom: "Lanolin-derived, pharmaceutical-grade cholecalciferol. Verified for purity and potency through third-party testing.",
    origin: "Naturally derived from sheep wool lanolin",
    benefits: [
      "Supports testosterone levels",
      "Enhances calcium absorption",
      "Modulates immune function",
      "Improves muscle synthesis",
      "Supports mood regulation",
      "Cognitive function support",
    ],
    background: "Research shows that men with sufficient Vitamin D levels have significantly higher testosterone than those deficient. Modern indoor lifestyles leave most men deficient, making supplementation essential for peak performance.",
    activeCompounds: ["Cholecalciferol (D3)", "Fat-soluble hormone precursor", "Bioactive form"],
  },
  {
    name: "Magnesium",
    scientificName: "Magnesium Bisglycinate",
    dosage: "300 mg",
    image: "/magnesium-new.png",
    overview: "The master mineral for recovery and performance. Magnesium bisglycinate delivers superior absorption without GI distress, supporting over 300 enzymatic reactions.",
    sourcedFrom: "Chelated magnesium bound to glycine for maximum bioavailability. Laboratory tested for heavy metals.",
    origin: "Mineral-derived, chelated with amino acid glycine",
    benefits: [
      "Supports testosterone production",
      "Enhances sleep quality",
      "Reduces muscle cramps",
      "Supports energy metabolism",
      "Calms nervous system",
      "Improves exercise performance",
    ],
    background: "Magnesium deficiency is epidemic among athletes due to sweat losses. Studies link adequate magnesium to free testosterone levels and improved strength gains. The bisglycinate form ensures you absorb what you take.",
    activeCompounds: ["Elemental Magnesium", "Glycine amino acid complex", "Chelated mineral form"],
  },
  {
    name: "Zinc",
    scientificName: "Zinc Citrate",
    dosage: "30 mg",
    image: "/ingredients/zinc.png",
    overview: "Essential for testosterone synthesis and immune defense. Zinc citrate provides optimal absorption to support the enzymatic processes that drive male hormone production.",
    sourcedFrom: "High-purity zinc citrate, third-party verified for elemental zinc content and free from contamination.",
    origin: "Mineral zinc complexed with citric acid",
    benefits: [
      "Critical for testosterone synthesis",
      "Supports protein synthesis",
      "Strengthens immune function",
      "Aids wound healing",
      "Supports sperm production",
      "Recovery optimization",
    ],
    background: "Zinc is lost through sweat during intense training, making supplementation crucial for athletes. Research demonstrates that zinc-deficient men experience significant drops in testosterone.",
    activeCompounds: ["Elemental Zinc", "Citrate complex", "Enzyme cofactor"],
  },
  {
    name: "Fenugreek",
    scientificName: "Trigonella foenum-graecum",
    dosage: "500 mg (50% Saponins)",
    image: "/fenugreek-new.png",
    overview: "Ancient herb backed by modern science. Fenugreek seed extract standardized to 50% saponins supports healthy testosterone levels and enhances exercise performance.",
    sourcedFrom: "Premium fenugreek seed extract, standardized to 50% furostanolic saponins with full traceability.",
    origin: "Mediterranean and South Asian cultivation",
    benefits: [
      "Supports free testosterone",
      "Enhances strength output",
      "Improves performance",
      "Supports healthy libido",
      "Aids body composition",
      "Blood sugar regulation",
    ],
    background: "Clinical studies show fenugreek extract significantly increases both total and free testosterone while improving strength markers. The saponin compounds inhibit enzymes that convert testosterone to estrogen.",
    activeCompounds: ["Furostanolic saponins (50%)", "Protodioscin", "Diosgenin precursors"],
  },
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera (KSM-66)",
    dosage: "500 mg",
    image: "/ashwagandha-new.png",
    overview: "The king of adaptogens. KSM-66 Ashwagandha is the most clinically studied form, proven to reduce cortisol, enhance recovery, and support healthy testosterone.",
    sourcedFrom: "KSM-66 branded extract, full-spectrum root extraction with extensive clinical validation.",
    origin: "Cultivated in India using sustainable farming",
    benefits: [
      "Reduces cortisol levels",
      "Supports testosterone",
      "Enhances muscle recovery",
      "Improves sleep quality",
      "Cognitive support",
      "Enhances endurance",
    ],
    background: "KSM-66 is backed by 24+ clinical studies. Research shows significant improvements in testosterone, strength, and recovery in men who train. It works by modulating the stress response.",
    activeCompounds: ["Withanolides (5%+)", "Withaferin A", "Withanone", "Full-spectrum alkaloids"],
  },
  {
    name: "Tongkat Ali",
    scientificName: "Eurycoma longifolia (1% Eurycomanone)",
    dosage: "300 mg",
    image: "/tongkat-ali-new.png",
    overview: "Southeast Asia's testosterone secret. Tongkat Ali root extract standardized to 1% eurycomanone supports free testosterone, energy, and training drive.",
    sourcedFrom: "Malaysian Tongkat Ali, standardized to 1% eurycomanone. Sustainably harvested from mature roots.",
    origin: "Wild-harvested from Malaysian rainforests",
    benefits: [
      "Supports free testosterone",
      "Enhances energy levels",
      "Balances stress hormones",
      "Improves training drive",
      "Supports male vitality",
      "Reduces fatigue",
    ],
    background: "Tongkat Ali has been used for centuries by Southeast Asian cultures for male vitality. Modern research confirms its ability to support testosterone by reducing SHBG and cortisol.",
    activeCompounds: ["Eurycomanone (1%)", "Quassinoids", "Eurycolactone", "Bioactive glycosaponins"],
  },
  {
    name: "Boron",
    scientificName: "Boron Citrate",
    dosage: "9 mg",
    image: "/boron.png",
    overview: "The overlooked optimizer. Boron citrate supports free testosterone by influencing SHBG levels and enhancing the metabolism of key hormones.",
    sourcedFrom: "High-purity boron citrate, laboratory verified for elemental boron content.",
    origin: "Trace mineral complexed with citric acid",
    benefits: [
      "Supports free testosterone",
      "Enhances Vitamin D use",
      "Supports bone density",
      "Reduces inflammation",
      "Cognitive function",
      "Synergistic effects",
    ],
    background: "Research shows that boron supplementation can increase free testosterone by reducing SHBG within just one week. It also enhances the body's use of Vitamin D and magnesium.",
    activeCompounds: ["Elemental Boron", "Citrate complex", "Trace mineral"],
  },
];

const scienceConcepts = [
  {
    title: "Bioavailability",
    description: "Not all supplements are created equal. Bioavailability determines how much of an ingredient your body actually absorbs and uses. We select chelated minerals and standardized extracts specifically for superior absorption rates.",
  },
  {
    title: "Testosterone Pathways",
    description: "Testosterone production involves multiple pathways: the HPT axis, enzyme activity, and hormone binding proteins. Our formula targets multiple points in this cascade, from supporting precursor nutrients to optimizing free testosterone ratios.",
  },
  {
    title: "Mineral Synergy",
    description: "Nutrients don't work in isolation. Zinc supports Vitamin D metabolism. Magnesium enhances zinc absorption. Boron amplifies both. Our formula leverages these synergies for compounded results.",
  },
];

const certifications = [
  "Gluten Free",
  "Heavy Metal Tested",
  "Pesticide Screened",
  "Allergen Free",
  "Aflatoxin Free",
  "Sustainably Sourced",
  "Third Party Verified",
];

const blogPosts = [
  {
    title: "Vitamin D & Testosterone: The Connection Most Men Miss",
    preview: "Research reveals that Vitamin D deficiency directly impacts testosterone production. Here's what the science says and how to optimize your levels.",
  },
  {
    title: "Magnesium for Recovery: Why Athletes Are Chronically Deficient",
    preview: "Intense training depletes magnesium faster than diet can replace it. Understanding this gap is crucial for sustained performance.",
  },
  {
    title: "Tongkat Ali Explained: Ancient Root, Modern Research",
    preview: "From Malaysian rainforests to clinical trials. The science behind one of nature's most effective testosterone supporters.",
  },
  {
    title: "Bioavailability: Why Most Supplements Fail Before They Start",
    preview: "The supplement industry's dirty secret. Cheap forms mean wasted money. Here's how to know if you're actually absorbing what you take.",
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
      <div className="lg:col-span-3 flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
        {ingredients.map((ingredient, index) => (
          <button
            key={ingredient.name}
            onClick={() => onSelect(index)}
            className={`text-left px-4 py-3 rounded-lg whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
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
      <div className="lg:col-span-3 flex justify-center items-start">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-surface to-background border-4 border-primary/20 shadow-2xl shadow-primary/10 flex items-center justify-center overflow-hidden">
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
              className="w-full h-full object-cover"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl -z-10" />
        </motion.div>
      </div>

      {/* Right: Ingredient Details Card */}
      <motion.div
        key={`details-${selectedIndex}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-primary/90 to-primary border border-primary overflow-hidden"
      >
        <div className="p-6 sm:p-8">
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
                Scientific Name
              </span>
              <span className="text-background text-sm text-right max-w-[60%]">
                {selected.scientificName}
              </span>
            </div>
            <div className="flex justify-between items-start border-b border-background/20 pb-3">
              <span className="text-background/70 text-sm font-medium">
                Sourced From
              </span>
              <span className="text-background text-sm text-right max-w-[60%]">
                {selected.sourcedFrom}
              </span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-background/70 text-sm font-medium">
                Origin
              </span>
              <span className="text-background text-sm text-right max-w-[60%]">
                {selected.origin}
              </span>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="text-background font-semibold mb-3">Benefits</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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

          {/* Expandable Sections */}
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

            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === "compounds" ? null : "compounds"
                )
              }
              className="w-full flex items-center justify-between py-3 border-t border-background/20 text-background"
            >
              <span className="font-medium text-sm">Active Compounds</span>
              <Plus
                className={`w-4 h-4 transition-transform ${
                  expandedSection === "compounds" ? "rotate-45" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {expandedSection === "compounds" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="text-background/80 text-sm pb-3 space-y-1">
                    {selected.activeCompounds.map((compound, i) => (
                      <li key={i}>• {compound}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Science + Ingredients
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Inside The Formula
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every ingredient in Peak Performance is selected at clinical doses, backed by peer-reviewed research, and tested for purity.
          </p>
        </section>

        {/* Ingredient Library */}
        <section className="bg-surface/50 py-16 sm:py-20 mb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                Ingredient Library
              </h2>
            </div>

            <IngredientShowcase
              ingredients={ingredients}
              selectedIndex={selectedIngredient}
              onSelect={setSelectedIngredient}
            />
          </div>
        </section>

        {/* Testing & Certifications */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Certified Clean
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Third-party tested for purity and safety
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl border border-border flex items-center justify-center">
                <Image
                  src="/product-main.png"
                  alt="Peak Performance - Testosterone Support"
                  width={500}
                  height={500}
                  className="object-contain scale-110"
                />
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface border border-border"
                >
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm text-text-primary">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Hub */}
        <section className="bg-surface/50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Research
              </h2>
              <p className="text-text-secondary">
                Performance science, ingredient deep dives, and modern hormone optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-text-primary mb-2">{post.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{post.preview}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
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
