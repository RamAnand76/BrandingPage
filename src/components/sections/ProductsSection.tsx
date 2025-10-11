
import { motion } from "framer-motion";
import ClientCarousel from "@/components/ClientCarousel";
import { Zap, Bot, Code, BrainCircuit, Rocket, Activity, Shield } from "lucide-react";
import images from "@/app/lib/placeholder-images.json";

const ProductsSection = () => {
  const products = [
    {
      key: "1",
      content: (
        <div className="glass rounded-2xl p-8 text-white h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">FLO.io</h3>
              <span className="text-sm text-primary font-medium">In Progress</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">
            Workflow automation platform in progress. Stay tuned for updates!
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">AI-Powered Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Custom Workflows</span>
            </div>
          </div>
        </div>
      ),
      image: images.products[0],
    },
    {
      key: "2",
      content: (
        <div className="glass rounded-2xl p-8 text-white h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Bot className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">CogniSynth</h3>
              <span className="text-sm text-primary font-medium">Beta</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">
            An advanced AI agent platform for building and deploying intelligent conversational bots.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Natural Language Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Multi-platform Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">No-Code Builder</span>
            </div>
          </div>
        </div>
      ),
      image: images.products[1],
    },
    {
      key: "3",
      content: (
        <div className="glass rounded-2xl p-8 text-white h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Code className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">DevKit</h3>
              <span className="text-sm text-primary font-medium">Alpha</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">
            A suite of development tools designed to accelerate the creation of modern web applications.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Component Library</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">CLI & Scaffolding</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">State Management</span>
            </div>
          </div>
        </div>
      ),
      image: images.products[2],
    },
    {
      key: "4",
      content: (
        <div className="glass rounded-2xl p-8 text-white h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">NeuralNet</h3>
              <span className="text-sm text-primary font-medium">Research</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">
            A deep learning framework for researchers and data scientists.
          </p>
           <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Tensor Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">GPU Acceleration</span>
            </div>
             <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Model Zoo</span>
            </div>
          </div>
        </div>
      ),
      image: images.products[3],
    },
    {
      key: "5",
      content: (
        <div className="glass rounded-2xl p-8 text-white h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Rocket className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">LaunchPad</h3>
              <span className="text-sm text-primary font-medium">Coming Soon</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">
            A continuous integration and deployment platform for modern web apps.
          </p>
           <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Automated Builds</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">One-click Deployments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Scalable Infrastructure</span>
            </div>
          </div>
        </div>
      ),
      image: images.products[4],
    },
     {
      key: "6",
      content: (
        <div className="glass rounded-2xl p-8 text-white h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Pulse</h3>
              <span className="text-sm text-primary font-medium">Beta</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">
            Real-time monitoring and analytics for your applications.
          </p>
           <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Live Dashboards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Alerting & Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Performance Metrics</span>
            </div>
          </div>
        </div>
      ),
      image: { src: "https://picsum.photos/seed/product-pulse/600/800", alt: "Pulse product image" },
    },
    {
      key: "7",
      content: (
        <div className="glass rounded-2xl p-8 text-white h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Guardian</h3>
              <span className="text-sm text-primary font-medium">Alpha</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">
            Comprehensive security suite for modern applications.
          </p>
           <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Threat Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Vulnerability Scanning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Automated Remediation</span>
            </div>
          </div>
        </div>
      ),
      image: { src: "https://picsum.photos/seed/product-guardian/600/800", alt: "Guardian product image" },
    },
  ];

  return (
    <section id="products" className="py-20 bg-black h-[60rem] md:h-[50rem]">
      <div className="container px-4 h-full">
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
        <ClientCarousel
          cards={products}
          height="500px"
          width="80%"
          margin="0 auto"
          offset={2}
          showArrows={true}
        />
      </div>
    </section>
  );
};

export default ProductsSection;

    