import { motion } from "framer-motion";
import Image from 'next/image';

interface FeatureContentProps {
  image: string;
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center p-4"
    >
      <div className="glass rounded-xl overflow-hidden w-full relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="relative z-10"
        />
      </div>
    </motion.div>
  );
};
