import { motion } from "framer-motion";
import Image from "next/image";

export const Signature = () => {
  return (
    <motion.div
      className="hidden md:block absolute right-[5%] bottom-[20%] lg:bottom-[2%] z-40 pointer-events-none"
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 1.0 }}
    >
      <Image
        src="/signature.svg"
        alt="Signature"
        width={800}
        height={300}
        className="w-[600px] lg:w-[850px] h-auto drop-shadow-2xl object-contain"
        priority
      />
    </motion.div>
  );
};
