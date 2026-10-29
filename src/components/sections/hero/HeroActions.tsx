"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const HeroActions = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 mt-8 md:mt-10 z-30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/our-works"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-neutral-200 transition-colors"
        >
          See our work
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex items-center gap-2 text-[12px] tracking-wide text-white/80">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66]" />
        Available for new projects
      </div>
    </motion.div>
  );
};
