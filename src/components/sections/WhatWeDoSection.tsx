"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { TECH_DATA } from "@/constants";
import { ArrowDown, ArrowRight, ArrowLeft } from "lucide-react";

export const WhatWeDoSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden relative">
      <div className="container px-4 md:px-8 mx-auto max-w-[1400px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight flex items-center gap-3">
              Technologies We Expertise
            </h2>
          </div>

          {/* Navigation Buttons for Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TECH_DATA.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              key={item.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] h-[500px] bg-[#0A0A0A]/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 group hover:-translate-y-2 hover:border-white/10 hover:bg-[#0A0A0A]/80 transition-all duration-300"
            >
              {/* Top Section: Title */}
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-8">
                  {item.name}
                </h3>
              </div>

              {/* Middle Section: Icons */}
              <div className="flex-1 flex items-center gap-3 flex-wrap">
                {item.technologies.map((tech, i) => (
                  <div 
                    key={i} 
                    className="w-14 h-14 flex items-center justify-center bg-[#111111] border border-white/10 rounded-2xl p-3 shadow-inner hover:scale-110 transition-transform duration-300"
                    style={{ color: tech.color }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>

              {/* Bottom Section: Description & Decoration */}
              <div className="flex flex-col gap-8">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <ArrowRight className="w-4 h-4 text-white/40" />
                   </div>
                   <div className="h-[2px] w-12 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
