"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/context/ContactModalContext";
import { ServiceMotion, type SceneKind } from "./ServiceMotion";

// Services and copy come from Rhevez-Services-Carousel-Square.pdf.
const services: {
  id: string;
  title: string;
  hook: string;
  description: string;
  tags: string[];
  accent: string;
  scene: SceneKind;
}[] = [
  {
    id: "01",
    title: "Web & Mobile",
    hook: "Sites that earn their keep. Apps one tap away.",
    description:
      "Your website is your first hire: it's there before the sales call. We build fast, secure sites and web apps that turn clicks into customers. And people live in their apps. A well-built Android and iOS app keeps you on their home screen and brings them back.",
    tags: ["Websites", "Web apps", "Android", "iOS"],
    accent: "#3b82f6",
    scene: "web",
  },
  {
    id: "02",
    title: "AI & Automation",
    hook: "Let the busywork run itself.",
    description:
      "Repetitive tasks eat your team's day. We build AI assistants and automations that handle them, so your people can focus on growth.",
    tags: ["Chatbots", "Workflows", "AI agents"],
    accent: "#22d3ee",
    scene: "ai",
  },
  {
    id: "03",
    title: "Cybersecurity",
    hook: "Sleep easy, locked down.",
    description:
      "One breach can cost you customers and trust. We find the weak spots, fix them and keep watching, so your business stays protected.",
    tags: ["Audits", "Pen testing", "Monitoring"],
    accent: "#34d399",
    scene: "security",
  },
  {
    id: "04",
    title: "Product Engineering",
    hook: "Napkin sketch to real product.",
    description:
      "Good ideas die in bad builds. We engineer the MVP first, then the scale, so you never pay for the same product twice.",
    tags: ["Idea", "MVP", "Scale"],
    accent: "#818cf8",
    scene: "product",
  },
  {
    id: "05",
    title: "Graphic Design",
    hook: "Look like you mean it.",
    description:
      "People decide in seconds. Sharp posters and visuals earn trust before anyone reads a word.",
    tags: ["Graphic design", "Posters"],
    accent: "#a78bfa",
    scene: "graphic",
  },
  {
    id: "06",
    title: "Motion Graphics",
    hook: "Give your message momentum.",
    description:
      "A feed rewards movement. Short motion pieces explain your offer fast, and people remember what moved.",
    tags: ["Motion graphics", "Video"],
    accent: "#2dd4bf",
    scene: "motion",
  },
  {
    id: "07",
    title: "NextGen Commercials",
    hook: "Ads built for how people watch now.",
    description:
      "Skippable is the default now. We make commercials for vertical, fast viewing, so your brand gets watched, not skipped.",
    tags: ["Vertical", "Fast cuts", "Scroll-stopping"],
    accent: "#f87171",
    scene: "ads",
  },
];

export const ExpertServices = () => {
  const { setContactModalOpen } = useContactModal();
  const reduce = useReducedMotion() ?? false;
  const [open, setOpen] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden">
      <div className="absolute -top-40 right-[10%] w-[560px] h-[560px] rounded-full bg-[#2563eb]/[0.08] blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 text-[11px] md:text-xs tracking-[0.28em] uppercase text-white/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
            What we do
          </div>
          <h2 className="mt-5 text-[clamp(34px,6vw,76px)] leading-[1.02] tracking-[-0.035em] font-extrabold text-white max-w-[16ch]">
            Concept to <span className="text-white/55">global launch.</span>
          </h2>
        </div>

        <div>
          {services.map((s) => {
            const isOpen = open === s.id;
            const on = isOpen || hover === s.id;
            return (
              <div
                key={s.id}
                className="relative border-b border-white/10 first:border-t"
                onPointerEnter={(e) => e.pointerType === "mouse" && setHover(s.id)}
                onPointerLeave={() => setHover(null)}
              >
                {/* Glowing hairline, wider while the row is alive */}
                <span
                  className="absolute left-0 top-0 h-px transition-all duration-700 ease-out"
                  style={{
                    width: on ? "18rem" : "5rem",
                    opacity: on ? 1 : 0.55,
                    background: `linear-gradient(90deg, ${s.accent}, transparent)`,
                    boxShadow: `0 0 14px ${s.accent}`,
                  }}
                />

                {/* Ambient motion graphic */}
                <AnimatePresence>
                  {on && (
                    <motion.div
                      key="scene"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{ color: s.accent }}
                    >
                      <div className="absolute inset-0 opacity-[0.55] md:opacity-[0.42]">
                        <ServiceMotion kind={s.scene} reduce={reduce} />
                      </div>
                      {/* Keeps the text readable: strong on the left on desktop, a light veil on phones */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent md:from-black md:via-black/55" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`service-${s.id}`}
                  onClick={() => setOpen((p) => (p === s.id ? null : s.id))}
                  className="relative z-10 w-full text-left py-7 md:py-10 grid grid-cols-[auto_1fr_auto] md:grid-cols-[64px_minmax(260px,0.95fr)_1.05fr_auto] items-baseline gap-x-4 md:gap-x-8 gap-y-2"
                >
                  <span className="text-xs md:text-sm tracking-[0.18em] transition-colors" style={{ color: on ? s.accent : "rgba(255,255,255,0.4)" }}>
                    {s.id}
                  </span>
                  <h3 className="text-[26px] md:text-[40px] leading-[1.05] font-extrabold tracking-tight text-white">{s.title}</h3>
                  <p className="col-start-2 md:col-start-3 col-span-2 md:col-span-1 text-[15px] md:text-lg text-white/60 md:text-right font-light">
                    {s.hook}
                  </p>
                  <span
                    className={cn(
                      "col-start-3 md:col-start-4 row-start-1 self-center w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all duration-500",
                      isOpen && "rotate-45"
                    )}
                    style={on ? { borderColor: s.accent, color: s.accent } : undefined}
                  >
                    {isOpen ? <Plus className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-${s.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                      className="relative z-10 overflow-hidden"
                    >
                      <div className="pb-9 md:pb-12 md:pl-[96px] flex flex-col gap-6 max-w-3xl">
                        <p className="text-neutral-200 text-base md:text-xl font-light leading-relaxed">{s.description}</p>
                        <ul className="flex flex-wrap gap-2">
                          {s.tags.map((t) => (
                            <li
                              key={t}
                              className="px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] md:text-xs tracking-[0.14em] uppercase text-white/75"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => setContactModalOpen(true)}
                          className="self-start flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-neutral-200 transition-colors"
                        >
                          Start a project
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Got an idea? <span className="text-white/55">Let&apos;s launch.</span>
          </p>
          <p className="text-sm md:text-base text-white/55 font-light">From concept to global launch.</p>
        </div>
      </div>
    </section>
  );
};
