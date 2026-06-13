"use client";

import React, { useRef } from "react";
import { ArrowRight, Bot, Smartphone, Globe, Palette, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const ExpertServices = () => {
    const container = useRef<HTMLSelectElement>(null);

    useGSAP(() => {
        // Headers sliding from Left (-X)
        gsap.from(".service-header", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Cards sliding from Right (+X)
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: ".service-grid",
                start: "top 85%",
            },
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "back.out(1.2)"
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-12 lg:py-6 bg-black relative px-4 md:px-0 flex flex-col justify-center min-h-[100svh] overflow-hidden">
            <div className="max-w-[1240px] w-full mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8 lg:mb-6">
                    <div className="service-header inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-3 lg:mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        </div>
                        <span className="text-[11px] font-medium text-neutral-300">Software Agency</span>
                    </div>
                    <h2 className="service-header text-3xl md:text-4xl lg:text-[40px] font-normal tracking-tight text-white/90">
                        Our Software Development Services
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-3.5 md:grid-rows-[auto_auto]">

                    {/* Card A: Web Development */}
                    <div className="service-card md:col-span-2 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl min-h-[260px] lg:min-h-[210px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-6 md:p-8 lg:p-7 relative z-10 w-full md:w-[55%] flex flex-col h-full justify-between">
                            <div>
                                <Globe className="w-5 h-5 text-neutral-400 mb-4 group-hover:text-white transition-colors" />
                                <h3 className="text-xl md:text-2xl font-medium text-white mb-2">Web Development</h3>
                                <p className="text-xs lg:text-[13px] text-neutral-400 leading-relaxed font-light">
                                    Professional-grade web applications using React.js, Next.js with modern development practices.
                                </p>
                            </div>
                        </div>

                        {/* Animated Code Mock */}
                        <div className="hidden md:block absolute -right-4 -bottom-4 top-4 w-[46%] bg-[#111] border border-white/[0.05] rounded-tl-2xl rounded-tr-2xl p-4 overflow-hidden transform group-hover:-translate-x-2 transition-transform duration-500 shadow-2xl">
                            <motion.div
                                animate={{ y: [0, -40, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="text-[10px] leading-relaxed text-neutral-500 font-mono flex flex-col gap-0.5"
                            >
                                <div><span className="text-purple-400">import</span> {'{'} useState {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react&apos;</span>;</div>
                                <div><span className="text-purple-400">import</span> {'{'} motion {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;framer-motion&apos;</span>;</div>
                                <br />
                                <div><span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() {'{'}</div>
                                <div className="pl-3"><span className="text-purple-400">return</span> (</div>
                                <div className="pl-6 text-neutral-400">{'<main className="flex">'}</div>
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="pl-9 text-blue-300"
                                >
                                    {'<HeroSection />'}
                                </motion.div>
                                <div className="pl-9 text-blue-300">{'<FeaturesGrid />'}</div>
                                <div className="pl-9 text-blue-300">{'<InteractiveUI />'}</div>
                                <div className="pl-6 text-neutral-400">{'</main>'}</div>
                                <div className="pl-3">);</div>
                                <div>{'}'}</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Card B: AI Agent Building */}
                    <div className="service-card md:col-span-1 md:row-span-2 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl">
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-6 md:p-8 lg:p-7 relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <Bot className="w-5 h-5 text-neutral-400 mb-4 group-hover:text-white transition-colors" />
                                <h3 className="text-xl md:text-2xl font-medium text-white mb-2">AI Agent Building</h3>
                                <p className="text-xs lg:text-[13px] text-neutral-400 leading-relaxed font-light">
                                    Intelligent AI agents and chatbots powered by cutting-edge machine learning technologies.
                                </p>
                            </div>

                            {/* Animated AI Chat Mock */}
                            <div className="mt-6 h-[170px] lg:h-[140px] w-full flex flex-col justify-end relative z-20">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent pointer-events-none z-10" />

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 1 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                                    }}
                                    className="space-y-2 pb-4 px-1 sm:px-0 relative z-0 flex flex-col w-full"
                                >
                                    {/* Message 1 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 10, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                        }}
                                        className="flex items-end gap-1.5 w-full"
                                    >
                                        <div className="w-6 h-6 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center border border-white/10 shadow-sm">
                                            <span className="text-[9px] font-bold text-white">U</span>
                                        </div>
                                        <div className="bg-[#222222] p-2 px-3 rounded-2xl rounded-bl-none text-[11px] text-white/90 shadow-sm border border-white/[0.05] tracking-wide max-w-[80%]">
                                            Hey! Are you free for a quick call?
                                        </div>
                                    </motion.div>

                                    {/* Message 2 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 10, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                        }}
                                        className="flex items-end gap-1.5 w-full justify-end"
                                    >
                                        <div className="bg-[#333333] p-2 px-3 rounded-2xl rounded-br-none text-[11px] text-white/90 shadow-sm border border-white/[0.05] tracking-wide max-w-[80%]">
                                            Sure, give me 5 minutes!
                                        </div>
                                        <div className="w-6 h-6 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center border border-white/10 shadow-sm">
                                            <span className="text-[9px] font-bold text-white">A</span>
                                        </div>
                                    </motion.div>

                                    {/* Message 3 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 10, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                        }}
                                        className="flex items-end gap-1.5 w-full"
                                    >
                                        <div className="w-6 h-6 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center border border-white/10 shadow-sm">
                                            <span className="text-[9px] font-bold text-white">C</span>
                                        </div>
                                        <div className="bg-[#222222] p-2 px-3 rounded-2xl rounded-bl-none text-[11px] text-white/90 shadow-sm border border-white/[0.05] tracking-wide max-w-[80%]">
                                            Sounds good 👍
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Card C: Branding */}
                    <div className="service-card md:col-span-1 md:row-span-2 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl">
                        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-6 md:p-8 lg:p-7 relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <Palette className="w-5 h-5 text-neutral-400 mb-4 group-hover:text-white transition-colors" />
                                <h3 className="text-xl md:text-2xl font-medium text-white mb-2">Branding</h3>
                                <p className="text-xs lg:text-[13px] text-neutral-400 leading-relaxed font-light">
                                    Complete brand identity solutions including logo design, color schemes, and brand guidelines.
                                </p>
                            </div>

                            {/* Animated Branding Mock */}
                            <div className="mt-6 flex flex-row items-center gap-2 overflow-visible">
                                <motion.div
                                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.15)" }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-[#121212] border border-white/[0.05] rounded-[15px] p-3 flex flex-col justify-center shadow-lg h-[95px] shrink-0"
                                >
                                    <span className="text-[8px] text-neutral-400 leading-[1.5] font-light tracking-wide pt-0.5">Aa Bb Cc Dd<br />Ee Ff Gg<br />Ii Jj Kk<br />Mm Nn Oo</span>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.15)" }}
                                    transition={{ duration: 0.2 }}
                                    className="w-[75px] h-[75px] shrink-0 bg-[#0a0a0a] border border-white/[0.05] rounded-[15px] flex items-center justify-center shadow-lg relative overflow-hidden"
                                >
                                    {/* Continuously Rotating Abstract Logo */}
                                    <motion.svg
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="w-8 h-8 text-white relative z-10"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07L19.07 4.93" className="opacity-90" />
                                        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                                    </motion.svg>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.15)" }}
                                    transition={{ duration: 0.2 }}
                                    className="w-[75px] h-[75px] shrink-0 bg-[#121212] border border-white/[0.05] rounded-[15px] p-2 flex-col flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <div className="w-full flex justify-around">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-3.5 h-3.5 rounded-full bg-indigo-500" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-3.5 h-3.5 rounded-full bg-purple-500" />
                                    </div>
                                    <div className="w-full flex justify-around">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="w-3.5 h-3.5 rounded-full bg-pink-500" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Card D: Everything in One Place */}
                    <div className="service-card md:col-span-1 rounded-3xl bg-gradient-to-br from-[#8ba1ce] via-[#526a9a] to-[#253255] border border-white/20 relative overflow-hidden flex items-center justify-center group p-5 shadow-2xl min-h-[140px] lg:min-h-[105px]">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                        {/* Floating abstract structural shapes */}
                        <motion.div
                            animate={{ y: [-10, 10, -10], rotate: [12, 15, 12] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -bottom-4 w-24 h-36 bg-white/10 backdrop-blur-md"
                        />
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [-12, -15, -12] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 -top-4 w-20 h-36 bg-white/10 backdrop-blur-md"
                        />

                        <h3 className="text-xl md:text-2xl leading-[1.15] font-medium text-white text-center relative z-10 drop-shadow-xl">
                            Everything<br />in One Place
                        </h3>
                    </div>

                    {/* Card E: Mobile App Building */}
                    <div className="service-card md:col-span-2 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl min-h-[260px] lg:min-h-[210px]">
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-6 md:p-8 lg:p-7 relative z-10 w-full md:w-[45%] flex flex-col h-full justify-between">
                            <div>
                                <Smartphone className="w-5 h-5 text-neutral-400 mb-4 group-hover:text-white transition-colors" />
                                <h3 className="text-xl md:text-2xl font-medium text-white mb-2">Mobile App Building</h3>
                                <p className="text-xs lg:text-[13px] text-neutral-400 leading-relaxed font-light">
                                    Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.
                                </p>
                            </div>
                        </div>

                        {/* Animated Mobile Device Mock UI */}
                        <div className="hidden md:flex absolute right-8 -bottom-16 top-4 w-[40%] justify-center overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-[85%] max-w-[210px] h-[360px] lg:h-[300px] bg-black border-[5px] border-[#222] rounded-[28px] overflow-hidden relative shadow-2xl flex flex-col pt-4 px-3">
                                {/* Phone Notch/Dynamic Island */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-4 bg-[#222] rounded-b-xl z-20" />

                                {/* App header */}
                                <div className="flex justify-between items-center mb-4 relative z-10">
                                    <div className="w-6 h-6 rounded-full bg-white/10" />
                                    <div className="w-16 h-2.5 rounded-full bg-white/5" />
                                </div>

                                {/* Scrolling Content Feed */}
                                <motion.div
                                    animate={{ y: [0, -180, 0] }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="flex flex-col gap-3 relative z-10"
                                >
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-full bg-[#161616] border border-white/[0.05] rounded-xl p-3 shrink-0">
                                            <div className="w-full h-20 bg-white/[0.02] rounded-lg mb-2 overflow-hidden relative">
                                                {/* Mock skeleton image block */}
                                                <motion.div
                                                    animate={{
                                                        backgroundPosition: ["200% 0", "-200% 0"],
                                                    }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] bg-[length:200%_100%]"
                                                />
                                            </div>
                                            <div className="w-3/4 h-2 bg-white/10 rounded-full mb-1.5" />
                                            <div className="w-1/2 h-1.5 bg-white/5 rounded-full" />
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Bottom Gradient Fade */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
