"use client";

import { motion } from "framer-motion";

export const CustomBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">

      {/* ═══ HEAVY FILM GRAIN OVERLAY ═══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 100,
          mixBlendMode: "overlay",
          opacity: 0.35,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'g\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23g)\'/%3E%3C/svg%3E")',
          backgroundSize: "256px 256px",
        }}
      />

      {/* Secondary grain layer for extra crunch */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 101,
          mixBlendMode: "soft-light",
          opacity: 0.2,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'g2\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23g2)\'/%3E%3C/svg%3E")',
          backgroundSize: "192px 192px",
        }}
      />

      {/* ═══ WHITE / SILVER BEAM — Left diagonal ═══ */}
      <motion.div
        initial={{ opacity: 0, filter: "brightness(0)" }}
        animate={{ opacity: 1, filter: "brightness(1)" }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0"
        style={{ overflow: "hidden" }}
      >
        {/* Solid white beam with slight edge blur */}
        <motion.div
          animate={{
            rotate: [-32, -44, -32],
            x: ["-10%", "5%", "-10%"],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-50%",
            left: "-5%", // Shifted left for spacing
            width: "80%",
            height: "250%",
            transformOrigin: "50% 50%",
            background:
              "linear-gradient(90deg, transparent 44%, rgba(255,255,255,0.05) 44.5%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0.05) 55.5%, transparent 56%)",
            filter: "blur(2px)",
          }}
        />
      </motion.div>

      {/* ═══ BLUE-TO-TEAL BEAM — Right diagonal ═══ */}
      <motion.div
        initial={{ opacity: 0, filter: "brightness(0)" }}
        animate={{ opacity: 1, filter: "brightness(1)" }}
        transition={{ duration: 4.5, ease: "easeOut", delay: 0.5 }}
        className="absolute inset-0"
        style={{ overflow: "hidden" }}
      >
        {/* Solid blue beam with slight edge blur */}
        <motion.div
          animate={{
            rotate: [-46, -30, -46],
            x: ["5%", "-10%", "5%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "-60%",
            right: "-2%", // Shifted right for spacing
            width: "80%",
            height: "260%",
            transformOrigin: "50% 50%",
            background:
              "linear-gradient(90deg, transparent 44%, rgba(50,117,248,0.05) 44.5%, rgba(50,117,248,0.6) 45%, rgba(50,117,248,0.6) 55%, rgba(50,117,248,0.05) 55.5%, transparent 56%)",
            filter: "blur(2px)",
          }}
        />

        {/* Solid teal/cyan transition at the bottom */}
        <motion.div
          animate={{
            rotate: [-48, -32, -48],
            x: ["6%", "-12%", "6%"],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{
            position: "absolute",
            top: "0%",
            right: "2%",
            width: "75%",
            height: "200%",
            transformOrigin: "30% 30%",
            background:
              "linear-gradient(90deg, transparent 44%, rgba(0,190,140,0.05) 44.5%, rgba(0,190,140,0.5) 45%, rgba(0,190,140,0.5) 55%, rgba(0,190,140,0.05) 55.5%, transparent 56%)",
            filter: "blur(3px)",
            mixBlendMode: "screen"
          }}
        />
      </motion.div>

      {/* ═══ EDGE VIGNETTE ═══ */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 90,
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.65) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
