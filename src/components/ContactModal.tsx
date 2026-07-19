"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-[#060606]/95 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(50,117,248,0.15)] rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#3275F8]/15 to-transparent pointer-events-none" />
          <DialogHeader className="p-8 pb-4 text-center">
            <DialogTitle className="text-xl md:text-2xl font-bold tracking-[0.08em] text-white uppercase">
              Let&apos;s Build Something Great
            </DialogTitle>
            <DialogDescription className="text-white/50 pt-2 text-xs md:text-sm font-normal max-w-[85%] mx-auto leading-relaxed">
              Fill out the form below, and we&apos;ll get back to you as soon as
              possible to discuss your project.
            </DialogDescription>
          </DialogHeader>
          <div className="p-8 pt-4">
            <ContactForm onSuccess={() => onOpenChange(false)} />
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
