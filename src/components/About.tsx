import { useEffect, useRef, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-5 bg-[#020617] overflow-hidden"
    >
      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-24 w-96 h-96 bg-[#0EA5A4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 left-24 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ===== Header ===== */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            About
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] leading-tight">
            Building with Intent.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5A4] to-[#38BDF8]">
              Growing with Discipline.
            </span>
          </h2>
        </div>

        {/* ===== Main Grid ===== */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ===== Story Section ===== */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full 
            bg-[#0EA5A4]/10 border border-[#0EA5A4]/30 text-[#0EA5A4] text-sm font-semibold">
              Systems • Data • Intelligence
            </div>

            <p className="text-lg text-[#94A3B8] leading-relaxed">
              I work with tech and business teams to turn data into dashboards, {" "}
              <span className="text-[#E5E7EB] font-medium">
                insights into decisions, and decisions into revenue growth and risk reduction.
              </span>
            </p>


            <p className="text-lg text-[#94A3B8] leading-relaxed">
              As a systems-focused Data & AI Engineer, I work on scalable data platforms, real-time pipelines, and applied
              machine learning systems built with reliability, observability, and long-term performance in mind.
            </p>

            <p className="text-lg text-[#94A3B8] leading-relaxed">
              I don’t think in isolated models. I think in systems — where architecture,
               maintainability, and feedback loops matter as much as accuracy.
            </p>

            <p className="text-lg font-semibold text-[#E5E7EB]">
              "How does this scale beyond a demo?"
            </p>
          </div>

          {/* ===== Principles Section ===== */}
          <div
            className={`grid gap-6 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              {
                title: "Systems Thinking",
                desc: "I design with pipelines, feedback loops, and long-term system behavior in mind — not just features.",
              },
              {
                title: "Data First",
                desc: "Evidence-backed decisions outperform assumptions. Every time.",
              },
              {
                title: "Execution Discipline",
                desc: "Consistency compounds faster than intensity.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                transition-all duration-300 hover:-translate-y-1 
                hover:border-[#0EA5A4]/40 hover:shadow-lg hover:shadow-[#0EA5A4]/10"
              >
                <h4 className="text-xl font-semibold text-[#E5E7EB] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Closing Statement ===== */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-[#94A3B8]">
            I'm not preparing for opportunities —
          </p>
          <p className="text-2xl font-bold text-[#E5E7EB] mt-2">
            I'm building toward them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
