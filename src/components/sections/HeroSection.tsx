"use client";

import { HeroFrame } from "./hero/HeroFrame";
import { GridLines } from "./hero/GridLines";
import { CustomBackground } from "./hero/CustomBackground";
import { Wordmark } from "./hero/Wordmark";
import { HeroDescription } from "./hero/HeroDescription";
import { HeroActions } from "./hero/HeroActions";
import { Signature } from "./hero/Signature";
import { BottomCategories } from "./hero/BottomCategories";

export const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[100svh] md:min-h-[132vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] selection:bg-[#3275F8]/30 selection:text-white">
            <CustomBackground />

            <div className="relative w-full flex-1 flex items-center justify-center px-4 md:px-12 z-20 mt-20 md:mt-16">
                <HeroFrame>
                    <div className="w-full h-full p-6 md:p-12 lg:p-16 flex flex-col relative z-20">
                        {/* Soft scrim so small copy stays readable over the bright folds */}
                        <div className="absolute inset-y-0 left-0 w-[70%] -z-10 pointer-events-none bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                        {/* Top Label */}
                        <div className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.2em] text-white/50 uppercase font-normal mb-4">
                            (EST. <span className="text-[#3275F8]">2026</span> — VERSION <span className="text-[#00FF66]">1.0.0</span>)
                        </div>

                        {/* Wordmark */}
                        <Wordmark />

                        <div className="mt-4 md:mt-8 w-full relative z-20">
                            <HeroDescription />
                        </div>

                        <HeroActions />

                        {/* Bottom Categories */}
                        <BottomCategories />

                    </div>
                    <Signature />
                </HeroFrame>
            </div>
        </section>
    );
};
