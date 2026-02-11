import { useEffect, useRef, useState } from "react";
import { Play, Eye, Clock, Video, Users } from "lucide-react";

/* ---------------- COUNT UP HOOK ---------------- */

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

/* ---------------- DATA ---------------- */

const videos = [
  {
    title: "Data Analyst Roadmap 2025 — From Zero to Industry Ready",
    thumbnail: "/data analyst.png",
    url: "https://youtu.be/f82rTNQw0CM?si=we1DZ1m892NAnJQA",
    duration: "9 min",
    views: "5K+",
    description:
      "A structured roadmap for students to transition from fundamentals to job-ready data analytics skills.",
  },
  {
    title: "Coding From Scratch — How Programming Actually Works",
    thumbnail: "https://img.youtube.com/vi/plyI_SxVgZo/maxresdefault.jpg",
    url: "https://youtu.be/plyI_SxVgZo?si=P4BUblw7wyn1fgs9",
    duration: "12 min",
    views: "1.5K+",
    description:
      "Breaking down programming concepts at the system level for beginners.",
  },
  {
    title: "MacBook Air M2 — Engineering Perspective Review",
    thumbnail: "/macbook.png",
    url: "https://youtu.be/EKYWSMAjDfI?si=yzz3IgYgOnvMbFaq",
    duration: "16 min",
    views: "2K+",
    description:
      "A practical review of Apple Silicon from a performance and usability standpoint.",
  },
  {
    title: "boAt Airdopes 161 ANC — Tech & User Experience Review",
    thumbnail: "/boat.png",
    url: "https://youtu.be/O8aZS9BGxTg?si=2FlgZqr6Kldzokob",
    duration: "10 min",
    views: "6K+",
    description:
      "Analyzing consumer tech with a focus on value, performance, and design tradeoffs.",
  },
];

const metrics = [
  { label: "Subscribers", value: 5, suffix: "K+", icon: <Users size={22} /> },
  { label: "Total Views", value: 50, suffix: "K+", icon: <Eye size={22} /> },
  { label: "Videos Published", value: 100, suffix: "+", icon: <Video size={22} /> },
  { label: "Watch Time", value: 10, suffix: "K+", icon: <Clock size={22} /> },
];

/* ---------------- METRIC CARD ---------------- */

const MetricCard = ({
  label,
  value,
  suffix,
  icon,
  visible,
}: {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  visible: boolean;
}) => {
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

/* ---------------- MAIN COMPONENT ---------------- */

const YouTubeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="youtube"
      ref={ref}
      className="relative py-0 bg-[#020617] overflow-hidden"
    >
      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Knowledge Distribution - TECH INNOVATORS NETWORK
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            Public Knowledge & Thought Leadership
          </h2>
        </div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              {...metric}
              visible={visible}
            />
          ))}
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl overflow-hidden transition-all duration-500
              hover:border-[#0EA5A4]/40"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover
                  transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-[#0EA5A4]
                    flex items-center justify-center text-[#020617]"
                  >
                    <Play />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#E5E7EB] mb-2">
                  {video.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                  {video.description}
                </p>

                <div className="flex gap-6 text-sm text-[#94A3B8]">
                  <span className="flex items-center gap-1">
                    <Eye size={14} /> {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {video.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.youtube.com/@techinnovatorsnetworkofficial"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
            bg-[#0EA5A4] text-[#020617] font-semibold
            hover:scale-105 transition-all shadow-lg shadow-[#0EA5A4]/30"
          >
            <Video />
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
