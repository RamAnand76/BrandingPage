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
import { useState } from "react";
import { MobileMenuModal } from "../MobileMenuModal";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <section className="relative w-full h-screen min-h-[100svh] md:min-h-[132vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] selection:bg-[#3275F8]/30 selection:text-white">
            <CustomBackground />

            <MobileMenuModal isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

            <HeroFooterElements onMenuClick={() => setIsMobileMenuOpen(true)} />

            {/* ── Fixed hamburger button overlay (mobile only) ── */}
            <motion.button
                onClick={() => setIsMobileMenuOpen(true)}
                className="fixed bottom-[calc(7.5vh-24px)] left-[calc(50%-20px)] -translate-x-1/2 z-[150] w-12 h-12 bg-[#111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#222]/90 transition-colors md:hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <Menu className="w-5 h-5 text-white/80" />
            </motion.button>

            <div className="relative w-full flex-1 flex items-center justify-center px-4 md:px-12 z-20 mt-20 md:mt-16">
                <HeroFrame>
                    <div className="w-full h-full p-6 md:p-12 lg:p-16 flex flex-col relative z-20">
                        {/* Top Label */}
                        <div className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.2em] text-white/50 uppercase font-normal mb-4">
                            (EST. <span className="text-[#3275F8]">2025</span> — VERSION <span className="text-[#00FF66]">1.0.0</span>)
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

                        {/* Mobile Footer Info (inside the frame) */}
                        <div className="flex md:hidden items-center justify-between w-full mt-10 text-[9px] font-semibold tracking-widest text-white/60">
                            <span>AVAILABLE FOR: <span className="text-[#00FF66]">DEC</span> PROJECTS</span>
                            <span>JULY 18, 08:10</span>
                        </div>
                    </div>
                    <Signature />
                </HeroFrame>
            </div>
        </section>
    );
};
