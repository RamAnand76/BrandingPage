'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, MotionValue, useMotionValueEvent, useMotionValue } from 'motion/react';
import { TECH_DATA, TechItem } from '../constants';

interface TechScrollProps {
    items?: TechItem[];
}

export const TechScroll: React.FC<TechScrollProps> = ({ items = TECH_DATA }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const total = items.length;

    // Give each item ~133vh of scroll to compensate for body zoom: 0.75
    // At zoom 0.75, 133vh CSS ≈ 100vh effective scroll
    const scrollPerItem = 133;
    const containerHeightVh = total * scrollPerItem + 100;

    const scrollYProgress = useMotionValue(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const scrollable = rect.height - window.innerHeight;
            if (scrollable <= 0) return;

            let p = -rect.top / scrollable;
            p = Math.max(0, Math.min(1, p));
            scrollYProgress.set(p);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll(); // initialize

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [scrollYProgress]);

    // Track active index for haptic feedback
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = 1 / total;
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
            className="relative w-full bg-[#0a0a14]"
            style={{ height: `${containerHeightVh}vh` }}
        >
            {/* Snap Points - positioned so browser snaps exactly when each icon centers */}
            <div className="absolute inset-0 pointer-events-none z-50">
                {items.map((_, i) => {
                    const step = 1 / total;
                    const centerProgress = i * step;
                    // Convert progress to absolute position within container
                    // scrollYProgress = scrollOffset / scrollableDistance
                    // scrollOffset = centerProgress * scrollableDistance
                    // top position = scrollOffset (since sticky viewport is at top)
                    const topVh = centerProgress * scrollableVh;
                    const topPercent = (topVh / containerHeightVh) * 100;

                    return (
                        <div
                            key={i}
                            className="absolute w-full h-screen snap-start"
                            style={{ top: `${topPercent}%` }}
                        />
                    );
                })}
            </div>

            <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="absolute h-[600px] w-[600px] rounded-full bg-white/[0.02] border border-white/[0.05]" />
                    <div className="absolute h-[1000px] w-[1000px] rounded-full border border-white/[0.01]" />
                    <div className="absolute h-[800px] w-[800px] rounded-full border border-white/[0.02]" />
                    <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </div>

                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute top-12 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
                >
                    <span className="text-[11px] font-medium tracking-wide text-white/80">⚡ Our Stack</span>
                </motion.div>

                {/* Main Title */}
                <div className="absolute top-32 z-30 text-center flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl mb-4"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#22c55e]">Technologies</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-center text-lg max-w-2xl leading-relaxed"
                    >
                        We leverage the most powerful tools and frameworks to deliver exceptional results.
                    </motion.p>
                </div>

                {/* Central Focus Area */}
                <div className="relative z-10 flex h-[400px] w-full items-center justify-center">
                    {/* Central Rings with Dots */}
                    <div className="absolute h-48 w-48 rounded-full border-2 border-white/5 shadow-[0_0_40px_rgba(255,255,255,0.03)]" />
                    <div className="absolute h-40 w-40 rounded-full border-[6px] border-white/10 bg-[#0a0a14]/60 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
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
                </div>

                {/* Active Item Label */}
                <div className="absolute bottom-24 z-30 h-24 w-full">
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
    );
};

interface TechIconProps {
    item: TechItem;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}

const TechIcon: React.FC<TechIconProps> = ({ item, index, total, scrollYProgress }) => {
    const step = 1 / total;
    const center = index * step;
    const plateau = step * 0.1;
    const isLast = index === total - 1;

    // Wider, smoother ranges for enter/center/exit transitions
    const range = [
        center - step * 1.5,  // Far right (entering)
        center - step * 0.8,  // Near right
        center - plateau,     // Center plateau start
        isLast ? 1.0 : center + plateau,     // HOLD perfectly centered until container finishes
        isLast ? 1.0 + step * 0.8 : center + step * 0.8,  // Near left
        isLast ? 1.0 + step * 1.5 : center + step * 1.5,  // Far left (exiting)
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
            isLast ? 1.0 : center + plateau,
            isLast ? 1.0 + step * 0.6 : center + step * 0.6
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
    const step = 1 / total;
    const center = index * step;
    const plateau = step * 0.1;
    const isLast = index === total - 1;

    const opacity = useTransform(
        scrollYProgress,
        [
            center - step * 0.5,
            center - plateau,
            isLast ? 1.0 : center + plateau,
            isLast ? 1.0 + step * 0.5 : center + step * 0.5
        ],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [
            center - step * 0.5,
            center - plateau,
            isLast ? 1.0 : center + plateau,
            isLast ? 1.0 + step * 0.5 : center + step * 0.5
        ],
        [15, 0, 0, -15]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute left-0 right-0 flex flex-col items-center justify-center will-change-transform"
        >
            <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-white/40" />
            <div className="relative mb-[-1px] h-10 w-56">
                <div className="absolute inset-0 border-x border-t border-white/20 rounded-t-[2rem]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-[#1a1a1a]/90 px-12 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <span className="font-display text-2xl font-medium text-white tracking-tight">{item.name}</span>
                <span className="text-sm font-medium text-white/30 tracking-wider">({item.id.toUpperCase()})</span>
            </div>
        </motion.div>
    );
};
