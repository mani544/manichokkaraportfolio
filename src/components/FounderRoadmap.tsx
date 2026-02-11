import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket } from "lucide-react";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const phases = [
  {
    title: "Phase 0",
    subtitle: "Synthetic Data & Simulation",
    desc: "Designing realistic high-volume datasets to simulate real-world risk patterns.",
  },
  {
    title: "Phase 1",
    subtitle: "Streaming Intelligence",
    desc: "Real-time ingestion and anomaly detection using event-driven pipelines.",
  },
  {
    title: "Phase 2",
    subtitle: "Risk Models & Learning",
    desc: "ML-driven scoring models that adapt as patterns evolve.",
  },
  {
    title: "Phase 3",
    subtitle: "Productization",
    desc: "Dashboards, APIs, and enterprise-ready integrations.",
  },
];

const FounderRoadmap = () => {
  const roadRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!roadRef.current || !dotRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const path = roadRef.current;

      // Moving dot animation
      gsap.to(dotRef.current, {
        duration: 8,
        repeat: -1,
        ease: "linear",
        motionPath: {
          path: path,
          align: path,
          autoRotate: false,
        },
      });

      // Glow on scroll
      gsap.to(".road-glow", {
        strokeWidth: 110,
        opacity: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Parallax cards
      gsap.to(".parallax-layer", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-10 bg-[#020617] overflow-hidden"
    >
      <h3 className="text-4xl text-center text-[#E5E7EB] font-semibold mb-1">
        VIGILANTIQ EVALUATION
      </h3>

      <div className="relative max-w-7xl mx-auto">

        <svg viewBox="0 0 1200 500" className="w-full">

          {/* ROAD GLOW */}
          <path
            d="M60 300 C200 100, 400 450, 600 250 C800 50, 1000 400, 1150 200"
            stroke="url(#grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="road-glow"
            opacity="0.25"
            fill="none"
          />

          {/* GLASS ROAD BODY (FIXED COLOR) */}
          <path
            d="M60 300 C200 100, 400 450, 600 250 C800 50, 1000 400, 1150 200"
            stroke="rgb(11, 0, 0)"
            strokeWidth="40"
            strokeLinecap="round"
            fill="none"
          />

          {/* DASH LINE */}
          <path
            d="M60 300 C200 100, 400 450, 600 250 C800 50, 1000 400, 1150 200"
            stroke="#ffffff"
            strokeWidth="5"
            strokeDasharray="20 15"
            strokeLinecap="round"
            className="animate-dash"
            fill="none"
          />

          {/* MOVING DOT (CIRCLE — correct element) */}
          <Rocket
            ref={dotRef}
            r="9"
            fill="#0EA5A4"
          />

          {/* Invisible path for animation */}
          <path
            ref={roadRef}
            d="M60 300 C200 100, 400 450, 600 250 C800 50, 1000 400, 1150 200"
            fill="none"
            stroke="none"
          />

          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#0EA5A4" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0EA5A4" />
            </linearGradient>
          </defs>

        </svg>

        {/* PHASE CARDS (NARROWER) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">

          {phases.map((phase, index) => (
            <div
              key={index}
              className={`parallax-layer absolute
                ${index === 0 && "top-[68%] left-[9%]"}
                ${index === 1 && "top-[25%] left-[35%]"}
                ${index === 2 && "top-[60%] left-[60%]"}
                ${index === 3 && "top-[14%] left-[85%]"}
              `}
            >
              <div className="pointer-events-auto
                bg-white/5 backdrop-blur-xl
                border border-[#0EA5A4]/30
                rounded-xl
                px-4 py-4
                max-w-[220px]   /* ✅ WIDTH REDUCED */
                shadow-lg shadow-[#0EA5A4]/20
                hover:scale-105 hover:shadow-[#38BDF8]/30
                transition-all duration-500">

                <p className="text-xs text-[#38BDF8] font-mono">
                  {phase.title}
                </p>
                <p className="text-[#E5E7EB] font-semibold mt-1 text-sm">
                  {phase.subtitle}
                </p>
                <p className="text-[#94A3B8] text-xs leading-relaxed mt-1">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* DASH ANIMATION */}
      <style>{`
        .animate-dash {
          animation: dashMove 4s linear infinite;
        }

        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -200; }
        }


      `}</style>

    </section>
  );
};

export default FounderRoadmap;
