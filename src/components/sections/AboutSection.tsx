"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Feature } from "@/components/ui/feature-with-advantages";
import { AiStreamingText } from "@/components/ui/streaming-text";

const MISSION = [
  { title: "Premium digital systems" },
  { title: "Bespoke AI agents" },
  { title: "Identity frameworks that accelerate valuation" },
];

const VISION_LEAD = "To define the gold standard of product execution";
const VISION_REST = " where advanced technology meets luxury brand design.";

// Loud, full-bleed motion behind the Vision text: a spinning light sweep, expanding rings and a drifting dot grid.
const VisionBackdrop = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 opacity-100 blur-md"
      style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(37,99,235,0.95) 14%, transparent 34%, rgba(34,211,238,0.8) 58%, transparent 76%)" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_80%_18%,rgba(37,99,235,0.75),transparent_70%),radial-gradient(ellipse_60%_50%_at_10%_90%,rgba(34,211,238,0.35),transparent_70%)]" />
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute right-[12%] top-[22%] h-72 w-72 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-[#60a5fa]"
        initial={{ scale: 0.2, opacity: 0.9 }}
        animate={{ scale: 2.4, opacity: 0 }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeOut", delay: i * 1.5 }}
      />
    ))}
    <motion.div
      className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.9)_1.2px,transparent_1.2px)] [background-size:22px_22px]"
      animate={{ backgroundPosition: ["0px 0px", "22px 22px"] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
    />
    {/* keeps the statement legible against the bright motion */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
  </div>
);

// The top of the About page (hero, statement, why us, stats) lives in AboutHero.
// One bordered panel, two halves; a soft blue spotlight follows the pointer.
const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const [leadDone, setLeadDone] = useState(false);
  const onLead = useCallback(() => setLeadDone(true), []);

  const track = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="about" className="relative pb-16 md:pb-24 bg-black">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[24px] border border-white/10"
        >
          <article
            ref={ref}
            onMouseMove={track}
            className="group relative min-h-[380px] md:min-h-[480px] p-8 md:p-12 flex flex-col justify-between overflow-hidden"
          >
            <VisionBackdrop />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(360px_circle_at_var(--mx,50%)_var(--my,50%),rgba(59,130,246,0.2),transparent_70%)]"
            />
            <span className="relative inline-flex items-center gap-2.5 text-[11px] tracking-[0.28em] uppercase text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
              Vision
            </span>
            <p
              className="relative mt-16 text-[clamp(24px,2.6vw,36px)] font-semibold leading-[1.18] tracking-[-0.025em] text-white"
              aria-label={VISION_LEAD + VISION_REST}
            >
              {/* invisible copy reserves the final height so streaming doesn't shift the layout */}
              <span aria-hidden className="invisible">
                {VISION_LEAD}
                {VISION_REST}
              </span>
              <span aria-hidden className="absolute inset-0">
                {inView && (
                  <span className="block">
                    <AiStreamingText text={VISION_LEAD} speed={28} showCursor={!leadDone} onComplete={onLead} className="inline" />
                    {leadDone && (
                      <AiStreamingText text={VISION_REST} speed={28} className="inline text-white/55" />
                    )}
                  </span>
                )}
              </span>
            </p>
          </article>
          <article
            onMouseMove={track}
            className="group relative min-h-[380px] md:min-h-[480px] p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/10 overflow-hidden flex flex-col justify-center"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(37,99,235,0.22),transparent_70%)]" />
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(360px_circle_at_var(--mx,50%)_var(--my,50%),rgba(59,130,246,0.18),transparent_70%)]"
            />
            <Feature className="relative" badge="Mission" title="Equipping hyper-growth teams with" advantages={MISSION} />
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
