import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue, useMotionValueEvent } from 'motion/react';
import { TECH_DATA, TechItem } from '../constants';

interface TechScrollProps {
    items?: TechItem[];
}

export const TechScroll: React.FC<TechScrollProps> = ({ items = TECH_DATA }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });

    // Haptic feedback logic
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = 1 / items.length;
        items.forEach((_, i) => {
            const center = (i * step + (i + 1) * step) / 2;
            // Trigger haptic when crossing the center threshold with a small buffer
            if (Math.abs(latest - center) < 0.008 && activeIdx !== i) {
                setActiveIdx(i);
                if (typeof navigator !== 'undefined' && navigator.vibrate) {
                    navigator.vibrate([15]); // Very short, sharp haptic pulse
                }
            }
        });
    });

    return (
        <div
            ref={containerRef}
            className="relative h-[600vh] w-full bg-[#0a0a14]"
        >
            {/* 
        Snap Points: 
        We want to snap when the icon is centered.
        Progress 0.1, 0.3, 0.5, 0.7, 0.9.
        Total scrollable distance is 500vh.
        Offsets: 50vh, 150vh, 250vh, 350vh, 450vh from the top of the component.
      */}
            <div className="absolute inset-0 pointer-events-none z-50">
                {items.map((_, i) => {
                    const step = 1 / items.length;
                    const centerProgress = (i * step + (i + 1) * step) / 2;
                    // Position the snap point so that when it's at the top of the viewport, 
                    // the icon is centered.
                    const topPercent = centerProgress * (500 / 600) * 100;

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
                    {/* Large Dark Background Circle */}
                    <div className="absolute h-[600px] w-[600px] rounded-full bg-white/[0.02] border border-white/[0.05]" />

                    {/* Outer Subtle Rings */}
                    <div className="absolute h-[1000px] w-[1000px] rounded-full border border-white/[0.01]" />
                    <div className="absolute h-[800px] w-[800px] rounded-full border border-white/[0.02]" />

                    {/* Vertical Connecting Line */}
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
                        {/* Top Dot */}
                        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/40 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                        {/* Bottom Dot */}
                        <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/40 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    </div>

                    {/* Icons Carousel */}
                    <div className="relative h-full w-full max-w-5xl">
                        {items.map((item, index) => (
                            <TechIcon
                                key={item.id}
                                item={item}
                                index={index}
                                total={items.length}
                                scrollYProgress={smoothProgress}
                            />
                        ))}
                    </div>
                </div>

                {/* Active Item Label (Pill Style) */}
                <div className="absolute bottom-24 z-30 h-24 w-full">
                    {items.map((item, index) => (
                        <TechLabel
                            key={item.id}
                            item={item}
                            index={index}
                            total={items.length}
                            scrollYProgress={smoothProgress}
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
    const center = (index + 0.5) * step;
    const plateau = step * 0.2;

    // Define a range that allows multiple icons to be visible
    const range = [
        center - step * 1.2,  // Exit right
        center - step * 0.7,  // Next icon (near)
        center - plateau,     // Center start
        center + plateau,     // Center end
        center + step * 0.7,  // Previous icon (near)
        center + step * 1.2   // Exit left
    ];

    const x = useTransform(
        scrollYProgress,
        range,
        ["220%", "100%", "0%", "0%", "-100%", "-220%"]
    );

    const scale = useTransform(
        scrollYProgress,
        range,
        [0.4, 0.75, 1.15, 1.15, 0.75, 0.4]
    );

    const opacity = useTransform(
        scrollYProgress,
        range,
        [0, 0.4, 1, 1, 0.4, 0]
    );

    const glowOpacity = useTransform(
        scrollYProgress,
        [center - step, center - plateau, center + plateau, center + step],
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
            className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
        >
            <div
                className="relative flex h-full w-full items-center justify-center"
                style={{ color: item.color }}
            >
                {/* Glow behind icon - more intense and focused */}
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
    const start = index * step;
    const end = (index + 1) * step;
    const center = (start + end) / 2;
    const plateau = step * 0.2;

    const opacity = useTransform(
        scrollYProgress,
        [start + step * 0.1, center - plateau, center + plateau, end - step * 0.1],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start, center - plateau, center + plateau, end],
        [15, 0, 0, -15]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute left-0 right-0 flex flex-col items-center justify-center"
        >
            {/* Vertical line segment above bracket */}
            <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-white/40" />

            {/* Fork/Bracket shape */}
            <div className="relative mb-[-1px] h-10 w-56">
                <div className="absolute inset-0 border-x border-t border-white/20 rounded-t-[2rem]" />
                {/* Subtle glow on the bracket top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-[#1a1a1a]/90 px-12 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <span className="font-display text-2xl font-medium text-white tracking-tight">{item.name}</span>
                <span className="text-sm font-medium text-white/30 tracking-wider">({item.id.toUpperCase()})</span>
            </div>
        </motion.div>
    );
}
