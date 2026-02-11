import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Database,
  Code2,
  BarChart3,
  Cloud,
  Layers,
  Rocket,
  FileText,
  Users,
} from "lucide-react";

/* -------------------- TYPES -------------------- */

type Capability = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ToolGroup = {
  category: string;
  tools: string[];
};

type Metric = {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
};

/* -------------------- COUNT UP HOOK -------------------- */

const useCountUp = (end: number, duration: number, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return count;
};

/* -------------------- DATA -------------------- */

const metrics: Metric[] = [
  { label: "Projects Shipped", value: 15, suffix: "+", icon: <Rocket size={22} /> },
  { label: "Datasets Analyzed", value: 50, suffix: "M+", icon: <Database size={22} /> },
  { label: "Dashboards Built", value: 20, suffix: "+", icon: <BarChart3 size={22} /> },
  { label: "Technical Content", value: 100, suffix: "+", icon: <FileText size={22} /> },
  { label: "Learners Impacted", value: 1000, suffix: "+", icon: <Users size={22} /> },
];

const capabilities: Capability[] = [
  {
    title: "Data Analysis & Reasoning",
    description:
      "Transforming raw datasets into structured, decision-ready insights using SQL, Python, and BI systems.",
    icon: <Database size={26} />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Designing ML and LLM systems focused on production reliability and real-world applicability.",
    icon: <Brain size={26} />,
  },
  {
    title: "Engineering Foundations",
    description:
      "Writing modular, maintainable code with long-term system integrity in mind.",
    icon: <Code2 size={26} />,
  },
  {
    title: "Visualization & Storytelling",
    description:
      "Turning complex analytics into intuitive dashboards that influence decisions.",
    icon: <BarChart3 size={26} />,
  },
  {
    title: "Systems Thinking",
    description:
      "Architecting pipelines and workflows that scale beyond prototypes.",
    icon: <Layers size={26} />,
  },
  {
    title: "Cloud & Tooling",
    description:
      "Leveraging cloud-native tooling to support analytics and AI ecosystems.",
    icon: <Cloud size={26} />,
  },
];

const toolGroups: ToolGroup[] = [
  { category: "Languages & Query", tools: ["Python", "SQL", "HTML/CSS"] },
  { category: "Analytics & BI", tools: ["Power BI", "Excel", "Pandas", "NumPy"] },
  { category: "AI / ML", tools: ["Scikit-learn", "TensorFlow", "NLP", "LangChain"] },
  { category: "Engineering & Cloud", tools: ["Git", "GitHub", "GCP", "Streamlit"] },
  { category: "Product Innovations", tools: ["Exploring latest AI driven solutions to solve real-world problems"] },
  { category: "Content & Teaching", tools: ["YouTube Content", "Technical Writing", "Public Speaking"] },
];

/* -------------------- METRIC CARD -------------------- */

const MetricCard = ({
  label,
  value,
  suffix = "",
  icon,
  visible,
}: Metric & { visible: boolean }) => {
  const count = useCountUp(value, 1000, visible);

  return (
    <div
      className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-center
      transition-all duration-500
      hover:-translate-y-2 hover:border-[#0EA5A4]/40 hover:shadow-xl hover:shadow-[#0EA5A4]/10
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-[#0EA5A4] mb-3 flex justify-center">
        {icon}
      </div>

      <p className="text-2xl font-bold text-[#E5E7EB] tracking-wide">
        {count}
        <span className="text-[#0EA5A4] ml-1">{suffix}</span>
      </p>

      <p className="text-sm text-[#94A3B8] mt-1">{label}</p>
    </div>
  );
};

/* -------------------- MAIN COMPONENT -------------------- */

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-10 bg-[#020617] overflow-hidden"
    >
      {/* BACKGROUND LIGHT GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-96 h-96 bg-[#0EA5A4]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-[#38BDF8]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Capabilities & Impact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            What I Build & Deliver
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#94A3B8]">
            A focused snapshot of my technical strengths, systems mindset,
            and measurable output.
          </p>
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-28">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} visible={visible} />
          ))}
        </div>

        {/* CAPABILITIES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md
              transition-all duration-500 hover:-translate-y-2
              hover:border-[#0EA5A4]/40 hover:shadow-xl hover:shadow-[#0EA5A4]/10
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="text-[#0EA5A4] mb-4">{cap.icon}</div>
              <h3 className="text-xl font-semibold text-[#E5E7EB] mb-3">
                {cap.title}
              </h3>
              <p className="text-[#94A3B8] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-2xl font-bold text-[#E5E7EB] text-center mb-12">
            Tools & Technologies
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {toolGroups.map((group, idx) => (
              <div
                key={group.category}
                className={`p-6 rounded-2xl border border-white/10 bg-white/5
                transition-all duration-500 hover:border-[#38BDF8]/40
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <h4 className="text-lg font-semibold text-[#38BDF8] mb-4">
                  {group.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm px-3 py-1 rounded-full
                      bg-white/10 text-[#E5E7EB]
                      transition-all duration-300
                      hover:bg-[#0EA5A4] hover:text-[#020617]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
