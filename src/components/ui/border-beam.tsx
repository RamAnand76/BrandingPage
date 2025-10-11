
"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  delay = 0,
  colorFrom,
  colorTo,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--delay": -delay,
          "--border-width": borderWidth,
          "--color-from": colorFrom || "hsl(var(--primary))",
          "--color-to": colorTo || "hsl(var(--secondary))",
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo-elements styles
        "after:animate-border-beam after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_100%_100%_0_round_calc(var(--radius)-var(--border-width)))]",
        className
      )}
    />
  );
};
