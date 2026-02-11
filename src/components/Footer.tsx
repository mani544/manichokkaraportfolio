import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);

  /* ================= COLUMN REVEAL ================= */
  useEffect(() => {
    const elements = footerRef.current?.querySelectorAll(".reveal");
    if (!elements) return;

    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
      }, i * 150);
    });
  }, []);

  /* ================= MAGNETIC ICON EFFECT ================= */
  const handleMouseMove = (e: any) => {
    const icon = e.currentTarget;
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    icon.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = (e: any) => {
    e.currentTarget.style.transform = "translate(0px,0px)";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-background text-muted">

      {/* ================= DYNAMIC GRID BACKGROUND ================= */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0EA5A4_1px,transparent_1px),linear-gradient(to_bottom,#0EA5A4_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ================= GLASS LAYER ================= */}
      <div className="relative backdrop-blur-xl bg-white/5 border-t border-white/10">

        <div
          ref={footerRef}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

            {/* BRAND */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MANI CHOKKARA
              </h3>

              <p className="mt-4 text-sm leading-relaxed max-w-xs">
                Designing intelligence that scales beyond code.
              </p>
            </div>

            {/* NAVIGATION */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <h4 className="text-text font-semibold mb-6">
                Navigation
              </h4>

              <ul className="space-y-3 text-sm">
                {["Home", "About", "Projects", "Skills"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group relative inline-flex items-center gap-2 hover:text-text transition"
                    >
                      {item}
                      <ArrowRight
                        size={14}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTENT */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <h4 className="text-text font-semibold mb-6">
                Content
              </h4>

              <ul className="space-y-3 text-sm">
                {["YouTube", "Blog", "Certifications", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group relative inline-flex items-center gap-2 hover:text-text transition"
                      >
                        {item}
                        <ArrowRight
                          size={14}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
                        />
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <h4 className="text-text font-semibold mb-6">
                Connect
              </h4>

              <div className="flex items-center gap-6">
                {[Github, Linkedin, Youtube, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="transition-all duration-300 hover:text-primary"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-16 border-t border-white/10" />

          {/* ================= BOTTOM ================= */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

            <p>
              © {year} Mani Chokkara. Built with intention, not trends.
            </p>

            <p className="italic text-muted/60">
              “Systems outlive code.”
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 z-50
        bg-white/10 backdrop-blur-md border border-white/10
        p-3 rounded-full hover:scale-110 transition"
      >
        <ArrowUp size={18} className="text-text" />
      </button>
    </footer>
  );
};

export default Footer;
