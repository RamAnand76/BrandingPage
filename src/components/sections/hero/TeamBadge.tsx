import { motion } from "framer-motion";

export const TeamBadge = () => {
  return (
    <motion.div 
      className="flex items-center cursor-pointer group z-30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
    >
      <div className="flex flex-col text-left">
        <span className="text-[12px] font-medium text-white tracking-wide">Rhevez Team</span>
        <span className="text-[9px] text-white/50 tracking-[0.1em] mt-[2px] uppercase">ENGINEERS. BUILDERS. PARTNERS.</span>
      </div>
    </motion.div>
  );
};
