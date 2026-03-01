'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, MotionValue, useMotionValueEvent, useMotionValue, useSpring } from 'motion/react';
import { TECH_DATA, TechItem } from '../constants';

interface TechScrollProps {
    items?: TechItem[];
}

export const TechScroll: React.FC<TechScrollProps> = ({ items = TECH_DATA }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const total = items.length;

    // Give each item ~145vh of scroll to pad out more animation completion time
    const scrollPerItem = 145;
    // Base height on the gaps between items, plus a larger trailing buffer (150vh instead of 100vh)
    const containerHeightVh = (total > 1 ? total - 1 : 1) * scrollPerItem + 150;

    const rawScrollProgress = useMotionValue(0);
    // Physics-based spring for 0% lag, buttery modern 3D smoothness (looser Apple-style glide)
    const scrollYProgress = useSpring(rawScrollProgress, {
        stiffness: 70,
        damping: 20,
        mass: 0.5,
        restDelta: 0.001
    });

    useEffect(() => {
        let ticking = false;

        const updateScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const scrollable = rect.height - window.innerHeight;
            if (scrollable <= 0) return;

            let p = -rect.top / scrollable;
            p = Math.max(0, Math.min(1, p));
            rawScrollProgress.set(p);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateScroll);
        updateScroll(); // initialize

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateScroll);
        };
    }, [rawScrollProgress]);

    // Track active index for haptic feedback
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = 1 / (total > 1 ? total - 1 : 1);
        const idx = Math.round(latest / step);
        const clamped = Math.max(0, Math.min(total - 1, idx));
        if (clamped !== activeIdx) {
            setActiveIdx(clamped);
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                navigator.vibrate([15]);
            }
        }
    });

    // Calculate snap point positions
    const scrollableVh = containerHeightVh - 100; // total scrollable distance in vh

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-transparent pb-[15vh]"
            style={{ height: `${containerHeightVh}vh` }}
        >
            {/* Snap Points - positioned so browser snaps exactly when each icon centers */}
            <div className="absolute inset-0 pointer-events-none z-50">
                {items.map((_, i) => {
                    const step = 1 / (total > 1 ? total - 1 : 1);
                    const centerProgress = i * step;

                    const topVh = centerProgress * scrollableVh;
                    const topPercent = (topVh / containerHeightVh) * 100;

                    return (
                        <div
                            key={i}
                            className="absolute w-full h-[100svh] snap-start"
                            style={{ top: `${topPercent}%` }}
                        />
                    );
                })}
            </div>

            <div className="sticky top-0 flex h-[100svh] w-full flex-col items-center overflow-hidden pb-4 md:pb-8">
                {/* Top Content (Label and Title, Flowing Naturally) */}
                <div className="flex flex-col items-center mt-[4svh] sm:mt-[6svh] md:mt-[8svh] z-30 w-full px-4 shrink-0 transition-transform">
                    {/* Top Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md mb-2 sm:mb-4 md:mb-6"
                    >
                        <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-white/80">⚡ Our Stack</span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="text-center flex flex-col items-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2 sm:mb-3 md:mb-4"
                        >
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#22c55e]">Technologies</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-center text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed"
                        >
                            We leverage the most powerful tools and frameworks to deliver exceptional results.
                        </motion.p>
                    </div>
                </div>

                {/* Central Focus Area - Centered perfectly in remaining space */}
                <div className="relative z-10 flex flex-1 w-full items-center justify-center mb-8 origin-center transform scale-[0.65] sm:scale-75 md:scale-[0.80] lg:scale-[0.85] xl:scale-[0.95]">
                    {/* Inner wrapper to anchor all absolute 3D positioning safely */}
                    <div className="relative flex h-[400px] w-[400px] items-center justify-center">

                        {/* Background Decorative Rings logically tied to exactly this origin point */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                            <div className="absolute h-[500px] w-[500px] rounded-full bg-white/[0.015] border border-white/[0.03]" />
                            <div className="absolute h-[700px] w-[700px] rounded-full border border-white/[0.02]" />
                            <div className="absolute h-[900px] w-[900px] rounded-full border border-white/[0.01]" />
                            <div className="absolute h-[250vh] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                        </div>

                        {/* Central Glowing Rings */}
                        <div className="absolute h-48 w-48 rounded-full border-2 border-white/5 shadow-[0_0_40px_rgba(255,255,255,0.03)]" />
                        <div className="absolute h-40 w-40 rounded-full border-[6px] border-white/10 bg-black/40 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
                            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/40 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                            <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/40 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                        </div>

                        {/* Icons Carousel */}
                        <div className="relative h-full w-full max-w-5xl">
                            {items.map((item, index) => (
                                <TechIcon
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    total={total}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>

                        {/* Active Item Label perfectly aligned below center */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full mt-[88px] z-30 h-40 pointer-events-none">
                            {items.map((item, index) => (
                                <TechLabel
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    total={total}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface TechIconProps {
    item: TechItem;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}

const TechIcon: React.FC<TechIconProps> = ({ item, index, total, scrollYProgress }) => {
    const step = 1 / (total > 1 ? total - 1 : 1);
    const center = index * step;
    const plateau = step * 0.1;

    // Wider, smoother ranges for enter/center/exit transitions
    const range = [
        center - step * 1.5,  // Far right (entering)
        center - step * 0.8,  // Near right
        center - plateau,     // Center plateau start
        center + plateau,     // HOLD perfectly centered through duration
        center + step * 0.8,  // Near left
        center + step * 1.5,  // Far left (exiting)
    ];

    const x = useTransform(
        scrollYProgress,
        range,
        ["250%", "120%", "0%", "0%", "-120%", "-250%"]
    );

    const scale = useTransform(
        scrollYProgress,
        range,
        [0.35, 0.65, 1.15, 1.15, 0.65, 0.35]
    );

    const opacity = useTransform(
        scrollYProgress,
        range,
        [0, 0.35, 1, 1, 0.35, 0]
    );

    const glowOpacity = useTransform(
        scrollYProgress,
        [
            center - step * 0.6,
            center - plateau,
            center + plateau,
            center + step * 0.6
        ],
        [0, 0.8, 0.8, 0]
    );

    return (
        <motion.div
            style={{
                x,
                scale,
                opacity,
                left: "50%",
                top: "50%",
                marginLeft: "-3.5rem",
                marginTop: "-3.5rem",
            }}
            className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm will-change-transform"
        >
            <div
                className="relative flex h-full w-full items-center justify-center"
                style={{ color: item.color }}
            >
                <motion.div
                    style={{
                        backgroundColor: item.color,
                        opacity: glowOpacity,
                    }}
                    className="absolute inset-0 rounded-full blur-xl shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                />
                <div className="relative z-10 h-full w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    {item.icon}
                </div>
            </div>
        </motion.div>
    );
};

const TechLabel: React.FC<TechIconProps> = ({ item, index, total, scrollYProgress }) => {
    const step = 1 / (total > 1 ? total - 1 : 1);
    const center = index * step;
    const plateau = step * 0.1;

    const opacity = useTransform(
        scrollYProgress,
        [
            center - step * 0.5,
            center - plateau,
            center + plateau,
            center + step * 0.5
        ],
        [0, 1, 1, 0]
    );

    return (
        <motion.div
            style={{ opacity }}
            className="absolute top-0 left-0 right-0 flex flex-col items-center justify-start will-change-transform"
        >
            {/* Extended connector line that anchors precisely to the bottom ring dot */}
            <div className="h-4 sm:h-6 md:h-8 lg:h-12 w-[1px] bg-gradient-to-b from-white/60 to-white/10" />

            {/* Wider architectural arc to properly shoulder the label text */}
            <div className="relative mb-[-1px] h-4 sm:h-5 md:h-6 lg:h-8 w-48 sm:w-56 md:w-64 lg:w-72">
                <div className="absolute inset-0 border-x border-t border-white/20 rounded-t-[3rem]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
            </div>

            {/* Label pill - perfectly centered horizontally by removing the right-heavy ID text */}
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-[#1a1a1a]/95 px-6 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl pointer-events-auto">
                <span className="font-display text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">{item.name}</span>
            </div>
        </motion.div>
    );
};
