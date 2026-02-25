"use client";

import { motion } from "framer-motion";
import { FlaskConical, FileText, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Research-Based Formulation",
    description:
      "Every ingredient is dosed to match published human studies.",
  },
  {
    icon: FileText,
    title: "Fully Disclosed Labels",
    description:
      "Exact amounts and standardized extract forms listed.",
  },
  {
    icon: ShieldCheck,
    title: "Batch Tested",
    description:
      "Each batch is tested for purity and heavy metals before it ships.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/80 to-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        {/* Section header - matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
            Built Different
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            What Makes This Different
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
            Transparency and evidence, from formulation to final product.
          </p>
        </motion.div>

        {/* Main container - matching other sections */}
        <div className="relative rounded-[32px] p-5 sm:p-7 lg:p-8 border border-gray-200/40 shadow-[0_2px_16px_rgba(0,0,0,0.02)] bg-gradient-to-br from-primary/[0.015] via-white to-primary/[0.02]">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.03)_0%,_transparent_50%)] pointer-events-none"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)] hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Top row: Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                </div>

                {/* Label chip */}
                <span className="inline-block text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/[0.06] px-2 py-0.5 rounded mb-3">
                  {index === 0 ? "Research" : index === 1 ? "Transparency" : "Quality"}
                </span>

                <h3 className="text-gray-900 font-bold text-base sm:text-[17px] lg:text-lg mb-2 lg:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-[15px] leading-[1.7]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
