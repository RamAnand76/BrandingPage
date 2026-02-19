
"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import GradientBlinds from "@/components/ui/GradientBlinds";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black text-foreground">
            <Navigation />

            {/* Hero Section for About Page - reusing style but simplified */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full flex items-center justify-center text-center pt-32 pb-10 overflow-hidden"
            >
                {/* Background Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <GradientBlinds
                        gradientColors={['#22c55e', '#5227FF']}
                        mixBlendMode="lighten"
                    />
                </div>

                <div className="absolute inset-0 z-[1] bg-black/80 pointer-events-none" />

            </motion.section>

            {/* About Section Component */}
            <AboutSection />

            {/* Team Section */}
            <TeamSection />

            {/* Footer */}
            <div className="bg-black">
                <Footer />
            </div>
        </div>
    );
};

export default AboutPage;
