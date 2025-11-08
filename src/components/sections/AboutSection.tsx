import CardSpotlightDemo from "@/components/card-spotlight-demo";
import TechnologyCards from "@/components/sections/TechnologyCards";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-8 items-center">
            <h2 className="text-4xl font-bold text-white text-center">
            About <span className="text-gradient">Re-Invent</span>
            </h2>
            <CardSpotlightDemo />
        </div>
        <div className="flex flex-col gap-8 items-center">
            <h2 className="text-4xl font-bold text-white text-center">
                Our <span className="text-gradient">Technologies</span>
            </h2>
            <TechnologyCards />
        </div>
    </section>
  );
};

export default AboutSection;
