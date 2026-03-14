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

          {/* Ingredients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-[#f8f9fa] border border-[#0b1320]/10 rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all">
                  {/* Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-white border border-[#0b1320]/5 flex items-center justify-center overflow-hidden">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  {/* Content */}
                  <div className="text-center">
                    <p className="font-semibold text-[#0b1320] text-sm">{ingredient.name}</p>
                    <p className="text-primary text-xs font-medium mt-1">{ingredient.dose}</p>
                  </div>
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
