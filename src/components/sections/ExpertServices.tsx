"use client";

import React from "react";
import { ArrowRight, Bot, Smartphone, Globe, Palette, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export const ExpertServices = () => {
    return (
        <section className="py-20 bg-black relative">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6"
                    >
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        </div>
                        <span className="text-xs font-medium text-neutral-300">Digital Agency</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-white/90"
                    >
                        A Full-Service Digital Partner
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[320px]">

                    {/* Card A: Web Development */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 md:row-span-1 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-8 md:p-10 relative z-10 w-full md:w-[55%] flex flex-col h-full justify-between">
                            <div>
                                <Globe className="w-6 h-6 text-neutral-400 mb-6 group-hover:text-white transition-colors" />
                                <h3 className="text-2xl font-medium text-white mb-3">Web Development</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                    Professional-grade web applications using React.js, Next.js with modern development practices.
                                </p>
                            </div>
                            <Link href="#contact" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mt-8 font-medium">
                                See More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Animated Code Mock */}
                        <div className="hidden md:block absolute -right-4 -bottom-4 top-8 w-[50%] bg-[#111] border border-white/[0.05] rounded-tl-2xl rounded-tr-2xl p-6 overflow-hidden transform group-hover:-translate-x-2 transition-transform duration-500 shadow-2xl">
                            <motion.div
                                animate={{ y: [0, -40, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="text-[11px] leading-relaxed text-neutral-500 font-mono flex flex-col gap-1"
                            >
                                <div><span className="text-purple-400">import</span> {'{'} useState {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react&apos;</span>;</div>
                                <div><span className="text-purple-400">import</span> {'{'} motion {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;framer-motion&apos;</span>;</div>
                                <br />
                                <div><span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() {'{'}</div>
                                <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                                <div className="pl-8 text-neutral-400">{'<main className="flex min-h-screen">'}</div>
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="pl-12 text-blue-300"
                                >
                                    {'<HeroSection />'}
                                </motion.div>
                                <div className="pl-12 text-blue-300">{'<FeaturesGrid />'}</div>
                                <div className="pl-12 text-blue-300">{'<InteractiveUI />'}</div>
                                <div className="pl-8 text-neutral-400">{'</main>'}</div>
                                <div className="pl-4">);</div>
                                <div>{'}'}</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Card B: AI Agent Building */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                        }}
                        className="md:col-span-1 md:row-span-2 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
                            <div>
                                <Bot className="w-6 h-6 text-neutral-400 mb-6 group-hover:text-white transition-colors" />
                                <h3 className="text-2xl font-medium text-white mb-3">AI Agent Building</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                    Intelligent AI agents and chatbots powered by cutting-edge machine learning technologies.
                                </p>
                            </div>
                            <div className="mt-8 mb-auto">
                                <Link href="#contact" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors font-medium">
                                    See More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Animated AI Chat Mock */}
                            <div className="mt-auto h-[220px] w-full flex flex-col justify-end relative z-20">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent pointer-events-none z-10" />

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 1 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                                    }}
                                    className="space-y-3 pb-8 relative z-0 flex flex-col w-full"
                                >
                                    {/* Message 1 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 15, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                        }}
                                        className="flex items-end gap-2 w-full"
                                    >
                                        <div className="w-7 h-7 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center border border-white/10 shadow-sm">
                                            <span className="text-[11px] font-bold text-white">U</span>
                                        </div>
                                        <div className="bg-[#222222] p-2.5 px-3.5 rounded-2xl rounded-bl-none text-[12px] text-white/90 shadow-sm border border-white/[0.05] tracking-wide max-w-[80%]">
                                            Hey! Are you free for a quick call?
                                        </div>
                                    </motion.div>

                                    {/* Message 2 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 15, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                        }}
                                        className="flex items-end gap-2 w-full justify-end"
                                    >
                                        <div className="bg-[#333333] p-2.5 px-3.5 rounded-2xl rounded-br-none text-[12px] text-white/90 shadow-sm border border-white/[0.05] tracking-wide max-w-[80%]">
                                            Sure, give me 5 minutes!
                                        </div>
                                        <div className="w-7 h-7 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center border border-white/10 shadow-sm">
                                            <span className="text-[11px] font-bold text-white">A</span>
                                        </div>
                                    </motion.div>

                                    {/* Message 3 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 15, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                        }}
                                        className="flex items-end gap-2 w-full"
                                    >
                                        <div className="w-7 h-7 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center border border-white/10 shadow-sm">
                                            <span className="text-[11px] font-bold text-white">C</span>
                                        </div>
                                        <div className="bg-[#222222] p-2.5 px-3.5 rounded-2xl rounded-bl-none text-[12px] text-white/90 shadow-sm border border-white/[0.05] tracking-wide max-w-[80%]">
                                            Sounds good 👍
                                        </div>
                                    </motion.div>

                                    {/* Message 4 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 15, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                                        }}
                                        className="flex items-end gap-2 w-full justify-end"
                                    >
                                        <div className="bg-[#333333] p-2.5 px-3.5 rounded-2xl rounded-br-none text-[12px] text-white/90 shadow-sm border border-white/[0.05] tracking-wide max-w-[80%]">
                                            I'm not sure if I can make it.
                                        </div>
                                        <div className="w-7 h-7 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center border border-white/10 shadow-sm">
                                            <span className="text-[11px] font-bold text-white">A</span>
                                        </div>
                                    </motion.div>

                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card C: Branding */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 md:row-span-2 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
                            <div>
                                <Palette className="w-6 h-6 text-neutral-400 mb-6 group-hover:text-white transition-colors" />
                                <h3 className="text-2xl font-medium text-white mb-3">Branding</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                    Complete brand identity solutions including logo design, color schemes, and brand guidelines.
                                </p>
                            </div>
                            <div className="mt-8 mb-auto">
                                <Link href="#contact" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors font-medium">
                                    See More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Animated Branding Mock */}
                            <div className="mt-auto grid grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square bg-[#121212] border border-white/[0.05] rounded-2xl p-3 flex flex-col justify-center shadow-lg"
                                >
                                    <span className="text-[10px] text-neutral-400 leading-relaxed font-light">Aa Bb Cc Dd<br />Ee Ff Gg Hh<br />Ii Jj Kk Ll Mm<br />Nn Oo Pp Qq</span>
                                </motion.div>

                                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/[0.1] rounded-2xl p-3 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden">
                                    {/* Continuously Rotating Abstract Logo */}
                                    <motion.svg
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-10 h-10 text-white relative z-10"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07L19.07 4.93" className="opacity-70" />
                                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                                    </motion.svg>
                                </div>

                                <div className="aspect-square bg-[#121212] border border-white/[0.05] rounded-2xl p-3 flex-col flex items-center justify-center gap-2 shadow-lg">
                                    <div className="w-full flex justify-around">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-4 h-4 rounded-full bg-indigo-500/80" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-4 h-4 rounded-full bg-purple-500/80" />
                                    </div>
                                    <div className="w-full flex justify-around">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-4 h-4 rounded-full bg-blue-500/80" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="w-4 h-4 rounded-full bg-pink-500/80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card D: Everything in One Place */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 md:row-span-1 rounded-3xl bg-gradient-to-br from-[#8ba1ce] via-[#526a9a] to-[#253255] border border-white/20 relative overflow-hidden flex items-center justify-center group p-8 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                        {/* Floating abstract structural shapes */}
                        <motion.div
                            animate={{ y: [-10, 10, -10], rotate: [12, 15, 12] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-10 -bottom-10 w-48 h-64 bg-white/10 backdrop-blur-md"
                        />
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [-12, -15, -12] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-10 -top-10 w-32 h-64 bg-white/10 backdrop-blur-md"
                        />

                        <h3 className="text-[28px] leading-[1.1] font-medium text-white text-center relative z-10 drop-shadow-xl">
                            Everything<br />in One Place
                        </h3>
                    </motion.div>

                    {/* Card E: Mobile App Building */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-2 md:row-span-1 bg-[#0c0c0c] border border-white/[0.05] rounded-3xl relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-8 md:p-10 relative z-10 w-full md:w-[45%] flex flex-col h-full justify-between">
                            <div>
                                <Smartphone className="w-6 h-6 text-neutral-400 mb-6 group-hover:text-white transition-colors" />
                                <h3 className="text-2xl font-medium text-white mb-3">Mobile App Building</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                    Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.
                                </p>
                            </div>
                            <Link href="#contact" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mt-8 font-medium">
                                See More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Animated Mobile Device Mock UI */}
                        <div className="hidden md:flex absolute right-8 -bottom-12 top-8 w-[40%] justify-center overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-[85%] max-w-[260px] h-[500px] bg-black border-[6px] border-[#222] rounded-[32px] overflow-hidden relative shadow-2xl flex flex-col pt-6 px-4">
                                {/* Phone Notch/Dynamic Island */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-5 bg-[#222] rounded-b-2xl z-20" />

                                {/* App header */}
                                <div className="flex justify-between items-center mb-6 relative z-10">
                                    <div className="w-8 h-8 rounded-full bg-white/10" />
                                    <div className="w-20 h-3 rounded-full bg-white/5" />
                                </div>

                                {/* Scrolling Content Feed */}
                                <motion.div
                                    animate={{ y: [0, -180, 0] }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="flex flex-col gap-4 relative z-10"
                                >
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="w-full bg-[#161616] border border-white/[0.05] rounded-2xl p-4 shrink-0">
                                            <div className="w-full h-32 bg-white/[0.02] rounded-xl mb-3 overflow-hidden relative">
                                                {/* Mock skeleton image block */}
                                                <motion.div
                                                    animate={{
                                                        backgroundPosition: ["200% 0", "-200% 0"],
                                                    }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] bg-[length:200%_100%]"
                                                />
                                            </div>
                                            <div className="w-3/4 h-3 bg-white/10 rounded-full mb-2" />
                                            <div className="w-1/2 h-2 bg-white/5 rounded-full" />
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Bottom Gradient Fade */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
