"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Ingredients() {
  return (
    <section id="ingredients" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-surface/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Our Philosophy
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-3">
            Most supplement brands choose ingredients based on marketing trends or what's cheapest to source.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-3">
            We start with published research. Every ingredient is included because human studies link it to the outcome we're targeting.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Doses match what was used in those studies. Labels are fully disclosed. No proprietary blends, no underdosing, no shortcuts.
          </p>
          <Link
            href="/formula"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
          >
            View the full formula breakdown
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
