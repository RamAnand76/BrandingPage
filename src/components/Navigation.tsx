import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "Services", href: "#features", onClick: () => scrollToSection('features') },
    { name: "Products", href: "#products", onClick: () => scrollToSection('products') },
    { name: "About", href: "#about", onClick: () => scrollToSection('about') },
    { name: "Team", href: "#team", onClick: () => scrollToSection('team') },
    { name: "Works", href: "#works", onClick: () => scrollToSection('works') },
    { name: "Testimonials", href: "#testimonials", onClick: () => scrollToSection('testimonials') },
    { name: "Contact", href: "#contact", onClick: () => scrollToSection('contact') },
  ];

  return (
    <div className="fixed top-3.5 left-1/2 -translate-x-1/2 z-50">
      <HoverBorderGradient
        containerClassName={`transition-all duration-300 ${
          isScrolled 
            ? "scale-95" 
            : ""
        }`}
        className={`${
          isScrolled 
            ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl w-[90vw] max-w-2xl" 
            : "h-14 bg-[#1B1B1B] w-[95vw] max-w-3xl"
        }`}
        as="header"
      >
        <div className="mx-auto h-full px-6">
          <nav className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2">
              <Command className="w-5 h-5 text-primary" />
              <span className="font-bold text-base">Aethene</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.onClick) {
                      item.onClick();
                    }
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="glass">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#1B1B1B]">
                  <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          if (item.onClick) {
                            item.onClick();
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </HoverBorderGradient>
    </div>
  );
};

export default Navigation;