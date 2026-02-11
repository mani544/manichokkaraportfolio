import {
  Code2,
  Database,
  Cloud,
  Brain,
  Boxes,
  Cpu,
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  { name: "Python", icon: <Code2 size={18} /> },
  { name: "PostgreSQL", icon: <Database size={18} /> },
  { name: "AWS", icon: <Cloud size={18} /> },
  { name: "TensorFlow", icon: <Brain size={18} /> },
  { name: "Docker", icon: <Boxes size={18} /> },
  { name: "Kubernetes", icon: <Cpu size={18} /> },
];

const SkillsMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-12 bg-[#020617]">

      {/* Subtle Premium Edge Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 
        bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-10" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 
        bg-gradient-to-l from-[#020617] via-[#020617]/90 to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee gap-8">

        {/* Duplicate skills twice for seamless infinite loop */}
        {[...skills, ...skills].map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-7 py-4
            rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-xl
            text-[#E5E7EB] font-medium
            transition-all duration-300
            hover:border-[#0EA5A4]/60
            hover:shadow-lg hover:shadow-[#0EA5A4]/20
            hover:-translate-y-1"
          >
            <span className="text-[#0EA5A4]">
              {skill.icon}
            </span>
            <span className="tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsMarquee;
