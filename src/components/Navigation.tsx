"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Briefcase, Home, Info, Mail, AppWindow, Tag } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const navItems = [
    { name: <div className="flex items-center gap-2">
              <Image src="/lovable-uploads/logo.png" width={120} height={32} alt="RE:INVENT Logo" />
            </div>, link: "/", icon: <Image src="/lovable-uploads/logo.png" width={120} height={32} alt="RE:INVENT Logo" /> },
    { name: "Services", link: "/#features", icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Products", link: "/products", icon: <AppWindow className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "About", link: "/#about", icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navigation;
