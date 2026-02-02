"use client";

import { motion } from "framer-motion";
import { FlaskConical, Dumbbell, Zap } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Formulated for results",
    bullets: [
      "7 active ingredients at effective doses",
      "Supports healthy testosterone levels",
      "Addresses key mineral deficiencies",
    ],
  },
  {
    icon: Zap,
    title: "Energy that lasts",
    bullets: [
      "Reduces stress-related fatigue",
      "Supports sustained daily output",
      "No stimulants or crash",
    ],
  },
  {
    icon: Dumbbell,
    title: "Train harder, recover faster",
    bullets: [
      "Aids muscle function and repair",
      "Supports quality sleep",
      "Optimizes post-workout recovery",
    ],
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
            Why Peak Performance
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Built for men who take their performance seriously.
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
                <ul className="space-y-2 flex-grow inline-block text-left">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
