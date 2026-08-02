"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_15px_50px_rgba(0,0,0,0.8)] relative text-white">
            
            {/* Close Button */}
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-blue-500/10 rounded-xl shrink-0 text-[#3275F8]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold tracking-wide">Cookie & Privacy Policy</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  We use cookies and telemetry identifiers to enhance site security, analyze traffic performance, and feed our generative optimization patterns. By clicking &quot;Accept All&quot;, you consent to our data policy.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 border-t border-white/5 pt-4">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black text-xs font-semibold transition-all hover:scale-[1.01] uppercase tracking-wider"
              >
                Accept All
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
