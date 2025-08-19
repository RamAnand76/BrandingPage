import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      name: "FLO.io",
      description: "Workflow automation platform in progress. Stay tuned for updates!",
      icon: <Zap className="w-8 h-8" />,
      status: "In Progress",
      features: ["AI-Powered Automation", "Real-time Analytics", "Custom Workflows"]
    },
  ];

  return (
    <section id="products" className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technology to transform how businesses operate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-sm text-primary font-medium">{product.status}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 text-base">
                {product.description}
              </p>
              
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
