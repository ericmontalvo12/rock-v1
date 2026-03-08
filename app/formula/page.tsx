"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, X, ChevronDown, FlaskConical, FileText, ChevronUp } from "lucide-react";

// Tab definitions
const ingredientTabs = [
  { id: "foundational", label: "Foundational Support" },
  { id: "stress", label: "Stress Balance" },
  { id: "availability", label: "Free Testosterone Availability" },
] as const;

type TabId = typeof ingredientTabs[number]["id"];

const ingredients = [
  // FOUNDATIONAL SUPPORT
  {
    name: "Vitamin D3",
    category: "foundational" as TabId,
    form: "Cholecalciferol",
    dosage: "3,000 IU",
    image: "/vitamin-d3.png",
    shortDesc: "Functions as a hormone precursor essential for testosterone synthesis.",
    fullDesc: "Research links low Vitamin D to lower testosterone — and most men who train indoors are deficient without knowing it.",
    benefits: [
      "Supports healthy testosterone levels",
      "Supports calcium absorption",
      "Supports muscle function and recovery",
    ],
    research: [
      { title: "Effect of vitamin D supplementation on testosterone levels in men", url: "https://pubmed.ncbi.nlm.nih.gov/21154195/" },
    ],
  },
  {
    name: "Magnesium",
    category: "foundational" as TabId,
    form: "Bisglycinate",
    dosage: "300 mg",
    image: "/magnesium.png",
    shortDesc: "Required for over 300 enzymatic reactions, including testosterone production.",
    fullDesc: "Bisglycinate is used for superior absorption without digestive issues. Lost daily through sweat during training.",
    benefits: [
      "Supports testosterone production",
      "Supports sleep quality",
      "Supports energy metabolism",
    ],
    research: [
      { title: "Magnesium and testosterone in men", url: "https://pubmed.ncbi.nlm.nih.gov/20352370/" },
    ],
  },
  {
    name: "Zinc",
    category: "foundational" as TabId,
    form: "Citrate",
    dosage: "30 mg",
    image: "/zinc.png",
    shortDesc: "Directly involved in testosterone synthesis at the cellular level.",
    fullDesc: "Research shows deficiency suppresses testosterone — and active men lose zinc through sweat faster than they replace it.",
    benefits: [
      "Plays a role in testosterone synthesis",
      "Supports protein synthesis",
      "Supports recovery",
    ],
    research: [
      { title: "Zinc status and serum testosterone levels in adult males", url: "https://pubmed.ncbi.nlm.nih.gov/8875519/" },
    ],
  },
  {
    name: "Boron",
    category: "foundational" as TabId,
    form: "Citrate",
    dosage: "9 mg",
    image: "/boron.png",
    shortDesc: "Influences SHBG, freeing more testosterone for use.",
    fullDesc: "Also improves how the body utilizes Vitamin D and magnesium — amplifying their effects.",
    benefits: [
      "Supports free testosterone",
      "Supports Vitamin D utilization",
      "Works with other minerals",
    ],
    research: [
      { title: "Comparative effects of daily boron supplementation on plasma steroid hormones", url: "https://pubmed.ncbi.nlm.nih.gov/21129941/" },
    ],
  },
  // STRESS HORMONE BALANCE
  {
    name: "Ashwagandha",
    category: "stress" as TabId,
    form: "KSM-66 Root Extract",
    dosage: "500 mg",
    image: "/ashwagandha.png",
    shortDesc: "KSM-66 is backed by 24+ human studies for stress and testosterone.",
    fullDesc: "Research associates it with reduced cortisol, improved recovery, and better testosterone levels in men under physical and mental stress. When cortisol stays elevated, testosterone signaling gets suppressed — this helps restore the balance.",
    benefits: [
      "Associated with lower cortisol",
      "Supports healthy testosterone",
      "Supports muscle recovery",
    ],
    research: [
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
    shortDesc: "Human studies link it to increased free testosterone via SHBG modulation.",
    fullDesc: "Works with what your body already produces — not by forcing production artificially. Supports the HPG axis.",
    benefits: [
      "Supports free testosterone",
      "Supports energy levels",
      "Supports training drive",
    ],
    research: [
      { title: "Eurycoma longifolia and androgenic status in moderately stressed males", url: "https://pubmed.ncbi.nlm.nih.gov/21671978/" },
    ],
  },
  {
    name: "Fenugreek",
    category: "availability" as TabId,
    form: "50% Saponins Extract",
    dosage: "500 mg",
    image: "/fenugreek.png",
    shortDesc: "Standardized for furostanolic saponins that influence testosterone metabolism.",
    fullDesc: "Research in resistance-trained men links it to improvements in free testosterone and strength output.",
    benefits: [
      "Supports free testosterone",
      "Supports strength output",
      "May support body composition",
    ],
    research: [
      { title: "Fenugreek extract and testosterone in resistance-trained men", url: "https://pubmed.ncbi.nlm.nih.gov/32048383/" },
    ],
  },
];

const whatsNotItems = [
  { text: "Proprietary blends that conceal real doses" },
  { text: "Underdosed ingredients for label appeal" },
  { text: "Stimulants that mask the underlying issue" },
  { text: "Cheap fillers to reduce cost" },
];

export default function FormulaPage() {
  const [activeTab, setActiveTab] = useState<TabId>("foundational");
  const [selectedIngredientIndex, setSelectedIngredientIndex] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isJumpBarSticky, setIsJumpBarSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Filter ingredients based on active tab
  const filteredIngredients = ingredients.filter(ing => ing.category === activeTab);

  // Handle sticky jump bar - triggers when hero is passed
  // Uses 68px (desktop navbar height) as threshold since announcement hides on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsJumpBarSticky(heroBottom <= 68);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle tab change
  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setSelectedIngredientIndex(0);
    setShowFullDesc(false);
  };

  // Handle ingredient selection
  const handleIngredientSelect = (index: number) => {
    setSelectedIngredientIndex(index);
    setShowFullDesc(false);
  };

  // Handle mini tile click with smooth scroll
  const handleMiniTileClick = (ingredient: typeof ingredients[0]) => {
    const category = ingredient.category;
    if (category !== activeTab) {
      setActiveTab(category);
    }
    const newIndex = ingredients.filter(ing => ing.category === category).findIndex(ing => ing.name === ingredient.name);
    setSelectedIngredientIndex(newIndex);
    setShowFullDesc(false);

    // Smooth scroll to ingredient library
    document.getElementById('ingredient-library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // CSS variable heights for consistent spacing
  // Mobile: navbar 56px + announcement 36px = 92px (but announcement hides on scroll)
  // Desktop: navbar 68px + announcement 36px = 104px (but announcement hides on scroll)
  // When sticky: just navbar height (56px mobile, 68px desktop)

  return (
    <div
      className="w-full max-w-full overflow-x-hidden bg-white scroll-smooth"
      style={{
        '--nav-h-mobile': '56px',
        '--nav-h-desktop': '68px',
        '--jump-h': '52px',
      } as React.CSSProperties}
    >
      <Header />
      {/* pt accounts for full header with announcement bar */}
      <main className="pt-[92px] sm:pt-[104px]">
        {/* Hero Section */}
        <section ref={heroRef} className="bg-white py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  Inside the Formula
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 mb-4">
                  7 ingredients. Clinical dosing. Based on published research.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-5 text-gray-500 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary" />
                    No fillers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary" />
                    No proprietary blends
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary" />
                    Standardized extracts
                  </span>
                </div>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
                >
                  Get Peak Performance
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Bottle Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[240px] sm:w-[280px] lg:w-[340px]">
                  <Image
                    src="/bottle-formula.webp"
                    alt="Peak Performance Bottle"
                    width={340}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Jump Bar - docks directly under navbar */}
        <div
          className={`transition-all duration-300 ${
            isJumpBarSticky
              ? "fixed top-[56px] sm:top-[68px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E9EEF5] shadow-sm py-3"
              : "bg-[#F7F9FC] border-y border-gray-200 py-4"
          }`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide" style={{ touchAction: "pan-x pinch-zoom" }}>
              <span className={`font-semibold text-gray-500 uppercase tracking-wide flex-shrink-0 transition-all ${isJumpBarSticky ? "text-[10px]" : "text-xs"}`}>
                Jump to:
              </span>
              <div className="flex gap-1.5 flex-1">
                {ingredients.map((ingredient) => (
                  <button
                    key={ingredient.name}
                    onClick={() => handleMiniTileClick(ingredient)}
                    className={`flex items-center gap-1.5 rounded-lg border transition-all flex-shrink-0 ${
                      isJumpBarSticky ? "px-2 py-1" : "px-2.5 py-1.5"
                    } ${
                      filteredIngredients[selectedIngredientIndex]?.name === ingredient.name
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-white border-gray-200 hover:border-primary/50 text-gray-700"
                    }`}
                  >
                    <div className={`rounded-full bg-gray-100 overflow-hidden flex-shrink-0 ${isJumpBarSticky ? "w-5 h-5" : "w-6 h-6"}`}>
                      <Image
                        src={ingredient.image}
                        alt={ingredient.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className={`font-medium ${isJumpBarSticky ? "text-[10px]" : "text-[11px]"}`}>{ingredient.name}</span>
                  </button>
                ))}
              </div>
              {/* Back to top - desktop only */}
              {isJumpBarSticky && (
                <button
                  onClick={scrollToTop}
                  className="hidden sm:flex items-center gap-1 text-gray-400 hover:text-primary text-[10px] font-medium flex-shrink-0 transition-colors"
                >
                  <ChevronUp className="w-3 h-3" />
                  Top
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Spacer when sticky - matches Jump Bar height */}
        {isJumpBarSticky && <div className="h-[52px]" />}

        {/* Ingredient Library */}
        <section
          id="ingredient-library"
          className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14"
          style={{ scrollMarginTop: '120px' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Navigator */}
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ingredient Breakdown
              </h2>

              {/* Pill Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {ingredientTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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

            {/* Library Card - Tightened */}
            <div className="bg-white rounded-2xl lg:rounded-3xl border border-gray-200 shadow-lg pt-4 lg:pt-5 px-4 lg:px-6 pb-6 lg:pb-8 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
                {/* Left: Ingredient List with Dose Badges */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="lg:col-span-3 flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 scrollbar-hide snap-x snap-mandatory"
                  style={{ touchAction: "pan-x pinch-zoom" }}
                >
                  {filteredIngredients.map((ingredient, index) => (
                    <button
                      key={ingredient.name}
                      onClick={() => handleIngredientSelect(index)}
                      className={`text-left px-3 py-2.5 rounded-xl whitespace-nowrap lg:whitespace-normal transition-all duration-200 snap-start flex-shrink-0 ${
                        selectedIngredientIndex === index
                          ? "bg-primary/10 border-l-4 border-primary"
                          : "hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm ${selectedIngredientIndex === index ? "text-primary font-semibold" : "text-gray-700 font-medium"}`}>
                          {ingredient.name}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          selectedIngredientIndex === index
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {ingredient.dosage}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>

                {/* Center: Ingredient Image - Enlarged */}
                <div className="lg:col-span-3 flex justify-center items-center py-2">
                  <motion.div
                    key={filteredIngredients[selectedIngredientIndex]?.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-gray-50 to-white border-4 border-primary/10 shadow-lg flex items-center justify-center overflow-hidden">
                      <Image
                        src={
                          filteredIngredients[selectedIngredientIndex]?.image ||
                          `https://placehold.co/256x256/f8fafc/2d94ff?text=${encodeURIComponent(
                            filteredIngredients[selectedIngredientIndex]?.name || "Ingredient"
                          )}`
                        }
                        alt={filteredIngredients[selectedIngredientIndex]?.name || "Ingredient"}
                        width={256}
                        height={256}
                        className="w-full h-full object-contain p-4"
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
                  className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#5B9BD5] to-[#4A8BC9] overflow-hidden shadow-xl border border-white/[0.18]"
                >
                  <div className="p-5 lg:p-6 border border-white/[0.08] rounded-2xl m-[1px]">
                    {/* Ingredient Name */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1.5">
                      {filteredIngredients[selectedIngredientIndex]?.name}
                    </h3>

                    {/* Short Description + Read More */}
                    <div className="mb-4">
                      <p className="text-white/80 text-sm leading-relaxed">
                        {filteredIngredients[selectedIngredientIndex]?.shortDesc}
                      </p>
                      {!showFullDesc ? (
                        <button
                          onClick={() => setShowFullDesc(true)}
                          className="inline-flex items-center gap-1 text-white/60 text-xs mt-1 hover:text-white/90 transition-colors"
                        >
                          Read more
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      ) : (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-white/70 text-sm leading-relaxed mt-1"
                        >
                          {filteredIngredients[selectedIngredientIndex]?.fullDesc}
                        </motion.p>
                      )}
                    </div>

                    {/* Dose & Form Row */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/10">
                      <div className="flex justify-between items-center border-b border-white/15 pb-2 mb-2">
                        <span className="text-white/60 text-sm">Dose</span>
                        <span className="text-white font-semibold text-sm">
                          {filteredIngredients[selectedIngredientIndex]?.dosage}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm">Form</span>
                        <span className="text-white/90 text-sm text-right max-w-[65%]">
                          {filteredIngredients[selectedIngredientIndex]?.form}
                        </span>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white/70 font-medium text-xs mb-2 uppercase tracking-wide">
                        Key Benefits
                      </h4>
                      <ul className="space-y-1.5">
                        {filteredIngredients[selectedIngredientIndex]?.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-white/85 text-sm leading-snug">{benefit}</span>
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#4A8BC9] font-semibold text-sm hover:bg-white/95 transition-colors shadow-sm"
                      >
                        View Study
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Tiles - Below Ingredient Module */}
        <section className="bg-white pb-10 sm:pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/product"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">Fully Disclosed Label</h3>
                  <p className="text-xs text-gray-500">View Supplement Facts →</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Batch Tested</h3>
                  <p className="text-xs text-gray-500">Third-party verified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Not in the Formula - Tighter spacing */}
        <section className="bg-[#F7F9FC] py-10 sm:py-12 border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                What's Not in the Formula
              </h2>
              <p className="text-gray-600 text-sm">
                We left out what doesn't belong.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {whatsNotItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Batch Tested - Trust Cards */}
        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Quality You Can Trust
              </h2>
              <p className="text-gray-600 text-sm">
                Every batch tested. What's on the label is what's in the bottle.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Heavy Metals Tested</h3>
                  <p className="text-xs text-gray-500">Lead, mercury, arsenic screened</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Quality Verified</h3>
                  <p className="text-xs text-gray-500">Third-party lab analysis</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#F7F9FC] py-10 sm:py-12 border-t border-gray-200">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Ready to run the full protocol?
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              See Peak Performance and the full Supplement Facts.
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
            >
              Get Peak Performance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
