"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hexagon, Flag, PenTool, Code2, Shield, Rocket } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Discovery & Alignment",
    description: "Deep value workshops and scope mapping to lock down exact objectives.",
    icon: Flag,
    // Desktop positioning
    left: "10%",
    top: "62.5%",
    textPosition: "bottom", // Text below the point
  },
  {
    num: "2",
    title: "Strategy & Architecture",
    description: "Creating custom technical blueprints, API designs, and database structures.",
    icon: PenTool,
    left: "30%",
    top: "37.5%",
    textPosition: "top", // Text above the point
  },
  {
    num: "3",
    title: "Bespoke Production",
    description: "Rapid, high-fidelity engineering cycles with continuous designer-led reviews.",
    icon: Code2,
    left: "50%",
    top: "62.5%",
    textPosition: "bottom",
  },
  {
    num: "4",
    title: "Hardening & Auditing",
    description: "Rigid security penetration tests, performance testing, and QA validation.",
    icon: Shield,
    left: "70%",
    top: "37.5%",
    textPosition: "top",
  },
  {
    num: "5",
    title: "Launch & Scaling",
    description: "Deployment via stable CI/CD pipelines, handover, and real-time monitoring.",
    icon: Rocket,
    left: "90%",
    top: "62.5%",
    textPosition: "bottom",
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0a0f1d] relative overflow-hidden font-sans">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-[#3275F8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[600px] h-[600px] bg-[#3275F8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-white/90 leading-[1.2]"
          >
            Our formula for <span className="text-[#3275F8]">predictable scale.</span>
          </motion.h2>
        </div>

        {/* Desktop Layout (Horizontal Wavy Timeline) */}
        <div className="hidden md:block relative w-full h-[400px]">
          
          {/* SVG Wavy Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 400" preserveAspectRatio="none">
            {/* Glowing animated line on top */}
            <motion.path
              d="M -50,200 C 50,200 50,250 150,250 C 250,250 350,150 450,150 C 550,150 650,250 750,250 C 850,250 950,150 1050,150 C 1150,150 1150,200 1250,200"
              fill="none"
              stroke="#3275F8" 
              strokeWidth="2.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 8px rgba(50,117,248,0.6))" }}
            />
          </svg>

          {/* Steps */}
          {steps.map((step, idx) => (
            <div 
              key={step.num}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: step.left, top: step.top }}
            >
              {/* Giant faded background number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.2 }}
                className="absolute text-[160px] font-bold text-white/[0.08] -z-10 select-none pointer-events-none"
                style={{
                  top: step.textPosition === 'top' ? '-50px' : '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                {step.num}
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: step.textPosition === 'top' ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.2 }}
                className={`absolute w-[240px] ${step.textPosition === 'top' ? 'bottom-[60px]' : 'top-[60px]'} left-1/2 -translate-x-1/2 text-center`}
              >
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">{step.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">{step.description}</p>
              </motion.div>

              {/* Hexagon Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.2, type: "spring", stiffness: 200 }}
                className="relative z-10 flex items-center justify-center w-14 h-14"
              >
                {/* Hexagon SVG background */}
                <svg className="absolute inset-0 w-full h-full text-[#0a0f1d] drop-shadow-[0_0_12px_rgba(50,117,248,0.5)]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" 
                    fill="currentColor"
                    stroke="#3275F8"
                    strokeWidth="2"
                  />
                </svg>
                {/* Inner Icon */}
                <step.icon className="w-5 h-5 text-[#3275F8] relative z-10" />
              </motion.div>
            </div>
          ))}

          {/* Large faded "51" or extra element as in reference (optional aesthetic) */}
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2 }}
             className="absolute -right-8 top-0 text-[100px] font-bold text-white/[0.03] select-none pointer-events-none"
          >
            51
          </motion.div>
        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="md:hidden flex flex-col gap-16 relative mt-12">
          
          {/* Vertical line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#3275F8] via-[#1e3a8a] to-transparent rounded-full" />
          
          {steps.map((step, idx) => (
            <div key={step.num} className="flex gap-8 relative z-10">
              
              {/* Hexagon Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
                className="relative z-10 flex items-center justify-center w-14 h-14 shrink-0"
              >
                <svg className="absolute inset-0 w-full h-full text-[#0a0f1d] drop-shadow-[0_0_12px_rgba(50,117,248,0.5)]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" 
                    fill="currentColor"
                    stroke="#3275F8"
                    strokeWidth="2"
                  />
                </svg>
                <step.icon className="w-5 h-5 text-[#3275F8] relative z-10" />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-1"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-white/[0.15]">{step.num}</span>
                  <h3 className="text-xl font-semibold text-white tracking-wide">{step.title}</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
