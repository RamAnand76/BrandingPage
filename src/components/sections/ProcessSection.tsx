"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

// Pinned section: a vertical rail of steps on the left, one large step on the right with a ghost numeral behind it.
const steps = [
  {
    num: "01",
    title: "Discovery & Alignment",
    description: "Deep value workshops and scope mapping to lock down exact objectives.",
  },
  {
    num: "02",
    title: "Strategy & Architecture",
    description: "Creating custom technical blueprints, API designs, and database structures.",
  },
  {
    num: "03",
    title: "Bespoke Production",
    description: "Rapid, high-fidelity engineering cycles with continuous designer-led reviews.",
  },
  {
    num: "04",
    title: "Hardening & Auditing",
    description: "Rigid security penetration tests, performance testing, and QA validation.",
  },
  {
    num: "05",
    title: "Launch & Scaling",
    description: "Deployment via stable CI/CD pipelines, handover, and real-time monitoring.",
  },
];

const N = steps.length;
const EASE = [0.22, 1, 0.36, 1] as const;

export const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const progress = useMotionValue(0);
  // Rail fill reaches the centre of the active item: (active + 0.5) / N, eased by the live progress.
  const fill = useTransform(progress, (p) => Math.min(1, Math.max(0.06, (Math.min(N - 1, Math.floor(p * N)) + 0.5) / N)));

  // Progress is measured from the live rect (not offsetHeight) so the site's html zoom cannot skew it.
  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      progress.set(p);
      setActive(Math.min(N - 1, Math.floor(p * N)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [progress]);

  const step = steps[active];

  return (
    <section className="bg-black relative font-sans">
      {/* ~80vh of scroll per step plus the pinned screen; cancels the site's html zoom so the length is the same everywhere. */}
      <div ref={ref} style={{ height: `calc(${N * 80 + 100}vh / var(--page-zoom, 1))` }} className="relative">
        <div
          className="sticky top-0 h-screen overflow-hidden bg-black"
          style={{ zoom: "calc(1 / var(--page-zoom, 1))" }}
        >
          <div className="absolute -top-40 left-[15%] w-[620px] h-[620px] rounded-full bg-[#2563eb]/10 blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-52 right-[8%] w-[700px] h-[700px] rounded-full bg-[#22d3ee]/[0.06] blur-[160px] pointer-events-none" />

          {/* Eyebrow */}
          <div className="absolute top-24 md:top-28 left-6 md:left-14 flex items-center gap-3 text-[11px] md:text-xs tracking-[0.28em] uppercase text-white/70 font-medium z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
            Our formula for predictable scale
          </div>

          {/* Phone: a horizontal step bar replaces the vertical rail so the stage can use the full height */}
          <div className="md:hidden absolute top-[150px] left-6 right-6 flex gap-2 z-10" aria-hidden>
            {steps.map((s, i) => (
              <div key={s.num} className="flex-1">
                <div className="relative h-[2px] rounded bg-white/15 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 origin-left bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    animate={{ scaleX: i <= active ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                </div>
                <span
                  className={`mt-2 block text-[10px] tracking-[0.18em] transition-colors duration-500 ${
                    i === active ? "text-[#3b82f6]" : "text-white/35"
                  }`}
                >
                  {s.num}
                </span>
              </div>
            ))}
          </div>

          {/* Phone: what comes next, so the bottom of the screen is never empty */}
          {active < N - 1 && (
            <div className="md:hidden absolute bottom-28 left-6 z-10 text-[11px] tracking-[0.18em] uppercase text-white/45">
              Next
              <span className="block mt-1 text-sm tracking-tight normal-case font-semibold text-white/75">
                {steps[active + 1].num} {steps[active + 1].title.split(" & ")[0]}
              </span>
            </div>
          )}

          <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-14 flex flex-col justify-center pt-44 pb-32 md:pt-0 md:pb-0 md:grid md:grid-cols-[300px_1fr] md:items-center gap-5 md:gap-16">
            {/* Rail */}
            <nav aria-label="Process steps" className="relative hidden md:flex gap-5">
              <div className="relative w-px bg-white/12 self-stretch my-1">
                <motion.div
                  style={{ scaleY: fill }}
                  className="absolute inset-x-0 top-0 bottom-0 origin-top bg-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                />
              </div>
              <ol className="flex flex-col gap-6 md:gap-9 py-2">
                {steps.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.num} className="flex items-baseline gap-3 md:gap-4">
                      <span
                        className={`text-[10px] md:text-xs tracking-[0.18em] transition-colors duration-500 ${
                          on ? "text-[#3b82f6]" : "text-white/35"
                        }`}
                      >
                        {s.num}
                      </span>
                      <span
                        className={`text-[13px] md:text-[26px] leading-tight font-bold tracking-tight transition-all duration-500 ${
                          on ? "text-white" : "text-white/40"
                        }`}
                      >
                        {s.title.split(" & ")[0]}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Stage */}
            <div className="relative flex-1 md:flex-none md:min-h-[320px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="relative w-full"
                >
                  {/* Ghost numeral */}
                  <span
                    aria-hidden
                    className="absolute right-0 top-1/2 -translate-y-1/2 -z-0 select-none pointer-events-none text-[clamp(340px,100vw,420px)] md:text-[clamp(150px,30vw,440px)] leading-none font-extrabold tracking-tighter text-white/[0.055] -right-4 md:right-0"
                  >
                    {step.num}
                  </span>
                  <h3 className="relative text-[clamp(48px,15.5vw,62px)] md:text-[clamp(34px,6.6vw,104px)] leading-[0.98] tracking-[-0.035em] font-extrabold text-white">
                    {step.title.split(" & ")[0]}
                    {step.title.includes(" & ") && (
                      <span className="block text-white/55 text-[0.64em] md:text-[1em] leading-[1.1] md:leading-[0.98] mt-1 md:mt-0">& {step.title.split(" & ")[1]}</span>
                    )}
                  </h3>
                  <p className="relative mt-6 md:mt-8 max-w-[28ch] md:max-w-[44ch] text-[19px] md:text-xl leading-relaxed text-white/75 font-light">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
