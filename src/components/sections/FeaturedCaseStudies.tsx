"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

export const FeaturedCaseStudies = () => (
  <section className="bg-black py-20 md:py-28">
    <div className="mx-auto max-w-[1240px] px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <span className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.28em] uppercase text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
            Case studies
          </span>
          <h2 className="mt-5 max-w-[16ch] text-[clamp(34px,6vw,76px)] leading-[1.02] tracking-[-0.035em] font-extrabold text-white">
            How we build, project by project
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-white/25 px-6 py-3 text-[13px] font-medium text-white hover:border-[#22d3ee]/60 hover:bg-white/5 transition-colors"
        >
          All case studies
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseStudies.slice(0, 3).map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/case-studies/${c.slug}`}
              className="group block overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-3 hover:border-[#3b82f6]/40 transition-colors duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0a0a0a]">
                <Image
                  src={c.images[0]}
                  alt={c.alt}
                  fill
                  sizes="(min-width:768px) 380px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-3 pt-5 pb-3">
                <h3 className="text-xl font-bold tracking-tight text-white">{c.title}</h3>
                <p className="mt-1 text-[12px] tracking-[0.14em] uppercase text-white/50">{c.categories.join(" · ")}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/80 group-hover:text-white transition-colors">
                  Read the story <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
