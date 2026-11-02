import { useState } from 'react';
import { ArrowUpRight, FolderGit2, Eye } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'UI/UX Design', label: 'Healthcare & SaaS' },
    { id: 'Web & Mobile UI/UX', label: 'EdTech' },
    { id: 'Web UI/UX', label: 'E-Commerce' },
    { id: 'Mobile UI/UX', label: 'Mobile App' },
    { id: 'Responsive Web Design', label: 'Responsive Web' }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#E8DCC6] text-[#2A1418] border-t border-[#B7A89A]/40 overflow-hidden font-poppins"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#722F37]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#B7A89A]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#B7A89A]/40">
          <div>
            <span className="text-xs font-poppins uppercase tracking-widest text-[#722F37] font-bold flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              04 // Selected Works
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-extrabold text-[#2A1418] mt-2 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#553b40] mt-2 max-w-xl font-medium">
              Scalable product architectures, multi-role web dashboards, and mobile user experiences crafted with research rigor.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/70 border border-[#B7A89A]/50 backdrop-blur-md shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-poppins font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#722F37] text-white shadow-md'
                    : 'text-[#3D2529] hover:text-[#722F37] hover:bg-[#722F37]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-white/85 border border-[#B7A89A]/60 hover:border-[#722F37] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Visual Preview Side (7 cols) */}
                  <div
                    className={`lg:col-span-7 cursor-pointer overflow-hidden rounded-2xl relative border border-[#B7A89A]/50 bg-[#E8DCC6] shadow-md ${
                      isEven ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                    onClick={() => onSelectProject(project)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#722F37] text-white font-poppins font-bold text-xs shadow-2xl">
                          <Eye className="w-4 h-4" />
                          <span>View Full Case Study</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Copy & Spec Side (5 cols) */}
                  <div
                    className={`lg:col-span-5 space-y-4 ${
                      isEven ? 'order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-poppins px-3 py-1 rounded-full bg-[#722F37]/10 text-[#722F37] border border-[#722F37]/25 font-bold uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs text-[#553b40] font-semibold">
                        0{index + 1} // 05
                      </span>
                    </div>

                    <div>
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#2A1418] hover:text-[#722F37] transition-colors cursor-pointer leading-tight"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-[#722F37]">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#3D2529] leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Contributions Preview */}
                    <div className="space-y-1.5 pt-1">
                      {project.keyContributions.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#553b40]">
                          <span className="text-[#722F37] font-bold mt-0.5">•</span>
                          <span className="line-clamp-2">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-1 rounded bg-[#E8DCC6] text-[#2A1418] border border-[#B7A89A]/50 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#722F37] text-white hover:bg-[#5a252c] text-xs font-poppins font-bold transition-all shadow-md group/btn"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
