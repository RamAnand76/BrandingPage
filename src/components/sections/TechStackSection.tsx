
"use client";

import { motion } from "framer-motion";
import TechnologyCards from "@/components/sections/TechnologyCards";

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const TechStackSection = () => {
    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden pointer-events-none">
            {/* Ambient glow - adjusted for standalone section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />

            <div className="container px-4 pointer-events-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col gap-6 items-center w-full"
                >
                    {/* Section pill */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass"
                    >
                        <span className="text-sm font-medium text-gray-300">⚡ Our Stack</span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight"
                    >
                        Our <span className="text-gradient">Technologies</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-center text-lg max-w-2xl leading-relaxed mb-12"
                    >
                        We leverage the most powerful tools and frameworks to deliver exceptional results.
                    </motion.p>

                    <motion.div variants={itemVariants} className="w-full">
                        <TechnologyCards />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStackSection;
