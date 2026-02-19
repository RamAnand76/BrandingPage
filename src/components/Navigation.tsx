"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Briefcase, Info, AppWindow } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "/#features", icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Products", link: "/products", icon: <AppWindow className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "About", link: "/about", icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return (
    <>
      <div className="md:hidden">
        <Menu items={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="hidden md:block">
        <FloatingNav navItems={[
          {
            name: (
              <div className="flex items-center gap-2">
                <Image src="/lovable-uploads/logo.png" width={120} height={32} alt="RE:INVENT Logo" />
              </div>
            ),
            link: "/",
            icon: <Image src="/lovable-uploads/logo.png" width={24} height={24} alt="RE:INVENT Logo" />
          },
          ...navItems
        ]} />
      </div>
    </>
  );
};

export default Navigation;
