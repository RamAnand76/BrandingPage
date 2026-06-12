"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  // Ref to hold current activeIndex inside GSAP closure — fixes stale closure bug
  const activeIndexRef = useRef(0);

  // GSAP continuous scroll timeline
  useGSAP(() => {
    // Only run if we mounted cleanly
    if (!sectionRef.current || !cardsRef.current.length) return;

    // We build a timeline that maps to the entire pinned scroll duration
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // 1.5s smoothing on the scrub for an ultra-smooth buttery feeling
        onUpdate: (self) => {
          // Progress goes from 0.0 to 1.0
          const numTransitions = works.length - 1;
          const rawIndex = self.progress * numTransitions;
          // Switch the active inner-text slightly early (when the card is halfway expanding)
          const newIndex = Math.min(Math.floor(rawIndex + 0.4), works.length - 1);
          // Use ref to avoid stale closure — always compares against latest activeIndex
          if (newIndex !== activeIndexRef.current) {
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
          }
        }
      }
    });

    // We chain the expansion/collapse of the cards sequentially into the timeline
    for (let i = 0; i < works.length - 1; i++) {
        // Time maps to sequence (0, 1, 2)
        tl.to(cardsRef.current[i], { flex: 1, ease: "power2.inOut" }, i)
          .to(cardsRef.current[i + 1], { flex: 16, ease: "power2.inOut" }, i);
    }
    
    // Safety cleanup
    return () => {
      tl.kill();
      ScrollTrigger.killAll();
    }
  }, { scope: sectionRef, dependencies: [works.length] });

  return (
    // Create a mathematically precise scroll container length based on item count
    <section ref={sectionRef} className="relative bg-black w-full" style={{ height: `${works.length * 100}vh` }}>
      {/* Sticky boundary that holds the visual port in frame while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center pt-24 pb-4 gap-4 z-10 overflow-hidden">

        <div className="w-full px-4 relative z-10 flex flex-col items-center shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-300">Our Portfolio</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1.5 text-center">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Works</span>
          </h2>
          <p className="text-xs text-neutral-400 max-w-xl text-center leading-relaxed hidden sm:block">
            A snapshot of what we build. Scroll down to expand and explore our projects.
          </p>
        </div>

        <div className="w-[94vw] max-w-[1500px] mx-auto flex-1 min-h-0 flex justify-center items-stretch gap-3 md:gap-4 relative z-10">
          {works.map((work, idx) => {
            const isActive = activeIndex === idx;
            const imageSrc = Array.isArray(work.images) ? work.images[0] : work.images;
            
            return (
              <div
                key={work.title}
                ref={(el) => {
                    // Type-safe ref assignment
                    if (el) cardsRef.current[idx] = el;
                }}
                style={{ 
                  flex: idx === 0 ? "16 1 0%" : "1 1 0%",
                  WebkitTransform: "translateZ(0)" // Force GPU acceleration
                  // Crucial: REMOVED the CSS flex transition here, letting GSAP manage inline ticks exclusively
                }}
                className={`relative rounded-[2rem] sm:rounded-[4rem] cursor-pointer group flex-shrink-0 origin-center overflow-hidden border border-white/5 transform-gpu ${isActive ? 'shadow-2xl shadow-primary/10 ring-1 ring-white/20' : 'hover:bg-white/5'}`}
              >
                {/* Background Image */}
                <Image
                  src={imageSrc}
                  alt={work.alt}
                  fill
                  className={`object-cover pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${isActive ? 'opacity-100' : 'opacity-40'}`}
                  sizes="(max-width: 768px) 100vw, 1000px"
                  priority={idx === 0}
                />
                
                {/* Dark overlay gradients */}
                <div className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${isActive ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`} />
                
                {/* Content Container */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end pointer-events-none overflow-hidden">
                    <div className="flex items-end overflow-visible pb-2 md:pb-4">
                      {/* Circular Icon / Number */}
                      <div 
                        className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg md:text-2xl shadow-xl z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'bg-white text-black scale-100 mb-2' : 'bg-black/60 text-white backdrop-blur-md border border-white/20 scale-95 group-hover:bg-white/20'}`}
                      >
                         0{idx + 1}
                      </div>
                      
                      {/* Text details next to circle */}
                      <div
                          className={`flex flex-col ml-4 md:ml-8 min-w-[280px] sm:min-w-[400px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                      >
                          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                              {work.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {work.technologies.slice(0,3).map((tech) => (
                                <span key={tech} className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-neutral-200 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                          </div>

                          {/* View Project Link inside the stack */}
                          <div className={`transition-all duration-700 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
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
    </section>
  );
};

export default WorksSection;



