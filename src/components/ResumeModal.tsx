import { X, Download, Printer, Check, Mail, Phone, MapPin, Globe, FileText } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, EDUCATION_ITEMS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
============================================================
${PERSONAL_INFO.name.toUpperCase()} — ${PERSONAL_INFO.taglineRole.toUpperCase()}
============================================================
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin}

------------------------------------------------------------
PROFESSIONAL SUMMARY
------------------------------------------------------------
${PERSONAL_INFO.aboutText.join('\n\n')}

------------------------------------------------------------
PROFESSIONAL EXPERIENCE
------------------------------------------------------------
${EXPERIENCE_ITEMS.map(
  (exp) => `
${exp.role.toUpperCase()} | ${exp.company}
${exp.period} | ${exp.location}
Responsibilities:
${exp.responsibilities.map((r) => `  • ${r}`).join('\n')}
Core Skills & Tools: ${exp.technologies.join(', ')}
`
).join('\n')}

------------------------------------------------------------
SKILLS & EXPERTISE
------------------------------------------------------------
${SKILL_CATEGORIES.map(
  (cat) => `
[${cat.category}]
${cat.skills.map((s) => `  • ${s.name} (${s.level}): ${s.desc}`).join('\n')}
`
).join('\n')}

Domain Specializations: ${PERSONAL_INFO.domains.join(', ')}

------------------------------------------------------------
EDUCATION
------------------------------------------------------------
${EDUCATION_ITEMS.map(
  (edu) => `
${edu.degree}
${edu.institution} | ${edu.timeline}
${edu.description}
Highlights:
${edu.highlights.map((h) => `  • ${h}`).join('\n')}
`
).join('\n')}
============================================================
Official Resume of Rojina Aryal
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rojina_Aryal_UI_UX_Designer_CV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static font-poppins">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F7F2E9] text-[#2A1418] border border-[#B7A89A] rounded-2xl shadow-2xl p-6 sm:p-10 print:border-none print:shadow-none print:max-h-none print:p-8 print:bg-white print:text-black">
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#B7A89A]/50 print:hidden">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-[#722F37]/10 text-[#722F37]">
              <FileText className="w-5 h-5 text-[#722F37]" />
            </span>
            <div>
              <h3 className="font-poppins text-xl font-bold text-[#2A1418]">Curriculum Vitae</h3>
              <p className="text-xs text-[#553b40]">Official Verified Resume of Rojina Aryal</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-white text-[#722F37] border border-[#B7A89A] hover:bg-[#E8DCC6] transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4 text-[#722F37]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#722F37] hover:bg-[#5a252c] text-white transition-all shadow-md"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white border border-[#B7A89A] text-[#2A1418] hover:bg-[#E8DCC6] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="space-y-8 print:text-black">
          {/* Header */}
          <div className="border-b border-[#B7A89A]/50 pb-6 print:border-black/30">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
              <div>
                <h1 className="font-poppins text-3xl sm:text-4xl font-extrabold text-[#2A1418] print:text-black tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="mt-1 text-lg font-bold text-[#722F37] print:text-gray-800">
                  {PERSONAL_INFO.taglineRole}
                </p>
                <p className="mt-2 text-xs text-[#553b40] print:text-gray-600 max-w-xl">
                  {PERSONAL_INFO.heroQuote}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#553b40] print:text-gray-700 sm:text-right font-medium">
                <div className="flex items-center sm:justify-end gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#722F37] print:text-black" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#722F37] print:text-black" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#722F37] print:text-black" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#722F37] print:text-black" />
                  <span>LinkedIn: {PERSONAL_INFO.linkedin}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-[#722F37] print:text-black mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#722F37] print:bg-black inline-block" />
              Professional Profile
            </h2>
            <div className="space-y-2 text-sm text-[#3D2529] print:text-gray-800 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-[#722F37] print:text-black mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#722F37] print:bg-black inline-block" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id} className="relative pl-4 border-l-2 border-[#722F37]/40 print:border-black/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-[#2A1418] print:text-black">
                      {item.role}{' '}
                      <span className="font-semibold text-[#722F37] print:text-gray-700">
                        — {item.company}
                      </span>
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-[#B7A89A] text-[#2A1418] print:border-black/20 w-fit">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#3D2529] print:text-gray-700">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#722F37] print:text-black mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#E8DCC6] text-[#722F37] font-semibold print:bg-gray-100 print:text-black border border-[#B7A89A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-[#722F37] print:text-black mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#722F37] print:bg-black inline-block" />
              Core Competencies & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.category}
                  className="p-3.5 rounded-xl bg-white border border-[#B7A89A]/50 print:border-gray-300 print:bg-gray-50"
                >
                  <h4 className="text-xs font-bold text-[#2A1418] print:text-black mb-2 border-b border-[#B7A89A]/30 pb-1">
                    {cat.category}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#3D2529] print:text-gray-800">
                    {cat.skills.map((s) => (
                      <li key={s.name} className="flex items-center justify-between gap-1">
                        <span>{s.name}</span>
                        <span className="text-[10px] text-[#722F37] font-semibold">
                          {s.level === 'Daily Driver' ? 'Primary' : s.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-[#3D2529] print:text-gray-700">
              <span className="font-bold text-[#722F37] print:text-black">Domain Experience:</span>
              <span>{PERSONAL_INFO.domains.join(' • ')}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-[#722F37] print:text-black mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#722F37] print:bg-black inline-block" />
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="relative pl-4 border-l-2 border-[#722F37]/40 print:border-black/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-[#2A1418] print:text-black">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-semibold text-[#722F37] print:text-black">
                      {edu.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-[#3D2529] print:text-gray-700 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#553b40] print:text-gray-600 mt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
