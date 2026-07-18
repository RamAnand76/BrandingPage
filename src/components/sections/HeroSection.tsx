"use client";

import { HeroFrame } from "./hero/HeroFrame";
import { GridLines } from "./hero/GridLines";
import { CustomBackground } from "./hero/CustomBackground";
import { Wordmark } from "./hero/Wordmark";
import { HeroDescription } from "./hero/HeroDescription";
import { TeamBadge } from "./hero/TeamBadge";
import { Signature } from "./hero/Signature";
import { BottomCategories } from "./hero/BottomCategories";
import { HeroFooterElements } from "./hero/HeroFooterElements";
import { ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[132vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] selection:bg-[#3275F8]/30 selection:text-white font-inter">
            <CustomBackground />

            <HeroFooterElements />

            <div className="relative w-full flex-1 flex items-start md:items-center justify-center px-4 md:px-12 z-20 mt-28 md:mt-16">
                <HeroFrame>
                    <div className="w-full h-full p-4 md:p-12 lg:p-16 flex flex-col relative z-20">
                        {/* Top Label */}
                        <div className="flex items-center justify-start md:justify-center gap-2 text-[10px] md:text-[11px] tracking-[0.2em] text-white/50 uppercase font-normal mb-4">
                            (EST. <span className="text-[#3275F8]">2024</span> — VERSION <span className="text-[#00FF66]">1.0.0</span>)
                        </div>

                        {/* Wordmark */}
                        <Wordmark />

                        {/* Middle Section: Description & Team Badge */}
                        <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center w-full relative z-20">
                            <HeroDescription />
                            <div className="mt-6 md:mt-0 md:absolute md:left-1/2 md:-translate-x-[20%]">
                                <TeamBadge />
                            </div>
                        </div>

                        {/* Bottom Categories */}
                        <BottomCategories />
                        
                        {/* Mobile CTA Buttons */}
                        <div className="flex flex-col md:hidden gap-3 w-full mt-10 mb-20 z-40">
                            <button className="flex items-center justify-between w-full px-6 py-4 rounded-md border border-white/20 hover:border-[#3275F8]/50 transition-all bg-white text-black font-bold text-[12px] uppercase tracking-wider">
                                START YOUR PROJECT
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                            <button className="flex items-center justify-between w-full px-6 py-4 rounded-md border border-white/20 hover:border-[#3275F8]/50 hover:shadow-[0_0_15px_rgba(50,117,248,0.3)] transition-all bg-black/50 backdrop-blur-md text-white font-bold text-[12px] uppercase tracking-wider">
                                SEE OUR WORK
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </HeroFrame>
                <div className="hidden md:block">
                    <Signature />
                </div>
            </div>
            <div className="md:hidden absolute top-[40%] left-0 w-full z-10 pointer-events-none opacity-40">
                <Signature />
            </div>
        </section>
    );
};
