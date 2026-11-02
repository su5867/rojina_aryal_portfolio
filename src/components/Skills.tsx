import { useState } from 'react';
import { Layers, Briefcase } from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

export function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'ux' | 'ui' | 'tools'>('all');
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);

  const filterCategories = () => {
    if (activeTab === 'ux') return SKILL_CATEGORIES.filter((c) => c.category === 'UX & Research');
    if (activeTab === 'ui') return SKILL_CATEGORIES.filter((c) => c.category === 'UI & Visual Design');
    if (activeTab === 'tools') return SKILL_CATEGORIES.filter((c) => c.category === 'Tools & Technologies');
    return SKILL_CATEGORIES;
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#E8DCC6] text-[#2A1418] border-t border-[#B7A89A]/40 overflow-hidden font-poppins"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#722F37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#B7A89A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#B7A89A]/40">
          <div>
            <span className="text-xs font-poppins uppercase tracking-widest text-[#722F37] font-bold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              02 // Competencies & Tooling
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-extrabold text-[#2A1418] mt-2 tracking-tight">
              Skills & Expertise
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/70 border border-[#B7A89A]/50 backdrop-blur-md shadow-sm">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'ux', label: 'UX & Research' },
              { id: 'ui', label: 'UI & Visual Design' },
              { id: 'tools', label: 'Tools & Technologies' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-poppins font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#722F37] text-white shadow-sm'
                    : 'text-[#3D2529] hover:text-[#722F37] hover:bg-[#722F37]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filterCategories().map((catGroup, idx) => (
            <div
              key={catGroup.category}
              className="relative rounded-2xl bg-white/80 border border-[#B7A89A]/60 hover:border-[#722F37] transition-all p-6 sm:p-7 flex flex-col justify-between group shadow-md hover:shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-poppins px-2.5 py-1 rounded-lg bg-[#722F37]/10 text-[#722F37] font-bold border border-[#722F37]/20 uppercase">
                    {catGroup.badge}
                  </span>
                  <span className="text-xs text-[#722F37] font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-poppins text-2xl font-bold text-[#2A1418] mb-2">
                  {catGroup.category}
                </h3>
                <p className="text-xs text-[#553b40] mb-6 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {catGroup.skills.map((skill) => {
                    const isSelected = activeSkillName === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onClick={() =>
                          setActiveSkillName(isSelected ? null : skill.name)
                        }
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#722F37]/10 border-[#722F37] shadow-sm'
                            : 'bg-white/60 border-[#B7A89A]/30 hover:border-[#722F37]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-semibold text-[#2A1418] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-poppins font-medium px-2 py-0.5 rounded bg-white text-[#722F37] border border-[#B7A89A]/50">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#553b40] mt-1 pl-3.5 leading-normal">
                          {skill.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Accent Indicator */}
              <div className="pt-6 mt-6 border-t border-[#B7A89A]/30 flex items-center justify-between text-[11px] text-[#553b40]">
                <span>Verified in Production</span>
                <Layers className="w-3.5 h-3.5 text-[#722F37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Domain Experience Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#722F37] to-[#511c23] text-white border border-[#B7A89A]/40 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-poppins uppercase tracking-wider text-[#E8DCC6] font-semibold flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#E8DCC6]" />
                Specialized Domain Knowledge
              </span>
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white mt-1">
                Domain Experience
              </h3>
              <p className="text-xs text-[#E8DCC6]/90 mt-1 max-w-xl">
                Deep contextual understanding of data structures, regulatory clarity, and user mental models across key verticals.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {PERSONAL_INFO.domains.map((domain) => (
                <div
                  key={domain}
                  className="px-4 py-2.5 rounded-xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E8DCC6]" />
                  <span className="font-poppins font-semibold text-sm text-white">
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
