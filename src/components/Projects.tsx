import { useEffect, useRef, useState, useMemo } from "react";
import { Github, ExternalLink } from "lucide-react";

type Category = "All" | "Analytics" | "AI";

type Project = {
  title: string;
  category: Category;
  thumbnail: string;
  focus: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Netflix Content Intelligence System",
    category: "Analytics",
    thumbnail: "/netflix.png",
    focus: "Content strategy & distribution intelligence",
    description:
      "An analytical system designed to understand Netflix’s global content strategy, genre saturation, and audience alignment using exploratory and statistical analysis.",
    tech: ["Python", "Pandas", "EDA", "Visualization"],
    github: "https://github.com/mani544/Netflix-Data-Analysis-Project",
  },
  {
    title: "AtliQ Hotels Demand Intelligence",
    category: "Analytics",
    thumbnail: "/netflix.png",
    focus: "Revenue & demand decision systems",
    description:
      "An end-to-end analytics pipeline uncovering booking behavior, seasonality, and revenue drivers to support executive-level hospitality decisions.",
    tech: ["Python", "Excel", "Seaborn"],
    github: "https://github.com/mani544/AtliQ-Hospitality-Domain-EDA",
  },
  {
    title: "AtliQ Hardware Financial Intelligence",
    category: "Analytics",
    thumbnail: "/netflix.png",
    focus: "Profitability & performance modeling",
    description:
      "A business intelligence system analyzing financial performance, cost structures, and sales optimization opportunities through structured reporting.",
    tech: ["Power BI", "Excel", "Data Modeling"],
    github: "https://github.com/mani544/CODEBASICS-ATLIQ-HARDWARE-BUSINESS-ANALYSIS",
  },
  {
    title: "AI Restaurant Concept Generator",
    category: "AI",
    thumbnail: "/netflix.png",
    focus: "LLM-powered concept generation",
    description:
      "A generative AI system that produces restaurant names and menus using LangChain and Gemini, designed as a modular experimentation layer for LLM workflows.",
    tech: ["Python", "LangChain", "Gemini", "Streamlit"],
    github:
      "https://github.com/mani544/RESTAURANT-NAME-GENERATOR-BY-USING-LANGCHAIN-GEMINI_LLM",
  },
];

const filters: Category[] = ["All", "Analytics", "AI"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-10 bg-[#020617] overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-24 w-96 h-96 bg-[#0EA5A4]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-24 left-24 w-96 h-96 bg-[#38BDF8]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Project Lab
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            Systems I Build & Research
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#94A3B8]">
            Each project reflects a system-level approach to data, intelligence,
            and real-world decision making.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all
              ${
                activeFilter === filter
                  ? "bg-[#0EA5A4] text-[#020617] border-[#0EA5A4]"
                  : "text-[#E5E7EB] border-white/15 hover:border-[#0EA5A4]/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className={`group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden
              transition-all duration-500 hover:-translate-y-2 hover:border-[#0EA5A4]/40 hover:shadow-xl hover:shadow-[#0EA5A4]/10
              ${visible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-xs uppercase tracking-widest text-[#38BDF8] mb-2">
                  {project.focus}
                </p>

                <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-4">
                  {project.title}
                </h3>

                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#E5E7EB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#E5E7EB] hover:text-[#0EA5A4]"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[#E5E7EB] hover:text-[#38BDF8]"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
