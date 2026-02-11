import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const titles: string[] = [
  "Vigilantiq Platform — Risk Intelligence",
  "Data & AI Engineer",
  "Turning Raw Data into Business Impact",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const fullHeadline = "I design intelligent systems";
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    setVisible(true);

    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullHeadline.slice(0, i + 1));
      i++;
      if (i === fullHeadline.length) {
        clearInterval(typingInterval);
        setTypingDone(true);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (!typingDone) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [typingDone]);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
      bg-[#020617] overflow-hidden"
    >

     {/* ===== GRID BACKGROUND ===== */}
<div className="absolute inset-0 z-0 pointer-events-none">

  {/* Grid Lines */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
    }}
  />

  {/* Soft Radial Fade */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_75%)]" />
</div>


      {/* ===== Glow Effects ===== */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0EA5A4]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div
          className={`flex justify-center transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative text-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#60A5FA] blur-2xl opacity-40 animate-pulse" />

            <img
              src="/maniii.png"
              alt="Mani Chokkara"
              className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover
              border-4 border-[#0EA5A4]/40 shadow-2xl shadow-[#0EA5A4]/30"
            />

            <div className="mt-6">
              <p className="text-[#E5E7EB] font-semibold tracking-wide text-lg">
                MANI CHOKKARA
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`text-center lg:text-left transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
            bg-[#0EA5A4]/10 border border-[#0EA5A4]/30 text-[#0EA5A4]
            text-sm font-semibold backdrop-blur-md shadow-lg shadow-[#0EA5A4]/20">
            <span className="animate-spin">✨</span>
            WELCOME TO MY DIGITAL WEB
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-4xl font-bold text-[#E5E7EB] leading-[1.25] pb-5">
            {typingDone ? (
              <>
                DECISION
                <span className="block mt-2 text-transparent bg-clip-text
                  bg-gradient-to-r from-[#14B8A6] to-[#60A5FA]">
                  SYSTEMS ENGINEER
                </span>
              </>
            ) : (
              <span>
                {typedText}
                <span className="inline-block w-[2px] h-[1em] bg-[#0EA5A4] ml-1 animate-pulse" />
              </span>
            )}
          </h1>

          {/* Rotating Titles */}
          <div className="h-9 overflow-hidden">
            {typingDone && (
              <p
                key={index}
                className="text-xl sm:text-2xl font-semibold text-[#0EA5A4] animate-slideInUp"
              >
                {titles[index]}
              </p>
            )}
          </div>

          {/* Subtext */}
          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-[#A1A5B0] text-base sm:text-lg leading-relaxed">
           Calm in thinking. Relentless in execution. I build intelligent data platforms, real-time pipelines, and production-ready AI systems engineered for reliability, observability, and scale.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold text-[#020617]
              bg-[#0EA5A4] hover:scale-105 hover:shadow-2xl
              hover:shadow-[#0EA5A4]/40 transition-all"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold
              border-2 border-[#38BDF8] text-[#E5E7EB]
              hover:bg-[#38BDF8] hover:text-[#020617]
              transition-all"
            >
              Let’s Build Something
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2
        text-[#38BDF8] animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Slide Animation */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
