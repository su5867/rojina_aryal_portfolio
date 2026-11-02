import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#F3ECE2] text-[#2A1418] border-t border-[#B7A89A]/40 overflow-hidden font-poppins"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#722F37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B7A89A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#B7A89A]/40">
          <div>
            <span className="text-xs font-poppins uppercase tracking-widest text-[#722F37] font-bold flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              03 // Career Track
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-extrabold text-[#2A1418] mt-2 tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#553b40] font-medium">
            Designing software client solutions with verified outcomes.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#722F37]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Pin Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.isCurrent
                    ? 'bg-[#722F37] border-white shadow-[0_0_12px_rgba(114,47,55,0.4)]'
                    : 'bg-[#E8DCC6] border-[#722F37]/60 group-hover:border-[#722F37]'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.isCurrent ? 'bg-white' : 'bg-[#722F37]'
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-[#B7A89A]/60 hover:border-[#722F37] transition-all shadow-md hover:shadow-xl group-hover:bg-white">
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-[10px] font-poppins px-2.5 py-0.5 rounded bg-[#722F37]/10 text-[#722F37] border border-[#722F37]/20 font-bold uppercase">
                      {item.type}
                    </span>
                    <h3 className="font-poppins text-xl sm:text-2xl font-bold text-[#2A1418] mt-1.5">
                      {item.role}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#722F37]">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-1.5 text-xs text-[#553b40] font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#722F37]" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#722F37]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="mt-4 space-y-2.5">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#3D2529] leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-6 pt-5 border-t border-[#B7A89A]/30 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-lg bg-[#E8DCC6] text-[#2A1418] border border-[#B7A89A]/50 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
