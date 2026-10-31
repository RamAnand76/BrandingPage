"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Small orbiting mark: a ring, a core and one dot circling it, with a slow pulse.
const OrbitMark = () => (
  <div aria-hidden className="relative h-11 w-11 shrink-0">
    <motion.span
      className="absolute inset-0 rounded-full border border-[#3b82f6]/50"
      animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
    />
    <span className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.04]" />
    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6] shadow-[0_0_12px_#3b82f6]" />
    <motion.span
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22d3ee] shadow-[0_0_8px_#22d3ee]" />
    </motion.span>
  </div>
);

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          role="region"
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 left-4 right-4 z-50 md:bottom-8 md:left-auto md:right-8 md:max-w-[400px]"
        >
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#07070b]/90 p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.75)] backdrop-blur-xl">
            {/* drifting dot grid, fading toward the left */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_left,black,transparent_65%)]"
              animate={{ backgroundPosition: ["0px 0px", "18px 18px"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2563eb]/25 blur-3xl" />
            {/* light sweeping along the top edge */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#60a5fa] to-transparent"
              animate={{ x: ["-100%", "320%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />

            <button
              onClick={() => choose("declined")}
              aria-label="Close cookie notice"
              className="absolute right-4 top-4 rounded-full p-1 text-white/45 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative flex items-start gap-4">
              <OrbitMark />
              <div className="pr-6">
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/55">Cookies &amp; privacy</span>
                <p className="mt-2 text-[15px] font-semibold leading-snug tracking-tight">
                  We use cookies to keep the site secure and to understand how it&apos;s used.
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                  Accept to allow them, or decline and carry on. Details in our{" "}
                  <Link href="/privacy-policy" className="text-white/80 underline underline-offset-4 hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="relative mt-6 flex items-center justify-end gap-2">
              <button
                onClick={() => choose("declined")}
                className="rounded-full px-5 py-2.5 text-[13px] font-medium text-white/65 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
              >
                Decline
              </button>
              <button
                onClick={() => choose("accepted")}
                className="rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-black outline-none transition-colors hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
