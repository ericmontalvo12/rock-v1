"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/lib/blog-posts";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      <Header />
      <main className="pt-28 sm:pt-32 pb-20">

        {/* Back link */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 mb-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>

        {/* Article */}
        <article className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category + Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                {post.date} &nbsp;•&nbsp; Rock Mountain Research
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Cover image */}
            <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mb-8 relative">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose-content space-y-5">
              {post.content.map((section, i) => {
                if (section.type === "paragraph") {
                  return (
                    <p key={i} className="text-gray-700 text-base leading-relaxed">
                      {section.text}
                    </p>
                  );
                }
                if (section.type === "heading") {
                  return (
                    <h2 key={i} className="text-xl sm:text-2xl font-bold text-gray-900 pt-4">
                      {section.text}
                    </h2>
                  );
                }
                if (section.type === "subheading") {
                  return (
                    <h3 key={i} className="text-lg font-semibold text-gray-900 pt-2">
                      {section.text}
                    </h3>
                  );
                }
                if (section.type === "list" && section.items) {
                  return (
                    <ul key={i} className="space-y-2 pl-1">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-gray-700 text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (section.type === "callout") {
                  return (
                    <div key={i} className="border-l-4 border-primary pl-4 py-1 bg-primary/[0.04] rounded-r-lg">
                      <p className="text-gray-800 text-base font-medium leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-12 pt-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">More Articles</p>
            <div className="flex flex-col gap-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`}>
                    <div className="group flex gap-4 items-start p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden relative flex-shrink-0">
                        <Image
                          src={related.coverImage}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{related.date}</p>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                          {related.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>

      </main>
      <Footer />
    </div>
  );
}
