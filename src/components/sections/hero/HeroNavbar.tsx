import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const HeroNavbar = () => {
  return (
    <motion.nav 
      className="w-full flex items-center justify-between px-6 md:px-12 py-8 absolute top-0 left-0 z-50 pointer-events-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 relative">
            <Image src="/lovable-uploads/logo.png" alt="Rhevez Logo" fill className="object-contain" />
          </div>
          <div className="w-24 h-6 relative hidden sm:block">
            <Image src="/text-white.png" alt="Rhevez" fill className="object-contain object-left" />
          </div>
        </div>
        <div className="h-4 w-[1px] bg-white/20 hidden lg:block" />
        <span className="text-[12px] font-medium text-white/70 hidden lg:block tracking-wide">
          AI <span className="text-[#3275F8]">powered.</span> Human <span className="text-[#00FF66]">focused.</span>
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.15em] font-semibold uppercase text-white/90">
        <span className="cursor-pointer hover:text-white transition-colors">WORKS</span>
        <span className="text-white/20">/</span>
        <span className="cursor-pointer hover:text-white transition-colors">SERVICES</span>
        <span className="text-white/20">/</span>
        <span className="cursor-pointer hover:text-white transition-colors">ABOUT</span>
        <span className="text-white/20">/</span>
        <span className="cursor-pointer hover:text-white transition-colors">INSIGHTS</span>
        
        <button className="flex items-center gap-2 ml-4 px-6 py-3 rounded-md border border-white/20 hover:border-[#3275F8]/50 hover:shadow-[0_0_15px_rgba(50,117,248,0.3)] transition-all bg-black/50 backdrop-blur-md">
          CONTACT US
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.nav>
  );
};
