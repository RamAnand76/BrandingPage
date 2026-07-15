import { motion } from "framer-motion";

export const Signature = () => {
  return (
    <motion.div 
      className="absolute right-[-10%] bottom-[10%] md:bottom-[15%] z-40 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.6 }}
    >
      <svg 
        width="800" 
        height="300" 
        viewBox="0 0 800 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-[400px] md:w-[600px] lg:w-[850px] h-auto drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="sig-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3275F8" />
            <stop offset="100%" stopColor="#00FF66" />
          </linearGradient>
        </defs>
        {/* Big "R" */}
        <motion.path 
          d="M 150 180 C 180 180, 220 150, 240 100 C 260 50, 220 30, 200 40 C 160 60, 120 160, 100 220 C 80 280, 130 230, 150 210 C 180 180, 240 180, 300 200"
          stroke="url(#sig-grad)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.6 }}
        />
        {/* "hevez" */}
        <motion.path 
          d="M 280 180 C 290 150, 310 140, 320 160 C 330 180, 310 200, 340 180 C 360 160, 370 150, 380 170 C 390 190, 370 190, 400 170 C 420 150, 430 150, 440 170 C 450 190, 420 200, 460 170 C 480 150, 500 160, 500 180 C 500 200, 480 200, 520 180"
          stroke="url(#sig-grad)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 2.2 }}
        />
        {/* Swooping underline */}
        <motion.path 
          d="M 80 250 C 200 180, 400 240, 750 180"
          stroke="url(#sig-grad)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2.8 }}
        />
      </svg>
    </motion.div>
  );
};
