import { motion } from "framer-motion";
import TechnologyCards from "./TechnologyCards";

const AboutSection = () => {
  const services = [
    "Web Development using React.js",
    "Mobile App Development using Flutter",
    "Backend Development (Node.js & Django REST)",
    "AWS (Cloud & DevOps)",
    "AI Development",
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Aethene</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We are a hybrid of innovation, combining expert service delivery with product-driven solutions. 
            Our team of specialists is dedicated to bringing your ideas to life, from stunning UI/UX designs 
            to powerful AI models and flawless mobile applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
            <p className="text-lg text-muted-foreground">
              At Aethene, we believe in the perfect balance between innovative products and exceptional services. 
              We don't just build solutions; we craft experiences that transform how businesses operate and grow. 
              Every project is an opportunity to push the boundaries of what's possible with technology.
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