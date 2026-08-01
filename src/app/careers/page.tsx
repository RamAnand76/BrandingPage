"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, ArrowRight, Twitter, Github, Linkedin } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

interface Position {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const openPositions: Position[] = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI / ML Engineer",
    department: "AI Engineering Services",
    type: "Full-Time",
    location: "Remote / Hybrid",
    description: "We are looking for an AI Engineer to design, build, and deploy custom agentic intelligence systems, LLM orchestration layers, and custom fine-tuned models for our clients.",
    responsibilities: [
      "Design and implement robust LLM pipelines and autonomous agentic workflows.",
      "Integrate vector databases and build highly optimized RAG/hybrid search architectures.",
      "Collaborate with product managers and designers to translate business requirements into intelligent features.",
      "Optimize model inference times and compute costs in production settings."
    ],
    requirements: [
      "4+ years of professional experience in software engineering and Machine Learning.",
      "Deep understanding of modern LLMs, Transformers, and frameworks (LangChain, LlamaIndex, LangGraph).",
      "Proficiency with Python, TypeScript, and cloud deployment engines.",
      "Strong product mindset and experience working in fast-paced startup teams."
    ]
  },
  {
    id: "full-stack-engineer",
    title: "Full Stack Product Engineer",
    department: "Product Engineering",
    type: "Full-Time",
    location: "Remote",
    description: "Join us to build high-performance web applications and responsive client dashboards utilizing Next.js, Framer Motion, and robust serverless backends.",
    responsibilities: [
      "Develop clean, modular, and reusable UI components in React, TypeScript, and TailwindCSS.",
      "Build scalable server-side systems, APIs, and real-time synchronization layers.",
      "Ensure all user interfaces are visually premium, highly interactive, and optimized for mobile devices.",
      "Optimize frontend performance, layout shift metrics (CLS), and Lighthouse scores."
    ],
    requirements: [
      "3+ years of experience with React, Next.js (App Router), and TypeScript.",
      "Strong eye for design, animations (Framer Motion, GSAP), and detail-oriented styling.",
      "Experience with PostgreSQL, Prisma/Drizzle ORM, and serverless architectures.",
      "High agency, self-directed, and passion for crafting world-class products."
    ]
  },
  {
    id: "brand-designer",
    title: "Senior Brand Identity Designer",
    department: "Branding & Creative",
    type: "Part-Time / Contract",
    location: "Remote",
    description: "We are seeking a visionary Brand Designer to shape the visual narratives, identity systems, and digital aesthetics of next-generation startups and enterprises.",
    responsibilities: [
      "Create cohesive brand books, design guidelines, typography packages, and custom logo systems.",
      "Design digital brand assets, web graphics, and interactive design prototypes.",
      "Collaborate with frontend developers to ensure accurate translation of creative concepts into code.",
      "Establish unique, high-end artistic directions for global brand launches."
    ],
    requirements: [
      "Portfolio demonstrating exceptional craft in modern typography, layout, and visual systems.",
      "Expertise in Figma, Illustrator, Photoshop, and 3D modeling tools (Spline/Blender is a big plus).",
      "Ability to articulate design rationale and present directly to enterprise stakeholders.",
      "Strong understanding of modern web trends, minimalism, and luxury aesthetics."
    ]
  }
];

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navigation />

      {/* ── HERO BANNER SECTION ── */}
      <div className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/careers-hero-bg.png"
            alt="Swirling energy light paths in blue and green representing team creativity"
            fill
            priority
            className="object-cover object-center opacity-85 scale-[1.02]"
            sizes="100vw"
          />
          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
          <div className="absolute inset-0 bg-radial-gradient" />
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 md:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white select-none leading-none"
          >
            Join Our Team
          </motion.h1>
        </div>
      </div>

      {/* ── BODY SECTIONS ── */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16 pb-4 relative z-10"
      >
        {/* What We Do */}
        <motion.section variants={itemVariants} className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">What we do</h2>
          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
            We build state-of-the-art software systems, agentic AI engines, and premium brand identities.
            We make scaling simple. Our team builds customized frameworks and interfaces that enable
            enterprises to communicate seamlessly, optimize operations, and unlock scalable growth.
          </p>
        </motion.section>

        {/* Why We Do It */}
        <motion.section variants={itemVariants} className="text-center mb-28 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">Why we do it</h2>
          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
            We want to see businesses expand their limits and scale to millions of users.
            Monolithic software doesn&apos;t keep pace with shifting markets. We craft design-driven,
            luxurious digital solutions that are easy to maintain, highly performant, and delightful to experience.
          </p>
        </motion.section>

        <hr className="border-white/10 mb-24" />

        {/* Open Positions Accordion */}
        <motion.section variants={itemVariants} className="mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-10">Open Positions</h2>

          <div className="flex flex-col border-t border-white/10">
            {openPositions.map((pos) => {
              const isExpanded = expandedId === pos.id;

              return (
                <div key={pos.id} className="border-b border-white/10">
                  <button
                    onClick={() => toggleExpand(pos.id)}
                    className="w-full py-8 flex justify-between items-center text-left hover:text-neutral-300 transition-colors group focus:outline-none"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <span className="text-lg md:text-xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                        {pos.title}
                      </span>
                      <span className="text-xs md:text-xs text-neutral-500 font-normal tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">
                        {pos.location}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                          <p className="mb-6">{pos.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-3">Responsibilities</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                {pos.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="text-neutral-400 font-light">{resp}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-3">Requirements</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                {pos.requirements.map((req, idx) => (
                                  <li key={idx} className="text-neutral-400 font-light">{req}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <a
                            href={`mailto:career@rhevez.com?subject=Application for ${pos.title}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02]"
                          >
                            Apply For This Role
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section variants={itemVariants} className="text-center mb-8 max-w-lg mx-auto">
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-4">
            If you&apos;re interested, please reach out at{" "}
            <a href="mailto:career@rhevez.com" className="text-blue-400 hover:underline">
              career@rhevez.com
            </a>.
          </p>
          <p className="text-neutral-500 font-light text-xs md:text-sm">
            We are well funded, value high autonomy, and compensate more than competitively.
          </p>
        </motion.section>

      </motion.div>

      {/* Standard Footer - Full Width */}
      <Footer />
    </div>
  );
}
