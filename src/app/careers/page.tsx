"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, ChevronDown, Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { openPositions } from "@/lib/careersData";

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modeFilter, setModeFilter] = useState("All");
  const [experienceFilter, setExperienceFilter] = useState("All");

  const [isModeOpen, setIsModeOpen] = useState(false);
  const [isExpOpen, setIsExpOpen] = useState(false);

  const modeRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modeRef.current && !modeRef.current.contains(event.target as Node)) {
        setIsModeOpen(false);
      }
      if (expRef.current && !expRef.current.contains(event.target as Node)) {
        setIsExpOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const modeOptions = [
    { label: "All Modes", value: "All" },
    { label: "Remote", value: "Remote" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "WFO", value: "WFO" },
  ];

  const expOptions = [
    { label: "All Levels", value: "All" },
    { label: "Intern (0-1 yrs)", value: "Intern" },
    { label: "Junior (1-3 yrs)", value: "Junior" },
    { label: "Senior (4+ yrs)", value: "Senior" },
  ];

  const filteredPositions = useMemo(() => {
    return openPositions.filter(pos => {
      const matchesSearch = pos.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pos.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesMode = modeFilter === "All" || pos.location.toLowerCase().includes(modeFilter.toLowerCase());
      
      const matchesExp = experienceFilter === "All" || pos.experience === experienceFilter;
      
      return matchesSearch && matchesMode && matchesExp;
    });
  }, [searchQuery, modeFilter, experienceFilter]);

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

        <hr className="border-white/10 mb-20" />

        {/* Open Positions Filter & Accordion */}
        <motion.section variants={itemVariants} className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Open Positions</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search roles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-400 outline-none focus:border-[#3275F8] focus:ring-1 focus:ring-[#3275F8] transition-all"
                />
              </div>
              
              {/* Custom Relative Dropdowns */}
              <div className="flex gap-3 w-full sm:w-auto">
                {/* Mode Filter */}
                <div className="relative w-full sm:w-36" ref={modeRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsModeOpen(!isModeOpen);
                      setIsExpOpen(false);
                    }}
                    className="w-full h-[42px] bg-white/[0.04] border border-white/10 hover:border-white/20 text-white rounded-full px-4 flex items-center justify-between text-sm outline-none focus:ring-1 focus:ring-[#3275F8] transition-all"
                  >
                    <span>{modeOptions.find(o => o.value === modeFilter)?.label || "All Modes"}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${isModeOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isModeOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-full min-w-[150px] bg-[#0E131F] border border-white/15 rounded-2xl p-1.5 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
                      >
                        {modeOptions.map(opt => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setModeFilter(opt.value);
                              setIsModeOpen(false);
                            }}
                            className={`w-full flex items-center justify-between text-left px-3 py-2 text-sm rounded-xl transition-colors ${
                              modeFilter === opt.value 
                                ? "bg-[#3275F8]/20 text-white font-medium" 
                                : "text-neutral-300 hover:bg-white/[0.06] hover:text-white"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {modeFilter === opt.value && <Check className="w-3.5 h-3.5 text-[#3275F8]" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Experience Filter */}
                <div className="relative w-full sm:w-44" ref={expRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsExpOpen(!isExpOpen);
                      setIsModeOpen(false);
                    }}
                    className="w-full h-[42px] bg-white/[0.04] border border-white/10 hover:border-white/20 text-white rounded-full px-4 flex items-center justify-between text-sm outline-none focus:ring-1 focus:ring-[#3275F8] transition-all"
                  >
                    <span>{expOptions.find(o => o.value === experienceFilter)?.label || "All Levels"}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${isExpOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isExpOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-full min-w-[170px] bg-[#0E131F] border border-white/15 rounded-2xl p-1.5 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
                      >
                        {expOptions.map(opt => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setExperienceFilter(opt.value);
                              setIsExpOpen(false);
                            }}
                            className={`w-full flex items-center justify-between text-left px-3 py-2 text-sm rounded-xl transition-colors ${
                              experienceFilter === opt.value 
                                ? "bg-[#3275F8]/20 text-white font-medium" 
                                : "text-neutral-300 hover:bg-white/[0.06] hover:text-white"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {experienceFilter === opt.value && <Check className="w-3.5 h-3.5 text-[#3275F8]" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col border-t border-white/10">
            {filteredPositions.length > 0 ? (
              filteredPositions.map((pos) => (
                <div key={pos.id} className="border-b border-white/10 group">
                  <Link
                    href={`/careers/${pos.slug}`}
                    className="w-full px-4 md:px-6 py-8 flex justify-between items-center text-left hover:bg-[#3275F8]/10 hover:border-[#3275F8]/30 border border-transparent rounded-xl transition-all duration-300 focus:outline-none"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <span className="text-lg md:text-xl font-medium text-white group-hover:text-[#3275F8] transition-colors">
                        {pos.title}
                      </span>
                      <div className="flex gap-2">
                        <span className="text-xs text-neutral-400 font-normal tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.02]">
                          {pos.location}
                        </span>
                        <span className="text-xs text-neutral-400 font-normal tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.02]">
                          {pos.experience}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#3275F8] group-hover:bg-[#3275F8] transition-colors">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="py-16 text-center">
                <p className="text-neutral-500 text-lg">No open positions match your criteria.</p>
              </div>
            )}
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
