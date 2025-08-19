import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const WorksSection = () => {
  const works = [
    {
      title: "Project Alpha",
      description: "A next-gen web platform. Case study coming soon.",
    },
    {
      title: "Project Beta",
      description: "AI-powered mobile experience. Case study coming soon.",
    },
    {
      title: "Project Gamma",
      description: "Cloud-native backend on AWS. Case study coming soon.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A snapshot of what we build. Detailed case studies will be added soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {works.map((work, idx) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-muted-foreground flex-1">{work.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-primary">
                Learn more <ExternalLink className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
