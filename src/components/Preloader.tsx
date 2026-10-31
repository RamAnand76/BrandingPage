"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const GlassIconReveal = dynamic(() => import("@/components/ui/liquid-glass-logo-reveal").then((m) => m.GlassIconReveal), { ssr: false });

const SEEN_KEY = "rhevez-preloader-seen";
// The glass reveal runs present (1.5s) + tail (1.1s) = 2.6s; the extra beat lets the finished mark breathe.
const MIN_MS = 2900;
const MAX_MS = 7000;

/** One-time-per-session intro: the Rhevez mark appears inside a glass droplet, then the site fades in. */
export default function Preloader() {
  // Rendered on the server too, so the page never flashes before the overlay appears.
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* storage blocked: just play it */
    }
    if (seen) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignore */
      }
      setShow(false);
    };

    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const minimum = new Promise<void>((resolve) => window.setTimeout(resolve, MIN_MS));
    Promise.all([loaded, minimum]).then(finish);
    const failsafe = window.setTimeout(finish, MAX_MS);

    return () => window.clearTimeout(failsafe);
  }, []);

  // Give scrolling back as soon as the overlay starts leaving.
  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading Rhevez"
          className="fixed inset-0 z-[300] bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassIconReveal
            logo="/lovable-uploads/logo.png"
            label="Rhevez"
            look="dark"
            originalColors
            logoColor="#2563eb"
            respectReducedMotion={false}
            background="#000000"
            loop={false}
            tileSize={300}
            className="absolute inset-0 cursor-default"
            tuning={{ present: 1.5, glide: 1.5, startZoom: 1.7 }}
          />
          <motion.div
            className="absolute left-1/2 top-[64%] -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/text-white.png" alt="Rhevez" width={170} height={17} priority className="h-auto w-[170px] opacity-80" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
