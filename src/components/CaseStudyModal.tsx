import { useState } from 'react';
import { X, CheckCircle2, Layers, Sliders } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  // Interactive mini-demo states
  const [ieltsScores, setIeltsScores] = useState({ listening: 8.5, reading: 8.0, writing: 7.5, speaking: 8.0 });
  const [selectedSeats, setSelectedSeats] = useState<number[]>([14, 15]);
  const [furnitureMaterial, setFurnitureMaterial] = useState<'oak' | 'walnut' | 'sand'>('oak');
  const [selectedBrew, setSelectedBrew] = useState<'v60' | 'chemex' | 'aeropress'>('v60');
  const [hmsDepartment, setHmsDepartment] = useState<'all' | 'cardiology' | 'pediatrics' | 'general'>('all');

  if (!isOpen || !project) return null;

  // Real-time calculated overall IELTS band (rounded to nearest 0.5)
  const calcAverage = (ieltsScores.listening + ieltsScores.reading + ieltsScores.writing + ieltsScores.speaking) / 4;
  const overallBand = (Math.round(calcAverage * 2) / 2).toFixed(1);

  // Seat toggle for movie demo
  const toggleSeat = (seatId: number) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto font-poppins">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#F7F2E9] text-[#2A1418] border border-[#B7A89A] rounded-2xl shadow-2xl">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[#F7F2E9]/95 backdrop-blur-md border-b border-[#B7A89A]/50">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-poppins font-bold px-2.5 py-1 rounded bg-[#722F37]/10 text-[#722F37] border border-[#722F37]/20 uppercase">
              {project.category}
            </span>
            <span className="text-xs text-[#553b40] font-medium hidden sm:inline">Role: {project.role}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white border border-[#B7A89A] text-[#2A1418] hover:bg-[#E8DCC6] transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-10">
          {/* Hero Banner with Title and Subtitle */}
          <div>
            <h1 className="font-poppins text-2xl sm:text-4xl font-extrabold text-[#2A1418] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-[#722F37] font-bold">
              {project.subtitle}
            </p>
            <p className="mt-2 text-sm text-[#553b40] max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Large Project Image Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-[#B7A89A] shadow-lg bg-[#E8DCC6]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-[#B7A89A] text-[11px] text-[#722F37] font-bold flex items-center gap-1.5 shadow">
              <Layers className="w-3.5 h-3.5 text-[#722F37]" />
              <span>UI/UX High-Fidelity Prototype Spec</span>
            </div>
          </div>

          {/* Key Metrics / Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.stats.map((st, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-[#B7A89A]/50 flex flex-col justify-center shadow-sm"
              >
                <span className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#722F37]">
                  {st.value}
                </span>
                <span className="text-xs text-[#553b40] mt-1 font-semibold">{st.label}</span>
              </div>
            ))}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Challenge & Solution */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#B7A89A]/50 shadow-sm">
                <h3 className="font-poppins text-lg font-bold text-[#2A1418] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#722F37]" />
                  The Problem & Challenge
                </h3>
                <p className="mt-3 text-sm text-[#3D2529] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#B7A89A]/50 shadow-sm">
                <h3 className="font-poppins text-lg font-bold text-[#2A1418] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  The UX Solution & Strategy
                </h3>
                <p className="mt-3 text-sm text-[#3D2529] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Key Contributions Breakdown */}
              <div>
                <h3 className="font-poppins text-lg font-bold text-[#2A1418] mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#722F37]" />
                  Key Contributions & Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.keyContributions.map((contrib, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#B7A89A]/40 hover:border-[#722F37] transition-colors shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#722F37] mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-[#3D2529]">{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Meta Info & Tools */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-white border border-[#B7A89A]/60 shadow-sm space-y-4">
                <h4 className="text-xs font-poppins font-bold uppercase text-[#722F37] tracking-wider">
                  Project Specs
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#553b40] block">Client / Context</span>
                    <span className="font-bold text-[#2A1418]">{project.clientOrContext}</span>
                  </div>
                  <div>
                    <span className="text-[#553b40] block">Timeline</span>
                    <span className="font-bold text-[#2A1418]">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-[#553b40] block">My Role</span>
                    <span className="font-bold text-[#2A1418]">{project.role}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#B7A89A]/30">
                  <span className="text-[#553b40] text-xs block mb-2 font-medium">Tools & Methods</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2.5 py-1 rounded bg-[#722F37]/10 text-[#722F37] font-semibold border border-[#722F37]/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#B7A89A]/30">
                  <span className="text-[#553b40] text-xs block mb-2 font-medium">Deliverables</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.map((del) => (
                      <span
                        key={del}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#E8DCC6] text-[#2A1418] border border-[#B7A89A]/50 font-medium"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Sandbox Section */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#B7A89A]/60 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-poppins uppercase tracking-wider text-[#722F37] font-bold flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" />
                  Interactive UX Sandbox
                </span>
                <h3 className="font-poppins text-lg font-bold text-[#2A1418] mt-1">
                  Test the Interactive UX Logic
                </h3>
              </div>
              <span className="text-xs text-[#722F37] bg-[#722F37]/10 px-3 py-1 rounded-full border border-[#722F37]/20 font-semibold">
                Live Prototype Simulator
              </span>
            </div>

            {/* Sandbox Case 1: IELTS Band Score Calculator */}
            {project.id === 'ielts-pte-platform' && (
              <div className="space-y-6">
                <p className="text-xs text-[#3D2529]">
                  Interactive simulation of the platform's Band Score Calculator module. Adjust section scores below:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {(['listening', 'reading', 'writing', 'speaking'] as const).map((sec) => (
                    <div key={sec} className="p-3.5 rounded-xl bg-[#F3ECE2] border border-[#B7A89A]/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs uppercase font-bold text-[#722F37]">{sec}</span>
                        <span className="text-sm font-poppins font-bold text-[#2A1418]">
                          {ieltsScores[sec].toFixed(1)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5.0"
                        max="9.0"
                        step="0.5"
                        value={ieltsScores[sec]}
                        onChange={(e) =>
                          setIeltsScores({ ...ieltsScores, [sec]: parseFloat(e.target.value) })
                        }
                        className="w-full accent-[#722F37] cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#722F37]/10 border border-[#722F37]/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#553b40] block font-medium">Computed Overall IELTS Band</span>
                    <span className="text-xs text-[#722F37] font-semibold">CEFR C1 Level Benchmark</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#722F37] font-bold">Predicted Band:</span>
                    <span className="font-poppins text-3xl font-black text-[#722F37]">
                      {overallBand}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Sandbox Case 2: Movie Seat Picker */}
            {project.id === 'movie-ticket-app' && (
              <div className="space-y-4">
                <p className="text-xs text-[#3D2529]">
                  Experience the curved theater seat selection micro-interaction. Tap seats to select:
                </p>

                <div className="p-5 rounded-xl bg-[#F3ECE2] border border-[#B7A89A]/60 flex flex-col items-center">
                  <div className="w-3/4 h-2 bg-[#722F37] rounded-full mb-1 shadow-sm" />
                  <span className="text-[10px] text-[#722F37] uppercase tracking-wider font-bold mb-6">Screen</span>

                  <div className="grid grid-cols-8 gap-2 sm:gap-2.5 max-w-sm">
                    {Array.from({ length: 32 }, (_, i) => {
                      const isTaken = [3, 4, 11, 20, 21].includes(i);
                      const isSelected = selectedSeats.includes(i);
                      return (
                        <button
                          key={i}
                          disabled={isTaken}
                          onClick={() => toggleSeat(i)}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[10px] font-poppins font-bold transition-all ${
                            isTaken
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : isSelected
                              ? 'bg-[#722F37] text-white shadow-md'
                              : 'bg-white text-[#2A1418] hover:bg-[#722F37]/20 border border-[#B7A89A]/50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex items-center justify-between w-full pt-4 border-t border-[#B7A89A]/40 text-xs">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1.5 text-[#553b40]">
                        <span className="w-2.5 h-2.5 rounded bg-white border border-[#B7A89A] inline-block" /> Available
                      </span>
                      <span className="flex items-center gap-1.5 text-[#722F37] font-semibold">
                        <span className="w-2.5 h-2.5 rounded bg-[#722F37] inline-block" /> Selected ({selectedSeats.length})
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#553b40] mr-2">Total:</span>
                      <span className="font-bold text-[#722F37]">
                        NPR {(selectedSeats.length * 450).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sandbox Case 3: Hospital Management System Department Filter */}
            {project.id === 'hms-portal' && (
              <div className="space-y-4">
                <p className="text-xs text-[#3D2529]">
                  Simulate outpatient queue triage by filtering clinical specialist rosters:
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All Departments' },
                    { id: 'cardiology', label: 'Cardiology (3 on duty)' },
                    { id: 'pediatrics', label: 'Pediatrics (2 on duty)' },
                    { id: 'general', label: 'General Surgery (4 on duty)' }
                  ].map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setHmsDepartment(dept.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        hmsDepartment === dept.id
                          ? 'bg-[#722F37] text-white'
                          : 'bg-[#F3ECE2] text-[#2A1418] border border-[#B7A89A]/50 hover:bg-white'
                      }`}
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#F3ECE2] border border-[#B7A89A]/50">
                    <span className="text-[10px] text-emerald-700 font-bold uppercase">Active Vitals Alert</span>
                    <h5 className="text-xs font-bold text-[#2A1418] mt-1">Patient #EHR-9042</h5>
                    <p className="text-[11px] text-[#553b40] mt-0.5">SpO2: 98% | BP: 120/80 | Normal</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F3ECE2] border border-[#B7A89A]/50">
                    <span className="text-[10px] text-amber-700 font-bold uppercase">Pending Roster Handover</span>
                    <h5 className="text-xs font-bold text-[#2A1418] mt-1">Dr. S. Koirala (Cardiology)</h5>
                    <p className="text-[11px] text-[#553b40] mt-0.5">Shift: 08:00 - 16:00 | OPD Room 3</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F3ECE2] border border-[#B7A89A]/50">
                    <span className="text-[10px] text-[#722F37] font-bold uppercase">Pharmacy Billing Sync</span>
                    <h5 className="text-xs font-bold text-[#2A1418] mt-1">Prescription Rx-1108</h5>
                    <p className="text-[11px] text-[#553b40] mt-0.5">Drug interaction check: Passed</p>
                  </div>
                </div>
              </div>
            )}

            {/* Sandbox Case 4: Bhattarai Furniture Customizer */}
            {project.id === 'furniture-ecommerce' && (
              <div className="space-y-4">
                <p className="text-xs text-[#3D2529]">
                  Test the furniture finish customizer and dynamic material selector:
                </p>

                <div className="p-4 rounded-xl bg-[#F3ECE2] border border-[#B7A89A]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#553b40] font-medium">Wood Finish:</span>
                    {(['oak', 'walnut', 'sand'] as const).map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setFurnitureMaterial(mat)}
                        className={`px-3 py-1 rounded-lg text-xs capitalize font-bold transition-all ${
                          furnitureMaterial === mat
                            ? 'bg-[#722F37] text-white shadow'
                            : 'bg-white text-[#2A1418] border border-[#B7A89A]/50'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-[#553b40] mr-2">Configured Price:</span>
                    <span className="font-poppins text-lg font-extrabold text-[#722F37]">
                      {furnitureMaterial === 'walnut' ? '$749' : furnitureMaterial === 'sand' ? '$689' : '$699'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Sandbox Case 5: Brew Haven Coffee Brew Guide */}
            {project.id === 'brew-haven-coffee' && (
              <div className="space-y-4">
                <p className="text-xs text-[#3D2529]">
                  Interact with the pour-over brewing recipe guide:
                </p>

                <div className="flex gap-2">
                  {(['v60', 'chemex', 'aeropress'] as const).map((method) => (
                    <button
                      key={method}
                      onClick={() => setSelectedBrew(method)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs uppercase font-bold transition-all ${
                        selectedBrew === method
                          ? 'bg-[#722F37] text-white'
                          : 'bg-white text-[#2A1418] border border-[#B7A89A]/50'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#F3ECE2] border border-[#B7A89A]/50 grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <span className="text-[#553b40] block font-medium">Coffee Ratio</span>
                    <span className="font-bold text-[#722F37]">
                      {selectedBrew === 'v60' ? '1:15 (15g / 225ml)' : selectedBrew === 'chemex' ? '1:16 (30g / 480ml)' : '1:13 (18g / 234ml)'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#553b40] block font-medium">Grind Profile</span>
                    <span className="font-bold text-[#2A1418]">
                      {selectedBrew === 'v60' ? 'Medium-Fine' : selectedBrew === 'chemex' ? 'Medium-Coarse' : 'Fine-Medium'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#553b40] block font-medium">Brew Time</span>
                    <span className="font-bold text-[#722F37]">
                      {selectedBrew === 'v60' ? '2m 45s' : selectedBrew === 'chemex' ? '4m 00s' : '1m 30s'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="pt-4 border-t border-[#B7A89A]/40 flex items-center justify-between">
            <span className="text-xs text-[#553b40] font-medium">
              Designed with Figma & Research Methodologies
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold rounded-xl bg-[#722F37] text-white hover:bg-[#5a252c] transition-colors shadow-md"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
