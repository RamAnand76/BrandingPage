"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import dynamic from "next/dynamic";

// The form stack (react-hook-form, zod, dialog) only loads the first time the modal is opened.
const ContactModal = dynamic(() => import("@/components/ContactModal").then((m) => m.ContactModal), { ssr: false });

interface ContactModalContextType {
  isContactModalOpen: boolean;
  setContactModalOpen: (open: boolean) => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  useEffect(() => {
    if (isContactModalOpen) setEverOpened(true);
  }, [isContactModalOpen]);

  return (
    <ContactModalContext.Provider value={{ isContactModalOpen, setContactModalOpen }}>
      {children}
      {everOpened && <ContactModal isOpen={isContactModalOpen} onOpenChange={setContactModalOpen} />}
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
