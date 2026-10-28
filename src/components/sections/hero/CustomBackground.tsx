"use client";

import { GlassFold } from "@/components/ui/glass-fold";

export const CustomBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">

      {/* ═══ GLASS FOLD SHADER (brand blue + cyan) ═══ */}
      <GlassFold
        color1="#2563eb"
        color2="#030303"
        color3="#22d3ee"
        speed={0.5}
        className="absolute inset-0 opacity-90"
      />

      {/* ═══ FILM GRAIN ═══ */}
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

      {/* ═══ EDGE VIGNETTE (keeps the headline readable) ═══ */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 90,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 10%, rgba(0,0,0,0.75) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
