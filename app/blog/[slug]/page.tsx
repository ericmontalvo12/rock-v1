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
                if (section.type === "numbered-list" && section.items) {
                  return (
                    <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <ol className="space-y-2.5">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {j + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    </div>
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
                if (section.type === "quote") {
                  return (
                    <div key={i} className="my-6 py-5 px-6 bg-gray-900 rounded-xl text-center">
                      <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic">
                        &ldquo;{section.text}&rdquo;
                      </p>
                    </div>
                  );
                }
                if (section.type === "hormone-axes" && section.axes) {
                  return (
                    <div key={i} className="grid grid-cols-2 gap-3 my-2">
                      {section.axes.map((axis, j) => (
                        <div key={j} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                          <p className="font-semibold text-gray-900 text-sm mb-3">{axis.title}</p>
                          <div className="space-y-2">
                            {axis.steps.map((step, k) => (
                              <div key={k} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                <p className="text-gray-600 text-xs leading-snug">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "level-cards" && section.levels) {
                  return (
                    <div key={i} className="space-y-3 my-2">
                      {section.levels.map((lvl, j) => (
                        <div key={j} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                          <div className="bg-primary/10 border-b border-primary/20 px-4 py-2.5 flex items-center gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">{lvl.level}</span>
                            <span className="font-semibold text-gray-900 text-sm">{lvl.title}</span>
                          </div>
                          <p className="px-4 py-3 text-gray-600 text-sm leading-relaxed">{lvl.text}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "mechanism-list" && section.mechanisms) {
                  return (
                    <div key={i} className="space-y-3 my-2">
                      {section.mechanisms.map((m, j) => (
                        <div key={j} className="flex gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                          <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm mb-1">{m.title}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "risk-grid" && section.risks) {
                  return (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                      {section.risks.map((r, j) => (
                        <div key={j} className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                          <p className="font-semibold text-gray-900 text-sm mb-1.5">{r.title}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{r.text}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "food-table" && section.foods) {
                  return (
                    <div key={i} className="my-2 rounded-xl border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-600 uppercase tracking-wide">Food</th>
                            <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-600 uppercase tracking-wide">Serving</th>
                            <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-600 uppercase tracking-wide">Zinc</th>
                            <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-600 uppercase tracking-wide hidden sm:table-cell">Bioavailability</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.foods.map((f, j) => (
                            <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                              <td className="px-4 py-2.5 font-medium text-gray-900 text-sm">{f.food}</td>
                              <td className="px-4 py-2.5 text-gray-500 text-sm">{f.serving}</td>
                              <td className="px-4 py-2.5 text-primary font-semibold text-sm">{f.zinc}</td>
                              <td className="px-4 py-2.5 text-gray-500 text-xs hidden sm:table-cell">{f.bioavailability}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (section.type === "study-cards" && section.studies) {
                  const verdictColors: Record<string, string> = {
                    strong: "bg-green-50 border-green-200 text-green-700",
                    conditional: "bg-yellow-50 border-yellow-200 text-yellow-700",
                    weak: "bg-red-50 border-red-200 text-red-700",
                  };
                  return (
                    <div key={i} className="space-y-4 my-2">
                      {section.studies.map((study, j) => (
                        <div key={j} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                              <span className="font-bold text-gray-900 text-sm">{study.author}</span>
                              <span className="text-gray-500 text-sm">— {study.title}</span>
                              <span className="text-gray-400 text-xs ml-auto">{study.year}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {study.tags.map((tag, t) => (
                                <span key={t} className="text-[10px] font-semibold uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="px-4 py-3">
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">{study.body}</p>
                            <div className={`inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded border ${verdictColors[study.verdictStrength]}`}>
                              {study.verdict}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "stats-grid" && section.stats) {
                  return (
                    <div key={i} className="grid grid-cols-3 gap-3 my-2">
                      {section.stats.map((stat, j) => (
                        <div key={j} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                          <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                          <p className="text-xs font-semibold text-gray-900 mb-1">{stat.label}</p>
                          <p className="text-[11px] text-gray-500 leading-snug">{stat.description}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "sleep-stages" && section.stages) {
                  const colorMap: Record<string, string> = {
                    blue: "bg-blue-500",
                    indigo: "bg-indigo-500",
                    gray: "bg-gray-400",
                  };
                  return (
                    <div key={i} className="space-y-3 my-2">
                      {section.stages.map((stage, j) => (
                        <div key={j} className="flex gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                          <span className={`w-2.5 h-2.5 rounded-full ${colorMap[stage.color] ?? "bg-gray-400"} flex-shrink-0 mt-1.5`} />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm mb-1">{stage.name}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{stage.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "action-grid" && section.actions) {
                  return (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                      {section.actions.map((action, j) => (
                        <div key={j} className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                          <p className="font-semibold text-gray-900 text-sm mb-1.5">{action.title}</p>
                          <p className="text-gray-600 text-xs leading-relaxed">{action.text}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (section.type === "evidence-grid" && section.evidence) {
                  const strengthLabel: Record<string, string> = {
                    strong: "Strong Evidence",
                    mixed: "Mixed Evidence",
                    weak: "Weak Evidence",
                    context: "Context Dependent",
                  };
                  const strengthColor: Record<string, string> = {
                    strong: "bg-green-50 border-green-200 text-green-700",
                    mixed: "bg-yellow-50 border-yellow-200 text-yellow-700",
                    weak: "bg-red-50 border-red-200 text-red-700",
                    context: "bg-blue-50 border-blue-200 text-blue-700",
                  };
                  return (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                      {section.evidence.map((item, j) => (
                        <div key={j} className="border border-gray-200 rounded-xl p-4 bg-white">
                          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-2 ${strengthColor[item.strength]}`}>
                            {strengthLabel[item.strength]}
                          </span>
                          <p className="font-bold text-gray-900 text-sm mb-1">{item.label}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                        </div>
                      ))}
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
