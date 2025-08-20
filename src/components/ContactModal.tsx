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
      <DialogContent className="sm:max-w-[480px] p-0 bg-neutral-950 border-neutral-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
          <DialogHeader className="p-8 pb-4 text-center">
            <DialogTitle className="text-2xl font-bold tracking-tight">
              Let&apos;s Build Something Great
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-1">
              Fill out the form below, and we&apos;ll get back to you as soon as
              possible.
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
