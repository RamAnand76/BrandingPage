"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface HeroSectionProps {
    setContactModalOpen: (val: boolean) => void;
}

export const HeroSection = ({ setContactModalOpen }: HeroSectionProps) => {
    return (
        <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
            <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

                {/* Left Column */}
                <div className="flex flex-col items-start text-left relative z-10 w-full">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#98E04D] font-medium text-sm md:text-base tracking-wide mb-4 md:mb-6 uppercase"
                    >
                        Re-Invent: Expert Services, Delivered.
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tighter text-white leading-[0.95] mb-6 md:mb-8"
                    >
                        Transform ideas <br className="hidden md:block" /> Into digital reality
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 mb-8 max-w-[480px] leading-relaxed font-light"
                    >
                        From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow. Let&apos;s create something amazing together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <HoverBorderGradient
                            containerClassName="rounded-full w-full sm:w-auto"
                            as="button"
                            className="bg-black/80 hover:bg-black/60 text-white text-base md:text-lg font-bold px-8 py-4 md:py-5 flex items-center justify-center gap-3 transition-all w-full shadow-[0_0_40px_rgba(50,117,248,0.5)] border border-white/10"
                            onClick={() => setContactModalOpen(true)}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </span>
                        </HoverBorderGradient>

                        <Link href="/products" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white/20 hover:bg-white/5 text-white text-base md:text-lg font-semibold px-8 py-7 h-auto md:h-[68px] rounded-full w-full sm:w-auto transition-all"
                            >
                                Discover Products
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column - Dark Card with Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] bg-[#0A0A0A] rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl group border border-white/[0.05]"
                >
                    {/* Abstract fluid shapes inside card */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#98E04D]/[0.05] rounded-full blur-[100px] transition-transform duration-1000 group-hover:scale-110" />

                    <div className="flex items-center gap-4 mb-6 md:mb-10 relative z-10">
                        <div className="w-12 md:w-16 h-[1px] bg-neutral-400" />
                        <span className="text-neutral-300 font-medium text-sm md:text-base tracking-wide">Fast & Reliable</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.15] mb-auto relative z-10 md:max-w-[85%] tracking-tight">
                        We build the digital solutions of tomorrow!
                    </h3>

                    {/* Bar Chart Graphic */}
                    <div className="mt-auto flex items-end justify-end gap-3 md:gap-4 h-[150px] md:h-[220px] w-full relative z-10 bottom-0 pr-2">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "45%" }}
                            transition={{ duration: 1, delay: 0.5, type: "spring" }}
                            className="w-14 sm:w-16 md:w-20 bg-[#D4F2A3] rounded-t-sm md:rounded-t-md"
                        />
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "65%" }}
                            transition={{ duration: 1, delay: 0.6, type: "spring" }}
                            className="w-14 sm:w-16 md:w-20 bg-[#B5E973] rounded-t-sm md:rounded-t-md"
                        />
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1, delay: 0.7, type: "spring" }}
                            className="w-14 sm:w-16 md:w-20 bg-[#98E04D] rounded-t-sm md:rounded-t-md"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
