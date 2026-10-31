"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Zap, Lock, ShieldCheck, PenTool, Users, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
const GradientBlinds = dynamic(() => import("@/components/ui/GradientBlinds"), { ssr: false });

// Existing copy from the About page; nothing new is claimed here.
const STATEMENT =
  "Rhevez was founded on a simple truth: premium engineering and world-class design must live under one roof.";
const VALUES = [
  { t: "Execution", d: "No bloated timelines or generic code. We ship production-grade work." },
  { t: "Design-first", d: "Engineering and world-class design under one roof, never handed off." },
  { t: "Direct partnership", d: "You work with the people building it. No communication layers." },
  { t: "Built to scale", d: "Digital products made to command attention and grow with you." },
];
const STATS = [
  { n: 10, suffix: "+", label: "Projects completed" },
  { n: 3, suffix: "+", label: "Satisfied clients" },
  { n: 7, suffix: "", label: "Services, concept to launch" },
];

const Tile = ({ children, className = "", float = false }: { children: React.ReactNode; className?: string; float?: boolean }) => (
  <motion.span
    className={`absolute grid place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white ${className}`}
    animate={float ? { y: [0, -8, 0] } : undefined}
    transition={float ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
  >
    {children}
  </motion.span>
);

// Small Zenox-style backdrop per card: a lit centre tile, flanking tilted tiles and a faint pattern.
const CardArt = ({ kind }: { kind: number }) => (
  <div aria-hidden className="relative h-[150px] overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_50%_40%,rgba(59,130,246,0.30),rgba(3,3,10,0.9)_70%)]">
    <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    {kind === 0 && (
      <>
        <Tile className="left-[22%] top-[34%] w-14 h-14 -rotate-12 opacity-70 transition-transform duration-500 group-hover:-translate-x-2"><Lock className="w-5 h-5" /></Tile>
        <Tile className="right-[22%] top-[34%] w-14 h-14 rotate-12 opacity-70 transition-transform duration-500 group-hover:translate-x-2"><ShieldCheck className="w-5 h-5" /></Tile>
        <Tile float className="left-1/2 top-[22%] -translate-x-1/2 w-[76px] h-[76px] bg-gradient-to-br from-[#2563eb] to-[#22d3ee] shadow-[0_0_40px_rgba(37,99,235,0.6)]"><Zap className="w-8 h-8" /></Tile>
      </>
    )}
    {kind === 1 && (
      <>
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2, 3, 4].flatMap((c) => [0, 1, 2].map((rw) => (
            <polygon key={`${c}-${rw}`} points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11" transform={`translate(${40 + c * 55 + (rw % 2) * 27} ${22 + rw * 48})`} fill="none" stroke="rgba(147,197,253,0.5)" />
          )))}
        </svg>
        <Tile className="left-1/2 top-[24%] -translate-x-1/2 w-[72px] h-[72px] rotate-45 bg-gradient-to-br from-[#2563eb] to-[#22d3ee] shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-transform duration-700 group-hover:rotate-[135deg]">
          <PenTool className="w-7 h-7 -rotate-45 transition-transform duration-700 group-hover:-rotate-[135deg]" />
        </Tile>
      </>
    )}
    {kind === 2 && (
      <>
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[78%] w-24 h-24 rounded-full border border-[#3b82f6]/60 bg-[#2563eb]/15 transition-transform duration-700 group-hover:-translate-x-[92%]" />
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[22%] w-24 h-24 rounded-full border border-[#22d3ee]/60 bg-[#22d3ee]/10 transition-transform duration-700 group-hover:-translate-x-[8%]" />
        <Tile float className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-[#2563eb] to-[#22d3ee] shadow-[0_0_30px_rgba(37,99,235,0.6)]"><Users className="w-6 h-6" /></Tile>
      </>
    )}
    {kind === 3 && (
      <>
        <div className="absolute inset-x-[18%] bottom-0 flex items-end justify-between gap-2 h-[70%]">
          {[28, 42, 58, 76, 100].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t-md border border-b-0 border-[#3b82f6]/40 bg-gradient-to-t from-[#2563eb]/10 to-[#22d3ee]/35 origin-bottom transition-transform duration-500 group-hover:scale-y-[1.08]" />
          ))}
        </div>
        <Tile float className="left-1/2 top-[14%] -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] shadow-[0_0_30px_rgba(37,99,235,0.6)]"><TrendingUp className="w-5 h-5" /></Tile>
      </>
    )}
  </div>
);

const Eyebrow = ({ children }: { children: string }) => (
  <span className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.28em] uppercase text-white/70">
    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
    {children}
  </span>
);

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / 1400);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <strong ref={ref as React.RefObject<HTMLElement>}>
      {v}
      {suffix}
    </strong>
  );
};

export const AboutHero = () => {
  const stRef = useRef<HTMLElement>(null);
  const [lit, setLit] = useState(0);
  const words = useMemo(() => STATEMENT.split(" "), []);
  // ogl throws when WebGL is unavailable, so only mount the shader once a context is confirmed.
  const [gl, setGl] = useState(false);
  useEffect(() => {
    try {
      setGl(!!document.createElement("canvas").getContext("webgl"));
    } catch {
      setGl(false);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const r = stRef.current?.getBoundingClientRect();
      if (!r) return;
      const h = window.innerHeight;
      const p = Math.min(1, Math.max(0, (h * 0.85 - r.top) / (h * 0.85 + r.height * 0.2)));
      setLit(Math.round(p * words.length * 1.12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [words.length]);

  return (
    <div className="bg-black font-sans">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        {/* HERO */}
        <header
          className="relative isolate overflow-hidden rounded-[28px] md:rounded-[34px] border border-white/10 px-6 md:px-14 py-16 md:py-24 flex flex-col justify-center"
          style={{ minHeight: "calc(78vh / var(--page-zoom, 1))" }}
        >
          {/* Interactive WebGL: the blinds' spotlight follows the pointer */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_75%_30%,rgba(37,99,235,0.45),transparent_70%)]" />
          {gl && (
          <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full md:w-[68%] [mask-image:linear-gradient(to_right,transparent,black_55%)]">
          <GradientBlinds
            className="absolute inset-0 -z-10 opacity-80"
            gradientColors={["#1d4ed8", "#3b82f6", "#22d3ee"]}
            angle={20}
            noise={0.25}
            blindCount={14}
            spotlightRadius={0.45}
            spotlightOpacity={0.9}
            mouseDampening={0.2}
            dpr={1}
            distortAmount={0}
          />
          </div>
          )}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.3)_50%,rgba(0,0,0,0))]" />
          <div className="pointer-events-none">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Eyebrow>About Rhevez</Eyebrow>
          </motion.div>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(44px,7.4vw,108px)] leading-[0.98] font-extrabold tracking-[-0.045em] text-white">
            {["The standard is broken.", "We rebuilt it."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <motion.span
                  className={`block ${i ? "text-white/70" : ""}`}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-7 max-w-[46ch] text-base md:text-lg leading-relaxed text-white/70"
          >
            Most agencies sell hours; we deliver market dominance. Premium engineering and world-class design, under one roof.
          </motion.p>
          </div>
        </header>

        {/* REAL WORK IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[24px] border border-white/10 aspect-[16/8]"
        >
          <Image
            src="/lovable-uploads/haven.png"
            alt="Selected Rhevez project"
            fill
            sizes="(min-width:1240px) 1140px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute left-5 bottom-4 text-[11px] tracking-[0.2em] uppercase text-white/70">
            Haven | Munnar — selected work
          </span>
        </motion.div>

        {/* STATEMENT */}
        <section ref={stRef} className="max-w-[1000px] py-16 md:py-24">
          <Eyebrow>Our approach</Eyebrow>
          <p className="mt-5 text-[clamp(28px,4.4vw,60px)] font-semibold tracking-[-0.03em] leading-[1.12]" aria-label={STATEMENT}>
            {words.map((w, i) => (
              <span key={i} aria-hidden className={`transition-colors duration-500 ${i < lit ? "text-white" : "text-white/25"}`}>
                {w}{" "}
              </span>
            ))}
          </p>
        </section>

        {/* WHY US */}
        <section className="pb-16 md:pb-20">
          <Eyebrow>Why us</Eyebrow>
          <h2 className="mt-5 max-w-[18ch] text-[clamp(34px,6vw,76px)] font-extrabold tracking-[-0.035em] leading-[1.02]">
            Why teams choose <span className="text-white/45">Rhevez</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                className={`${i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"} group relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-3 flex flex-col hover:border-[#3b82f6]/40 transition-colors duration-500`}
              >
                <CardArt kind={i} />
                <div className="px-4 pt-6 pb-5">
                  <span className="block w-8 h-px mb-4 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee]" />
                  <h3 className="text-xl font-bold tracking-tight text-white">{v.t}</h3>
                  <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-white/60">{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-[20px] border border-white/10">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col justify-end min-h-[190px] md:min-h-[230px] p-7 md:p-9 ${
                  i ? "border-t sm:border-t-0 sm:border-l border-white/10" : ""
                }`}
              >
                <div>
                  <div className="text-[clamp(56px,6.4vw,96px)] font-extrabold tracking-[-0.05em] leading-none text-white">
                    <CountUp to={s.n} suffix={s.suffix} />
                  </div>
                  <span className="mt-4 block min-h-[3.5rem] text-[12px] leading-[1.5] tracking-[0.2em] uppercase text-white/60">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
