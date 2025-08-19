"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AuroraText({
  children,
  className = "",
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  speed = 1,
}: AuroraTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block bg-gradient-to-r bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors.join(", ")})`,
        backgroundSize: "400% 400%",
      }}
    >
      <motion.span
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3 / speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="bg-gradient-to-r bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(45deg, ${colors.join(", ")})`,
          backgroundSize: "400% 400%",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}