import { useEffect, useRef, useState } from "react";
import { Compass, Database, Brain, Rocket } from "lucide-react";

type Phase = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
};

const phases: Phase[] = [
  {
    title: "Exploration Phase",
    subtitle: "Curiosity & Foundations",
    description:
      "Driven by curiosity — understanding how code works, how data behaves, and how systems respond. This phase focused on fundamentals, experimentation, and learning how to learn.",
    icon: <Compass size={22} />,
  },
  {
    title: "Data Discipline Phase",
    subtitle: "Structure, Rigor, Evidence",
    description:
      "A shift toward discipline. Learning to respect data by structuring it properly, validating assumptions, and communicating insights clearly through analysis and visualization.",
    icon: <Database size={22} />,
  },
  {
    title: "AI & Systems Phase",
    subtitle: "Intelligence & Scale",
    description:
      "Moving beyond analysis into intelligence — building ML models, experimenting with LLMs, and thinking in pipelines, feedback loops, and system behavior.",
    icon: <Brain size={22} />,
  },
  {
    title: "SaaS & Research Phase",
    subtitle: "Products, Impact, Direction",
    description:
      "Focused on building real systems — SaaS products and research-driven architectures designed for long-term impact and scalability.",
    icon: <Rocket size={22} />,
  },
];

const Evolution = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".evo-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex((prev) => Math.max(prev, index)); // 🔑 forward-only
          }
        });
      },
      { threshold: 0.45 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="evolution" className="relative py-10 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0EA5A4]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-28">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Evolution
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            Evolution of Thinking
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#94A3B8]">
            How my approach to data, intelligence, and systems matured over time.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-28">
            {phases.map((phase, index) => {
              const isActive = index <= activeIndex;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={phase.title}
                  data-index={index}
                  className="evo-item relative grid md:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <div
                    className={`${
                      isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    } transition-all duration-900 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <p className="text-sm uppercase tracking-widest text-[#38BDF8] mb-2">
                      {phase.subtitle}
                    </p>
                    <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-[#94A3B8] leading-relaxed max-w-md inline-block">
                      {phase.description}
                    </p>
                  </div>

                  {/* Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center
                      border transition-all duration-700 ease-out
                      ${
                        isActive
                          ? "bg-[#0EA5A4] text-[#020617] border-[#0EA5A4] shadow-lg shadow-[#0EA5A4]/40 scale-100"
                          : "bg-[#020617] text-[#64748B] border-white/20 scale-90"
                      }`}
                    >
                      {phase.icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
