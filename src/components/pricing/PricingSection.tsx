
"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const pricingData = {
  USD: {
    starter: { price: "$1,500", suffix: "/month" },
    business: { price: "$4,500", suffix: "/month" },
    enterprise: { price: "Custom", suffix: "" },
  },
  INR: {
    starter: { price: "₹1,24,500", suffix: "/month" },
    business: { price: "₹3,73,500", suffix: "/month" },
    enterprise: { price: "Custom", suffix: "" },
  },
};

const PricingTier = ({
  name,
  price,
  priceSuffix,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {priceSuffix && <span className="text-gray-400">{priceSuffix}</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        Get Started
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const handleCurrencyChange = (checked: boolean) => {
    setCurrency(checked ? "INR" : "USD");
  };

  return (
    <section className="container px-4 py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-normal mb-6"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Service Plans</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Select the perfect service plan tailored to your business needs
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center justify-center space-x-4 mb-12">
        <Label htmlFor="currency-toggle" className={currency === 'USD' ? 'text-white' : 'text-muted-foreground'}>USD</Label>
        <Switch
          id="currency-toggle"
          checked={currency === 'INR'}
          onCheckedChange={handleCurrencyChange}
          aria-label="Switch between USD and INR"
        />
        <Label htmlFor="currency-toggle" className={currency === 'INR' ? 'text-white' : 'text-muted-foreground'}>INR</Label>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Starter"
          price={pricingData[currency].starter.price}
          priceSuffix={pricingData[currency].starter.suffix}
          description="Ideal for startups needing ongoing design and development support."
          features={[
            "Dedicated Development Hours",
            "UI/UX Design Updates",
            "Website Maintenance & SEO",
            "Monthly Strategy Call",
            "Email & Chat Support"
          ]}
        />
        <PricingTier
          name="Business"
          price={pricingData[currency].business.price}
          priceSuffix={pricingData[currency].business.suffix}
          description="For growing businesses requiring consistent innovation and feature development."
          features={[
            "More Development Hours",
            "Proactive UI/UX Improvements",
            "Mobile & Web Support",
            "AI Integration & Support",
            "Priority Queue & API Help"
          ]}
          isPopular
        />
        <PricingTier
          name="Enterprise"
          price={pricingData[currency].enterprise.price}
          priceSuffix={pricingData[currency].enterprise.suffix}
          description="A fully managed, bespoke partnership for large-scale enterprise needs."
          features={[
            "Fully Dedicated Team",
            "Custom Project & Feature Roadmap",
            "Advanced AI Model Services",
            "On-demand Scaling",
            "24/7 Priority Support"
          ]}
        />
      </div>
    </section>
  );
};
