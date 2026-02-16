"use client";

import { motion } from "framer-motion";

export function Ingredients() {
  return (
    <section id="philosophy" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
            We start with published research. Every ingredient is included because human studies link it to the outcome we're targeting—and doses match what was used in those studies.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Labels are fully disclosed. You know exactly what you're getting and why it's there.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
