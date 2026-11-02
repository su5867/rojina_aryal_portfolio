import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#3A141A] text-[#E8DCC6] border-t border-[#B7A89A]/30 py-12 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E8DCC6] text-[#722F37] flex items-center justify-center font-poppins font-black text-xs">
              RA
            </div>
            <div>
              <span className="font-poppins font-bold text-white text-sm block">
                ROJINA ARYAL
              </span>
              <span className="text-[11px] text-[#B7A89A] font-poppins">
                UI/UX Designer | Product Designer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#E8DCC6]/90 flex-wrap justify-center">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs border border-white/20 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E8DCC6]" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B7A89A]">
          <p>
            © {new Date().getFullYear()} Rojina Aryal. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Designed with Figma, Computer Science rigor & user empathy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
