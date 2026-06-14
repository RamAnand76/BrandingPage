"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useContactModal } from "@/context/ContactModalContext";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string | React.ReactNode;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { setContactModalOpen } = useContactModal();
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Track active section on scroll for home page, or match page path for subpages
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
      return;
    }

    // Default to first hash section if scroll is close to top
    if (window.scrollY < 200) {
      setActiveSection("");
    }

    const sections = ["features", "what-we-do", "works", "process", "faq"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`/#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          // Check if link matches either route pathname or active section hash
          const isActive = pathname === navItem.link || activeSection === navItem.link;
          
          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-300 items-center flex space-x-1 text-neutral-600 dark:hover:text-white hover:text-neutral-500 transition-colors py-1",
                isActive && "text-primary dark:text-primary font-medium"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              {isActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute inset-x-0 w-3/4 mx-auto -bottom-1 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] blur-[0.5px]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
        <button
          onClick={() => setContactModalOpen(true)}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
