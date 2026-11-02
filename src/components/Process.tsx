import { useState } from 'react';
import { Compass, Check, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, ProcessStep } from '../data/portfolioData';

export function Process() {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const currentStep: ProcessStep = PROCESS_STEPS[selectedStepIndex];

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 bg-[#F3ECE2] text-[#2A1418] border-t border-[#B7A89A]/40 overflow-hidden font-poppins"
    >
      {/* Background radial lights */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#722F37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#B7A89A]/40">
          <div>
            <span className="text-xs font-poppins uppercase tracking-widest text-[#722F37] font-bold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              05 // Methodology & Workflow
            </span>
            <h2 className="font-poppins text-3xl sm:text-5xl font-extrabold text-[#2A1418] mt-2 tracking-tight">
              My Design Process
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#553b40] font-medium max-w-sm">
            From ambiguity to pixel-perfect, scalable digital systems.
          </p>
        </div>

        {/* Stepper Timeline Navigation */}
        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#B7A89A]/40 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#722F37] text-white border-[#722F37] shadow-lg shadow-[#722F37]/25 scale-102'
                      : 'bg-white/70 text-[#2A1418] border-[#B7A89A]/60 hover:border-[#722F37] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-poppins font-bold text-xs ${
                        isSelected ? 'bg-white text-[#722F37]' : 'bg-[#E8DCC6] text-[#722F37]'
                      }`}
                    >
                      {step.number}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>

                  <div>
                    <h4
                      className={`text-xs font-bold font-poppins ${
                        isSelected ? 'text-white' : 'text-[#2A1418]'
                      }`}
                    >
                      {step.phase.split('. ')[1]}
                    </h4>
                    <span
                      className={`text-[10px] block line-clamp-1 mt-0.5 ${
                        isSelected ? 'text-[#E8DCC6]' : 'text-[#553b40]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-3xl bg-white/90 border border-[#B7A89A]/60 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Phase narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#722F37]/10 text-[#722F37] border border-[#722F37]/20 text-xs font-poppins font-semibold">
                <span>Phase {currentStep.number} of 7</span>
                <span>•</span>
                <span>{currentStep.phase}</span>
              </div>

              <h3 className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#2A1418]">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-[#3D2529] leading-relaxed font-normal">
                {currentStep.longDesc}
              </p>

              {/* Methodologies */}
              <div className="pt-4">
                <span className="text-xs font-poppins uppercase tracking-wider text-[#722F37] font-bold block mb-2">
                  Applied Methodologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.methodologies.map((m) => (
                    <span
                      key={m}
                      className="text-xs px-3 py-1 rounded-lg bg-[#E8DCC6] text-[#2A1418] border border-[#B7A89A]/40 font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Deliverables & Tools */}
            <div className="lg:col-span-5 space-y-5 p-5 sm:p-6 rounded-2xl bg-[#F3ECE2] border border-[#B7A89A]/50">
              <div>
                <span className="text-xs font-poppins uppercase tracking-wider text-[#722F37] font-bold block mb-3">
                  Key Artifacts & Deliverables
                </span>
                <div className="space-y-2">
                  {currentStep.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2 text-xs text-[#2A1418]">
                      <Check className="w-3.5 h-3.5 text-[#722F37] shrink-0 font-bold" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#B7A89A]/30">
                <span className="text-xs font-poppins uppercase tracking-wider text-[#722F37] font-bold block mb-2">
                  Tools Used
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentStep.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-poppins px-2.5 py-1 rounded bg-[#722F37]/10 text-[#722F37] font-semibold border border-[#722F37]/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stepper Navigation Footer */}
          <div className="mt-8 pt-6 border-t border-[#B7A89A]/30 flex items-center justify-between">
            <button
              disabled={selectedStepIndex === 0}
              onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
              className={`text-xs font-poppins font-semibold px-4 py-2 rounded-lg border transition-colors ${
                selectedStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-[#B7A89A]/30 text-gray-400'
                  : 'border-[#B7A89A] text-[#2A1418] hover:bg-[#E8DCC6]'
              }`}
            >
              Previous Phase
            </button>

            <span className="text-xs text-[#722F37] font-bold">
              {selectedStepIndex + 1} / 7
            </span>

            <button
              disabled={selectedStepIndex === PROCESS_STEPS.length - 1}
              onClick={() =>
                setSelectedStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))
              }
              className={`text-xs font-poppins font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                selectedStepIndex === PROCESS_STEPS.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-400'
                  : 'bg-[#722F37] text-white hover:bg-[#5a252c]'
              }`}
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
