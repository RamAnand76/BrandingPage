import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";
import { motion } from "framer-motion";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const { setContactModalOpen } = useContactModal();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full pt-16 pb-12 bg-black relative border-t border-white/[0.03]">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

      <div className="relative w-full mb-24">
        {/* Glow behind the container */}
        <motion.div 
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] h-[120px] bg-gradient-to-t from-[#1d4ed8] to-transparent blur-[40px] pointer-events-none rounded-full"
          animate={{ 
            opacity: [0.2, 0.32, 0.2],
            scale: [0.98, 1.03, 0.98]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* 'Ready to take your product...' CTA Card */}
        <div className="relative w-full bg-[#030303] border border-white/[0.02] rounded-[40px] md:rounded-[48px] p-10 py-16 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden z-10 shadow-2xl">
          {/* Inner blue gradient overlay */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#1d4ed8]/90 via-[#1d4ed8]/35 to-transparent pointer-events-none z-0 origin-bottom"
            animate={{ 
              opacity: [0.85, 1, 0.85],
              scaleY: [0.96, 1.04, 0.96]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight relative z-10 mb-5 max-w-[750px] leading-[1.15] md:leading-[1.12]">
            Ready to take your product<br />to the next level?
          </h2>

          <p className="text-neutral-400 text-sm md:text-base font-light mb-10 max-w-[500px] relative z-10 tracking-wide">
            Get in touch and start building with confidence today.
          </p>

          <button
            onClick={() => setContactModalOpen(true)}
            className="relative z-10 bg-white hover:bg-neutral-100 text-black rounded-full px-9 py-4 font-semibold text-sm transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            Build Your Project
          </button>
        </div>
      </div>

        {/* Footer 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr_1.6fr] gap-10 md:gap-12 pt-6">

          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image src="/lovable-uploads/logo.png" alt="Rhevez Logo" fill className="object-contain" />
              </div>
              <div className="relative h-[26px] w-[110px]">
                <Image src="/text-white.png" alt="Rhevez" fill className="object-contain object-left" />
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-[310px]">
              Empowering businesses with custom software development and luxury branding.
            </p>
          </div>

          {/* Column 2: Site Map */}
          <div className="flex flex-col">
            <h4 className="text-neutral-400 uppercase text-xs font-semibold mb-6 tracking-widest">SITE MAP</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="/#faq" className="text-neutral-300 hover:text-white transition-colors text-sm font-light">FAQs</Link></li>
              <li>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="text-neutral-300 hover:text-white transition-colors text-sm font-light text-left"
                >
                  Contact us
                </button>
              </li>
              <li><Link href="/#features" className="text-neutral-300 hover:text-white transition-colors text-sm font-light">Services</Link></li>
              <li><Link href="/our-works" className="text-neutral-300 hover:text-white transition-colors text-sm font-light">Works</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col">
            <h4 className="text-neutral-400 uppercase text-xs font-semibold mb-6 tracking-widest">RESOURCES</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="/terms-of-service" className="text-neutral-300 hover:text-white transition-colors text-sm font-light">Terms of use</Link></li>
              <li><Link href="/privacy-policy" className="text-neutral-300 hover:text-white transition-colors text-sm font-light">Privacy Policy</Link></li>
              <li><Link href="/sitemap.xml" className="text-neutral-300 hover:text-white transition-colors text-sm font-light">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4: Join Us & Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-neutral-400 uppercase text-xs font-semibold mb-6 tracking-widest">JOIN US</h4>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                <Github className="w-4 h-4 fill-current" />
              </a>
            </div>

            {/* Email Form */}
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center bg-[#050505] border border-white/15 rounded-full p-1.5 w-full max-w-[340px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent pl-4 pr-28 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-20 text-neutral-400 text-sm font-light">
          <span>&copy; {year} Rhevez. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
