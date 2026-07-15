"use client";

import { HeroFrame } from "./hero/HeroFrame";
import { GridLines } from "./hero/GridLines";
import { BackgroundEffects } from "./hero/BackgroundEffects";
import { Wordmark } from "./hero/Wordmark";
import { HeroDescription } from "./hero/HeroDescription";
import { TeamBadge } from "./hero/TeamBadge";
import { Signature } from "./hero/Signature";
import { BottomCategories } from "./hero/BottomCategories";
import { HeroFooterElements } from "./hero/HeroFooterElements";

export const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[132vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] selection:bg-[#3275F8]/30 selection:text-white font-inter">
            <BackgroundEffects />

            <HeroFooterElements />

            <div className="relative w-full flex-1 flex items-center justify-center px-4 md:px-12 z-20 mt-16">
                <GridLines />
                <HeroFrame>
                    <div className="w-full h-full p-8 md:p-12 lg:p-16 flex flex-col relative z-20">
                        {/* Top Label */}
                        <div className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.2em] text-white/50 uppercase font-normal mb-12">
                            (EST. <span className="text-[#3275F8]">2024</span> — VERSION <span className="text-[#00FF66]">1.0.0</span>)
                        </div>

                        {/* Wordmark */}
                        <Wordmark />

                        {/* Middle Section: Description & Team Badge */}
                        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-center w-full relative z-20">
                            <HeroDescription />
                            <div className="mt-8 md:mt-0 md:absolute md:left-1/2 md:-translate-x-[20%]">
                                <TeamBadge />
                            </div>
                        </div>

                        {/* Bottom Categories */}
                        <BottomCategories />
                    </div>
                </HeroFrame>
                <Signature />
            </div>
        </section>
    );
};
