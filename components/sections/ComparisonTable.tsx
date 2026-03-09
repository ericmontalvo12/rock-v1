"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { typical: "Proprietary blends", peak: "Fully disclosed formula" },
  { typical: "Underdosed ingredients", peak: "Research-backed doses" },
  { typical: "Ineffective ingredients", peak: "Effective ingredients" },
  { typical: "No long-lasting effect", peak: "Long-term hormonal support" },
];

export function ComparisonTable() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
            The Difference
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Why Peak Performance Is Different
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {/* Table header */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-gray-100 rounded-xl px-4 py-3 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Typical Testosterone Booster
              </span>
            </div>
            <div className="bg-primary rounded-xl px-4 py-3 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Peak Performance
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {rows.map((row, index) => (
              <div key={index} className="grid grid-cols-2 gap-3">
                {/* Typical */}
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200/80 rounded-xl px-4 py-3">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-snug">{row.typical}</span>
                </div>
                {/* Peak */}
                <div className="flex items-center gap-3 bg-primary/[0.05] border border-primary/20 rounded-xl px-4 py-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-gray-800 text-sm font-medium leading-snug">{row.peak}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
