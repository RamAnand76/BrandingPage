"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { setContactModalOpen } = useContactModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Full-width navbar (at top) ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="full-nav"
            className="fixed w-full flex items-center justify-between px-6 md:px-12 py-8 top-0 left-0 z-[100]"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-4 cursor-pointer">
                <div className="w-8 h-8 relative flex-shrink-0">
                  <Image src="/lovable-uploads/logo.png" alt="Rhevez Logo" fill className="object-contain" />
                </div>
                <div className="relative hidden sm:block" style={{ height: "32px", width: "140px" }}>
                  <Image src="/text-white.png" alt="Rhevez" fill className="object-contain object-left" />
                </div>
              </Link>
              <div className="h-4 w-[1px] bg-white/20 hidden lg:block" />
              <span className="text-[12px] font-medium text-white/70 hidden lg:block tracking-wide">
                AI <span className="text-[#3275F8]">powered.</span> Human <span className="text-[#00FF66]">focused.</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.15em] font-semibold uppercase text-white/90">
              <Link href="/our-works" className="hover:text-white transition-colors">WORKS</Link>
              <span className="text-white/20">/</span>
              <Link href="/#features" className="hover:text-white transition-colors">SERVICES</Link>
              <span className="text-white/20">/</span>
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <button
                onClick={() => setContactModalOpen(true)}
                className="flex items-center gap-2 ml-4 px-6 py-3 rounded-md border border-white/20 hover:border-[#3275F8]/50 hover:shadow-[0_0_15px_rgba(50,117,248,0.3)] transition-all bg-black/50 backdrop-blur-md"
              >
                CONTACT US
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── Dynamic Island (after scroll) ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="dynamic-island"
            className="fixed top-4 left-1/2 z-[100] flex items-center"
            style={{ x: "-50%" }}
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 px-5 py-3 rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {/* Logo + Wordmark */}
              <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-6 h-6 relative flex-shrink-0">
                  <Image src="/lovable-uploads/logo.png" alt="Rhevez Logo" fill className="object-contain" />
                </div>
                <div className="relative hidden sm:block" style={{ height: "22px", width: "90px" }}>
                  <Image src="/text-white.png" alt="Rhevez" fill className="object-contain object-left" />
                </div>
              </Link>

              {/* Divider */}
              <div className="w-[1px] h-4 bg-white/15" />

              {/* Nav Links */}
              <div className="hidden sm:flex items-center gap-5 text-[10px] tracking-[0.12em] font-semibold uppercase text-white/70">
                <Link href="/our-works" className="hover:text-white transition-colors">WORKS</Link>
                <Link href="/#features" className="hover:text-white transition-colors">SERVICES</Link>
                <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              </div>

              {/* Divider */}
              <div className="w-[1px] h-4 bg-white/15 hidden sm:block" />

              {/* Contact Button */}
              <button
                onClick={() => setContactModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-white/90 transition-colors"
              >
                CONTACT
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
