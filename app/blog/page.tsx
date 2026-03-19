"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "#",
    category: "Testosterone",
    title: "Why Most Testosterone Supplements Don't Actually Work",
    excerpt:
      "The supplement industry is flooded with products making bold claims. Here's what the research actually says about what moves the needle — and what doesn't.",
    date: "March 12, 2026",
    readTime: "6 min read",
  },
  {
    slug: "#",
    category: "Training",
    title: "The Link Between Sleep and Testosterone: What Men Over 30 Need to Know",
    excerpt:
      "Poor sleep doesn't just leave you tired. It directly suppresses testosterone production. We break down the science and what you can do about it.",
    date: "March 5, 2026",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Ingredients",
    title: "Ashwagandha for Testosterone: Reviewing the Human Studies",
    excerpt:
      "Ashwagandha is one of the most hyped ingredients in men's health supplements. We looked at every relevant human study to see if the hype is justified.",
    date: "February 26, 2026",
    readTime: "8 min read",
  },
  {
    slug: "#",
    category: "Nutrition",
    title: "Zinc and Testosterone: How Deficiency Silently Tanks Your Levels",
    excerpt:
      "Zinc deficiency is more common than most men realize — and its effect on testosterone is significant. Here's how to know if you're deficient and what to do.",
    date: "February 18, 2026",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Recovery",
    title: "Cortisol vs. Testosterone: Understanding the Stress-Hormone Tradeoff",
    excerpt:
      "Chronic stress doesn't just affect your mood. It directly competes with testosterone production. Learn how to manage cortisol to protect your hormonal health.",
    date: "February 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "#",
    category: "Ingredients",
    title: "Tongkat Ali: What the Research Says About Dosing and Efficacy",
    excerpt:
      "Tongkat Ali has decades of research behind it. Most products use the wrong dose. We break down what the studies actually used and why it matters.",
    date: "February 3, 2026",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32 pb-20">

        {/* Hero */}
        <section className="py-10 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                The Rock Mountain Blog
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
                Research. No fluff. No marketing spin.
              </h1>
              <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
                We break down the science behind testosterone, training, and recovery so you can make informed decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured post */}
        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href={featured.slug}>
                <div className="group bg-[#F7F9FC] border border-gray-200 rounded-2xl p-8 sm:p-10 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{featured.date}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post, i) => (
                <motion.div
                  key={post.slug + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={post.slug}>
                    <div className="group h-full flex flex-col bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <span className="flex items-center gap-1 text-xs font-medium text-primary">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
