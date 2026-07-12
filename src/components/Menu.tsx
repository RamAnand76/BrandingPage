"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";

interface MenuProps {
  items: {
    name: string;
    link: string;
    icon: React.ReactNode;
  }[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu = ({ items, isOpen, setIsOpen }: MenuProps) => {
  const { setContactModalOpen } = useContactModal();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm">
        <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/lovable-uploads/logo.png" width={36} height={36} alt="Rhevez Logo" className="object-contain" />
        </Link>
        <button onClick={toggleMenu} className="z-50 text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-30 bg-black bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
          >
            {items.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={item.link} onClick={() => setIsOpen(false)} legacyBehavior>
                  <a className="text-2xl text-white hover:text-primary transition-colors flex items-center">
                    {item.name}
                  </a>
                </Link>
              </motion.div>
            ))}
             <motion.div variants={itemVariants}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="text-2xl text-white hover:text-primary transition-colors focus:outline-none"
                >
                  Contact
                </button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
