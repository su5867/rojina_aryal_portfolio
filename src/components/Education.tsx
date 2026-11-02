import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export function Education() {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 bg-[#E8DCC6] text-[#2A1418] border-t border-[#B7A89A]/40 overflow-hidden font-poppins"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#B7A89A]/40">
          <div>
            <span className="text-xs font-poppins uppercase tracking-widest text-[#722F37] font-bold flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              06 // Academic Background
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-extrabold text-[#2A1418] mt-2 tracking-tight">
              Education & Degrees
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#553b40] font-medium">
            Computer science and analytical rigor backing every design system.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {EDUCATION_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-[#B7A89A]/60 hover:border-[#722F37] transition-all shadow-md hover:shadow-xl group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-[#722F37]/10 border border-[#722F37]/20 text-[#722F37] flex items-center justify-center font-bold">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-poppins font-semibold text-[#722F37]">
                      Credential 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-poppins text-xl sm:text-2xl font-bold text-[#2A1418] mt-3">
                    {item.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#722F37] mt-1">
                    {item.institution}
                  </p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs text-[#553b40] font-medium">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCC6] border border-[#B7A89A]/50 text-[#2A1418]">
                    <Calendar className="w-3.5 h-3.5 text-[#722F37]" />
                    {item.timeline}
                  </span>
                  <span className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#722F37]" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#3D2529] leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="mt-5 pt-4 border-t border-[#B7A89A]/30 space-y-2">
                {item.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-center gap-2.5 text-xs text-[#553b40]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#722F37] shrink-0 font-bold" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
