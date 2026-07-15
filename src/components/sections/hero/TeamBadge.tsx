import { motion } from "framer-motion";
import Image from "next/image";

export const TeamBadge = () => {
  return (
    <motion.div 
      className="flex items-center gap-4 cursor-pointer group z-30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
    >
      <div className="flex -space-x-2">
        <div className="w-10 h-10 rounded-full border border-[#3275F8]/50 overflow-hidden relative z-20 group-hover:border-[#3275F8] transition-colors">
          <Image src="/lovable-uploads/Ramanand.jpg" alt="Team Member 1" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="w-10 h-10 rounded-full border border-[#3275F8]/50 overflow-hidden relative z-10 group-hover:border-[#3275F8] transition-colors">
          <Image src="/lovable-uploads/Jithu.jpg" alt="Team Member 2" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[12px] font-medium text-white tracking-wide">Rhevez Team</span>
        <span className="text-[9px] text-white/50 tracking-[0.1em] mt-[2px] uppercase">ENGINEERS. BUILDERS. PARTNERS.</span>
      </div>
    </motion.div>
  );
};
