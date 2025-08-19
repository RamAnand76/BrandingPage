import { motion } from "framer-motion";

const TeamSection = () => {
  const team = [
    { name: "Ramanand", role: "AI Fullstack Developer" },
    { name: "Thejas", role: "Flutter Developer" },
    { name: "Kesavadas", role: "AI Developer" },
    { name: "Jithu Francis", role: "Backend Developer" },
    { name: "Arjun Kumar", role: "Frontend Developer" },
    { name: "Kiran", role: "Flutter Developer" },
    { name: "Vishnunarayanan", role: "Flutter Developer" },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the people behind Aethene's innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 text-primary text-xl font-bold mx-auto mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
