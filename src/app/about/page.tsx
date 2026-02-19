
"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import GradientBlinds from "@/components/ui/GradientBlinds";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black text-foreground pt-32">
            <Navigation />



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
