
"use client";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { BarChart3, Bot, Smartphone, Globe, Palette, ArrowUpDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const features = [
  {
    title: "Web Development",
    description: "Professional-grade web applications using React.js, Next.js with modern development practices.",
    icon: <Globe className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "Website Development",
    description: "Custom website design and development with responsive layouts and modern frameworks.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    title: "Branding",
    description: "Complete brand identity solutions including logo design, color schemes, and brand guidelines.",
    icon: <Palette className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  },
  {
    title: "AI Agent Building",
    description: "Intelligent AI agents and chatbots powered by cutting-edge machine learning technologies.",
    icon: <Bot className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  },
  {
    title: "Mobile App Building",
    description: "Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.",
    icon: <Smartphone className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "Performance Analytics",
    description: "Detailed analytics and performance monitoring to optimize your digital solutions.",
    icon: <ArrowUpDown className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  }
];

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const refs = featureRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveFeature(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-40% 0px -40% 0px" } 
    );

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      const currentRefs = featureRefs.current;
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="container px-4 py-20">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
          Expert Services
          <br />
          <span className="text-gradient font-medium">Features & Tools</span>
        </h2>
        <p className="text-lg text-gray-400">
          Experience professional-grade development services designed for businesses ready to transform digitally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left side - Feature list */}
        <div className="md:col-span-5">
          <div className="flex flex-col space-y-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                ref={(el) => {
                  if (el) featureRefs.current[index] = el;
                }}
                className="py-12" // Add padding to create scroll area for each item
              >
                <FeatureTab
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isActive={activeFeature === index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Sticky content */}
        <div className="md:col-span-7 h-full">
          <div className="sticky top-20">
            <FeatureContent
              key={activeFeature}
              image={features[activeFeature].image}
              title={features[activeFeature].title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

    