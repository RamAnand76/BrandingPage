import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const CornerAnchor = ({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) => {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  }[position];

  return (
    <div className={`absolute z-30 ${positionClasses}`} style={{ overflow: 'visible' }}>
      {/* Glowing dot on top */}
      <div className="relative w-[8px] h-[8px] rounded-full bg-white shadow-[0_0_10px_4px_rgba(255,255,255,0.6)] z-10" />
    </div>
  );
};

export const HeroFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full max-w-[1240px] mx-auto z-10 overflow-visible">
      <motion.div
        className="relative w-full border border-white/20 overflow-visible"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      >
        <CornerAnchor position="top-left" />
        <CornerAnchor position="top-right" />
        <CornerAnchor position="bottom-left" />
        <CornerAnchor position="bottom-right" />

        {/* Midpoint lines extending outwards */}
        {/* Left edge middle line going outwards */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full w-[50vw] h-[1px] bg-white/20 pointer-events-none" />

        {/* Right edge middle line going outwards */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-[50vw] h-[1px] bg-white/20 pointer-events-none" />

        {/* Top edge middle line going outwards */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full h-[50vh] w-[1px] bg-white/20 pointer-events-none" />

        {/* Bottom edge middle line going outwards */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full h-[50vh] w-[1px] bg-white/20 pointer-events-none" />

        {children}
      </motion.div>
    </div>
  );
};
