import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroFooterElements = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  return (
    <>
      {/* Bottom Left - Desktop only (mobile version is inside the frame) */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-6 md:left-12 z-40 text-[10px] md:text-[12px] font-semibold tracking-widest text-white/60 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        AVAILABLE FOR: <span className="text-[#00FF66]">DEC</span> PROJECTS
      </motion.div>
    </>
  );
};
