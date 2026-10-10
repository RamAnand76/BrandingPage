"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TechWordmarkItem {
  name: string;
  src?: string;
  width?: number;
  height?: number;
  customComponent?: React.ReactNode;
}

const techLogos: TechWordmarkItem[] = [
  {
    name: "Tailwind CSS",
    src: "/tech-logos/tailwind.svg",
    width: 220,
    height: 33,
  },
  {
    name: "Motion",
    customComponent: (
      <div className="flex items-center gap-3 select-none">
        {/* Official Framer Motion geometric mark from image */}
        <svg
          className="w-5 h-7 sm:w-6 sm:h-8 shrink-0 text-white"
          viewBox="0 0 14 21"
          fill="currentColor"
        >
          <path d="M0 0h14v7H7L0 0zm0 7h7l7 7H0V7zm0 7h7v7L0 14z" />
        </svg>
        <span className="font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight text-white font-sans">
          Motion
        </span>
      </div>
    ),
  },
  {
    name: "Next.js",
    src: "/tech-logos/nextjs.svg",
    width: 150,
    height: 32,
  },
  {
    name: "Amazon Web Services",
    src: "/tech-logos/aws.svg",
    width: 95,
    height: 57,
  },
];

export const TechWordmarksMarquee = ({ className }: { className?: string }) => {
  // Triple array to guarantee a seamless, infinite looping marquee across all screen sizes
  const marqueeItems = [...techLogos, ...techLogos, ...techLogos];

  return (
    <div
      className={cn(
        "relative flex overflow-x-hidden group w-full py-6 select-none",
        className
      )}
    >
      {/* Track 1 */}
      <div className="animate-marquee whitespace-nowrap flex shrink-0 items-center justify-around gap-16 sm:gap-24 md:gap-32 min-w-full will-change-transform group-hover:[animation-play-state:paused]">
        {marqueeItems.map((tech, i) => (
          <div
            key={`logo-1-${tech.name}-${i}`}
            className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
            title={tech.name}
          >
            {tech.customComponent ? (
              tech.customComponent
            ) : tech.src ? (
              <div className="relative flex items-center justify-center h-8 sm:h-10">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={tech.width || 140}
                  height={tech.height || 40}
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain pointer-events-none"
                  priority={i < 4}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Track 2 (Clone for seamless loop) */}
      <div
        className="animate-marquee whitespace-nowrap flex shrink-0 items-center justify-around gap-16 sm:gap-24 md:gap-32 min-w-full will-change-transform group-hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {marqueeItems.map((tech, i) => (
          <div
            key={`logo-2-${tech.name}-${i}`}
            className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
            title={tech.name}
          >
            {tech.customComponent ? (
              tech.customComponent
            ) : tech.src ? (
              <div className="relative flex items-center justify-center h-8 sm:h-10">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={tech.width || 140}
                  height={tech.height || 40}
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain pointer-events-none"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Smooth Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-44 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-44 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};
