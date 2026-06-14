"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Define",
    description: "Deep scoping sessions, technical blueprinting, database schema modeling, and detailed API cost/latency estimations for LLM services.",
    color: "from-[#22c55e]/15 to-transparent",
    textColor: "text-[#22c55e]",
    ledColor: "bg-[#22c55e] shadow-[0_0_12px_#22c55e]",
    borderColor: "border-[#22c55e]/20 hover:border-[#22c55e]/50",
    shadowColor: "shadow-2xl shadow-[#22c55e]/5 hover:shadow-[#22c55e]/15",
    bgColor: "bg-[#F0FDF4]", // Soft light mint green
    rotate: -3,
  },
  {
    num: "02",
    title: "Design",
    description: "Crafting modern user experiences, high-fidelity interactive prototypes, and custom interface layouts tailored to your unique brand identity.",
    color: "from-[#3b82f6]/10 to-transparent",
    textColor: "text-[#3b82f6]",
    ledColor: "bg-[#3b82f6] shadow-[0_0_12px_#3b82f6]",
    borderColor: "border-[#3b82f6]/20 hover:border-[#3b82f6]/50",
    shadowColor: "shadow-2xl shadow-[#3b82f6]/5 hover:shadow-[#3b82f6]/15",
    bgColor: "bg-[#EFF6FF]", // Soft light blue
    rotate: 2,
  },
  {
    num: "03",
    title: "Build",
    description: "Developing with clean, typed code in two-week agile cycles. Integrating scalable backend services and responsive client UI components.",
    color: "from-[#a855f7]/10 to-transparent",
    textColor: "text-[#a855f7]",
    ledColor: "bg-[#a855f7] shadow-[0_0_12px_#a855f7]",
    borderColor: "border-[#a855f7]/20 hover:border-[#a855f7]/50",
    shadowColor: "shadow-2xl shadow-[#a855f7]/5 hover:shadow-[#a855f7]/15",
    bgColor: "bg-[#FAF5FF]", // Soft light purple
    rotate: -2,
  },
  {
    num: "04",
    title: "Launch",
    description: "Deploying through robust automated CI/CD pipelines, handing over full credentials, and establishing post-launch support SLA agreements.",
    color: "from-[#06b6d4]/10 to-transparent",
    textColor: "text-[#06b6d4]",
    ledColor: "bg-[#06b6d4] shadow-[0_0_12px_#06b6d4]",
    borderColor: "border-[#06b6d4]/20 hover:border-[#06b6d4]/50",
    shadowColor: "shadow-2xl shadow-[#06b6d4]/5 hover:shadow-[#06b6d4]/15",
    bgColor: "bg-[#ECFEFF]", // Soft light cyan
    rotate: 3,
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Dashed flow animation style wrapper */}
      <style>{`
        @keyframes dashed-flow {
          from {
            stroke-dashoffset: 120;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flowing-dashed-path {
          animation: dashed-flow 25s linear infinite;
        }
        .font-caveat {
          font-family: 'Caveat', cursive;
        }
      `}</style>

      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* SVG Connecting Timeline Path matching the reference spline curve perfectly */}
      <div className="absolute inset-0 max-w-[1240px] mx-auto px-6 md:px-8 pointer-events-none z-0 hidden lg:block">
        <svg className="w-full h-full stroke-neutral-800/80 fill-none" viewBox="0 0 1200 1350" preserveAspectRatio="none">
          <path
            d="M 250,180 C 600,100 950,120 950,220 C 950,420 250,380 250,580 C 250,780 950,720 950,920 C 950,1120 250,1060 250,1220 C 250,1280 400,1280 650,1280"
            stroke="url(#path-glow-gradient)"
            strokeWidth="3"
            strokeDasharray="10 10"
            className="flowing-dashed-path"
          />
          <defs>
            <linearGradient id="path-glow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Responsive Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-24 gap-x-12 items-stretch">
          
          {/* Row 1: Left - Header Block */}
          <div className="flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-5 w-max"
            >
              <span className="text-[10px] sm:text-[11px] font-medium text-primary uppercase tracking-wider">How we work</span>
            </motion.div>
            
            <div className="relative max-w-lg">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl lg:text-[46px] font-medium tracking-tight text-white leading-tight"
              >
                Let us show you how we drive your brand to new heights
              </motion.h2>

              {/* Hand-drawn Mockup Arrow */}
              <svg className="absolute -right-8 -bottom-14 w-14 h-14 text-primary/45 hidden lg:block transform rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 15,15 C 45,15 75,35 65,70" strokeDasharray="3 3" />
                <path d="M 52,62 L 65,70 L 73,56" />
              </svg>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-sm md:text-base mt-6 font-light leading-relaxed max-w-md"
            >
              A clear, collaborative roadmap mapped out to transform concepts into highly scalable, production-ready systems.
            </motion.p>
          </div>

          {/* Row 1: Right - Card 1: Define */}
          <div className="flex justify-center lg:justify-end items-center">
            <ProcessCard step={steps[0]} idx={0} />
          </div>

          {/* Row 2: Left - Card 2: Design */}
          <div className="flex justify-center lg:justify-start items-center">
            <ProcessCard step={steps[1]} idx={1} />
          </div>

          {/* Row 2: Right - Spacer */}
          <div className="hidden lg:block" />

          {/* Row 3: Left - Spacer */}
          <div className="hidden lg:block" />

          {/* Row 3: Right - Card 3: Build */}
          <div className="flex justify-center lg:justify-end items-center">
            <ProcessCard step={steps[2]} idx={2} />
          </div>

          {/* Row 4: Left - Card 4: Launch */}
          <div className="flex justify-center lg:justify-start items-center">
            <ProcessCard step={steps[3]} idx={3} />
          </div>

          {/* Row 4: Right - Ready to be delivered! */}
          <div className="flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2.5 font-caveat text-3xl md:text-4xl text-neutral-400 tracking-wide pt-8 lg:pt-0 lg:pl-16 relative"
            >
              <span>Ready to be delivered!</span>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

interface ProcessCardProps {
  step: typeof steps[0];
  idx: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ step, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: step.rotate }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.03, 
        rotate: step.rotate * 0.4,
        y: -4,
        transition: { duration: 0.25 }
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-[420px] ${step.bgColor} border rounded-[2.5rem] p-7 md:p-8 flex flex-col justify-between min-h-[260px] shadow-2xl pt-14 transform-gpu transition-all duration-300 ${step.borderColor} ${step.shadowColor}`}
    >
      {/* Top Center Grommet Ring - Dark to contrast with the light card */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-20">
        <div className={`w-2.5 h-2.5 rounded-full ${step.ledColor} animate-pulse`} />
      </div>

      {/* Top Gradient Inner Shadow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none`} />

      <div className="relative z-10">
        {/* Step Info */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className={`text-sm font-bold font-mono ${step.textColor}`}>
            {step.num}
          </span>
          <h3 className="text-2xl font-medium text-neutral-900 tracking-tight">
            {step.title}
          </h3>
        </div>

        {/* Lighter Labeled Description Frame */}
        <div className="bg-white/60 border border-white/80 rounded-2xl p-4 mt-2">
          <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
