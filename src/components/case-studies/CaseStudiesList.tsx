"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, caseStudyFilters } from "@/lib/caseStudies";

export const CaseStudiesList = () => {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? caseStudies : caseStudies.filter((c) => c.categories.includes(filter));

  return (
    <section className="relative bg-black w-full pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden font-sans">
      <div className="absolute -top-40 left-[8%] w-[620px] h-[620px] rounded-full bg-[#2563eb]/[0.09] blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header block, same rhythm as the Works page */}
        <div className="w-full mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] md:text-[150px] font-extrabold tracking-tighter text-white leading-[0.92] select-none"
          >
            Case Studies
            <sup className="ml-2 md:ml-4 align-super text-[0.18em] font-medium tracking-normal text-[#3b82f6]">
              ({String(caseStudies.length).padStart(2, "0")})
            </sup>
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4 pt-8 border-t border-white/10 w-full">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-lg md:text-xl font-semibold text-white/95 uppercase tracking-wide"
            >
              Selected projects, explained
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs md:text-sm text-neutral-400 font-light max-w-[300px] md:text-right leading-relaxed"
            >
              What each project is, what we delivered and how it was built. Open one to read the story.
            </motion.p>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter case studies">
            {caseStudyFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full border text-[11px] md:text-xs uppercase tracking-[0.14em] transition-colors ${
                  filter === f
                    ? "bg-white text-black border-white"
                    : "border-white/15 text-white/70 hover:border-[#3b82f6]/60 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          <AnimatePresence mode="popLayout">
            {shown.map((c, i) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="lg:[&:nth-child(3n+2)]:mt-14"
              >
                <Link href={`/case-studies/${c.slug}`} className="group block">
                  <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden border border-white/10 bg-[#07070a] group-hover:border-[#3b82f6]/50 transition-colors duration-500">
                    <Image
                      src={c.images[0]}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <ul className="absolute left-4 bottom-4 right-16 flex flex-wrap gap-2">
                      {(c.metrics?.length ? c.metrics.map((m) => `${m.value} ${m.label}`) : c.tags.slice(0, 3)).map((t) => (
                        <li
                          key={t}
                          className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/55 backdrop-blur-md text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-white"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <span className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-[#3b82f6] transition-colors duration-300">
                      {c.title}
                    </h3>
                    <span className="shrink-0 text-xs md:text-sm text-white/60 underline underline-offset-4 decoration-white/30 group-hover:text-white inline-flex items-center gap-1">
                      See detail <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed line-clamp-2 max-w-[44ch]">{c.summary}</p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
