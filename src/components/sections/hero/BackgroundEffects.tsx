import DarkVeil from "@/components/ui/DarkVeil";
import { motion } from "framer-motion";

export const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Base DarkVeil */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.2}
          scanlineFrequency={0}
          warpAmount={0.1}
        />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      {/* Cinematic Lighting */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute inset-0"
      >
        {/* Diagonal White Spotlight */}
        <motion.div 
          animate={{ 
            rotate: [35, 40, 35],
            opacity: [0.06, 0.08, 0.06]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[150%] h-[40%] bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-[80px] origin-top-left rotate-[35deg] will-change-transform"
        />

        {/* Vertical Blue Beam */}
        <motion.div 
          animate={{ 
            x: ["-5%", "5%", "-5%"],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[20%] w-[15%] h-[120%] bg-gradient-to-r from-transparent via-[#3275F8]/40 to-transparent blur-[60px] will-change-transform"
        />
      </motion.div>
    </div>
  );
};
