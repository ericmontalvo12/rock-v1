"use client";

import { motion } from "framer-motion";
import { FlaskConical, Dumbbell, Zap } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Science-backed testosterone support",
    description:
      "Supports healthy testosterone levels using clinically studied ingredients shown to aid hormonal balance, stress response, and micronutrient sufficiency.",
  },
  {
    icon: Zap,
    title: "Clinically dosed, no proprietary blends",
    description:
      "Every ingredient is included at research-supported levels—fully transparent, no under-dosing, and no hidden blends.",
  },
  {
    icon: Dumbbell,
    title: "Built for strength, energy, and recovery",
    description:
      "Designed to support physical performance, daily energy, and recovery by addressing key factors that influence testosterone, stress, and mineral balance.",
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
    <section className="py-16 sm:py-24 lg:py-32 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Why Peak Performance
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Formulated with precision for athletes and high performers who
            demand transparency and results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group h-full"
            >
              <div className="h-full p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed flex-grow">
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
