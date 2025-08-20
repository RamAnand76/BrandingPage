
"use client";
import { motion } from "framer-motion";

export const SuccessAnimation = () => {
  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        className="mb-4"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          fill="none"
          variants={circleVariants}
        />
        <motion.path
          d="M25 50 L45 70 L75 30"
          stroke="hsl(var(--primary))"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={checkVariants}
        />
      </motion.svg>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-2xl font-bold text-foreground"
      >
        Message Sent!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-muted-foreground mt-2"
      >
        We'll get back to you soon.
      </motion.p>
    </div>
  );
};
