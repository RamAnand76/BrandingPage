import { Github, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { VideoText } from "@/registry/magicui/video-text";
import { SparklesCore } from "@/components/ui/sparkles";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const { setContactModalOpen } = useContactModal();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full pt-16 pb-20 mt-10 bg-black relative">
      <div className="container px-4 md:px-8 mx-auto max-w-[1300px]">

        {/* 'Ready to work with us ?' CTA Card */}
        <div className="relative w-full bg-[#050505] border border-white/5 rounded-[40px] md:rounded-[48px] p-10 py-16 md:p-16 flex flex-col md:flex-row items-center justify-between mb-24 overflow-hidden shadow-2xl">
          {/* Subtle glowing halo from bottom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

          {/* Sparkles animated background */}
          <div className="absolute inset-0 w-full h-full bg-transparent z-0 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] md:[mask-image:none]">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={100}
              className="w-full h-full absolute inset-0"
              particleColor="#FFFFFF"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium text-white tracking-tight relative z-10 mb-8 md:mb-0">
            Ready to work with us ?
          </h2>

          <Button
            onClick={() => setContactModalOpen(true)}
            className="relative z-10 bg-white hover:bg-neutral-200 text-black rounded-full px-8 py-7 md:px-10 md:py-8 font-semibold text-base md:text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shrink-0 w-full md:w-auto mt-4 md:mt-0"
          >
            Book a Free Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Footer 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1.5fr] gap-12 lg:gap-8">

          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col pr-0 lg:pr-12">
            <div className="relative h-12 w-48 overflow-hidden mb-6 filter drop-shadow-lg">
              <VideoText src="https://cdn.magicui.design/ocean-small.webm" className="size-full">
                RHEVEZ
              </VideoText>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-[450px]">
              We offer a comprehensive suite of rapid development services that cover all aspects of a product launch. From scoping and design to building and final deployment, we have the expertise and resources to transform your vision into a live, usable MVP in just 100 hours.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shadow-sm">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shadow-sm">
                <Github className="w-4 h-4 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shadow-sm">
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-8 text-base tracking-wide">Navigation</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="#features" className="text-neutral-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/products" className="text-neutral-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/products" className="text-neutral-400 hover:text-white transition-colors text-sm">Resource</Link></li>
              <li>
                <button 
                  onClick={() => setContactModalOpen(true)}
                  className="text-neutral-400 hover:text-white transition-colors text-sm text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Licence */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-8 text-base tracking-wide">Licence</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-neutral-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li>
                <button 
                  onClick={() => setContactModalOpen(true)}
                  className="text-neutral-400 hover:text-white transition-colors text-sm text-left"
                >
                  Email Address
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-8 text-base tracking-wide">Contact</h4>
            <ul className="space-y-6 flex flex-col">
              <li className="flex items-start gap-4 text-neutral-400 text-sm group">
                <div className="p-2 border border-white/5 rounded-md bg-white/[0.02] group-hover:bg-white/10 transition-colors text-white shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="mt-2">+91 7012445960</span>
              </li>
              <li className="flex items-start gap-4 text-neutral-400 text-sm group">
                <div className="p-2 border border-white/5 rounded-md bg-white/[0.02] group-hover:bg-white/10 transition-colors text-white shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <button onClick={() => setContactModalOpen(true)} className="mt-2 hover:text-white transition-colors text-left">ramanandr7666@gmail.com</button>
              </li>
              <li className="flex items-start gap-4 text-neutral-400 text-sm group">
                <div className="p-2 border border-white/5 rounded-md bg-white/[0.02] group-hover:bg-white/10 transition-colors text-white shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1 leading-relaxed">Kerala, India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
