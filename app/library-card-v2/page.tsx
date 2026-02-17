"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Plus } from "lucide-react";

// Tab definitions
const ingredientTabs = [
  { id: "foundational", label: "Foundational Support" },
  { id: "stress", label: "Stress Hormone Balance" },
  { id: "availability", label: "Testosterone Availability" },
] as const;

type TabId = (typeof ingredientTabs)[number]["id"];

// Ingredient data with full details
const ingredients = [
  // FOUNDATIONAL SUPPORT
  {
    name: "Vitamin D3",
    category: "foundational" as TabId,
    form: "Cholecalciferol",
    dosage: "3,000 IU",
    image: "/ingredients/vitamin-d3.png",
    overview: "Functions as a hormone precursor essential for testosterone synthesis. Research links low Vitamin D to lower testosterone — and most men who train indoors are deficient without knowing it.",
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
    category: "foundational" as TabId,
    form: "Bisglycinate",
    dosage: "300 mg",
    image: "/magnesium-new.png",
    overview: "Required for over 300 enzymatic reactions, including those involved in testosterone production. Bisglycinate is used for superior absorption without digestive issues. Lost daily through sweat during training.",
    source: "Chelated bisglycinate form, verified for bioavailability, third-party tested for purity and potency.",
    benefits: [
      "Supports testosterone production",
      "Supports sleep quality",
      "May reduce muscle cramps",
      "Supports energy metabolism",
    ],
    background: "Magnesium deficiency is common among athletes due to sweat losses. Studies link adequate magnesium intake to free testosterone levels and improved strength outcomes. The bisglycinate form is used for its superior absorption compared to standard forms.",
    research: [
      { title: "Magnesium and testosterone in men", url: "https://pubmed.ncbi.nlm.nih.gov/20352370/" },
      { title: "The interplay between magnesium and testosterone in men", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3958794/" },
    ],
  },
  {
    name: "Zinc",
    category: "foundational" as TabId,
    form: "Citrate",
    dosage: "30 mg",
    image: "/ingredients/zinc.png",
    overview: "Directly involved in testosterone synthesis at the cellular level. Research shows deficiency suppresses testosterone — and active men lose zinc through sweat faster than they replace it.",
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
    name: "Boron",
    category: "foundational" as TabId,
    form: "Citrate",
    dosage: "9 mg",
    image: "/boron.png",
    overview: "Influences SHBG (sex hormone-binding globulin), freeing more testosterone for use. Also improves how the body utilizes Vitamin D and magnesium — amplifying their effects.",
    source: "Citrate-bound boron, verified for elemental content, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Supports Vitamin D utilization",
      "Supports bone density",
      "Works with other minerals",
    ],
    background: "Research links boron supplementation to changes in free testosterone and SHBG levels. Human studies also associate boron with the body's use of Vitamin D and magnesium.",
    research: [
      { title: "Comparative effects of daily boron supplementation on plasma steroid hormones", url: "https://pubmed.ncbi.nlm.nih.gov/21129941/" },
      { title: "Nothing boring about boron and testosterone", url: "https://pubmed.ncbi.nlm.nih.gov/28859553/" },
    ],
  },
  // STRESS HORMONE BALANCE
  {
    name: "Ashwagandha",
    category: "stress" as TabId,
    form: "KSM-66 Root Extract",
    dosage: "500 mg",
    image: "/ashwagandha-new.png",
    overview: "KSM-66 is backed by 24+ human studies. Research associates it with reduced cortisol, improved recovery, and better testosterone levels in men under physical and mental stress. When cortisol stays elevated, testosterone signaling gets suppressed — this helps restore the balance.",
    source: "KSM-66 root extract, standardized for withanolides, third-party tested for purity and potency.",
    benefits: [
      "Associated with lower cortisol",
      "Supports healthy testosterone",
      "Supports muscle recovery",
      "Supports stress adaptation",
    ],
    background: "KSM-66 is backed by 24+ human studies. Research associates it with improvements in testosterone, strength, and recovery in men who train. It is thought to work by modulating the stress response.",
    research: [
      { title: "Withania somnifera improves semen quality in stressed males", url: "https://pubmed.ncbi.nlm.nih.gov/19789200/" },
      { title: "Ashwagandha supplementation and testosterone in overweight men", url: "https://pubmed.ncbi.nlm.nih.gov/31517876/" },
    ],
  },
  // TESTOSTERONE AVAILABILITY
  {
    name: "Tongkat Ali",
    category: "availability" as TabId,
    form: "100:1 Extract (1% Eurycomanone)",
    dosage: "300 mg",
    image: "/tongkat-ali-new.png",
    overview: "Human studies link it to increased free testosterone by influencing SHBG and supporting the HPG axis. Works with what your body already produces — not by forcing production artificially.",
    source: "Root extract, standardized to 1% eurycomanone, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Supports energy levels",
      "May balance stress hormones",
      "Supports training drive",
    ],
    background: "Human studies associate Tongkat Ali with free testosterone levels, stress adaptation, and vitality. Research links it to changes in SHBG and cortisol levels.",
    research: [
      { title: "Eurycoma longifolia and androgenic status in moderately stressed males", url: "https://pubmed.ncbi.nlm.nih.gov/21671978/" },
      { title: "Tongkat Ali effects on stress hormones and testosterone", url: "https://pubmed.ncbi.nlm.nih.gov/23342982/" },
    ],
  },
  {
    name: "Fenugreek",
    category: "availability" as TabId,
    form: "50% Saponins Extract",
    dosage: "500 mg",
    image: "/fenugreek-new.png",
    overview: "Standardized for furostanolic saponins, which influence enzymes involved in testosterone metabolism. Research in resistance-trained men links it to improvements in free testosterone and strength output.",
    source: "Seed extract, standardized to 50% saponins, third-party tested for purity and potency.",
    benefits: [
      "Supports free testosterone",
      "Supports strength output",
      "Associated with performance",
      "May support body composition",
    ],
    background: "Human studies associate fenugreek extract with changes in testosterone levels and strength markers in resistance-trained men. Saponin compounds are thought to influence enzymes involved in testosterone metabolism.",
    research: [
      { title: "Fenugreek extract and testosterone in resistance-trained men", url: "https://pubmed.ncbi.nlm.nih.gov/32048383/" },
      { title: "Fenugreek supplementation and male sexual function", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6191980/" },
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
    <div className="bg-background/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-border/40 shadow-lg shadow-black/5 pt-4 lg:pt-6 px-6 lg:px-10 pb-6 lg:pb-10">
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
                  : "text-text-primary/90 font-medium hover:text-text-primary hover:bg-surface/80 hover:border-l-2 hover:border-primary/30 cursor-pointer"
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
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-surface to-background border-4 border-primary/20 shadow-2xl shadow-primary/10 flex items-center justify-center overflow-hidden">
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary/90 to-primary border border-primary overflow-hidden w-full"
        >
          <div className="p-4 sm:p-5 lg:p-6">
            {/* Header */}
            <h3 className="text-2xl font-bold text-background italic mb-2">
              {selected.name}
            </h3>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              {selected.overview}
            </p>

            {/* Info Table */}
            <div className="bg-background/10 rounded-xl p-4 mb-4 space-y-2.5">
              <div className="flex justify-between items-start border-b border-background/20 pb-2.5">
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
            <div className="mb-4">
              <h4 className="text-background font-semibold mb-2.5">Benefits</h4>
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
            <div className="space-y-1.5">
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
                    <p className="text-background/80 text-sm pb-2">
                      {selected.background}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Research Links - Always Visible */}
            {selected.research && selected.research.length > 0 && (
              <div className="mt-3 pt-3 border-t border-background/20">
                <h4 className="text-background font-semibold text-sm mb-1.5">Research</h4>
                <ul className="space-y-0.5">
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
    </div>
  );
}

export default function LibraryCardV2Page() {
  const [activeTab, setActiveTab] = useState<TabId>("foundational");
  const [selectedIngredientIndex, setSelectedIngredientIndex] = useState(0);

  // Filter ingredients based on active tab
  const filteredIngredients = ingredients.filter(ing => ing.category === activeTab);

  // Handle tab change - auto-select first ingredient in new tab
  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setSelectedIngredientIndex(0);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Ingredient Library
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Below is a breakdown of the exact ingredients used in Peak Performance and why each one matters.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {ingredientTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <IngredientShowcase
            ingredients={filteredIngredients}
            selectedIndex={selectedIngredientIndex}
            onSelect={setSelectedIngredientIndex}
          />

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">
              Ready to see pricing, guarantee, and the full Supplement Facts?
            </p>
            <Link href="/product">
              <Button size="lg" className="h-11 px-7 text-sm font-semibold">
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
