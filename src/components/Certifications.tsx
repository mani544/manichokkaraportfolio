import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";

type Certificate = {
  img: string;
  title: string;
};

const certificates: Certificate[] = [
  {
    img: "/CODEBASICS CERTIFICATE EXCEL.png",
    title: "Excel — Mother of Business Intelligence",
  },
  {
    img: "/Codebasics Python Certificate.jpg",
    title: "Python for Data Professionals (Advanced)",
  },
  {
    img: "/intro_carrer_data_analytics.png",
    title: "Career Skills in Data Analytics",
  },
  {
    img: "/career_essentials.png",
    title: "Career Essentials — Microsoft × LinkedIn",
  },
  {
    img: "/Data Science Professional.png",
    title: "OCI 2025 Certified Data Science Professional",
  },
  {
    img: "/genai.png",
    title: "OCI 2025 Certified Generative AI Professional",
  },
];

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative py-0 bg-[#020617] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#0EA5A4]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Credentials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            Certifications & Recognition
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#94A3B8]">
            Verified credentials that reinforce my expertise across data,
            analytics, AI, and cloud systems.
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
          transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCert(cert)}
              className="group relative bg-white/5 backdrop-blur-xl
              border border-white/10 rounded-3xl overflow-hidden
              hover:border-[#0EA5A4]/40 transition-all duration-500
              cursor-pointer"
            >
              {/* Image Preview */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-50 object-contain bg-black/20
                  transition-transform duration-500
                  group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t
                  from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 text-[#38BDF8]">
                  <Award size={16} />
                  <span className="text-xs uppercase tracking-widest">
                    Certified
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#E5E7EB] leading-snug">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md
          flex items-center justify-center px-3"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative bg-[#020617] border border-white/10
            rounded-3xl max-w-5xl w-full p-5 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.img}
              alt={activeCert.title}
              className="w-full h-auto rounded-xl"
            />

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setActiveCert(null)}
                className="flex-1 py-3 rounded-xl
                bg-white/10 text-[#E5E7EB]
                hover:bg-white/20 transition"
              >
                Close
              </button>

              <a
                href={activeCert.img}
                download
                className="flex-1 text-center py-3 rounded-xl
                bg-[#0EA5A4] text-[#020617] font-semibold
                hover:scale-105 transition"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
