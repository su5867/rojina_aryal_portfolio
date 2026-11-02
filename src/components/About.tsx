import { User, Code2, Check, ArrowRight, HeartHandshake, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onExploreSkills: () => void;
}

export function About({ onExploreSkills }: AboutProps) {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#F3ECE2] text-[#2A1418] border-t border-[#B7A89A]/50 overflow-hidden font-poppins"
    >
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#722F37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B7A89A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#B7A89A]/40">
          <div>
            <span className="text-xs font-poppins uppercase tracking-widest text-[#722F37] font-bold flex items-center gap-2">
              <User className="w-3.5 h-3.5" />
              01 // Biography & Philosophy
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-extrabold text-[#2A1418] mt-2 tracking-tight">
              About Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#553b40] font-medium max-w-xs">
            Where computer science logic meets empathetic human experience.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation with Rojina's Photograph */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#B7A89A]/60 p-2 bg-[#E8DCC6] shadow-xl max-w-md w-full">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/90 to-[#E8DCC6] flex items-end justify-center min-h-[460px] pt-4">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Rojina Aryal Working as UI/UX Designer"
                  loading="lazy"
                  decoding="async"
                  className="max-h-[430px] w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(114,47,55,0.15)]"
                />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-[#B7A89A]/60 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#722F37] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#2A1418]">CS + UX Intersection</h4>
                      <p className="text-[11px] text-[#553b40]">
                        BSc. CSIT foundation ensures seamless developer handoff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Card */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 p-4 rounded-2xl bg-[#722F37] text-white shadow-xl hidden sm:block max-w-[220px]">
              <span className="text-[10px] font-poppins text-[#E8DCC6] uppercase font-bold tracking-wider block">
                Primary Toolset
              </span>
              <p className="text-xs font-semibold text-white mt-0.5">
                Figma, Design Systems & High-Fidelity Prototyping
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Visual Tags */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[#3D2529] leading-relaxed font-normal">
              {PERSONAL_INFO.aboutText.map((paragraph, idx) => (
                <p key={idx} className="first:text-[#2A1418] first:font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Visual Tags: Professional Interests */}
            <div>
              <span className="text-xs font-poppins uppercase tracking-wider text-[#722F37] font-bold block mb-3">
                Core Design Interests
              </span>
              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_INFO.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#2A1418] border border-[#B7A89A] hover:border-[#722F37] transition-colors shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-[#722F37]" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#B7A89A]/40">
              <div className="p-4 rounded-xl bg-white/70 border border-[#B7A89A]/40 hover:border-[#722F37] transition-colors shadow-sm">
                <span className="text-[11px] text-[#722F37] uppercase font-bold block mb-1">
                  01. Empathy
                </span>
                <h4 className="text-sm font-bold text-[#2A1418]">User-Centric</h4>
                <p className="text-xs text-[#553b40] mt-1">
                  Rooted in deep research and human cognitive habits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#B7A89A]/40 hover:border-[#722F37] transition-colors shadow-sm">
                <span className="text-[11px] text-[#722F37] uppercase font-bold block mb-1">
                  02. Structure
                </span>
                <h4 className="text-sm font-bold text-[#2A1418]">Systemic Design</h4>
                <p className="text-xs text-[#553b40] mt-1">
                  Scalable Figma design tokens and reusable atomic libraries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#B7A89A]/40 hover:border-[#722F37] transition-colors shadow-sm">
                <span className="text-[11px] text-[#722F37] uppercase font-bold block mb-1">
                  03. Dev Empathy
                </span>
                <h4 className="text-sm font-bold text-[#2A1418]">CS Background</h4>
                <p className="text-xs text-[#553b40] mt-1">
                  Designs built for realistic, pixel-perfect frontend execution.
                </p>
              </div>
            </div>

            {/* Explore Skills Link */}
            <div className="pt-2">
              <button
                onClick={onExploreSkills}
                className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[#722F37] hover:text-[#4A1920] transition-colors group"
              >
                <span>Inspect Detailed Skills Matrix</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
