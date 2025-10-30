
"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Briefcase, Home, Info, Mail, AppWindow, Tag } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Services", link: "/#features", icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Products", link: "/products", icon: <AppWindow className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "About", link: "/#about", icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navigation;
