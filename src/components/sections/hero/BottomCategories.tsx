import { motion } from "framer-motion";

export const BottomCategories = () => {
  const categories = ["AI & SOFTWARE", "DEVELOPMENT", "CONSULTING"];

  return (
    <motion.div
      className="flex items-center gap-6 text-[17px] md:text-[17px] tracking-[0.05em] font-medium text-white uppercase mt-auto pt-32 md:pt-48 -ml-4 md:-ml-8 -mb-4 md:-mb-8 z-30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
    >
      {categories.map((cat, index) => (
        <div key={cat} className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-white/80 transition-colors">{cat}</span>
          {index < categories.length - 1 && (
            <span className="text-[#3275F8] select-none font-bold">/</span>
          )}
        </div>
      ))}
    </motion.div>
  );
};
