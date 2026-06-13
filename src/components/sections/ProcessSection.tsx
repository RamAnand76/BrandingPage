"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, BrainCircuit, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Strategy & Architecture",
    description: "Deep scoping sessions, technical blueprinting, database schema modeling, and detailed API cost/latency estimations for LLM services.",
    icon: <Search className="w-6 h-6 text-primary" />,
    color: "from-primary/20 to-transparent",
    borderColor: "group-hover:border-primary/30"
  },
  {
    num: "02",
    title: "Agile Development",
    description: "Rapid development in bi-weekly sprints. We deliver staging site builds continuously, keeping you close to the codebase and in absolute control.",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    color: "from-blue-500/10 to-transparent",
    borderColor: "group-hover:border-blue-500/30"
  },
  {
    num: "03",
    title: "AI Integration & QA",
    description: "Model fine-tuning, prompt engineering optimization, fallback routing, and rigorous latency testing to ensure zero bottleneck outputs.",
    icon: <BrainCircuit className="w-6 h-6 text-purple-500" />,
    color: "from-purple-500/10 to-transparent",
    borderColor: "group-hover:border-purple-500/30"
  },
  {
    num: "04",
    title: "Launch & Support",
    description: "Deploying via optimized CI/CD pipelines, handing over full documentation, and providing SLA-backed post-launch maintenance packages.",
    icon: <Rocket className="w-6 h-6 text-emerald-500" />,
    color: "from-emerald-500/10 to-transparent",
    borderColor: "group-hover:border-emerald-500/30"
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-4"
          >
            <span className="text-[11px] font-medium text-primary">🛠️ Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-white/95"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mt-3 font-light leading-relaxed"
          >
            A clear, battle-tested framework structured to eliminate risk and deliver production-grade software.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-[#090909] border border-white/[0.04] rounded-3xl p-6 md:p-8 hover:bg-[#0c0c0c] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-between min-h-[280px]"
            >
              {/* Top Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

              <div>
                {/* Step Icon and Number */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold font-mono text-white/10 group-hover:text-white/20 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-xl font-medium text-white mb-3 relative z-10 group-hover:text-primary-foreground transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-light relative z-10 group-hover:text-neutral-300 transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Decorative line linking to next step on large screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
