"use client";

import React from "react";
import { TechWordmarksMarquee } from "./TechWordmarksMarquee";

export const WhatWeDoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white overflow-hidden relative flex flex-col items-center justify-center">
      <div className="container px-6 md:px-12 lg:px-16 mx-auto max-w-[1240px] mb-12 md:mb-16">
        <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-[-0.035em] text-center text-white">
          Technologies We Use
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          Modern, high-performance foundation power behind every product we build.
        </p>
      </div>

      <div className="w-full">
        <TechWordmarksMarquee />
      </div>
    </section>
  );
};
