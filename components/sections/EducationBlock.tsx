"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Ingredient data
const ingredients = [
  { name: "Vitamin D3", dose: "3,000 IU", image: "/vitamin-d3.png" },
  { name: "Ashwagandha", dose: "500mg KSM-66", image: "/ashwagandha.png" },
  { name: "Tongkat Ali", dose: "300mg 200:1", image: "/tongkat-ali.png" },
  { name: "Fenugreek", dose: "500mg", image: "/fenugreek.png" },
  { name: "Magnesium", dose: "30mg", image: "/magnesium.png" },
  { name: "Zinc", dose: "20mg", image: "/zinc.png" },
  { name: "Boron", dose: "9mg", image: "/boron.png" },
];

export function EducationBlock() {
  return (
    <div>
      {/* SECTION: Ingredients Gallery */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              The Formula
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1320] mb-3">
              7 Ingredients. Research-Backed Doses.
            </h2>
            <p className="text-[#0b1320]/60 max-w-lg mx-auto">
              Every ingredient dosed at levels shown effective in human studies.
            </p>
          </motion.div>

          {/* Ingredients Horizontal Scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0 w-[44vw] sm:w-[160px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="aspect-square bg-gray-50 relative">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-bold text-gray-900 text-sm">{ingredient.name}</p>
                  <p className="text-primary text-xs font-medium">{ingredient.dose}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Link
              href="/formula"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              See the research behind each ingredient
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
