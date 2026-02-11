import { Rocket, Database, Brain, GraduationCap } from "lucide-react";

type Block = {
  tag: string;
  title: string;
  org: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const blocks: Block[] = [
  {
    tag: "Startup",
    title: "Founder & System Architect",
    org: "VIGILANTIQ",
    period: "2025 — Present",
    description:
      "Building an intelligent risk & anomaly detection platform from first principles. Responsible for system design, data simulation, streaming pipelines, intelligence layers, and long-term product direction.",
    icon: <Rocket size={20} />,
    highlight: true,
  },
  {
    tag: "Industry",
    title: "Data Analyst Intern",
    org: "GradXpert",
    period: "2024 — Present",
    description:
      "Working on analytics research, structured data workflows, and insight generation using Python, SQL, and visualization tools with a focus on correctness and decision impact.",
    icon: <Database size={20} />,
  },
  {
    tag: "Academia × Industry",
    title: "YIIC Intern",
    org: "Scaler School of Technology",
    period: "2024",
    description:
      "Explored applied problem-solving, research exposure, and system-level thinking under mentorship from engineers and product leaders.",
    icon: <Brain size={20} />,
  },
  {
    tag: "Industry",
    title: "Data Analyst Intern",
    org: "Technohacks",
    period: "2023",
    description:
      "Analyzed real-world datasets, created dashboards, and communicated insights clearly to technical and non-technical stakeholders.",
    icon: <Database size={20} />,
  },
  {
    tag: "Education",
    title: "B.Tech — Computer Science & Data Science",
    org: "Godavari Global University",
    period: "2023 — 2027",
    description:
      "Formal education in computer science foundations, data science, algorithms, and systems, complemented by independent research and applied projects.",
    icon: <GraduationCap size={20} />,
  },
];

const ExperienceEducation = () => {
  return (
    <section
      id="experience"
      className="relative py-20 bg-[#020617] overflow-hidden"
    >
      {/* ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0EA5A4]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Professional Evolution
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            Experience & Education
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#94A3B8]">
            From learning systems to owning systems — a progression of
            responsibility, depth, and execution.
          </p>
        </div>

        {/* Blocks */}
        <div className="space-y-10">
          {blocks.map((block, idx) => (
            <div
              key={idx}
              className={`relative bg-white/5 backdrop-blur-xl
              border rounded-3xl p-8 transition-all duration-500
              ${
                block.highlight
                  ? "border-[#0EA5A4]/50 shadow-lg shadow-[#0EA5A4]/20"
                  : "border-white/10"
              }`}
            >
              {/* Top row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${
                      block.highlight
                        ? "bg-[#0EA5A4] text-[#020617]"
                        : "bg-white/10 text-[#38BDF8]"
                    }`}
                  >
                    {block.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#E5E7EB]">
                      {block.title}
                    </h3>
                    <p className="text-sm uppercase tracking-wide text-[#38BDF8]">
                      {block.org}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-[#94A3B8]">
                  {block.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#94A3B8] leading-relaxed">
                {block.description}
              </p>

              {/* Tag */}
              <div className="mt-6 inline-block text-xs uppercase tracking-widest
                px-3 py-1 rounded-full
                bg-white/10 text-[#E5E7EB]">
                {block.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
