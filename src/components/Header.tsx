import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Youtube, Download } from "lucide-react";


type NavItem = {
  name: string;
  href: string;
};

// Move navItems OUTSIDE the component
const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "YouTube", href: "#youtube" },
  { name: "My Startup", href: "#vigilantiq" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020617]/90 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-2.5" : "py-4"
          }`}
        >
          {/* BRAND */}
          <span className="text-lg sm:text-xl md:text-2xl font-bold
            bg-gradient-to-r from-[#0EA5A4] to-[#38BDF8]
            bg-clip-text text-transparent tracking-wide">
            MANI CHOKKARA
          </span>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-semibold text-[#E5E7EB]
                hover:text-[#0EA5A4] transition-colors duration-200 text-sm
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-[#0EA5A4] hover:after:w-full after:transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://github.com/mani544" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} className="text-[#E5E7EB] hover:text-[#0EA5A4]" />
            </a>
            <a 
              href="https://www.linkedin.com/in/manichokkara/" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-[#E5E7EB] hover:text-[#0EA5A4]" />
            </a>
            <a 
              href="https://www.youtube.com/@techinnovatorsnetworkofficial" 
              target="_blank" 
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={20} className="text-[#E5E7EB] hover:text-red-400" />
            </a>

          

            <a
              href="https://drive.google.com/file/d/1_foTSUVTwOdabOce_HV7ARH08C9f5nWB/view"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg
              bg-[#0EA5A4] text-[#020617] font-semibold
              hover:translate-y-[-1px] transition-all shadow-md shadow-[#0EA5A4]/30"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-[#E5E7EB]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#020617] border-t border-white/10">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 font-semibold
                  text-[#E5E7EB] hover:bg-white/5 hover:text-[#0EA5A4]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;