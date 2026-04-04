"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";

interface ContactModalContextType {
  isContactModalOpen: boolean;
  setContactModalOpen: (open: boolean) => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ isContactModalOpen, setContactModalOpen }}>
      {children}
      <ContactModal isOpen={isContactModalOpen} onOpenChange={setContactModalOpen} />
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
};
