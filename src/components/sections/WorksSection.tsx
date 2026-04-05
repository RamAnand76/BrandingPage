"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import placeholderImages from "@/app/lib/placeholder-images.json";

// Scroll Trigger Component to handle IntersectionObserver logic reliably
function ScrollTriggerBlock({ index, onActive }: { index: number, onActive: (idx: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  // Triggers when the block is near the center of the viewport
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
        Sticky Visual Container: Maps to the viewport height and stays pinned
        while the user scrolls through the invisible trigger blocks below.
      */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-16 z-10">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full px-4 relative z-10 flex flex-col items-center mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
          >
            <FolderGit2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-center">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Works</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl text-center leading-relaxed">
            A snapshot of what we build. Scroll down to expand and explore our projects.
          </p>
        </div>

        {/* Expanding Flex Cards Container */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 h-[60vh] min-h-[400px] max-h-[650px] flex gap-3 md:gap-5 transition-all duration-300 relative z-10">
          {works.map((work, idx) => {
            const isActive = activeIndex === idx;
            const imageSrc = Array.isArray(work.images) ? work.images[0] : work.images;
            
            return (
              <motion.div
                key={work.title}
                layout
                initial={false}
                animate={{ 
                  flex: isActive ? 8 : 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30, 
                  mass: 0.8
                }}
                onClick={() => setActiveIndex(idx)}
                style={{ overflow: "hidden", minWidth: "60px" }}
                className={`relative rounded-[2rem] sm:rounded-[3rem] cursor-pointer group flex-shrink-0 ${isActive ? 'shadow-2xl shadow-primary/20 ring-1 ring-white/20' : 'hover:bg-white/5'}`}
              >
                {/* Background Image */}
                <Image
                  src={imageSrc}
                  alt={work.alt}
                  fill
                  className={`object-cover pointer-events-none transition-all duration-700 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-[1.15] opacity-40 grayscale-[50%]'}`}
                  sizes="(max-width: 768px) 100vw, 1000px"
                />
                
                {/* Dark overlay gradients */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent' : 'bg-black/40 group-hover:bg-black/20'}`} />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex items-center">
                      {/* Circular Icon / Number */}
                      <motion.div 
                        layout 
                        className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-xl z-20 transition-colors duration-500 ${isActive ? 'bg-white text-black' : 'bg-black/60 text-white backdrop-blur-md border border-white/20'}`}
                      >
                         0{idx + 1}
                      </motion.div>
                      
                      {/* Text details next to circle */}
                      <motion.div
                          animate={{ 
                            opacity: isActive ? 1 : 0, 
                            x: isActive ? 0 : 20,
                            width: isActive ? "auto" : 0
                          }}
                          transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
                          className="flex-col overflow-hidden whitespace-nowrap ml-4 min-w-[200px]"
                      >
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
                              {work.title}
                          </h3>
                          <div className="flex gap-2">
                            {work.technologies.slice(0,3).map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-neutral-200">
                                    {tech}
                                </span>
                            ))}
                          </div>
                      </motion.div>
                    </div>

                    {/* View Project Link */}
                    <AnimatePresence>
                      {isActive && work.link && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className="mt-6 ml-[3.5rem] sm:ml-[4.5rem] md:ml-[5rem] overflow-hidden whitespace-nowrap"
                        >
                          {work.link !== "#contact" ? (
                            <Link href={work.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-sm font-semibold tracking-wide shadow-xl w-max">
                              View Project <ExternalLink className="w-4 h-4 ml-1" />
                            </Link>
                          ) : (
                            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white/70 text-sm font-medium w-max border border-white/10 backdrop-blur-md">
                              Internal Project
                            </span>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Invisible Flow Container for Scroll Triggers */}
      {/* We offset it negatively by 100vh so the first block aligns with the sticky start */}
      <div className="relative z-0 -mt-[100vh]">
        {works.map((_, idx) => (
          <ScrollTriggerBlock key={`trigger-${idx}`} index={idx} onActive={setActiveIndex} />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;


