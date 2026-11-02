import { useState, useEffect } from 'react';
import { ArrowDown, Layers, ShieldCheck, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export function Hero({ onExploreWork, onConnect }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 16,
        y: (e.clientY / innerHeight - 0.5) * 16
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#E8DCC6]"
    >
      {/* Background Soft Ambient Light Blurs (No dark background!) */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#722F37]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#B7A89A]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#722F37]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Cream Grid Accent */}
      <div className="absolute inset-0 bg-cream-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[78vh]">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#B7A89A]/50 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#722F37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#722F37]" />
              </span>
              <span className="text-xs font-poppins font-medium text-[#722F37] tracking-wide">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Main Greeting & Headline in Poppins */}
            <div>
              <p className="font-poppins text-lg sm:text-xl text-[#722F37] font-semibold tracking-wide">
                {PERSONAL_INFO.heroIntro}
              </p>
              <h1 className="font-poppins text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#2A1418] tracking-tight leading-[1.08] mt-1">
                ROJINA ARYAL
              </h1>
              <div className="mt-3 flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="font-poppins text-base sm:text-xl font-bold text-[#722F37]">
                  UI/UX Designer
                </span>
                <span className="text-[#B7A89A] font-bold">•</span>
                <span className="font-poppins text-base sm:text-xl font-bold text-[#4A1920]">
                  Product Designer
                </span>
              </div>
            </div>

            {/* Tagline Quote */}
            <p className="text-base sm:text-xl text-[#3D2529] font-normal leading-relaxed max-w-2xl border-l-4 border-[#722F37] pl-4 py-1 italic bg-white/30 rounded-r-xl">
              "{PERSONAL_INFO.heroQuote}"
            </p>

            {/* Two Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreWork}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#722F37] text-white font-poppins font-bold text-sm shadow-xl shadow-[#722F37]/25 hover:bg-[#5a252c] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <span className="w-6 h-6 rounded-lg bg-white/20 text-white flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={onConnect}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/80 hover:bg-white text-[#722F37] font-poppins font-semibold text-sm border border-[#B7A89A] hover:border-[#722F37] transition-all shadow-md backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Connect</span>
                <Compass className="w-4 h-4 text-[#722F37]" />
              </button>
            </div>

            {/* Metrics Highlight Band */}
            <div className="pt-6 border-t border-[#B7A89A]/40 grid grid-cols-3 gap-4 max-w-lg">
              <div className="p-3 rounded-xl bg-white/40 border border-[#B7A89A]/30">
                <span className="block font-poppins text-xl sm:text-2xl font-black text-[#722F37]">
                  BSc. CSIT
                </span>
                <span className="text-[11px] text-[#553b40] font-medium leading-tight block">
                  Tech & HCI Logic
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/40 border border-[#B7A89A]/30">
                <span className="block font-poppins text-xl sm:text-2xl font-black text-[#722F37]">
                  5+
                </span>
                <span className="text-[11px] text-[#553b40] font-medium leading-tight block">
                  Featured Platforms
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/40 border border-[#B7A89A]/30">
                <span className="block font-poppins text-xl sm:text-2xl font-black text-[#722F37]">
                  100%
                </span>
                <span className="text-[11px] text-[#553b40] font-medium leading-tight block">
                  User-Centered
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Rojina Aryal Cutout with Clean Background & Floating Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-end min-h-[480px] sm:min-h-[560px]">
            {/* Parallax Container */}
            <div
              className="relative w-full max-w-md flex flex-col items-center justify-end transition-transform duration-200 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`
              }}
            >
              {/* Soft Warm Radial Backdrop Glow behind cutout */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#B7A89A]/35 via-white/40 to-transparent rounded-full blur-3xl -z-10 scale-90" />

              {/* Rojina's Real Cutout Image Standing Directly on the Section (No dark box!) */}
              <div className="relative w-full flex justify-center items-end">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Rojina Aryal — UI/UX & Product Designer"
                  className="max-h-[520px] sm:max-h-[620px] w-auto object-contain filter drop-shadow-[0_20px_30px_rgba(114,47,55,0.18)] select-none pointer-events-none transform hover:scale-[1.01] transition-transform duration-300"
                />

                {/* Grounding Shadow for Natural Standing Look */}
                <div className="absolute -bottom-2 w-3/4 h-5 bg-[#722F37]/15 rounded-full blur-md -z-10" />
              </div>

              {/* Floating UI Card 1: Design System Token (Top Left) */}
              <div
                className="absolute top-12 -left-2 sm:-left-6 p-3 rounded-2xl bg-white/90 shadow-xl border border-[#B7A89A]/50 flex items-center gap-3 backdrop-blur-md hidden sm:flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translate3d(${-mousePos.x * 0.7}px, ${-mousePos.y * 0.7}px, 0)`
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-poppins text-[#722F37] font-semibold uppercase tracking-wider block">
                    Design System
                  </span>
                  <span className="text-xs font-bold text-[#2A1418]">Figma Token Set</span>
                </div>
              </div>

              {/* Floating UI Card 2: Usability Rating (Top Right) */}
              <div
                className="absolute top-20 -right-2 sm:-right-4 p-3 rounded-2xl bg-white/90 shadow-xl border border-[#B7A89A]/50 flex items-center gap-2.5 backdrop-blur-md hidden sm:flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translate3d(${mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px, 0)`
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-600/15 text-emerald-800 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#2A1418] block">98% SUS</span>
                  <span className="text-[10px] text-[#553b40] font-medium">Usability Score</span>
                </div>
              </div>



              {/* Floating UI Card 4: Domains (Bottom Right) */}
              <div
                className="absolute bottom-16 -right-2 sm:-right-4 px-4 py-2.5 rounded-xl bg-[#722F37] text-white shadow-xl flex items-center gap-2 hidden sm:flex"
                style={{
                  transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px, 0)`
                }}
              >
                <Compass className="w-4 h-4 text-[#E8DCC6]" />
                <span className="text-xs font-medium text-[#E8DCC6]">
                  Healthcare & EdTech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Down Indicator */}
      <button
        onClick={onExploreWork}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-xs text-[#722F37] hover:text-[#4A1920] transition-colors focus:outline-none group"
      >
        <span className="text-[10px] uppercase font-poppins tracking-widest font-semibold">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-[#722F37]/40 flex justify-center pt-1.5 group-hover:border-[#722F37] transition-colors bg-white/40">
          <div className="w-1.5 h-2 rounded-full bg-[#722F37] animate-bounce" />
        </div>
      </button>
    </section>
  );
}
