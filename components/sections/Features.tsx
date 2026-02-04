"use client";

import { motion } from "framer-motion";
import { FlaskConical, Dumbbell, Zap } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Research-Based Formulation",
    description:
      "Ingredients dosed based on published human studies, not marketing trends or guesswork.",
  },
  {
    icon: Zap,
    title: "Fully Disclosed Labels",
    description:
      "Exact amounts and ingredient forms listed. No proprietary blends, no hidden doses.",
  },
  {
    icon: Dumbbell,
    title: "Third-Party Tested",
    description:
      "Every batch tested for purity, heavy metals, and contaminants by independent labs.",
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50/80 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            What Makes This Different
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Transparency and evidence, from formulation to final product.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group h-full"
            >
              <div className="h-full p-5 sm:p-8 rounded-2xl bg-background border border-black/[0.08] shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
