"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
  useRef,
} from "react";

export interface MagicCardProps extends ComponentProps<"div"> {
  children: ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
}

export function MagicCard({
  className,
  children,
  gradientSize = 200,
  gradientColor = "hsl(var(--primary))",
}: PropsWithChildren<MagicCardProps>) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group relative w-full bg-transparent",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionValue(
            `radial-gradient(${gradientSize}px at ${mouseX.get()}px ${mouseY.get()}px, ${gradientColor}, transparent 80%)`,
          ).get(),
        }}
      />
      {children}
    </div>
  );
}