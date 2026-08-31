"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ProjectModal, Project } from "../ui/ProjectModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import placeholderImages from "@/app/lib/placeholder-images.json";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: "Sleazy",
    description: "Slick shoes for everyday lifestyle. Sleazy designs slick everyday kicks with street-ready polish and all-day comfort. Zero dull pairs. Walk louder.",
    image: "/lovable-uploads/Sleazy.png",
    alt: "Branding and Web Design for Sleazy",
    tags: ["Branding", "Web Design", "E-Commerce"],
    link: "https://sleazy-pi.vercel.app/",
  },
  {
    title: "Interactive Code Editor Component",
    description: "A professional-grade React software solution replicating advanced code editing environments.",
    image: "/lovable-uploads/Code-editor compoennet-2.png",
    alt: "Custom React Software Development - Code Editor",
    tags: ["React", "Web", "TypeScript"],
    link: "https://v0-primitive-react-sandpack-components.vercel.app/",
  },
  {
    title: "ScriptForge AI Platform",
    description: "A complex AI-driven software development project for the entertainment industry.",
    image: "/lovable-uploads/script-forge.png",
    alt: "AI Software Development Services - ScriptForge",
    tags: ["Next.JS", "AI Development", "Supabase"],
    link: "https://script-forge-two.vercel.app/",
  },
  {
    title: "Enterprise Laundry Backend",
    description: "A sophisticated multi-tenant software architecture for large-scale operations.",
    image: placeholderImages.works[2].src,
    alt: "Enterprise Software Solution - Backend Dashboard",
    tags: ["Backend", "Python", "PostgreSQL"],
    link: "#contact",
  },
  {
    title: "SMB Billing & Invoicing App",
    description: "A mobile-first custom software development for small businesses.",
    image: "/lovable-uploads/billin-software.png",
    alt: "Mobile App Development Services - Billing Software",
    tags: ["Mobile App", "Go", "Flutter"],
    link: "#contact",
  },
  {
    title: "Rhevez OS",
    description: "Everything a freelancer or small studio needs to run client work — pipeline, projects, invoicing, and a client portal that makes you look twice your size.",
    image: [
      "/lovable-uploads/RhevezOS-Dashboard.png",
      "/lovable-uploads/RhevezOS-Leads.png"
    ],
    alt: "Business Management Platform - Rhevez OS",
    tags: ["Web App", "PWA", "SaaS"],
    link: "/our-works/rhevez-os",
  }
];

const WorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useGSAP(() => {
    // GSAP ScrollTrigger for cards
    const cards = gsap.utils.toArray(".work-card");
    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="works" 
      className="relative bg-black w-full pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden font-sans"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="w-full mb-16 md:mb-24">
          {/* Giant "Works" title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[180px] font-extrabold tracking-tighter text-white leading-none select-none font-sans"
          >
            Works
          </motion.h1>

          {/* Sub-header details grid */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4 pt-8 border-t border-white/10 w-full relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white/95 uppercase tracking-wide">
                Our Work That Tells Stories
              </h3>
            </motion.div>

            {/* Tiny spacer plus elements */}
            <div className="hidden lg:flex gap-16 text-neutral-600 font-light text-base select-none flex-1 justify-center">
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 flex justify-start md:justify-end"
            >
              <p className="text-xs md:text-sm text-neutral-400 font-light max-w-[260px] md:text-right leading-relaxed">
                A showcase of projects crafted with strategy, creativity, trend and precision.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2-Column Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {works.map((work) => (
            <div
              key={work.title}
              onClick={() => setSelectedProject(work)}
              className="work-card group bg-[#09090b] border border-white/[0.05] rounded-[24px] p-5 lg:p-6 flex flex-col justify-between hover:border-[#3275F8]/30 hover:shadow-[0_0_20px_rgba(50,117,248,0.15)] transition-all duration-500 relative overflow-hidden cursor-pointer"
            >
              <div>
                {/* Tags Row */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {work.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-[10px] uppercase font-semibold tracking-widest text-neutral-400">
                        {tag}
                      </span>
                      {idx < work.tags.length - 1 && (
                        <span className="w-1 h-1 rounded-full bg-neutral-600" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Aspect Ratio Image Container */}
                <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-6 bg-neutral-900 border border-white/5">
                  <Image
                    src={Array.isArray(work.image) ? work.image[0] : work.image}
                    alt={work.alt}
                    fill
                    className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>

              {/* Title, description & link action button */}
              <div className="flex justify-between items-end gap-6 pt-2">
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-[#3275F8] transition-colors duration-300">
                    {work.title}
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-400 font-light mt-2 leading-relaxed max-w-[90%]">
                    {work.description}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 hover:scale-105">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Render Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default WorksSection;
