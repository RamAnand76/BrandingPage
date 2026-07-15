import Image from "next/image";
import { motion } from "framer-motion";

export const Wordmark = () => {
  return (
    <motion.div 
      className="relative w-full z-20 flex justify-center mt-8 md:mt-12"
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
    >
      <div className="relative w-[90%] md:w-[75%] max-w-[1200px]">
        <Image
          src="/text-white.png"
          alt="Rhevez Official Wordmark"
          width={1200}
          height={200}
          priority
          className="w-full h-auto object-contain"
          quality={100}
        />
      </div>
    </motion.div>
  );
};
