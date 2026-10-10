"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TechWordmark {
  name: string;
  category?: string;
  renderLogo: () => React.ReactNode;
}

const wordmarks: TechWordmark[] = [
  {
    name: "Tailwind CSS",
    category: "Styling & UI",
    renderLogo: () => (
      <div className="flex items-center gap-3">
        {/* Tailwind Wave Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#38bdf8]"
          viewBox="0 0 54 33"
          fill="currentColor"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
        </svg>
        <span className="font-semibold text-lg sm:text-xl md:text-2xl tracking-tight text-white font-sans">
          tailwindcss
        </span>
      </div>
    ),
  },
  {
    name: "Motion",
    category: "Interactions",
    renderLogo: () => (
      <div className="flex items-center gap-3">
        {/* Motion Icon (Framer shape) */}
        <svg
          className="w-5 h-7 sm:w-6 sm:h-8 shrink-0 text-white"
          viewBox="0 0 14 21"
          fill="currentColor"
        >
          <path d="M0 0h14v7H7L0 0zm0 7h7l7 7H0V7zm0 7h7v7L0 14z" />
        </svg>
        <span className="font-semibold text-lg sm:text-xl md:text-2xl tracking-tight text-white font-sans">
          Motion
        </span>
      </div>
    ),
  },
  {
    name: "Next.js",
    category: "Fullstack Framework",
    renderLogo: () => (
      <div className="flex items-center">
        {/* Authentic Next.js typographic wordmark */}
        <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-tight text-white font-sans flex items-baseline">
          NEXT<span className="text-sm sm:text-base font-normal tracking-normal text-white/90">.js</span>
        </span>
      </div>
    ),
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Architecture",
    renderLogo: () => (
      <div className="flex items-center">
        {/* Authentic AWS wordmark + smile */}
        <svg
          className="h-6 sm:h-7 md:h-8 w-auto text-white"
          viewBox="0 0 75 45"
          fill="currentColor"
        >
          {/* "aws" letters */}
          <path d="M19.3 17.5c0 2.2-.6 3.9-1.8 5.1-1.2 1.2-2.9 1.8-5.1 1.8-1.5 0-2.8-.3-3.9-.9-.7-.4-1.2-.8-1.7-1.4v2H3.1V8.5h3.7v5.5c.5-.6 1.1-1.1 1.8-1.5 1.1-.6 2.4-.9 3.9-.9 2.2 0 3.9.6 5.1 1.8 1.1 1.2 1.7 2.8 1.7 4.1zm-3.7.1c0-1.4-.3-2.4-.9-3.1-.6-.7-1.5-1.1-2.7-1.1-1.2 0-2.1.4-2.7 1.1-.6.7-.9 1.8-.9 3.1s.3 2.4.9 3.1c.6.7 1.5 1.1 2.7 1.1 1.2 0 2.1-.4 2.7-1.1.6-.7.9-1.7.9-3.1zM38.8 12.1l-3.3 12.1h-3.4l-2.4-8.7-2.4 8.7h-3.4l-3.3-12.1h3.7l1.7 7.7 2.4-7.7h2.6l2.4 7.7 1.7-7.7h3.6zm13.4 3.7c-1-.7-2.3-1.1-3.9-1.1-1.4 0-2.4.3-3 .9-.6.6-.9 1.3-.9 2.2 0 .8.3 1.5.9 2 .6.5 1.7.9 3.3 1.2 2.3.4 4 .9 5.1 1.6 1.1.7 1.6 1.7 1.6 3 0 1.5-.6 2.7-1.8 3.6-1.2.9-2.9 1.4-5.1 1.4-1.5 0-2.9-.2-4.2-.7-1.3-.5-2.2-1.2-2.8-2.1l2.4-2.2c.5.7 1.2 1.2 2.1 1.5.9.3 1.8.5 2.7.5 1.4 0 2.5-.3 3.2-.8.7-.5 1-1.2 1-2.1 0-.9-.3-1.5-.9-2-.6-.5-1.7-.9-3.3-1.2-2.3-.4-4-.9-5.1-1.6-1.1-.7-1.6-1.7-1.6-2.9 0-1.4.6-2.5 1.7-3.4 1.1-.9 2.7-1.3 4.7-1.3 1.4 0 2.7.2 3.8.7 1.1.5 2 1.1 2.6 1.9l-2.4 2z" />
          {/* AWS Orange smile/arrow */}
          <path
            d="M5.4 33.2c9.5 5.5 21.6 8.3 33.6 8.3 16.5 0 31.8-5.3 35.8-7-.6-.8-1.5-1.6-2.4-2.4-.4.2-13.8 5.7-33.4 5.7-10.8 0-21.7-2.6-30.5-7.4-.9-.5-1.9.4-1.4 1.3 1.1 1.5.8 1.5-1.7 1.5z"
            fill="#FF9900"
          />
          <path
            d="M74.8 34.5c-.8-1-2.3-2.9-3.3-4.3-.4-.5-1-.2-.9.4.4 2.2 1.3 6.9 1.3 7.3 0 .4-2.7 1.2-4.8 2.1-.5.2-.4.8.1.9 3.2.7 7.7 0 8.1-.3.4-.3.1-4.7-.5-6.1z"
            fill="#FF9900"
          />
        </svg>
      </div>
    ),
  },
];

export const TechWordmarks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center",
        className
      )}
    >
      <div className="w-full max-w-[1240px] px-6 md:px-12 lg:px-16 mx-auto">
        {/* Clean, generous spacing matching reference aesthetic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14 md:gap-16 lg:gap-24 items-center justify-items-center py-6 sm:py-8">
          {wordmarks.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-300 transform-gpu cursor-default select-none"
              title={item.name}
            >
              {item.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
