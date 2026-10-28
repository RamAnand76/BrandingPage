"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

// Strongest projects first; the full list lives on /our-works.
const FEATURED = ["Rhevez OS", "Haven | Munnar", "ScriptForge AI Platform", "Sleazy"];

// One factual line per project, taken from what each project is. Swap in real outcomes when you have them.
const HIGHLIGHT: Record<string, string> = {
  "Rhevez OS": "Pipeline, projects, invoicing and a client portal in one workspace.",
  "Haven | Munnar": "Brand-led website for a private hillside retreat in Munnar.",
  "ScriptForge AI Platform": "AI-driven platform for the entertainment industry on Next.js and Supabase.",
  Sleazy: "Brand identity and e-commerce storefront for a streetwear footwear label.",
};

export const SelectedWork = () => {
  const featured = FEATURED.map((t) => works.find((w) => w.title === t)).filter(
    (w): w is (typeof works)[number] => !!w
  );

  return (
    <section id="selected-work" className="bg-black py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#22d3ee] font-semibold">
              Selected work
            </span>
            <h2 className="mt-3 text-[32px] md:text-[48px] font-medium tracking-tight text-white leading-[1.1] max-w-[18ch]">
              Products we&apos;ve built and shipped.
            </h2>
          </div>
          <Link
            href="/our-works"
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white text-[13px] font-medium hover:border-[#22d3ee]/60 hover:bg-white/5 transition-colors"
          >
            View all work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {featured.map((work, i) => {
            const external = work.link.startsWith("http");
            const Card = (
              <>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#050505]">
                  <Image
                    src={Array.isArray(work.image) ? work.image[0] : work.image}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain p-3 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex items-end justify-between gap-4 p-5 lg:p-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2 text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                      {work.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-[#22d3ee] transition-colors">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed max-w-[44ch]">
                      {HIGHLIGHT[work.title]}
                    </p>
                  </div>
                  <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </>
            );
            const cls =
              "group block bg-[#09090b] border border-white/[0.06] rounded-[24px] overflow-hidden hover:border-[#3275F8]/40 transition-colors";
            return (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {external ? (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className={cls}>
                    {Card}
                  </a>
                ) : (
                  <Link href={work.link} className={cls}>
                    {Card}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
