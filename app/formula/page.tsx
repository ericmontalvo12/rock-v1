"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Shield } from "lucide-react";

// Tab definitions
const ingredientTabs = [
  { id: "foundational", label: "Foundational Support" },
  { id: "stress", label: "Stress Hormone Balance" },
  { id: "availability", label: "Testosterone Availability" },
] as const;

type TabId = typeof ingredientTabs[number]["id"];

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

const certifications = [
  "Heavy Metals Tested",
  "Quality Tested",
];

const researchCards = [
  {
    title: "Vitamin D Supplementation and Testosterone Levels",
    description: "Human trial examining vitamin D supplementation and testosterone levels in men with low vitamin D status.",
    url: "https://pubmed.ncbi.nlm.nih.gov/21154195/",
  },
  {
    title: "Ashwagandha (KSM-66) and Male Hormonal Health",
    description: "Randomized study examining the association between ashwagandha, stress markers, and testosterone in men.",
    url: "https://pubmed.ncbi.nlm.nih.gov/31517876/",
  },
  {
    title: "Tongkat Ali and Free Testosterone Support",
    description: "Human study examining tongkat ali in relation to androgen status and stress adaptation in men.",
    url: "https://pubmed.ncbi.nlm.nih.gov/21671978/",
  },
  {
    title: "Zinc Status and Testosterone Regulation",
    description: "Human study examining the relationship between zinc status and testosterone levels in adult males.",
    url: "https://pubmed.ncbi.nlm.nih.gov/8875519/",
  },
];

export default function FormulaPage() {
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
      <main className="pt-28 sm:pt-32">
        {/* A) Hero Section - WHITE */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Inside the Formula
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-2">
              7 ingredients dosed based on published research
            </p>
            <div className="flex items-center justify-center gap-6 mb-5 text-gray-500 text-sm">
              <span>✓ No fillers</span>
              <span>✓ No proprietary blends</span>
            </div>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover text-sm font-medium transition-colors"
            >
              View the product
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* B) Three Problems. One Formula. - LIGHT TINT */}
        <section className="bg-[#F7F9FC] py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Three Problems. One Formula.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Every ingredient in Peak Performance addresses one of these limiting factors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-base sm:text-lg">1</span>
                </div>
                <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">
                  Nutrient Gaps
                </h3>
                <p className="text-gray-500 text-sm">
                  Your body can't produce testosterone without the raw materials. We fill the gaps most men don't know they have.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-base sm:text-lg">2</span>
                </div>
                <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">
                  Cortisol Interference
                </h3>
                <p className="text-gray-500 text-sm">
                  Chronic stress keeps cortisol elevated, which directly suppresses testosterone signaling. We address the interference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-base sm:text-lg">3</span>
                </div>
                <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">
                  Bound Testosterone
                </h3>
                <p className="text-gray-500 text-sm">
                  SHBG binds testosterone and makes it unavailable. We support free testosterone — the portion your body can actually use.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* C) Ingredient Library - WHITE */}
        <section id="ingredient-library" className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Ingredient Library
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Below is a breakdown of the exact ingredients used in Peak Performance and why each one matters.
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
                      onClick={() => setSelectedIngredientIndex(index)}
                      className={`text-left px-4 py-3 text-sm rounded-xl whitespace-nowrap lg:whitespace-normal transition-all duration-200 snap-start flex-shrink-0 ${
                        selectedIngredientIndex === index
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
                    key={filteredIngredients[selectedIngredientIndex]?.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-gray-50 to-white border-4 border-primary/15 shadow-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={
                          filteredIngredients[selectedIngredientIndex]?.image ||
                          `https://placehold.co/280x280/f8fafc/2d94ff?text=${encodeURIComponent(
                            filteredIngredients[selectedIngredientIndex]?.name || "Ingredient"
                          )}`
                        }
                        alt={filteredIngredients[selectedIngredientIndex]?.name || "Ingredient"}
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
                  key={`panel-${filteredIngredients[selectedIngredientIndex]?.name}`}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-primary to-primary/90 overflow-hidden shadow-xl"
                >
                  <div className="p-6 lg:p-8">
                    {/* Ingredient Name */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {filteredIngredients[selectedIngredientIndex]?.name}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-6">
                      {filteredIngredients[selectedIngredientIndex]?.overview}
                    </p>

                    {/* Dose & Form Row */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                      <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-3">
                        <span className="text-white/70 text-sm font-medium">Dose</span>
                        <span className="text-white font-semibold">
                          {filteredIngredients[selectedIngredientIndex]?.dosage}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm font-medium">Form</span>
                        <span className="text-white font-medium text-sm text-right max-w-[65%]">
                          {filteredIngredients[selectedIngredientIndex]?.form}
                        </span>
                      </div>
                    </div>

                    {/* Key Mechanisms / Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2.5">
                        {filteredIngredients[selectedIngredientIndex]?.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-white/90 text-sm leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Study CTA */}
                    {filteredIngredients[selectedIngredientIndex]?.research?.[0] && (
                      <a
                        href={filteredIngredients[selectedIngredientIndex].research[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors shadow-sm"
                      >
                        View Study
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* D) What's Not in the Formula - LIGHT TINT */}
        <section className="bg-[#F7F9FC] py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                What's Not in the Formula
              </h2>
              <p className="text-gray-600 mb-6">
                We left out what doesn't belong.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
                <div className="flex items-center gap-3 text-left p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-red-500 text-base">✕</span>
                  <span className="text-gray-600 text-sm">Proprietary blends that hide real doses</span>
                </div>
                <div className="flex items-center gap-3 text-left p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-red-500 text-base">✕</span>
                  <span className="text-gray-600 text-sm">Stimulants that mask the real issue</span>
                </div>
                <div className="flex items-center gap-3 text-left p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-red-500 text-base">✕</span>
                  <span className="text-gray-600 text-sm">Underdosed ingredients for label appeal</span>
                </div>
                <div className="flex items-center gap-3 text-left p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-red-500 text-base">✕</span>
                  <span className="text-gray-600 text-sm">Cheap fillers to cut costs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* E) Batch Tested - WHITE */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Batch Tested
            </h2>
            <p className="text-gray-600 mb-6">
              Every batch is tested before it ships to confirm the label matches what's in the bottle.
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 w-full sm:w-auto"
                >
                  <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F) Research Section - LIGHT TINT */}
        <section className="bg-[#F7F9FC] py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Research Behind the Formula
              </h2>
              <p className="text-gray-600">
                Peer-reviewed evidence informing each ingredient choice.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {researchCards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View on PubMed →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* G) Final CTA - WHITE */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Ready to run the full protocol?
            </h2>
            <p className="text-gray-600 mb-6">
              See Peak Performance and the full Supplement Facts.
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
            >
              View Peak Performance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
