"use client";

import Team from "@/components/ui/team-01";

// Founders show their title and "Co-Founder"; partners show "Partner" only (roles not decided yet).
const people = [
  { name: "Ram", role: "CEO", partner: false, image: "/team/ramanand.png", linkedin: "https://www.linkedin.com/in/ramanand-r-53919821b/" },
  { name: "Thejas", role: "COO", partner: false, image: "/team/thejas.png", linkedin: "https://www.linkedin.com/in/thejas-somarajan/" },
  { name: "Jithu Francis", role: "CTO", partner: false, image: "/team/jithu.png", linkedin: "https://www.linkedin.com/in/jithu-francis-958aa81a0/" },
  { name: "Kesavadas", role: "CAIO", partner: false, image: "/team/kesavadas.png", linkedin: "https://www.linkedin.com/in/kesavadas3/" },
  { name: "Kiran Rajeev", role: "CQO", partner: false, image: "/team/kiran.png", linkedin: "https://www.linkedin.com/in/kiran-rajeev-1o" },
  { name: "B. VishnuNarayanan", role: "Partner", partner: true, image: "/team/vishnu.png", linkedin: "https://www.linkedin.com/in/vishnu-narayanan-b-643aa7202/" },
  { name: "Arjun Kumar VS", role: "Partner", partner: true, image: "/team/arjun.png", linkedin: "https://www.linkedin.com/in/arjun-kumar-v-s/" },
];

const members = people.map((p) => ({
  name: p.name,
  role: p.partner ? "Partner" : `${p.role} · Co-Founder`,
  image: p.image,
  linkedin: p.linkedin,
}));

const TeamSection = () => (
  <>
    <Team badge="Team" title="Founders & Partners" members={members} />
    <p className="bg-black px-6 pb-16 md:pb-24 text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-gray-400">
      Our founders and partners bring together a diverse group of visionary leaders, tech pioneers, and strategic advisors. Committed to driving innovation and fostering sustainable growth, they guide Rhevez&apos;s mission to shape the future of digital solutions and empower businesses worldwide.
    </p>
  </>
);

export default TeamSection;
