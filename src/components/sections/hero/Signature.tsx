import { motion } from "framer-motion";
import Image from "next/image";

export const Signature = () => {
  return (
    <motion.div
      className="absolute right-0 bottom-8 md:right-[-6%] md:-bottom-[10%] lg:-bottom-[14%] z-40 pointer-events-none overflow-hidden md:overflow-visible max-w-[55%] md:max-w-none"
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 1.0 }}
    >
      <Image
        src="/signature.svg"
        alt="Signature"
        width={800}
        height={300}
        className="w-full md:w-[600px] lg:w-[750px] h-auto drop-shadow-2xl object-contain"
        priority
      />
    </motion.div>
  );
};
