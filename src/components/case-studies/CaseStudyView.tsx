"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import dynamic from "next/dynamic";
const GlassFold = dynamic(() => import("@/components/ui/glass-fold").then((m) => m.GlassFold), { ssr: false });
import type { CaseStudy } from "@/lib/caseStudies";

// The same five-step formula used on the home page. It describes how we work, not a claim about this one project.
const STEPS = [
  ["Discovery", "Scope mapped to exact goals."],
  ["Strategy", "Architecture and API design."],
  ["Production", "Design-led engineering sprints."],
  ["Hardening", "Security and QA before launch."],
  ["Launch", "CI/CD, handover, monitoring."],
];

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export const CaseStudyView = ({ study, next }: { study: CaseStudy; next: CaseStudy }) => {
  const { setContactModalOpen } = useContactModal();
  const [active, setActive] = useState(0);
  const [lit, setLit] = useState(0);
  const [stripIn, setStripIn] = useState(false);
  const chapRefs = useRef<(HTMLElement | null)[]>([]);
  const pullRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  // Real story when provided, otherwise an honest brief built only from the project's own data.
  const chapters = useMemo(() => {
    if (study.challenge && study.approach && study.outcome) {
      return [
        { n: "01", label: "Challenge", title: "The problem.", body: study.challenge },
        { n: "02", label: "Approach", title: "How we solved it.", body: study.approach },
        { n: "03", label: "Outcome", title: "What changed.", body: study.outcome },
      ];
    }
    const scope = [...study.services, ...study.stack];
    return [
      { n: "01", label: "The brief", title: "What this project is.", body: study.summary },
      {
        n: "02",
        label: "What we delivered",
        title: "The scope.",
        body: `We worked on ${scope.slice(0, -1).join(", ") || scope[0]}${scope.length > 1 ? ` and ${scope[scope.length - 1]}` : ""}.`,
        chips: scope,
      },
      study.link
        ? { n: "03", label: "See it live", title: "Judge it yourself.", body: "Open the project, click around and see how it behaves." }
        : { n: "03", label: "Private project", title: "Ask for a walkthrough.", body: "This one isn't public. Tell us what you're building and we'll show you how it works." },
    ];
  }, [study]);

  // Short statement for the word-by-word moment: the first sentence, capped.
  const words = useMemo(() => {
    const first = study.summary.split(/(?<=[.!?])\s/)[0].replace(/[.!?]$/, "");
    return first.split(/\s+/).slice(0, 14);
  }, [study.summary]);

  useEffect(() => {
    const onScroll = () => {
      // On phones the pinned image covers the top ~46%, so the reading line sits lower.
      const mid = window.innerWidth < 768 ? window.innerHeight * 0.74 : window.innerHeight / 2;
      let best = 0;
      let bd = Infinity;
      chapRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      setActive(best);

      const pr = pullRef.current?.getBoundingClientRect();
      if (pr) {
        const h = window.innerHeight;
        const p = Math.min(1, Math.max(0, (h * 0.85 - pr.top) / (h * 0.85 + pr.height * 0.35)));
        setLit(Math.round(p * words.length * 1.15));
      }
      const sr = stripRef.current?.getBoundingClientRect();
      if (sr && sr.top < window.innerHeight * 0.8) setStripIn(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [words.length]);

  const facts = [
    ["Services", study.services.join(", ")],
    ["Stack", study.stack.join(", ")],
    ["Type", study.categories.join(", ")],
  ].filter(([, v]) => v);

  const imgFor = (i: number) => study.images[i % study.images.length];
  const frameStyle = (i: number) => ({
    scale: [1, 1.14, 1.28][i] ?? 1,
    pos: ["top", "center", "bottom"][i] ?? "center",
  });

  return (
    <div className="bg-black text-white font-sans">
      {/* HERO */}
      <header
        className="relative overflow-hidden flex flex-col justify-end px-6 md:px-12 pb-12 pt-32"
        style={{ minHeight: "calc(100vh / var(--page-zoom, 1))" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_72%_28%,rgba(37,99,235,0.5),transparent_70%),radial-gradient(ellipse_50%_50%_at_18%_80%,rgba(34,211,238,0.2),transparent_70%)]" />
        <GlassFold color1="#1d4ed8" color2="#000000" color3="#22d3ee" speed={0.3} scale={0.9} noise={0.1} className="absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -2.5 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-12 xl:right-[max(48px,calc(50vw-620px))] top-28 w-[min(40vw,520px)] aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
        >
          <Image src={imgFor(0)} alt={study.alt} fill priority sizes="520px" className="object-cover object-top" />
        </motion.div>

        <div className="relative max-w-[1240px] w-full mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
            Case study · {study.categories.join(" · ")}
          </Link>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(44px,9.5vw,148px)] leading-[0.94] font-extrabold tracking-[-0.04em] max-w-[15ch]"
          >
            {study.title}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 max-w-[48ch] text-base md:text-xl font-light text-white/75 leading-relaxed"
          >
            {study.summary}
          </motion.p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/12">
            {facts.map(([k, v]) => (
              <div key={k}>
                <small className="block text-[10px] tracking-[0.24em] uppercase text-white/45 mb-1.5">{k}</small>
                <span className="text-[15px] text-white">{v}</span>
              </div>
            ))}
            {study.link && (
              <div>
                <small className="block text-[10px] tracking-[0.24em] uppercase text-white/45 mb-1.5">Project</small>
                {study.external ? (
                  <a href={study.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[15px] text-[#22d3ee] hover:underline">
                    View live <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link href={study.link} className="inline-flex items-center gap-1 text-[15px] text-[#22d3ee] hover:underline">
                    Product page <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* PINNED CHAPTERS */}
      <section className="relative max-w-[1240px] mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-0 md:gap-16">
        <div className="contents md:block md:relative">
          <div
            className="sticky top-0 z-[2] flex items-center bg-gradient-to-b from-black from-85% to-transparent md:bg-none md:[--stage-h:100vh]"
            style={{ height: "calc(var(--stage-h, 46vh) / var(--page-zoom, 1))" }}
          >
            <div className="relative w-full h-[88%] md:h-auto md:aspect-[4/5] md:max-h-[78vh] rounded-[22px] overflow-hidden border border-white/12 bg-[#07070b]">
              {chapters.map((c, i) => {
                const f = frameStyle(i);
                return (
                  <div key={c.n} className={`absolute inset-0 transition-opacity duration-1000 ${active === i ? "opacity-100" : "opacity-0"}`}>
                    <Image
                      src={imgFor(i)}
                      alt={study.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-cover transition-transform duration-[1600ms] ease-out"
                      style={{ objectPosition: f.pos, transform: active === i ? `scale(${f.scale})` : "scale(1)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  </div>
                );
              })}
              <span className="absolute left-4 bottom-4 text-[10px] tracking-[0.24em] uppercase text-white/70">
                {chapters[active]?.n} · {chapters[active]?.label}
              </span>
            </div>
          </div>
        </div>

        <div className="relative md:pl-6">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/12">
            <i
              className="absolute left-0 top-0 w-px bg-[#3b82f6] shadow-[0_0_10px_#3b82f6] transition-transform duration-700 ease-out"
              style={{ height: `${100 / chapters.length}%`, transform: `translateY(${active * 100}%)` }}
            />
          </div>
          {chapters.map((c, i) => (
            <article
              key={c.n}
              ref={(el) => {
                chapRefs.current[i] = el;
              }}
              className={`min-h-[78vh] md:min-h-screen flex flex-col justify-center max-w-[48ch] transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-35"}`}
            >
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#3b82f6]">
                {c.n} / {c.label}
              </span>
              <h2 className="mt-4 text-[clamp(34px,4.6vw,64px)] leading-[1.02] font-extrabold tracking-[-0.03em]">{c.title}</h2>
              <p className="mt-5 text-base md:text-lg font-light text-white/75 leading-relaxed">{c.body}</p>
              {"chips" in c && c.chips && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.chips.map((t) => (
                    <li key={t} className="px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] uppercase tracking-[0.14em] text-white/75">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              {i === chapters.length - 1 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {study.link && study.external && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-neutral-200 transition-colors"
                    >
                      Open live project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white text-[13px] font-medium hover:border-[#22d3ee]/60 hover:bg-white/5 transition-colors"
                  >
                    Start a project <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* PULL STATEMENT */}
      <section ref={pullRef} className="relative min-h-[90vh] grid place-items-center text-center px-6 md:px-12 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.16),transparent_70%)]">
        <p className="max-w-[18ch] text-[clamp(32px,6vw,88px)] leading-[1.04] font-extrabold tracking-[-0.035em]" aria-label={words.join(" ")}>
          {words.map((w, i) => {
            const last = i === words.length - 1;
            return (
              <span
                key={i}
                aria-hidden
                className={`transition-colors duration-500 ${i < lit ? (last ? "text-[#22d3ee] italic font-serif font-normal" : "text-white") : "text-white/15"}`}
              >
                {w}{" "}
              </span>
            );
          })}
        </p>
      </section>

      {/* PROCESS STRIP */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
          Our formula
        </div>
        <h3 className="mt-4 mb-12 md:mb-14 text-[clamp(30px,4.2vw,56px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
          Same five steps, every project.
        </h3>
        <div ref={stripRef} className="relative grid grid-cols-1 md:grid-cols-5 gap-7 md:gap-5">
          <div className="hidden md:block absolute left-0 right-0 top-[9px] h-px bg-white/12" />
          <div
            className="hidden md:block absolute left-0 top-[9px] h-px bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] shadow-[0_0_10px_#3b82f6] transition-[width] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: stripIn ? "100%" : "0%" }}
          />
          {STEPS.map(([name, desc], i) => (
            <div
              key={name}
              className={`relative md:pt-9 pl-9 md:pl-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${stripIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="absolute top-1 left-0 w-[13px] h-[13px] rounded-full bg-black border border-[#3b82f6] shadow-[0_0_12px_#3b82f6]" />
              <small className="text-[11px] tracking-[0.2em] text-[#3b82f6]">0{i + 1}</small>
              <h4 className="mt-2 text-lg font-semibold">{name}</h4>
              <p className="mt-1 text-sm text-white/55 font-light">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <footer className="border-t border-white/12 px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto">
          <small className="text-[11px] tracking-[0.28em] uppercase text-white/45">Next case study</small>
          <Link
            href={`/case-studies/${next.slug}`}
            className="mt-4 block text-[clamp(44px,9vw,132px)] leading-[0.95] font-extrabold tracking-[-0.04em] text-white hover:text-[#22d3ee] transition-colors duration-500"
          >
            {next.title} <span className="inline-block text-white/40">→</span>
          </Link>
          <button
            onClick={() => setContactModalOpen(true)}
            className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};
