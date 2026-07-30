"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { RefreshCw, Zap, MessageCircle, MousePointer2, Figma, Slack, Infinity as InfinityIcon } from "lucide-react";
import Image from "next/image";

export const BenefitsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-12 lg:py-16 bg-black relative overflow-hidden flex flex-col justify-center min-h-[100svh]" id="benefits">
            <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
                
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-4 bg-[#161616] px-4 py-1.5 rounded-full border border-white/5"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm md:text-sm text-neutral-400 font-medium tracking-wide">
                            Explore what&apos;s included
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white leading-tight"
                    >
                        Inspiring benefits awaits you
                    </motion.h2>
                </div>

                {/* Bento Grid layout */}
                <motion.div 
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    className="flex flex-col md:flex-row gap-4 lg:gap-5 w-full items-stretch"
                >
                    
                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-4 lg:gap-5 w-full md:w-1/3">
                        {/* Maximum Creativity (Large Blue Card) */}
                        <motion.div 
                            variants={cardVariants}
                            className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-6 lg:p-8 flex flex-col justify-end min-h-[250px] md:min-h-0 md:flex-[1.3] relative overflow-hidden group shadow-2xl"
                        >
                            {/* Ambient Glowing Orbs */}
                            <motion.div 
                                animate={{ 
                                    x: [0, 50, -30, 0], 
                                    y: [0, -50, 20, 0],
                                    scale: [1, 1.2, 0.8, 1]
                                }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-300/40 rounded-full blur-[80px] pointer-events-none"
                            />
                            <motion.div 
                                animate={{ 
                                    x: [0, -60, 40, 0], 
                                    y: [0, 60, -30, 0],
                                    scale: [1, 0.8, 1.3, 1]
                                }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/40 rounded-full blur-[80px] pointer-events-none"
                            />
                            
                            <motion.div 
                                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay bg-[length:200%_200%]"
                            />
                            <div className="relative z-10 text-white">
                                <h3 className="text-2xl font-bold mb-2 tracking-tight drop-shadow-md">Maximum creativity</h3>
                                <p className="text-white/90 font-medium text-sm leading-relaxed max-w-[90%] drop-shadow-sm">
                                    Engage audience with your unique style.
                                </p>
                            </div>
                        </motion.div>

                        {/* Design Iterations (Line Graph) */}
                        <motion.div 
                            variants={cardVariants}
                            className="bg-[#121212] border border-white/[0.05] rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[220px] md:min-h-0 md:flex-1 relative overflow-hidden group hover:border-white/[0.1] transition-colors"
                        >
                            {/* Line Graph Mock */}
                            <div className="absolute top-4 left-0 right-0 h-[120px] flex items-center justify-center px-6 pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none" className="overflow-visible">
                                    {/* Grid lines */}
                                    <path d="M0 25 L300 25 M0 50 L300 50 M0 75 L300 75 M0 100 L300 100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                                    {/* Line */}
                                    <motion.path 
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        d="M0 80 Q 40 80, 80 60 T 150 70 T 200 40 T 250 20 L 300 10" 
                                        fill="none" 
                                        stroke="url(#blue-gradient)" 
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        style={{ filter: 'drop-shadow(0px 4px 6px rgba(59, 130, 246, 0.4))' }}
                                    />
                                    {/* Shimmer overlay on line */}
                                    <motion.path 
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        d="M0 80 Q 40 80, 80 60 T 150 70 T 200 40 T 250 20 L 300 10" 
                                        fill="none" 
                                        stroke="#60a5fa" 
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        style={{ filter: 'blur(2px)' }}
                                    />
                                    {/* Glowing Point */}
                                    <motion.circle 
                                        initial={{ opacity: 0 }}
                                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        cx="200" cy="40" r="4" fill="#3b82f6" 
                                        style={{ filter: 'drop-shadow(0 0 10px #3b82f6)' }}
                                    />
                                    {/* Vertical line from point */}
                                    <motion.line 
                                        initial={{ y2: 40 }}
                                        whileInView={{ y2: 100 }}
                                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                                        transition={{ y2: { duration: 0.5, delay: 1 }, opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                                        x1="200" y1="40" x2="200" stroke="rgba(59,130,246,0.5)" strokeWidth="1" strokeDasharray="4 4" 
                                    />
                                    <defs>
                                        <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#1e3a8a" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="relative z-10 mt-auto pt-24">
                                <h3 className="text-lg md:text-xl font-medium text-white mb-1.5">Design iterations</h3>
                                <p className="text-neutral-500 font-light text-xs md:text-sm leading-relaxed max-w-[90%]">
                                    Get as many design tweaks as you&apos;d like.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-4 lg:gap-5 w-full md:w-1/3">
                        {/* Invite People (Avatars) */}
                        <motion.div 
                            variants={cardVariants}
                            className="bg-[#121212] border border-white/[0.05] rounded-3xl p-5 lg:p-6 flex flex-col justify-between min-h-[170px] md:min-h-0 md:flex-1 relative overflow-hidden group hover:border-white/[0.1] transition-colors"
                        >
                            <div className="w-full flex justify-center items-center h-[90px] relative mt-1">
                                <div className="relative flex items-center justify-center">
                                    <motion.div 
                                        animate={{ y: [-3, 3, -3], rotate: [-2, 2, -2] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-12 h-12 rounded-full border-2 border-[#121212] z-10 overflow-hidden relative"
                                    >
                                        <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="avatar 1" fill className="object-cover" sizes="48px" />
                                        <div className="absolute inset-0 rounded-full border border-purple-500 pointer-events-none shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                                    </motion.div>
                                    <motion.div 
                                        animate={{ y: [3, -3, 3], rotate: [2, -2, 2], scale: [0.95, 1.05, 0.95] }}
                                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-12 h-12 rounded-full border-2 border-[#121212] z-20 -ml-4 overflow-hidden relative"
                                    >
                                        <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" alt="avatar 2" fill className="object-cover" sizes="48px" />
                                        <div className="absolute inset-0 rounded-full border border-blue-500 pointer-events-none shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                                    </motion.div>
                                    <motion.div 
                                        animate={{ y: [-2, 2, -2], rotate: [-3, 3, -3] }}
                                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-12 h-12 rounded-full border-2 border-[#121212] z-30 -ml-4 overflow-hidden relative group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="avatar 3" fill className="object-cover" sizes="48px" />
                                        <div className="absolute inset-0 rounded-full border border-cyan-400 pointer-events-none shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                                    </motion.div>
                                    
                                    {/* Cursor Mock */}
                                    <motion.div 
                                        animate={{ x: [12, 18, 10, 12], y: [12, 8, 16, 12] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -bottom-4 -right-8 z-40 flex flex-col items-center"
                                    >
                                        <MousePointer2 className="w-4 h-4 text-white drop-shadow-md fill-black" />
                                        <div className="bg-cyan-400 text-black text-[8px] font-bold px-1.5 py-0.5 rounded-full mt-0.5 whitespace-nowrap shadow-lg">Eliah</div>
                                    </motion.div>
                                </div>
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-medium text-white mt-auto">Invite people</h3>
                        </motion.div>

                        {/* Fast Iterations (UI Mocks) */}
                        <motion.div 
                            variants={cardVariants}
                            className="bg-[#121212] border border-white/[0.05] rounded-3xl p-5 lg:p-6 flex flex-col justify-between min-h-[170px] md:min-h-0 md:flex-1 relative overflow-hidden group hover:border-white/[0.1] transition-colors"
                        >
                            <div className="w-full h-[90px] relative flex justify-center items-center mt-1">
                                {/* Mock UI Widget 1 */}
                                <motion.div 
                                    animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute left-2 lg:left-6 top-1 bg-[#1a1a1a] border border-white/5 rounded-2xl p-2.5 w-[130px] shadow-2xl flex items-center gap-2 z-10"
                                >
                                    <div className="w-6 h-6 rounded-lg bg-[#222] flex items-center justify-center shrink-0 border border-white/5 relative overflow-hidden">
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                                            <RefreshCw className="w-3 h-3 text-cyan-400" />
                                        </motion.div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex items-center gap-1">
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                                            <div className="text-[6px] text-neutral-400 font-bold tracking-wider uppercase">Processing</div>
                                        </div>
                                        <motion.div animate={{ width: ["30%", "80%", "30%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="h-1 bg-white/20 rounded-full" />
                                        <div className="w-1/2 h-1 bg-white/5 rounded-full" />
                                    </div>
                                </motion.div>

                                {/* Mock UI Widget 2 */}
                                <motion.div 
                                    animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute right-2 lg:right-4 bottom-1 bg-[#1a1a1a] border border-white/10 rounded-2xl p-3 w-[140px] shadow-2xl flex items-center gap-2 z-20 backdrop-blur-md bg-[#1a1a1a]/90"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                            <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                                        </motion.div>
                                    </div>
                                    <div className="flex flex-col gap-0.5 w-full">
                                        <div className="flex items-center gap-1">
                                            <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                                            <div className="text-[6px] text-blue-400 font-bold tracking-wider uppercase">Ready</div>
                                        </div>
                                        <div className="text-[9px] font-medium text-white leading-tight">Latest design</div>
                                        <div className="text-[7px] text-neutral-500">Today, 11:50</div>
                                    </div>
                                </motion.div>
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-medium text-white mt-auto">Fast iterations</h3>
                        </motion.div>

                        {/* Custom Support (Chat Bubble) */}
                        <motion.div 
                            variants={cardVariants}
                            className="bg-[#121212] border border-white/[0.05] rounded-3xl p-5 lg:p-6 flex flex-col justify-between min-h-[160px] md:min-h-0 md:flex-1 relative overflow-hidden group hover:border-white/[0.1] transition-colors"
                        >
                            <div className="w-full flex justify-center items-center h-[80px] relative">
                                <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    animate={{ y: [-3, 3, -3], rotate: [-1, 1, -1] }}
                                    transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.4 }, opacity: { duration: 0.4 } }}
                                    className="bg-[#1a1a1a] border border-white/10 rounded-2xl rounded-tl-none p-2.5 lg:p-3 flex items-start gap-2.5 shadow-2xl relative z-20"
                                >
                                    {/* Avatar */}
                                    <div className="relative shrink-0 mt-0.5">
                                        <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="support" fill className="object-cover rounded-full" sizes="24px" />
                                        <motion.div 
                                            animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-[1.5px] border-[#1a1a1a] flex items-center justify-center"
                                        >
                                            <span className="text-[5px] font-bold text-white">1</span>
                                        </motion.div>
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <div className="text-[8px] text-neutral-500">Trina says:</div>
                                        <div className="text-[10px] text-white/90 leading-tight">Hey there!</div>
                                        <div className="text-[10px] text-white/90 leading-tight">How can I help you?</div>
                                    </div>
                                </motion.div>
                                
                                {/* Secondary background bubble */}
                                <motion.div 
                                    animate={{ opacity: [0, 1, 0], y: [10, 0, -10], x: [0, 20, 40] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                    className="absolute right-12 top-2 bg-[#222] border border-white/5 rounded-2xl rounded-br-none p-2 shadow-xl z-10"
                                >
                                    <div className="flex gap-1 items-center px-1">
                                        <div className="w-1 h-1 rounded-full bg-neutral-500 animate-bounce" />
                                        <div className="w-1 h-1 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: "0.1s" }} />
                                        <div className="w-1 h-1 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
                                    </div>
                                </motion.div>
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-medium text-white mt-auto">Custom support</h3>
                        </motion.div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="flex flex-col gap-4 lg:gap-5 w-full md:w-1/3">
                        {/* Track Progress (Bar Chart) */}
                        <motion.div 
                            variants={cardVariants}
                            className="bg-[#121212] border border-white/[0.05] rounded-3xl p-6 lg:p-8 flex flex-col min-h-[260px] md:min-h-0 md:flex-1 relative overflow-hidden group hover:border-white/[0.1] transition-colors"
                        >
                            <h3 className="text-[10px] font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Growth</h3>
                            
                            <div className="w-full h-[100px] flex items-end justify-between gap-1 lg:gap-1.5 px-1 mt-2">
                                {[30, 45, 35, 60, 50, 75, 40, 85, 65, 100, 70, 55].map((baseHeight, i) => {
                                    // Calculate dynamic heights for live equalizer effect
                                    const h1 = baseHeight;
                                    const h2 = Math.min(100, baseHeight + (Math.random() * 20 - 10));
                                    const h3 = Math.min(100, baseHeight + (Math.random() * 30 - 15));
                                    
                                    return (
                                        <motion.div 
                                            key={i}
                                            animate={{ height: [`${h1}%`, `${h2}%`, `${h3}%`, `${h1}%`] }}
                                            whileHover={{ scaleY: 1.1, backgroundColor: i === 9 ? "#22d3ee" : "#3b82f6" }}
                                            transition={{ 
                                                duration: 3 + (i % 3), 
                                                repeat: Infinity, 
                                                ease: "easeInOut",
                                                delay: i * 0.04
                                            }}
                                            className={cn(
                                                "w-full rounded-t-sm origin-bottom",
                                                i === 9 ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" : "bg-blue-500/40"
                                            )}
                                        />
                                    );
                                })}
                            </div>
                            
                            <div className="flex justify-between w-full text-[8px] text-neutral-600 mt-2 px-1 font-medium">
                                <span>Nov, 10</span>
                                <span>Nov, 11</span>
                                <span>Today</span>
                            </div>

                            <div className="mt-auto pt-6">
                                <h3 className="text-lg md:text-xl font-medium text-white mb-1.5">Track progress</h3>
                                <p className="text-neutral-500 font-light text-xs md:text-sm leading-relaxed max-w-[90%]">
                                    Blazing fast delivery timing, no fuzz.
                                </p>
                            </div>
                        </motion.div>

                        {/* 100% Integrated (Icons Grid) */}
                        <motion.div 
                            variants={cardVariants}
                            className="bg-[#121212] border border-white/[0.05] rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[260px] md:min-h-0 md:flex-1 relative overflow-hidden group hover:border-white/[0.1] transition-colors"
                        >
                            {/* Animated connection lines background */}
                            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
                                <svg width="100%" height="100%" className="absolute">
                                    <motion.path 
                                        d="M50,150 Q150,100 250,150" 
                                        fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5"
                                        animate={{ strokeDashoffset: [0, -50] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.path 
                                        d="M100,50 Q150,150 200,50" 
                                        fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 5"
                                        animate={{ strokeDashoffset: [0, 50] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                    />
                                </svg>
                            </div>

                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 mt-2 relative z-10">
                                <div className="flex items-center gap-4">
                                    {/* Icon 1: Figma */}
                                    <motion.div 
                                        whileHover={{ scale: 1.15, rotate: -5 }}
                                        animate={{ y: [-2, 2, -2], rotate: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-lg hover:border-pink-500/30 transition-colors cursor-pointer"
                                    >
                                        <Figma className="w-4 h-4 text-pink-500" />
                                    </motion.div>
                                    {/* Icon 2: Notion mock */}
                                    <motion.div 
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        animate={{ y: [2, -2, 2], rotate: [2, -2, 2] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-lg hover:border-white/30 transition-colors cursor-pointer z-10 relative"
                                    >
                                        <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                                        <div className="font-bold text-white text-lg font-serif relative z-10">N</div>
                                    </motion.div>
                                    {/* Icon 3: Slack */}
                                    <motion.div 
                                        whileHover={{ scale: 1.15, rotate: -5 }}
                                        animate={{ y: [-3, 3, -3], rotate: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-lg hover:border-blue-400/30 transition-colors cursor-pointer"
                                    >
                                        <Slack className="w-4 h-4 text-blue-400" />
                                    </motion.div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* Icon 4: X */}
                                    <motion.div 
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        animate={{ y: [3, -3, 3], rotate: [3, -3, 3] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-lg hover:border-white/30 transition-colors cursor-pointer"
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3 h-3 fill-white"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                                    </motion.div>
                                    {/* Icon 5: Zapier / Automation */}
                                    <motion.div 
                                        whileHover={{ scale: 1.15, rotate: -5 }}
                                        animate={{ y: [-2.5, 2.5, -2.5], rotate: [-2, 2, -2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-lg hover:border-orange-500/30 transition-colors cursor-pointer"
                                    >
                                        <InfinityIcon className="w-4 h-4 text-orange-500" />
                                    </motion.div>
                                    {/* Icon 6: Discord mock */}
                                    <motion.div 
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        animate={{ y: [2, -2, 2], rotate: [2, -2, 2] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center shadow-lg hover:border-indigo-500/30 transition-colors cursor-pointer"
                                    >
                                        <MessageCircle className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
                                    </motion.div>
                                </div>
                            </div>
                            
                            <div className="mt-8 relative z-10">
                                <h3 className="text-lg md:text-xl font-medium text-white mb-1.5">100% Integrated</h3>
                                <p className="text-neutral-500 font-light text-xs md:text-sm leading-relaxed max-w-[90%]">
                                    Seamlessly connect all your existing apps.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
