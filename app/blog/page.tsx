"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "#",
    category: "Testosterone",
    title: "Why Most Testosterone Supplements Don't Actually Work",
    excerpt:
      "The supplement industry is flooded with products making bold claims. Here's what the research actually says about what moves the needle — and what doesn't.",
    date: "March 12, 2026",
    coverImage: "/blog-tsupp.jpg",
  },
  {
    slug: "#",
    category: "Training",
    title: "The Link Between Sleep and Testosterone: What Men Over 30 Need to Know",
    excerpt:
      "Poor sleep doesn't just leave you tired. It directly suppresses testosterone production. We break down the science and what you can do about it.",
    date: "March 5, 2026",
    coverImage: "/blog-sleep.jpg",
  },
  {
    slug: "#",
    category: "Ingredients",
    title: "Ashwagandha for Testosterone: Reviewing the Human Studies",
    excerpt:
      "Ashwagandha is one of the most hyped ingredients in men's health supplements. We looked at every relevant human study to see if the hype is justified.",
    date: "February 26, 2026",
    coverImage: "/ashwagandha.png",
  },
  {
    slug: "#",
    category: "Nutrition",
    title: "Zinc and Testosterone: How Deficiency Silently Tanks Your Levels",
    excerpt:
      "Zinc deficiency is more common than most men realize — and its effect on testosterone is significant. Here's how to know if you're deficient and what to do.",
    date: "February 18, 2026",
    coverImage: "/zinc.png",
  },
  {
    slug: "#",
    category: "Recovery",
    title: "Cortisol vs. Testosterone: Understanding the Stress-Hormone Tradeoff",
    excerpt:
      "Chronic stress doesn't just affect your mood. It directly competes with testosterone production. Learn how to manage cortisol to protect your hormonal health.",
    date: "February 10, 2026",
    coverImage: "/blog-cortisol.jpg",
  },
  {
    slug: "#",
    category: "Ingredients",
    title: "Tongkat Ali: What the Research Says About Dosing and Efficacy",
    excerpt:
      "Tongkat Ali has decades of research behind it. Most products use the wrong dose. We break down what the studies actually used and why it matters.",
    date: "February 3, 2026",
    coverImage: "/tongkat-ali.png",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32 pb-20">

        {/* Header */}
        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3 text-center">
                Rock Mountain Performance
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
                Articles
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Article list */}
        <section>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={post.slug}>
                    <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer bg-white">
                      {/* Cover image */}
                      <div className="w-full aspect-[16/9] bg-gray-100 relative overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">
                          {post.date} &nbsp;•&nbsp; Rock Mountain Research
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
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
