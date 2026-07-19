import { motion } from 'framer-motion';

export const GridLines = () => {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      {/* Horizontal guide line top */}
      <div className="absolute top-[7.5vh] md:top-[10vh] w-full h-[1px] bg-white/[0.05]" />
      {/* Horizontal guide line bottom */}
      <div className="absolute bottom-[7.5vh] md:bottom-[10vh] w-full h-[1px] bg-white/[0.05]" />
      {/* Vertical guide line left */}
      <div className="absolute left-4 md:left-12 top-0 w-[1px] h-full bg-white/[0.05]" />
      {/* Vertical guide line right */}
      <div className="absolute right-4 md:right-12 top-0 w-[1px] h-full bg-white/[0.05]" />
    </motion.div>
  );
};
