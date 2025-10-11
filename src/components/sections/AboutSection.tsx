
import { motion } from "framer-motion";
import TechnologyCards from "./TechnologyCards";
import { BorderBeam } from "@/components/ui/border-beam";

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

        <div className="flex justify-center mb-16">
          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden glass rounded-2xl p-8 max-w-3xl"
          >
             <BorderBeam size={250} duration={12} delay={9} />
            <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
            <p className="text-lg text-muted-foreground">
              At RE:INVENT, we believe in the perfect balance between innovative products and exceptional services. 
              We don&apos;t just build solutions; we craft experiences that transform how businesses operate and grow. 
              Every project is an opportunity to push the boundaries of what&apos;s possible with technology.
            </p>
          </motion.div>
        </div>

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
