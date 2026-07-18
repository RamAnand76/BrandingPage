import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroFooterElements = () => {
  return (
    <>
      {/* Bottom Left */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-6 md:left-12 z-40 text-[10px] md:text-[12px] font-semibold tracking-widest text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        AVAILABLE FOR: <span className="text-[#00FF66]">DEC</span> PROJECTS
      </motion.div>

      {/* Bottom Center Menu Button */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <button className="w-12 h-12 bg-[#111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#222]/90 transition-colors">
          <Menu className="w-5 h-5 text-white/80" />
        </button>
      </motion.div>

      {/* Bottom Center Scroll Indicator (Mobile Only) */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex md:hidden flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[8px] uppercase tracking-widest text-white/50 font-semibold">Scroll to Explore</span>
      </motion.div>

      {/* Bottom Right Card */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 right-6 md:right-12 z-40 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex bg-[#111]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 h-[90px] items-center p-2 gap-2 cursor-pointer hover:bg-[#1a1a1a]/90 transition-colors w-[260px]">
          <div className="w-[100px] h-full rounded-xl overflow-hidden relative shrink-0">
            <Image src="/lovable-uploads/Code-editor compoennet-2.png" fill alt="New Project" className="object-cover opacity-50" />
          </div>
          <div className="flex-1 h-full bg-[#E5E5E5] rounded-xl p-3 flex flex-col justify-between">
            <span className="text-black font-semibold text-[11px] tracking-tight">New Project</span>
            <ArrowUpRight className="w-4 h-4 text-black self-end" />
          </div>
        </div>
      </motion.div>
    </>
  );
};
