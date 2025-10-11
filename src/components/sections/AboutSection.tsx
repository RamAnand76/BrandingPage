import { motion } from "framer-motion";
import TechnologyCards from "./TechnologyCards";
import { MagicCard } from "@/components/magicui/magic-card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About RE:INVENT</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We are a hybrid of innovation, combining expert service delivery with product-driven solutions. 
            Our team of specialists is dedicated to bringing your ideas to life, from stunning UI/UX designs 
            to powerful AI models and flawless mobile applications.
          </p>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technologies We Use</h3>
          <TechnologyCards />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
