import { ShieldAlert, Network, Layers, Activity } from "lucide-react";

const Vigilantiq = () => {
  return (
    <section
      id="vigilantiq"
      className="relative py-10 bg-gradient-to-b from-[#020617] to-black overflow-hidden"
    >

      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0EA5A4]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#38BDF8]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center mb-24">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0EA5A4] mb-4">
            Startup Initiative
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            VIGILANTIQ
          </h2>

          {/* LOGO */}
  <div className="flex justify-center mt-6 mb-6">
  <div className="relative group">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-[#0EA5A4]/20 blur-2xl opacity-60 group-hover:opacity-80 transition duration-500" />

    {/* Logo Image */}
    <img
      src="/VIGILANTIQ_LOGO.png"   
      alt="Vigilantiq Logo"
      className="relative w-28 h-28 object-contain
      transition-transform duration-500
      group-hover:scale-105"
    />
  </div>
</div>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#94A3B8]">
            An intelligent risk & anomaly detection platform designed to monitor,
            analyze, and respond to high-volume transactional systems in real time.
          </p>
        </div>

        {/* PROBLEM */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-4">
            The Problem We’re Solving
          </h3>
          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Modern financial and transactional systems operate at massive scale,
            yet risk detection is often reactive, fragmented, and rule-bound.
            Vigilantiq is built to shift this paradigm — from static monitoring to
            intelligent, adaptive vigilance.
          </p>
        </div>

        {/* ARCHITECTURE */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-10 text-center">
            System Architecture (Conceptual)
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Ingestion Layer",
                desc: "High-throughput streaming & batch data ingestion from transactional sources.",
                icon: <Network />,
              },
              {
                title: "Processing Core",
                desc: "Data normalization, enrichment, and feature generation pipelines.",
                icon: <Layers />,
              },
              {
                title: "Intelligence Layer",
                desc: "Anomaly detection, risk scoring, and ML-driven pattern recognition.",
                icon: <Activity />,
              },
              {
                title: "Decision Layer",
                desc: "Alerts, dashboards, and downstream integrations for action.",
                icon: <ShieldAlert />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative bg-white/5 backdrop-blur-md border border-white/50 rounded-2xl p-6
                hover:translate-y-[-6px] transition-all duration-500"
              >
                <div className="mb-4 text-[#0EA5A4]">{item.icon}</div>
                <h4 className="text-lg font-semibold text-[#E5E7EB] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* ARCHITECTURE VISUALS */}
<div className="mt-5 max-w-10xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

  {/* IMAGE BLOCK 1 */}
  <div
    className="relative bg-white/5 backdrop-blur-xl border border-white/50
    rounded-3xl overflow-hidden hover:translate-y-[-4px]
    transition-all duration-500"
  >
    <img
      src="/architecture_1.png"
      alt="Vigilantiq architecture overview"
      className="w-full h-full object-contain p-6 opacity-90"
    />

    {/* subtle label */}
    <div className="absolute bottom-0 left-40 right-55 text-s uppercase tracking-widest
      text-[white] font-bold">
      Architecture — Overview
    </div>
  </div>

  {/* IMAGE BLOCK 2 */}
  <div
    className="relative bg-white/5 backdrop-blur-xl border border-white/50
    rounded-3xl overflow-hidden hover:translate-y-[-4px]
    transition-all duration-500"
  >
    <img
      src="/dashboard_1.png"
      alt="Vigilantiq processing & intelligence flow"
      className="w-full h-full object-contain p-6 opacity-90"
    />

    
        {/* subtle label */}
    <div className="absolute bottom-0 left-40 right-55 text-s uppercase tracking-widest
      text-[white] font-bold">
      Architecture — Dashboard
    </div>
  </div>

 </div>
</div>
      
    </section>
  );
};

export default Vigilantiq;
