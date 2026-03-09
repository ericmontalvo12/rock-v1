"use client";

import { motion } from "framer-motion";
import { FlaskConical, ClipboardList, ShieldCheck, BookOpen } from "lucide-react";

const trustIndicators = [
  {
    icon: FlaskConical,
    label: "Clinical Dosing",
    description: "Ingredients matched to doses used in published human studies",
  },
  {
    icon: ClipboardList,
    label: "Fully Disclosed Label",
    description: "No proprietary blends — every ingredient and dose shown",
  },
  {
    icon: ShieldCheck,
    label: "Third-Party Tested",
    description: "Each batch independently verified for purity and potency",
  },
  {
    icon: BookOpen,
    label: "Research-Backed Ingredients",
    description: "Only ingredients with human clinical trial support included",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ResearchTrust() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/80 to-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
            Our Standards
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Research Standard
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every ingredient in Peak Performance is included at doses supported by published human
            research. We avoid proprietary blends, underdosed ingredients, and label dressing.
            Transparency and physiological effectiveness guide every formulation decision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {trustIndicators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] p-5 sm:p-6 text-center hover:shadow-[0_12px_40px_rgba(45,148,255,0.10)] hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-gray-900 font-bold text-sm sm:text-base mb-2">{item.label}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
