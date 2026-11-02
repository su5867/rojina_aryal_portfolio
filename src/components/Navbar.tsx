import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E8DCC6]/90 backdrop-blur-md border-b border-[#B7A89A]/50 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="group text-left flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#722F37] text-white flex items-center justify-center font-poppins font-black text-sm tracking-tighter group-hover:scale-105 transition-transform shadow-md">
            RA
          </div>
          <div>
            <span className="font-poppins font-extrabold tracking-wider text-sm sm:text-base text-[#2A1418] group-hover:text-[#722F37] transition-colors">
              ROJINA ARYAL
            </span>
            <span className="block text-[10px] text-[#722F37] font-medium -mt-0.5 tracking-tight font-poppins">
              UI/UX & Product Designer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#B7A89A]/50 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 text-xs font-poppins font-semibold rounded-full transition-all ${
                  isActive
                    ? 'bg-[#722F37] text-white shadow-sm'
                    : 'text-[#3D2529] hover:text-[#722F37] hover:bg-[#722F37]/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-poppins font-semibold rounded-full bg-white/80 hover:bg-white text-[#722F37] border border-[#B7A89A] transition-all hover:border-[#722F37] shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#722F37]" />
            <span>CV / Resume</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-poppins font-bold rounded-full bg-[#722F37] text-white hover:bg-[#5a252c] transition-all shadow-md group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-white/80 border border-[#B7A89A] text-[#722F37]"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/80 text-[#722F37] border border-[#B7A89A]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#E8DCC6]/95 backdrop-blur-xl border-b border-[#B7A89A] mt-2 space-y-2 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 text-xs font-poppins font-semibold rounded-lg text-left transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#722F37] text-white'
                    : 'text-[#3D2529] hover:bg-white/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#B7A89A]/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-poppins font-semibold rounded-xl bg-white/80 text-[#722F37] border border-[#B7A89A]"
            >
              <FileText className="w-4 h-4 text-[#722F37]" />
              <span>View Full CV & Qualifications</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-poppins font-bold rounded-xl bg-[#722F37] text-white"
            >
              <span>Contact Rojina</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
