"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { GlassFold } from "@/components/ui/glass-fold";
import { ZoomLayer } from "@/components/ui/zoom-parallax";

// Zoom-parallax project wall that dissolves into a scroll-lit manifesto.
// Manifesto lines restate commitments already made in the FAQ. *word* = italic accent.
const manifesto =
  "You own *everything* we build. You see *progress* every two weeks. We scope and cost *before* we start. We test security *before* launch. And we *stay* after launch.";

const words = manifesto.split(" ").map((w) => ({
  text: w.replace(/\*/g, ""),
  accent: w.startsWith("*"),
}));

// Order matters: index 0 is the centre tile, the rest are placed around it by ZoomLayer.
const images = [
  { src: "/lovable-uploads/RhevezOS-Dashboard.png", alt: "Rhevez OS dashboard" },
  { src: "/lovable-uploads/haven.png", alt: "Haven Munnar website" },
  { src: "/lovable-uploads/script-forge.png", alt: "ScriptForge AI platform" },
  { src: "/lovable-uploads/Sleazy.png", alt: "Sleazy storefront" },
  { src: "/lovable-uploads/Code-editor compoennet-2.png", alt: "Interactive code editor" },
  { src: "/lovable-uploads/laundry.png", alt: "Enterprise laundry backend" },
  { src: "/lovable-uploads/billin-software.png", alt: "Billing and invoicing app" },
];

const stats = [
  { value: "100%", label: "of the code and IP is yours" },
  { value: "2 weeks", label: "per sprint, with live staging" },
  { value: "4 to 8 weeks", label: "for a typical custom MVP" },
];

const ZOOM_END = 0.5; // zoom phase ends here, manifesto takes over

const Word = ({
  text,
  accent,
  progress,
  from,
}: {
  text: string;
  accent: boolean;
  progress: MotionValue<number>;
  from: number;
}) => {
  const opacity = useTransform(progress, [from, from + 0.045], [0.14, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.26em] ${accent ? "italic font-serif text-[#22d3ee]" : ""}`}
    >
      {text}
    </motion.span>
  );
};

const Stats = ({ onStart }: { onStart: () => void }) => (
  <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-end">
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((s) => (
        <div key={s.value} className="border-t border-white/15 pt-4">
          <dt className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{s.value}</dt>
          <dd className="mt-1 text-[13px] text-neutral-400 leading-snug">{s.label}</dd>
        </div>
      ))}
    </dl>
    <div className="md:justify-self-end">
      <button
        onClick={onStart}
        className="flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
      >
        Start a project
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export const HowWeWork = () => {
  const { setContactModalOpen } = useContactModal();
  // The effect only moves while the visitor scrolls, so it animates for everyone by default.
  // ?motion=off switches to the static version. Read after mount so server and client markup match.
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(new URLSearchParams(window.location.search).get("motion") === "off");
  }, []);
  const ref = useRef<HTMLDivElement>(null);

  // Measured from the live rect on every scroll; useScroll's cached offsets drift when content above shifts.
  const scrollYProgress = useMotionValue(0);
  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      scrollYProgress.set(Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollYProgress, reduce]);

  const wallOpacity = useTransform(scrollYProgress, [0.34, 0.5], [1, 0]);
  const manifestoOpacity = useTransform(scrollYProgress, [0.46, 0.56], [0, 1]);
  const stageGlow = useTransform(scrollYProgress, [0.38, 0.55], [0, 1]);
  const hint = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Reduced motion: no pinning or zoom, just the statement and stats.
  if (reduce) {
    return (
      <section id="how-we-work" className="bg-black py-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#22d3ee] font-semibold">How we work</span>
          <p className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]">
            {manifesto.replace(/\*/g, "")}
          </p>
        </div>
        <Stats onStart={() => setContactModalOpen(true)} />
      </section>
    );
  }

  return (
    <section id="how-we-work" className="bg-black relative">
      <div ref={ref} style={{ height: "440vh" }} className="relative">
        {/* The site runs at html zoom 0.75 on desktop, which shrinks vh-sized blocks. Cancel it here so the stage fills the viewport. */}
        <div
          className="sticky top-0 h-screen overflow-hidden bg-black"
          style={{ zoom: "calc(1 / var(--page-zoom, 1))" }}
        >
          {/* Backdrop fades in as the project wall clears */}
          <motion.div style={{ opacity: stageGlow }} className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(37,99,235,0.3),transparent_60%)]" />
            <GlassFold
              color1="#1d4ed8"
              color2="#000000"
              color3="#22d3ee"
              speed={0.3}
              scale={0.9}
              noise={0.1}
              className="absolute inset-0 opacity-60"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
          </motion.div>

          {/* Zoom-parallax wall */}
          <motion.div style={{ opacity: wallOpacity }} className="absolute inset-0">
            <ZoomLayer images={images} progress={scrollYProgress} zoomEnd={ZOOM_END} />
          </motion.div>

          <span className="absolute top-24 left-6 md:left-12 text-[11px] tracking-[0.2em] uppercase text-[#22d3ee] font-semibold z-10">
            How we work
          </span>
          <motion.span
            style={{ opacity: hint }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.18em] uppercase text-white/60 z-10"
          >
            Scroll to keep moving
          </motion.span>

          {/* Manifesto */}
          <motion.div
            style={{ opacity: manifestoOpacity }}
            className="absolute inset-0 grid place-items-center px-6 md:px-12 z-10"
          >
            <p className="max-w-[900px] text-center text-[clamp(28px,4.6vw,60px)] leading-[1.14] tracking-[-0.025em] font-medium text-white text-balance">
              {words.map((w, i) => (
                <Word
                  key={i}
                  text={w.text}
                  accent={w.accent}
                  progress={scrollYProgress}
                  from={0.55 + (i / words.length) * 0.36}
                />
              ))}
            </p>
          </motion.div>
        </div>
      </div>

      <Stats onStart={() => setContactModalOpen(true)} />
    </section>
  );
};
