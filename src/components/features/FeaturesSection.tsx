
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { BarChart3, ShieldCheck, Wallet, ArrowUpDown, Palette, Globe, Bot, Smartphone } from "lucide-react";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState(features[0].title);
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

      <Tabs defaultValue={features[0].title} onValueChange={setActiveTab} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side - Tab triggers */}
          <div className="md:col-span-5 space-y-3">
            <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title}
                  className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent p-0"
                >
                  <FeatureTab
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    isActive={activeTab === feature.title}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Right side - Tab content with images */}
          <div className="md:col-span-7">
            {features.map((feature) => (
              <TabsContent
                key={feature.title}
                value={feature.title}
                className="mt-0 h-full"
              >
                <FeatureContent
                  image={feature.image}
                  title={feature.title}
                />
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
};
