
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamSection = () => {
  const team = [
    { name: "Ram", role: "Co-Founder", image: "/lovable-uploads/Ramanand.jpg" },
    { name: "Thejas", role: "Co-Founder", image: "https://avatars.githubusercontent.com/u/7764849?v=4" },
    { name: "Jithu Francis", role: "Co-Founder", image: "/lovable-uploads/Jithu.jpg" },
    { name: "Kesavadas", role: "Co-Founder", image: "https://avatars.githubusercontent.com/u/11832316?v=4" },
    { name: "Kiran Rajeev", role: "Co-Founder", image: "https://avatars.githubusercontent.com/u/16237122?v=4" },
    { name: "B. VishnuNarayanan", role: "Co-Founder", image: "/lovable-uploads/Vishnu.jpg" },
    { name: "Arjun Kumar VS", role: "Co-Founder", image: "https://avatars.githubusercontent.com/u/17563334?v=4" },
  ];

  return (
    <section className="py-10 md:py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the people behind RE:INVENT&apos;s innovative digital solutions.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {team.map((member, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                <Card className="my-10 flex w-[80vw] max-w-xs cursor-pointer flex-col items-center rounded-2xl p-4 text-center glass glass-hover">
                  <Avatar className="w-32 h-32 border-4 border-primary/50 mt-4">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-md text-primary/80 mt-1">{member.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;
