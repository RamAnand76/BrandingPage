import CardSpotlightDemo from "@/components/card-spotlight-demo";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black flex flex-col items-center justify-center gap-8">
        <h2 className="text-4xl font-bold text-white text-center">
          About RE:INVENT
        </h2>
      <CardSpotlightDemo />
    </section>
  );
};

export default AboutSection;
