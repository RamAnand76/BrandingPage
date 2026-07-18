"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";

interface MobileMenuModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileMenuModal = ({ isOpen, setIsOpen }: MobileMenuModalProps) => {
  const { setContactModalOpen } = useContactModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-x-0 bottom-0 z-[200] h-[85vh] bg-[#111111] rounded-t-[20px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:hidden border-t border-white/10"
        >
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="grid grid-cols-2 gap-8 h-full">
              {/* Left Column */}
              <div className="flex flex-col">
                <span className="text-[10px] text-white/50 tracking-widest uppercase mb-6">Menu</span>
                <nav className="flex flex-col gap-4">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-[#3275F8] transition-colors">Home</Link>
                  <Link href="/our-works" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-[#3275F8] transition-colors">Works</Link>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-[#3275F8] transition-colors">About</Link>
                  <Link href="/blog" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-[#3275F8] transition-colors">Blog</Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-[#3275F8] transition-colors">Contact</Link>
                </nav>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between text-right">
                <div>
                  <span className="text-[10px] text-white/50 tracking-widest uppercase mb-6 block">Contact</span>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:hello@rhevez.com" className="text-xs text-white hover:text-[#3275F8] transition-colors break-all">hello@rhevez.com</a>
                    <a href="tel:+15554000123" className="text-xs text-white hover:text-[#3275F8] transition-colors">+1 (555) 400 0123</a>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <Link href="/privacy" onClick={() => setIsOpen(false)} className="text-[10px] text-white/50 hover:text-white uppercase tracking-wider transition-colors">Privacy Policy</Link>
                  <Link href="/terms" onClick={() => setIsOpen(false)} className="text-[10px] text-white/50 hover:text-white uppercase tracking-wider transition-colors">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="p-4 border-t border-white/10 bg-[#0a0a0a] flex flex-col items-center gap-4 pb-8 rounded-t-[20px]">
            <button
              onClick={() => {
                setIsOpen(false);
                setContactModalOpen(true);
              }}
              className="w-full py-4 bg-[#3275F8] text-white font-bold tracking-widest text-[12px] uppercase rounded-md hover:bg-[#3275F8]/90 transition-colors"
            >
              START A PROJECT
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 bg-[#222] border border-white/10 rounded-md flex items-center justify-center text-white hover:bg-[#333] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
