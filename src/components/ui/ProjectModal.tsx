"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  image: string | string[];
  alt: string;
  tags: string[];
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          data-lenis-prevent="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90"
          />

          {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10 min-h-[60vh] xl:min-h-[700px]"
            >
            {/* Close Button (Mobile Absolute) */}
            <button
              onClick={onClose}
              className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT PANE - Dark Gray */}
            <div className="w-full md:w-[35%] lg:w-[30%] bg-[#111111] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-6">
                  {project.title}
                </h2>
                
                {/* Tags Row */}
                <div className="flex flex-wrap items-center gap-3 mb-10">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex-1 pr-2 mt-4 max-h-[300px] overflow-y-auto custom-scrollbar">
                  <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom stats/link */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8">
                <span className="text-sm text-neutral-500 font-light">
                  {project.tags.length} core technologies
                </span>
                
                {project.link !== "#contact" && (
                  <Link 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white font-medium hover:text-[#3275F8] transition-colors underline underline-offset-4"
                  >
                    View Live Site
                  </Link>
                )}
              </div>
            </div>

            {/* RIGHT PANE - Pitch Black */}
            <div className="w-full md:w-[65%] lg:w-[70%] bg-[#030303] flex flex-col justify-between relative border-t md:border-t-0 md:border-l border-white/5">
              
              {/* Close Button (Desktop) */}
              <button
                onClick={onClose}
                className="hidden md:flex absolute top-6 right-6 p-2 rounded-full bg-black/50 text-neutral-300 hover:text-white transition-colors z-20 backdrop-blur-sm border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full flex-1 overflow-hidden group">
                  {project && (() => {
                    const images = Array.isArray(project.image) ? project.image : [project.image];
                    return (
                      <>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                          >
                            <Image 
                              src={images[currentImageIndex]}
                              alt={`${project.alt || project.title} - Image ${currentImageIndex + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </motion.div>
                        </AnimatePresence>

                        {images.length > 1 && (
                          <>
                            <button 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1); 
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 border border-white/10"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                setCurrentImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1); 
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 border border-white/10"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            {/* Dots */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                              {images.map((_, idx) => (
                                <div 
                                  key={idx} 
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/30'}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>

              {/* Action Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 p-8 md:p-12 bg-[#030303] z-10 shrink-0">
                <div className="flex items-center gap-2 text-[#3275F8] bg-[#3275F8]/10 px-4 py-2 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
                
                <button 
                  disabled
                  className="flex items-center gap-2 bg-white/5 text-neutral-500 px-6 py-3 rounded-full text-sm font-medium border border-white/5 cursor-not-allowed transition-colors"
                >
                  Case Study coming soon
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
