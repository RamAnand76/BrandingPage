"use client";

import { motion, useInView } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import placeholderImages from "@/app/lib/placeholder-images.json";

// Scroll Trigger Component to handle IntersectionObserver logic reliably
function ScrollTriggerBlock({ index, onActive }: { index: number, onActive: (idx: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  // Triggers when the block crosses the viewport
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" }); 
  
  useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [isInView, index, onActive]);

  return <div ref={ref} className="h-screen w-full pointer-events-none" />;
}

const WorksSection = () => {
  const works = [
    {
      title: "Interactive Code Editor Component",
      description: "A professional-grade React software solution replicating advanced code editing environments.",
      images: [
        "/lovable-uploads/Code-editor compoennet-2.png",
      ],
      alt: "Custom React Software Development - Code Editor",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      isOpenSource: true,
      dataAiHint: "code editor",
      link: "https://v0-primitive-react-sandpack-compone.vercel.app/",
    },
    {
      title: "ScriptForge AI Platform",
      description: "A complex AI-driven software development project for the entertainment industry.",
      images: ["/lovable-uploads/script-forge.png"],
      dataAiHint: "screenwriting application",
      alt: "AI Software Development Services - ScriptForge",
      technologies: ["Next.JS", "Supabase", "GenAI"],
      link: "https://script-forge-two.vercel.app/",
    },
    {
      title: "Enterprise Laundry Backend",
      description: "A sophisticated multi-tenant software architecture for large-scale operations.",
      images: [placeholderImages.works[2].src],
      dataAiHint: "backend dashboard",
      alt: "Enterprise Software Solution - Backend Dashboard",
      technologies: ["Django", "Python", "PostgreSQL"],
      link: "#contact",
    },
    {
      title: "SMB Billing & Invoicing App",
      description: "A mobile-first custom software development for small businesses.",
      images: ["/lovable-uploads/billin-software.png"],
      alt: "Mobile App Development Services - Billing Software",
      technologies: ["Go", "Flutter", "PostgreSQL"],
      isOpenSource: false,
      dataAiHint: "mobile billing application",
      link: "#contact",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-black w-full">
      {/* 
        Sticky Visual Container
      */}
      {/* Added pt-24 to offset the floating navbar, creating a truer visual center */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-10 pt-24 sm:py-16 sm:pt-32 z-10">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

        {/* Reduced bottom margin to bring heading closer, adjusted centering */}
        <div className="w-full px-4 relative z-10 flex flex-col items-center mb-4 md:mb-6 shrink-0 mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-3"
          >
            <FolderGit2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 text-center">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Works</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl text-center leading-relaxed hidden sm:block">
            A snapshot of what we build. Scroll down to expand and explore our projects.
          </p>
        </div>

        {/* Expanding Flex Cards Container - Increased width to 1600px */}
        <div className="w-[96vw] max-w-[1600px] mx-auto px-2 sm:px-6 md:px-8 h-[65vh] min-h-[450px] max-h-[800px] flex justify-center items-stretch gap-2 md:gap-4 relative z-10">
          {works.map((work, idx) => {
            const isActive = activeIndex === idx;
            const imageSrc = Array.isArray(work.images) ? work.images[0] : work.images;
            
            return (
              <div
                key={work.title}
                style={{ 
                  flex: isActive ? "12 1 0%" : "1 1 0%",
                  transition: "flex 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
                }}
                className={`relative rounded-[2rem] sm:rounded-[3rem] cursor-pointer group flex-shrink-0 origin-center overflow-hidden border border-white/5 ${isActive ? 'shadow-2xl shadow-primary/10 ring-1 ring-white/20' : 'hover:bg-white/5'}`}
              >
                {/* Background Image */}
                <Image
                  src={imageSrc}
                  alt={work.alt}
                  fill
                  className={`object-cover pointer-events-none transition-all duration-700 ease-out origin-center ${isActive ? 'scale-100 opacity-100' : 'scale-[1.15] opacity-40 grayscale-[50%]'}`}
                  sizes="(max-width: 768px) 100vw, 1000px"
                  priority={idx === 0}
                />
                
                {/* Dark overlay gradients */}
                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isActive ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`} />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end pointer-events-none overflow-hidden">
                    <div className="flex items-end overflow-visible pb-2 md:pb-4">
                      {/* Circular Icon / Number */}
                      <div 
                        className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg md:text-2xl shadow-xl z-20 transition-all duration-500 delay-75 ${isActive ? 'bg-white text-black scale-100 mb-2' : 'bg-black/60 text-white backdrop-blur-md border border-white/20 scale-95 group-hover:scale-100 group-hover:bg-white/20'}`}
                      >
                         0{idx + 1}
                      </div>
                      
                      {/* Text details next to circle */}
                      <div
                          className={`flex flex-col ml-4 md:ml-8 min-w-[280px] sm:min-w-[400px] transition-all duration-500 ease-out transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                      >
                          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                              {work.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {work.technologies.slice(0,3).map((tech) => (
                                <span key={tech} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs sm:text-sm text-neutral-200 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                          </div>

                          {/* View Project Link inside the stack */}
                          <div className={`transition-all duration-500 delay-150 transform ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
                              {work.link !== "#contact" ? (
                                <Link href={work.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-sm font-bold tracking-wide shadow-xl w-max">
                                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                                </Link>
                              ) : (
                                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white/70 text-sm font-medium w-max border border-white/10 backdrop-blur-md">
                                  Internal Project
                                </span>
                              )}
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Invisible Flow Container for Scroll Triggers */}
      {/* Offset matches the height layout to map 1:1 with scrolling */}
      <div className="relative z-0 -mt-[100vh]">
        {works.map((_, idx) => (
          <ScrollTriggerBlock key={`trigger-${idx}`} index={idx} onActive={setActiveIndex} />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;



