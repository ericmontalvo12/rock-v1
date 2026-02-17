"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ExternalLink, Plus } from "lucide-react";

// Tab definitions
const ingredientTabs = [
  { id: "foundational", label: "Foundational Support" },
  { id: "stress", label: "Stress Hormone Balance" },
  { id: "availability", label: "Testosterone Availability" },
] as const;

type TabId = (typeof ingredientTabs)[number]["id"];

// Ingredient data with Formula V2 exact copy
const ingredients = [
  // FOUNDATIONAL SUPPORT
  {
    name: "Vitamin D3",
    category: "foundational" as TabId,
    form: "Cholecalciferol",
    dosage: "3,000 IU",
    image: "/ingredients/vitamin-d3.png",
    description: "Functions as a hormone precursor essential for testosterone synthesis. Research links low Vitamin D to lower testosterone — and most men who train indoors are deficient without knowing it.",
    bullets: [
      "Acts as hormone precursor for testosterone synthesis",
      "Addresses deficiency common in indoor lifestyles",
      "Supports metabolic function and calcium utilization",
    ],
    research: "https://pubmed.ncbi.nlm.nih.gov/21154195/",
  },
  {
    name: "Magnesium",
    category: "foundational" as TabId,
    form: "Bisglycinate",
    dosage: "300 mg",
    image: "/magnesium-new.png",
    description: "Required for over 300 enzymatic reactions, including those involved in testosterone production. Bisglycinate is used for superior absorption without digestive issues. Lost daily through sweat during training.",
    bullets: [
      "Cofactor in 300+ enzymatic reactions including T production",
      "Bisglycinate form ensures superior absorption",
      "Replaces minerals lost through training sweat",
    ],
    research: "https://pubmed.ncbi.nlm.nih.gov/20352370/",
  },
  {
    name: "Zinc",
    category: "foundational" as TabId,
    form: "Citrate",
    dosage: "30 mg",
    image: "/ingredients/zinc.png",
    description: "Directly involved in testosterone synthesis at the cellular level. Research shows deficiency suppresses testosterone — and active men lose zinc through sweat faster than they replace it.",
    bullets: [
      "Directly involved in testosterone synthesis",
      "Deficiency suppresses testosterone output",
      "Replaces zinc lost through exercise sweat",
    ],
    research: "https://pubmed.ncbi.nlm.nih.gov/8875519/",
  },
  {
    name: "Boron",
    category: "foundational" as TabId,
    form: "Citrate",
    dosage: "9 mg",
    image: "/boron.png",
    description: "Influences SHBG (sex hormone-binding globulin), freeing more testosterone for use. Also improves how the body utilizes Vitamin D and magnesium — amplifying their effects.",
    bullets: [
      "Reduces SHBG to free more usable testosterone",
      "Amplifies Vitamin D and magnesium utilization",
      "Works synergistically with other minerals",
    ],
    research: "https://pubmed.ncbi.nlm.nih.gov/21129941/",
  },
  // STRESS HORMONE BALANCE
  {
    name: "Ashwagandha",
    category: "stress" as TabId,
    form: "KSM-66 Root Extract",
    dosage: "500 mg",
    image: "/ashwagandha-new.png",
    description: "KSM-66 is backed by 24+ human studies. Research associates it with reduced cortisol, improved recovery, and better testosterone levels in men under physical and mental stress. When cortisol stays elevated, testosterone signaling gets suppressed — this helps restore the balance.",
    bullets: [
      "Backed by 24+ human clinical studies",
      "Reduces cortisol to restore hormonal balance",
      "Supports recovery under physical and mental stress",
    ],
    research: "https://pubmed.ncbi.nlm.nih.gov/31517876/",
  },
  // TESTOSTERONE AVAILABILITY
  {
    name: "Tongkat Ali",
    category: "availability" as TabId,
    form: "100:1 Extract (1% Eurycomanone)",
    dosage: "300 mg",
    image: "/tongkat-ali-new.png",
    description: "Human studies link it to increased free testosterone by influencing SHBG and supporting the HPG axis. Works with what your body already produces — not by forcing production artificially.",
    bullets: [
      "Influences SHBG to increase free testosterone",
      "Supports HPG axis signaling naturally",
      "Works with existing production, not forcing it",
    ],
    research: "https://pubmed.ncbi.nlm.nih.gov/21671978/",
  },
  {
    name: "Fenugreek",
    category: "availability" as TabId,
    form: "50% Saponins Extract",
    dosage: "500 mg",
    image: "/fenugreek-new.png",
    description: "Standardized for furostanolic saponins, which influence enzymes involved in testosterone metabolism. Research in resistance-trained men links it to improvements in free testosterone and strength output.",
    bullets: [
      "Furostanolic saponins influence T metabolism enzymes",
      "Studied in resistance-trained men",
      "Linked to free testosterone and strength improvements",
    ],
    research: "https://pubmed.ncbi.nlm.nih.gov/32048383/",
  },
];

type Ingredient = (typeof ingredients)[number];

export default function LibraryCardV2Page() {
  const [activeTab, setActiveTab] = useState<TabId>("foundational");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Filter ingredients based on active tab
  const filteredIngredients = ingredients.filter(
    (ing) => ing.category === activeTab
  );

  // Get currently selected ingredient
  const selected = filteredIngredients[selectedIndex] || filteredIngredients[0];

  // Handle tab change - auto-select first ingredient
  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setSelectedIndex(0);
    setExpandedSection(null);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        {/* Section Header */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Ingredient Library
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Below is a breakdown of the exact ingredients used in Peak
              Performance and why each one matters.
            </p>

            {/* Pill Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {ingredientTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Library Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl lg:rounded-3xl border border-gray-200 shadow-lg pt-6 lg:pt-8 px-6 lg:px-10 pb-8 lg:pb-10"
          >
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left: Ingredient List */}
              <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0 scrollbar-hide snap-x snap-mandatory">
                {filteredIngredients.map((ingredient, index) => (
                  <button
                    key={ingredient.name}
                    onClick={() => {
                      setSelectedIndex(index);
                      setExpandedSection(null);
                    }}
                    className={`text-left px-4 py-3 text-sm rounded-xl whitespace-nowrap lg:whitespace-normal transition-all duration-200 snap-start flex-shrink-0 ${
                      selectedIndex === index
                        ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary shadow-sm"
                        : "text-gray-700 font-medium hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                    }`}
                  >
                    {ingredient.name}
                  </button>
                ))}
              </div>

              {/* Center: Ingredient Image */}
              <div className="lg:col-span-4 flex justify-center items-center">
                <motion.div
                  key={selected?.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-gray-50 to-white border-4 border-primary/15 shadow-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={
                        selected?.image ||
                        `https://placehold.co/280x280/f8fafc/2d94ff?text=${encodeURIComponent(
                          selected?.name || "Ingredient"
                        )}`
                      }
                      alt={selected?.name || "Ingredient"}
                      width={280}
                      height={280}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl -z-10" />
                </motion.div>
              </div>

              {/* Right: Premium Blue Detail Panel */}
              <motion.div
                key={`panel-${selected?.name}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-primary to-primary/90 overflow-hidden shadow-xl"
              >
                <div className="p-6 lg:p-8">
                  {/* Ingredient Name */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {selected?.name}
                  </h2>

                  {/* Description */}
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-6">
                    {selected?.description}
                  </p>

                  {/* Dose & Form Row */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-3">
                      <span className="text-white/70 text-sm font-medium">
                        Dose
                      </span>
                      <span className="text-white font-semibold">
                        {selected?.dosage}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm font-medium">
                        Form
                      </span>
                      <span className="text-white font-medium text-sm text-right max-w-[65%]">
                        {selected?.form}
                      </span>
                    </div>
                  </div>

                  {/* Mechanism/Benefit Bullets */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
                      Key Mechanisms
                    </h4>
                    <ul className="space-y-2.5">
                      {selected?.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-white/90 text-sm leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Study CTA */}
                  <a
                    href={selected?.research}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors shadow-sm"
                  >
                    View Study
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

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
