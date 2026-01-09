
import { motion } from "framer-motion";
import ClientCarousel from "@/components/ClientCarousel";
import { Zap, Hourglass } from "lucide-react";
import images from "@/app/lib/placeholder-images.json";
import { MagicCard } from "@/components/magicui/magic-card";
import { StripedPattern } from "@/components/ui/striped-pattern";

const ProductsSection = () => {
  const products = [
    {
      key: "1",
      content: (
        <MagicCard className="h-full">
            <div className="relative rounded-2xl p-8 text-white h-full flex flex-col bg-card/80 backdrop-blur-sm border border-white/10 overflow-hidden">
             <StripedPattern
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-5 stroke-white/20"
             />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">FLO.io</h3>
                  <span className="text-sm text-primary font-medium">In Progress</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow relative z-10">
                Workflow automation platform in progress. Stay tuned for updates!
              </p>
              <div className="space-y-2 relative z-10">
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
        </MagicCard>
      ),
      image: images.products[0],
    },
    {
      key: "2",
      content: (
         <MagicCard className="h-full">
            <div className="relative rounded-2xl p-8 text-white h-full flex flex-col bg-card/80 backdrop-blur-sm border border-white/10 overflow-hidden">
                <StripedPattern
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-5 stroke-white/20"
                />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary">
                    <Hourglass className="w-8 h-8" />
                    </div>
                    <div>
                    <h3 className="text-2xl font-bold">More on the way</h3>
                    <span className="text-sm text-primary font-medium">Coming Soon</span>
                    </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow relative z-10">
                    We are working on new and exciting products. Keep an eye on this space for future announcements.
                </p>
                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                    <span className="text-sm text-muted-foreground">Innovative Features</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                    <span className="text-sm text-muted-foreground">Cutting-Edge Technology</span>
                    </div>
                     <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                    <span className="text-sm text-muted-foreground">User-Centric Design</span>
                    </div>
                </div>
            </div>
        </MagicCard>
      ),
      image: { src: "https://picsum.photos/seed/product-soon/600/800", alt: "Coming soon placeholder" },
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

    