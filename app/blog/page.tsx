"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-posts";

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
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`}>
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
