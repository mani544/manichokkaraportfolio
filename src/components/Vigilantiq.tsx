import { useState, useEffect } from "react";
import { ShieldAlert, Network, Layers, Activity } from "lucide-react";

const Vigilantiq = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // ESC to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="vigilantiq"
      className="relative py-20 bg-gradient-to-b from-[#020617] to-black overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">

        {/* MONITOR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {[
            {
              img: "/architecture_1.png",
              label: "Architecture Overview",
            },
            {
              img: "/dashboard_1.png",
              label: "Architecture Dashboard",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center group">

              <div className="relative">

                {/* MONITOR FRAME */}
                <div className="relative bg-[#0f172a] rounded-[28px] p-6 border border-[#0EA5A4]/30 shadow-[0_60px_150px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-[1.03]">

                  {/* INNER BEZEL */}
                  <div className="bg-black rounded-[22px] p-4 shadow-inner relative flex flex-col items-center">
    {/* TEXT BELOW BUTTON */}
                      <p className="mt-2 text-sm text-white font-semibold tracking-wide">
                        {item.label}
                      </p>
                    {/* SCREEN */}
                    <div className="relative bg-[#020617] rounded-[16px] overflow-hidden w-full">

                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />

                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-contain p-6 opacity-95"
                      />
                    </div>

                    {/* BUTTON + TEXT */}
                    <div className="mt-4 flex flex-col items-center">

                      {/* BLINKING BUTTON */}
                      <button
                        onClick={() => setActiveImage(item.img)}
                        className="relative w-5 h-5 rounded-full bg-[#0b1220] border border-white/10 shadow-inner flex items-center justify-center animate-pulseLED"
                      >
                        <div className="w-3 h-3 rounded-full bg-[#0EA5A4]" />
                      </button>



                    </div>

                  </div>
                </div>

                {/* STAND */}
                <div className="w-6 h-14 bg-[#0f172a] mx-auto rounded-b-md border-x border-[#0EA5A4]/30" />
                <div className="w-36 h-3 bg-[#0f172a] mx-auto rounded-full border border-[#0EA5A4]/30 shadow-md" />
                <div className="w-52 h-6 bg-black/40 blur-2xl mx-auto mt-2 rounded-full" />

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-6xl w-full p-6 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-6 text-white text-3xl"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>

            <img
              src={activeImage}
              alt="Expanded"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes pulseLED {
          0% {
            box-shadow: 0 0 0px rgba(14,165,164,0.4);
          }
          50% {
            box-shadow: 0 0 14px rgba(14,165,164,0.9);
          }
          100% {
            box-shadow: 0 0 0px rgba(14,165,164,0.4);
          }
        }

        .animate-pulseLED {
          animation: pulseLED 2s ease-in-out infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease forwards;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

    </section>
  );
};

export default Vigilantiq;
