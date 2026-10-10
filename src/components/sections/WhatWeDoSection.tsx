"use client";

import React from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

export const WhatWeDoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white overflow-hidden relative flex flex-col items-center justify-center">
      <div className="container px-6 md:px-12 lg:px-16 mx-auto max-w-[1240px] mb-12 md:mb-16">
        <h2 className="text-[36px] md:text-[46px] font-medium tracking-tight text-center text-white/95">
          Technologies We Use
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          Modern, battle-tested tools and foundational platforms we leverage to build world-class products.
        </p>
      </div>

      <div className="w-full max-w-[1240px] px-6 md:px-12 lg:px-16 mx-auto">
        <LogoCloud />
      </div>
    </section>
  );
};
