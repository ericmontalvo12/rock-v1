"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Erik H.",
    location: "Miami, FL",
    rating: 5,
    quote:
      "I've been taking Rock Mountain Performance for a month, and I feel more energized during my workouts. I'm hitting new PRs every week!",
  },
  {
    name: "Albert G.",
    location: "Tallahassee, FL",
    rating: 5,
    quote:
      "I feel like I finally have my old drive back. Even my friends noticed I'm more active and motivated.",
  },
  {
    name: "David A.",
    location: "Atlanta, GA",
    rating: 5,
    quote:
      "I was skeptical at first, but after a few weeks I noticed a difference in my workouts and overall energy. Will keep using it!",
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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Customer Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base">
            Real results from real athletes and high performers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  {/* TODO: Add customer photo */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm sm:text-base">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-text-muted text-xs sm:text-sm">
                      {testimonial.location}
                    </p>
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
