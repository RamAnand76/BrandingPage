
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CometCard } from "@/components/ui/comet-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamSection = () => {
  const team = [
    { name: "John Doe", role: "CEO", image: "https://avatars.githubusercontent.com/u/1234567?v=4" },
    { name: "Jane Smith", role: "CTO", image: "https://avatars.githubusercontent.com/u/2345678?v=4" },
    { name: "Peter Jones", role: "Lead Developer", image: "https://avatars.githubusercontent.com/u/3456789?v=4" },
    { name: "Emily White", role: "UX Designer", image: "https://avatars.githubusercontent.com/u/4567890?v=4" },
    { name: "Michael Brown", role: "Project Manager", image: "https://avatars.githubusercontent.com/u/5678901?v=4" },
    { name: "Jessica Green", role: "Frontend Developer", image: "https://avatars.githubusercontent.com/u/6789012?v=4" },
    { name: "David Black", role: "Backend Developer", image: "https://avatars.githubusercontent.com/u/7890123?v=4" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the people behind Aethene&apos;s innovative digital solutions.
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
                <CometCard>
                  <div className="my-10 flex w-[90vw] max-w-[260px] cursor-pointer flex-col items-center rounded-2xl border-0 bg-[#1F2121] p-4 text-center">
                    <Avatar className="w-32 h-32 border-4 border-primary/50 mt-4">
                      <AvatarImage src={member.image} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-md text-primary/80 mt-1">{member.role}</p>
                    </div>
                  </div>
                </CometCard>
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
