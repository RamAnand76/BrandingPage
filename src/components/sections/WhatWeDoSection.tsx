"use client";

import React from "react";
import { TECH_DATA } from "@/constants";

export const WhatWeDoSection = () => {
  // Flatten all technologies to create a single array
  const technologies = TECH_DATA.flatMap((item) => item.technologies);

  // Duplicate items to ensure seamless infinite scrolling without overloading the DOM
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden relative flex flex-col items-center justify-center min-h-[50vh]">
      <div className="container px-6 md:px-12 mx-auto max-w-[1240px] mb-14">
        <h2 className="text-[40px] md:text-[46px] font-medium tracking-normal text-center text-white/95">
          Technologies We Use
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group w-full max-w-[100vw]">
        {/* Original Marquee */}
        <div className="animate-marquee whitespace-nowrap flex shrink-0 justify-around gap-4 pr-4 min-w-full will-change-transform group-hover:[animation-play-state:paused]">
          {marqueeItems.map((tech, i) => (
            <div 
              key={`tech-1-${i}`}
              className="flex items-center gap-3 bg-[#0B1324] bg-gradient-to-b from-[#111C33] to-[#080D1A] border border-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] rounded-[8px] px-6 py-4 min-w-fit hover:border-white/10 transition-colors duration-300 transform-gpu"
            >
              <div className="w-[22px] h-[22px] flex items-center justify-center shrink-0" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="text-[15px] font-medium text-white/90 tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Clone Marquee for seamless loop */}
        <div className="animate-marquee whitespace-nowrap flex shrink-0 justify-around gap-4 pr-4 min-w-full will-change-transform group-hover:[animation-play-state:paused]" aria-hidden="true">
          {marqueeItems.map((tech, i) => (
            <div 
              key={`tech-2-${i}`}
              className="flex items-center gap-3 bg-[#0B1324] bg-gradient-to-b from-[#111C33] to-[#080D1A] border border-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] rounded-[8px] px-6 py-4 min-w-fit hover:border-white/10 transition-colors duration-300 transform-gpu"
            >
              <div className="w-[22px] h-[22px] flex items-center justify-center shrink-0" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="text-[15px] font-medium text-white/90 tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient Fades for depth */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none z-10" />
    </section>
  );
};
