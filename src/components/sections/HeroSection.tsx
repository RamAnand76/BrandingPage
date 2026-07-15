"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import DarkVeil from "@/components/ui/DarkVeil";
import Image from "next/image";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export const HeroSection = () => {
    const container = useRef<HTMLDivElement>(null);
    const { setContactModalOpen } = useContactModal();

    useGSAP(() => {
        const tl = gsap.timeline();

        // Y-axis staggered entrance for text
        tl.from(".hero-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
        });

        // Springy entrance for the graphic bars
        tl.from(".hero-bar", {
            height: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
        }, "-=0.5");

        // Dark card entrance
        gsap.from(".hero-card", {
            scale: 0.95,
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.4
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full h-[135svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
            {/* Dark Veil Absolute Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-60">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0.05}
                    scanlineIntensity={0.1}
                    speed={0.5}
                    scanlineFrequency={0}
                    warpAmount={0.3}
                />
                {/* Abstract Ambient Glows */}
                <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            {/* Bottom Left Content */}
            <div className="absolute bottom-12 left-6 md:bottom-20 md:left-12 lg:left-20 z-10 max-w-[800px]">
                <h1 className="hero-text text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tighter text-white leading-[1.05] sm:leading-[0.95] mb-4 md:mb-6">
                    We build complete <br className="hidden sm:block" /> 
                    <AnimatedGradientText colorFrom="#98E04D" colorTo="#3275F8">
                        digital products
                    </AnimatedGradientText>
                </h1>

                <p className="hero-text text-sm md:text-base lg:text-lg text-neutral-400 max-w-[480px] leading-relaxed font-light">
                    Development, infrastructure, security and post-launch support.<br className="hidden sm:block" /> One team responsible for the whole thing from start to finish.
                </p>
            </div>

            {/* Bottom Right Card: New Case */}
            <div className="hero-card absolute bottom-12 right-6 md:bottom-20 md:right-12 lg:right-20 z-10 hidden sm:block">
                <Link href="/our-works" className="group flex bg-[#111111]/80 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[100px] md:h-[130px] items-center p-2 md:p-3 gap-2 md:gap-3 hover:bg-[#1a1a1a]/90 transition-colors w-[260px] md:w-[320px]">
                    <div className="w-[130px] md:w-[160px] h-full rounded-xl overflow-hidden relative shrink-0">
                        <Image src="/lovable-uploads/Code-editor compoennet-2.png" fill alt="New Case" className="object-cover" sizes="(max-width: 768px) 160px, 200px" />
                    </div>
                    <div className="flex-1 h-full bg-[#E5E5E5] rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col justify-between">
                        <span className="text-black font-semibold text-xs md:text-sm tracking-tight">New case</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black self-end transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </section>
    );
};
