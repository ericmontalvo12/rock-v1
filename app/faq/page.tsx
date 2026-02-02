"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Rock Mountain Peak Performance?",
    answer:
      "Rock Mountain Peak Performance is a daily testosterone support formula designed to support strength, recovery, and overall vitality. It's built with clinically studied ingredients, fully transparent dosing, and no proprietary blends.",
  },
  {
    question: "Who is this product for?",
    answer: `This product is best suited for:

- Men who train regularly or stay physically active
- Men focused on long-term performance and recovery
- Men looking to support healthy testosterone levels naturally`,
  },
  {
    question: "How do I take Rock Mountain Peak Performance?",
    answer:
      "Take 3 capsules daily with food. For best results, use consistently for at least 30 days alongside proper training, sleep, and nutrition.",
  },
  {
    question: "How long does it take to notice results?",
    answer:
      "Most customers report subtle improvements in energy, recovery, and training performance within 2 to 4 weeks of consistent use.",
  },
  {
    question: "Is this safe for daily use?",
    answer:
      "Yes. Peak Performance is formulated with well-studied ingredients at research-supported doses intended for daily use. Always follow the recommended serving size.",
  },
  {
    question: "Is Peak Performance backed by a guarantee?",
    answer:
      "Yes. Rock Mountain Peak Performance includes a 30 day money back guarantee if you are not satisfied.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-base sm:text-lg font-semibold text-text-primary pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-text-secondary whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              FAQ
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything you need to know about Rock Mountain Peak Performance.
            </p>
          </div>

          <div className="rounded-2xl bg-surface border border-border p-6 sm:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl bg-surface border border-border">
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              Still have questions?
            </h2>
            <p className="text-text-secondary mb-4">
              Can't find the answer you're looking for? Reach out to our team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary-hover transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
