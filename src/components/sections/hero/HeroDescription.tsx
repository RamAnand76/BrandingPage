import { motion } from "framer-motion";

export const HeroDescription = () => {
  return (
    <motion.div 
      className="max-w-[460px] z-30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
    >
      <p className="text-[11px] md:text-[13px] leading-[1.8] text-white/80 uppercase tracking-wide font-medium text-left md:text-center max-w-[280px] md:max-w-none">
        We build complete digital products<br className="hidden md:block" />
        that help businesses grow, operate<br className="hidden md:block" />
        smarter and stay ahead.
      </p>
    </motion.div>
  );
};
