"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorksSection from "@/components/sections/WorksSection";

const OurWorksPage = () => {
  return (
    <div className="min-h-screen bg-black text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1 w-full relative">
        <WorksSection />
      </main>

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default OurWorksPage;
