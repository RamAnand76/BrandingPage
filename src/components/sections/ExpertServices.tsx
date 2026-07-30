"use client";

import React, { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
    {
        id: "01",
        title: "PRODUCT ENGINEERING",
        tags: ["Web App Development", "Mobile App Development", "End to End Product Engineering"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        hoverGradient: "from-blue-600 to-cyan-400",
        activeGradient: "from-cyan-400 to-blue-500",
        iconHover: "group-hover:text-blue-400",
        iconActive: "text-blue-500",
        borderHover: "group-hover:border-blue-500/50"
    },
    {
        id: "02",
        title: "ARTIFICIAL INTELLIGENCE",
        tags: ["AI Engineering Services", "Automation Services", "AIOps"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
        hoverGradient: "from-green-400 to-emerald-600",
        activeGradient: "from-emerald-500 to-green-400",
        iconHover: "group-hover:text-green-400",
        iconActive: "text-green-500",
        borderHover: "group-hover:border-green-500/50"
    },
    {
        id: "03",
        title: "CYBER SECURITY",
        tags: ["Cyber Security Services", "Penetration Testing", "Vulnerability Assessment"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
        hoverGradient: "from-blue-500 via-emerald-400 to-green-400",
        activeGradient: "from-green-400 via-blue-500 to-cyan-400",
        iconHover: "group-hover:text-emerald-400",
        iconActive: "text-emerald-500",
        borderHover: "group-hover:border-emerald-500/50"
    }
];

export const ExpertServices = () => {
    const container = useRef<HTMLElement>(null);
    const [expandedId, setExpandedId] = useState<string | null>("01");

    useGSAP(() => {
        gsap.from(".service-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, { scope: container });

    const toggleAccordion = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <section ref={container} className="py-20 bg-black relative px-4 md:px-0 flex flex-col justify-center min-h-[100svh] overflow-hidden">
            <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12">
                
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-sm md:text-base font-medium tracking-[0.2em] text-neutral-400 uppercase mb-4">
                        What We Do
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
                        Our Expert Services
                    </h3>
                </div>

                <motion.div layout className="flex flex-col w-full border-t border-white/20">
                    {servicesData.map((service, index) => {
                        const isExpanded = expandedId === service.id;

                        return (
                            <motion.div 
                                layout
                                key={service.id} 
                                className="service-item border-b border-white/20 last:border-b-0 py-8 flex flex-col"
                            >
                                {/* Header / Toggle */}
                                <motion.div 
                                    layout
                                    className="flex justify-between items-center cursor-pointer group"
                                    onClick={() => toggleAccordion(service.id)}
                                >
                                    <div className="relative inline-block w-full">
                                        {/* Base text */}
                                        <h2 className={cn(
                                            "text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-white transition-opacity duration-500",
                                            isExpanded ? "opacity-0" : "opacity-100"
                                        )}>
                                            {service.title}
                                        </h2>
                                        
                                        {/* Outward Gradient Overlay */}
                                        <h2 className={cn(
                                            "absolute top-0 left-0 text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r transition-all duration-700 ease-in-out w-full",
                                            isExpanded ? service.activeGradient : service.hoverGradient,
                                            isExpanded 
                                                ? "[clip-path:circle(150%_at_50%_50%)]" 
                                                : "[clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)]"
                                        )}>
                                            {service.title}
                                        </h2>
                                    </div>
                                    
                                    <motion.div 
                                        layout
                                        className={cn(
                                            "w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full border border-white/20 flex items-center justify-center bg-transparent transition-colors duration-500 ml-4",
                                            service.borderHover
                                        )}
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        {isExpanded ? (
                                            <Minus className={cn("w-6 h-6 md:w-8 md:h-8 transition-colors", service.iconActive)} />
                                        ) : (
                                            <Plus className={cn("text-white transition-colors w-6 h-6 md:w-8 md:h-8", service.iconHover)} />
                                        )}
                                    </motion.div>
                                </motion.div>

                                {/* Expandable Content */}
                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div
                                            key={`content-${service.id}`}
                                            layout
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                            className="overflow-hidden origin-top"
                                        >
                                            <div className="pt-8 md:pt-12 pb-4 flex flex-col gap-6 md:gap-10">
                                                {/* Tags */}
                                                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-neutral-400 font-medium uppercase tracking-widest">
                                                    {service.tags.map((tag, tagIndex) => (
                                                        <React.Fragment key={tag}>
                                                            <span className={cn(
                                                                "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r transition-all cursor-default duration-300",
                                                                service.hoverGradient
                                                            )}>
                                                                {tag}
                                                            </span>
                                                            {tagIndex < service.tags.length - 1 && (
                                                                <span className="text-white/10">----</span>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                                
                                                {/* Image */}
                                                <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden relative">
                                                    <img 
                                                        src={service.image} 
                                                        alt={service.title}
                                                        className="w-full h-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

