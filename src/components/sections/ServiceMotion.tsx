"use client";

import React from "react";
import { motion } from "framer-motion";

// Ambient motion graphics, one per service. Plain SVG driven by framer-motion: no video, no image downloads.
// They are only mounted while their row is hovered or open. With reduced motion they settle on their final frame.

export type SceneKind = "web" | "ai" | "security" | "product" | "graphic" | "motion" | "ads";

type R = { r: boolean };

// Infinite ease-in-out loop, or a frozen final frame for reduced motion.
const T = (r: boolean, o: { duration: number; delay?: number; times?: number[]; ease?: string }) =>
  r ? { duration: 0, repeat: 0 } : { repeat: Infinity, ease: "easeInOut", ...o };

const box: React.CSSProperties = { transformBox: "fill-box", transformOrigin: "center" };
const stroke = { stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/* Web & Mobile: a page builds itself, the cursor hits the button, a phone says HELLO. */
const Web = ({ r }: R) => (
  <g {...stroke}>
    <rect x="130" y="46" width="340" height="216" rx="14" opacity={0.7} />
    <line x1="130" y1="82" x2="470" y2="82" opacity={0.5} />
    {[158, 176, 194].map((x) => (
      <circle key={x} cx={x - 14} cy="64" r="3" opacity={0.6} />
    ))}
    {[0, 1, 2].map((i) => (
      <motion.line
        key={i}
        x1="156"
        x2={380 - i * 70}
        y1={116 + i * 34}
        y2={116 + i * 34}
        strokeWidth={12}
        opacity={0.45}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={T(r, { duration: 4.2, delay: i * 0.35, times: [0, 0.3, 0.85, 1] })}
      />
    ))}
    <motion.rect
      x="156"
      y="214"
      width="104"
      height="28"
      rx="14"
      fill="currentColor"
      stroke="none"
      style={box}
      animate={{ opacity: [0.25, 0.25, 0.95, 0.25], scale: [1, 1, 1.06, 1] }}
      transition={T(r, { duration: 4.2, times: [0, 0.5, 0.65, 1] })}
    />
    <motion.path
      d="M0 0 L0 18 L5 14 L9 22 L12 20 L8 12 L15 12 Z"
      fill="#fff"
      stroke="none"
      animate={{ x: [420, 205, 205, 420], y: [150, 226, 226, 150] }}
      transition={T(r, { duration: 4.2, times: [0, 0.5, 0.75, 1] })}
    />
    <rect x="508" y="72" width="92" height="184" rx="18" opacity={0.7} />
    <motion.g
      style={box}
      animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
      transition={T(r, { duration: 4.2, times: [0.1, 0.3, 0.85, 1] })}
    >
      <rect x="520" y="110" width="68" height="30" rx="12" fill="currentColor" stroke="none" opacity={0.85} />
      <text x="530" y="130" fill="#000" stroke="none" fontSize="13" fontWeight="800">
        HELLO.
      </text>
    </motion.g>
  </g>
);

/* AI & Automation: TASK flows through an agent and comes out DONE. */
const AI = ({ r }: R) => (
  <g {...stroke}>
    <path d="M150 160 C 220 160 220 160 290 160" opacity={0.4} />
    <path d="M330 160 C 400 160 400 160 470 160" opacity={0.4} />
    <rect x="96" y="132" width="64" height="56" rx="12" opacity={0.7} />
    <text x="108" y="166" fill="currentColor" stroke="none" fontSize="12" fontWeight="700" opacity={0.8}>
      TASK
    </text>
    <motion.g style={box} animate={{ scale: [1, 1.1, 1] }} transition={T(r, { duration: 2.4 })}>
      <circle cx="310" cy="160" r="34" opacity={0.8} />
      <circle cx="310" cy="160" r="46" opacity={0.25} />
      <text x="297" y="165" fill="currentColor" stroke="none" fontSize="15" fontWeight="800">
        AI
      </text>
    </motion.g>
    <rect x="470" y="132" width="76" height="56" rx="12" opacity={0.7} />
    <motion.path
      d="M488 160 l10 10 l22 -24"
      strokeWidth={3}
      animate={{ pathLength: [0, 0, 1, 1, 0] }}
      transition={T(r, { duration: 4, times: [0, 0.45, 0.65, 0.9, 1] })}
    />
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        cy="160"
        r="5"
        fill="currentColor"
        stroke="none"
        animate={{ cx: [150, 290, 290, 330, 470], opacity: [0, 1, 0, 1, 0] }}
        transition={T(r, { duration: 3, delay: i * 1, times: [0, 0.4, 0.45, 0.55, 1] })}
      />
    ))}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={`d${i}`}
        cx={560 + i * 14}
        cy="92"
        r="3.5"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [0.2, 1, 0.2], y: [0, -4, 0] }}
        transition={T(r, { duration: 1.2, delay: i * 0.15 })}
      />
    ))}
  </g>
);

/* Cybersecurity: a radar sweeps around a shield; the lock holds. */
const Security = ({ r }: R) => (
  <g {...stroke}>
    {[44, 86, 128].map((rad, i) => (
      <motion.circle
        key={rad}
        cx="360"
        cy="160"
        r={rad}
        opacity={0.3}
        style={box}
        animate={{ opacity: [0.15, 0.45, 0.15] }}
        transition={T(r, { duration: 3, delay: i * 0.4 })}
      />
    ))}
    <motion.path
      d="M360 160 L360 32 A128 128 0 0 1 460 82 Z"
      fill="currentColor"
      stroke="none"
      opacity={0.18}
      style={{ transformOrigin: "360px 160px" }}
      animate={{ rotate: r ? 0 : 360 }}
      transition={r ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <path d="M360 112 L398 126 V166 C398 190 380 206 360 214 C340 206 322 190 322 166 V126 Z" strokeWidth={2} opacity={0.9} />
    <motion.path
      d="M342 162 l13 13 l25 -28"
      strokeWidth={3}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={T(r, { duration: 3.6, times: [0, 0.3, 0.85, 1] })}
    />
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        cx={250 + i * 120}
        cy={70 + (i % 2) * 180}
        r="5"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [0, 1, 0], scale: [0.4, 1.4, 0.4] }}
        style={box}
        transition={T(r, { duration: 3, delay: i * 1 })}
      />
    ))}
  </g>
);

/* Product Engineering: IDEA, MVP and SCALE are stacks of blocks that build up bottom to top, with a trail climbing across them. */
const Product = ({ r }: R) => {
  const cols = [
    { x: 330, n: 1, label: "IDEA" },
    { x: 440, n: 3, label: "MVP" },
    { x: 550, n: 5, label: "SCALE" },
  ];
  return (
    <g {...stroke}>
      <line x1="310" y1="262" x2="630" y2="262" opacity={0.4} />
      {cols.map((c, ci) => (
        <g key={c.label}>
          {Array.from({ length: c.n }).map((_, i) => (
            <motion.rect
              key={i}
              x={c.x}
              y={244 - i * 40}
              width="76"
              height="32"
              rx="8"
              strokeDasharray={ci === 0 ? "6 6" : undefined}
              fill="currentColor"
              strokeWidth={2}
              opacity={1}
              animate={{ fillOpacity: [0.08, 0.08, 0.5, 0.08] }}
              transition={T(r, { duration: 4.4, delay: ci * 0.5 + i * 0.22, times: [0, 0.1, 0.35, 1] })}
            />
          ))}
          <text x={c.x + 4} y="284" fill="currentColor" stroke="none" fontSize="12" fontWeight="800" opacity={0.85}>
            {c.label}
          </text>
        </g>
      ))}
      <motion.path
        d="M368 224 C 420 150 480 150 520 120 S 590 70 610 40"
        strokeDasharray="4 7"
        opacity={0.6}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={T(r, { duration: 4.4, times: [0, 0.6, 0.9, 1] })}
      />
      <motion.circle
        r="6"
        fill="currentColor"
        stroke="none"
        animate={{ cx: [368, 440, 520, 610], cy: [224, 160, 120, 40], opacity: [0, 1, 1, 0] }}
        transition={T(r, { duration: 4.4, times: [0, 0.3, 0.6, 0.9] })}
      />
    </g>
  );
};

/* Graphic Design: type, colour and shape come together into a poster. */
const Graphic = ({ r }: R) => (
  <g {...stroke}>
    <rect x="410" y="40" width="170" height="230" rx="8" opacity={0.6} />
    <motion.circle
      cx="496"
      cy="120"
      r="38"
      fill="currentColor"
      fillOpacity={0.2}
      style={box}
      animate={{ scale: [0.8, 1.1, 0.8] }}
      transition={T(r, { duration: 4 })}
    />
    <motion.path
      d="M436 236 H556"
      strokeWidth={6}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={T(r, { duration: 4, times: [0, 0.4, 0.85, 1] })}
    />
    <motion.path
      d="M436 214 H520"
      strokeWidth={3}
      opacity={0.6}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={T(r, { duration: 4, delay: 0.2, times: [0, 0.4, 0.85, 1] })}
    />
    <text x="130" y="200" fill="currentColor" stroke="none" fontSize="110" fontWeight="800" opacity={0.85}>
      Aa
    </text>
    {[0, 1, 2, 3].map((i) => (
      <motion.circle
        key={i}
        cx={150 + i * 40}
        cy="236"
        r="13"
        fill="currentColor"
        stroke="none"
        style={box}
        animate={{ scale: [0.6, 1.15, 0.6], opacity: [0.3 + i * 0.15, 1, 0.3 + i * 0.15] }}
        transition={T(r, { duration: 3, delay: i * 0.25 })}
      />
    ))}
    <motion.rect
      x="300"
      y="80"
      width="52"
      height="52"
      rx="6"
      style={box}
      animate={{ rotate: [0, 90, 90, 0] }}
      transition={T(r, { duration: 5, times: [0, 0.4, 0.7, 1] })}
    />
  </g>
);

/* Motion Graphics: an editor timeline. The playhead sweeps, each clip lights as it passes, and the preview frame plays a shape. */
const Motion = ({ r }: R) => {
  const clips = [
    { x: 320, w: 100, y: 176 },
    { x: 436, w: 90, y: 176 },
    { x: 340, w: 150, y: 204 },
    { x: 506, w: 100, y: 204 },
    { x: 322, w: 70, y: 232 },
    { x: 408, w: 160, y: 232 },
  ];
  const D = 4.8;
  return (
    <g {...stroke}>
      {/* Preview frame */}
      <rect x="372" y="30" width="200" height="118" rx="12" strokeWidth={2} opacity={1} />
      <motion.circle
        r="20"
        fill="currentColor"
        stroke="none"
        fillOpacity={0.4}
        animate={{ cx: [412, 532, 412], cy: [92, 70, 92], scale: [1, 1.35, 1] }}
        style={box}
        transition={T(r, { duration: D })}
      />
      <motion.path
        d="M472 118 l18 -30 l18 30 Z"
        strokeWidth={2}
        style={box}
        animate={{ rotate: [0, 120, 240, 360] }}
        transition={r ? { duration: 0 } : { duration: D, repeat: Infinity, ease: "linear" }}
      />
      <motion.text
        x="450"
        y="96"
        fill="currentColor"
        stroke="none"
        fontSize="30"
        fontWeight="900"
        style={box}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.7, 0.7, 1.1, 1, 0.9] }}
        transition={T(r, { duration: D, times: [0, 0.7, 0.78, 0.92, 1] })}
      >
        GO!
      </motion.text>

      {/* Tracks and clips, each lighting as the playhead reaches it */}
      <line x1="310" y1="166" x2="620" y2="166" opacity={0.3} />
      {clips.map((c, i) => {
        const t = Math.min(0.7, (c.x - 310) / 310);
        return (
          <motion.rect
            key={i}
            x={c.x}
            y={c.y}
            width={c.w}
            height="20"
            rx="6"
            fill="currentColor"
            strokeWidth={2}
            opacity={1}
            animate={{ fillOpacity: [0.1, 0.1, 0.6, 0.1, 0.1] }}
            transition={T(r, { duration: D, times: [0, t, Math.min(0.95, t + 0.06), Math.min(0.98, t + 0.3), 1] })}
          />
        );
      })}

      {/* Playhead */}
      <motion.g
        animate={{ x: [0, 296, 296, 0] }}
        transition={r ? { duration: 0 } : { duration: D, repeat: Infinity, ease: "linear", times: [0, 0.95, 0.97, 1] }}
      >
        <line x1="314" y1="158" x2="314" y2="264" strokeWidth={2} />
        <path d="M306 152 h16 l-8 12 Z" fill="currentColor" stroke="none" />
      </motion.g>
    </g>
  );
};

/* NextGen Commercials: a vertical frame with fast cuts and a blinking REC. */
const Ads = ({ r }: R) => (
  <g {...stroke}>
    <rect x="300" y="26" width="138" height="248" rx="20" opacity={0.7} />
    {[0, 1, 2, 3].map((i) => (
      <motion.rect
        key={i}
        x="310"
        y="52"
        width="118"
        height="206"
        rx="12"
        fill="currentColor"
        stroke="none"
        fillOpacity={0.1 + i * 0.07}
        animate={{ opacity: r ? (i === 3 ? 1 : 0) : [0, 1, 0, 0, 0] }}
        transition={r ? { duration: 0 } : { duration: 2, repeat: Infinity, delay: i * 0.5, times: [0, 0.01, 0.24, 0.25, 1], ease: "linear" }}
      />
    ))}
    {[0, 1, 2].map((i) => (
      <motion.line
        key={i}
        x1={314 + i * 40}
        x2={344 + i * 40}
        y1="40"
        y2="40"
        strokeWidth={3}
        animate={{ pathLength: [0, 1, 1] }}
        transition={T(r, { duration: 3, delay: i * 0.6, times: [0, 0.3, 1] })}
      />
    ))}
    <motion.circle
      cx="324"
      cy="70"
      r="5"
      fill="#f87171"
      stroke="none"
      animate={{ opacity: [1, 0.15, 1] }}
      transition={T(r, { duration: 1.1 })}
    />
    <text x="336" y="74" fill="currentColor" stroke="none" fontSize="11" fontWeight="800" opacity={0.85}>
      REC
    </text>
    <motion.path
      d="M360 160 l32 20 l-32 20 Z"
      fill="currentColor"
      stroke="none"
      style={box}
      animate={{ scale: [1, 1.12, 1] }}
      transition={T(r, { duration: 1.6 })}
    />
    {[130, 470].map((x, i) => (
      <motion.path
        key={x}
        d={`M${x} 160 h${i ? 70 : -70}`}
        animate={{ pathLength: [0, 1, 0] }}
        transition={T(r, { duration: 2.4, delay: i * 0.3 })}
      />
    ))}
  </g>
);

const SCENES: Record<SceneKind, React.FC<R>> = {
  web: Web,
  ai: AI,
  security: Security,
  product: Product,
  graphic: Graphic,
  motion: Motion,
  ads: Ads,
};

export const ServiceMotion = ({ kind, reduce }: { kind: SceneKind; reduce: boolean }) => {
  const Scene = SCENES[kind];
  return (
    <svg
      viewBox="0 0 640 300"
      preserveAspectRatio="xMaxYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <Scene r={reduce} />
    </svg>
  );
};
