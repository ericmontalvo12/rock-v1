"use client";

import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Vitamin D (Cholecalciferol)",
    dosage: "3,000 IU",
    description:
      "Supports healthy testosterone levels and overall hormonal function, especially in individuals with low vitamin D status.",
  },
  {
    name: "Magnesium (Bisglycinate)",
    dosage: "300 mg",
    description:
      "Supports muscle function, recovery, sleep quality, and energy metabolism—key foundations for healthy testosterone production.",
  },
  {
    name: "Zinc (Citrate)",
    dosage: "30 mg",
    description:
      "An essential mineral for testosterone synthesis, immune function, and recovery from training stress.",
  },
  {
    name: "Fenugreek Seed Extract",
    dosage: "500 mg",
    note: "50% Saponins",
    description:
      "Shown in clinical studies to support healthy testosterone levels, strength, and exercise performance.",
  },
  {
    name: "Ashwagandha Root Extract",
    dosage: "500 mg",
    note: "KSM-66",
    description:
      "Human studies suggest it supports stress reduction, cortisol balance, recovery, and healthy testosterone levels in active men.",
  },
  {
    name: "Tongkat Ali Root Extract",
    dosage: "300 mg",
    note: "1% Eurycomanone",
    description:
      "Supports free testosterone, energy, and training drive by aiding the body's stress and hormonal response.",
  },
  {
    name: "Boron (Citrate)",
    dosage: "9 mg",
    description:
      "Supports free testosterone levels and helps regulate the activity of key hormones involved in performance and recovery.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function Ingredients() {
  return (
    <section id="ingredients" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            What's Inside
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            The exact formula—fully disclosed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              variants={itemVariants}
              className="group"
            >
              <div className="p-3 sm:p-5 rounded-xl bg-surface border border-black/[0.06] hover:border-primary/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                    <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                          {ingredient.name}
                        </h3>
                        <span className="text-lg sm:text-xl font-bold text-primary sm:hidden">
                          {ingredient.dosage}
                        </span>
                      </div>
                      {ingredient.note && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded">
                          {ingredient.note}
                        </span>
                      )}
                      <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:text-right flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {ingredient.dosage}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
