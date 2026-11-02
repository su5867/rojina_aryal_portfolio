import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, FileText, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export function Contact({ onOpenResume }: ContactProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#F3ECE2] text-[#2A1418] border-t border-[#B7A89A]/40 overflow-hidden font-poppins"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#722F37]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B7A89A]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-poppins uppercase tracking-widest text-[#722F37] font-bold inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B7A89A]/60 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#722F37]" />
            07 // Get In Touch
          </span>
          <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2A1418] tracking-tight leading-tight">
            Have a project in mind?{' '}
            <span className="text-[#722F37]">Let's create something meaningful together.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#553b40] font-normal max-w-xl mx-auto">
            Available for full-time product design roles, contract design systems, and freelance software client solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#B7A89A]/60 shadow-xl space-y-6">
              <h3 className="font-poppins text-xl font-bold text-[#2A1418]">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email Item */}
                <div className="p-3.5 rounded-2xl bg-[#E8DCC6]/60 border border-[#B7A89A]/50 flex items-center justify-between group hover:border-[#722F37] transition-all">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-[#722F37]/10 text-[#722F37]">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] text-[#722F37] font-bold uppercase block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="font-semibold text-[#2A1418] hover:text-[#722F37] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-white hover:bg-[#E8DCC6] text-[#2A1418] transition-colors border border-[#B7A89A]/40"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-600 font-bold" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#722F37]" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-2xl bg-[#E8DCC6]/60 border border-[#B7A89A]/50 flex items-center justify-between group hover:border-[#722F37] transition-all">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-[#722F37]/10 text-[#722F37]">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] text-[#722F37] font-bold uppercase block">
                        Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                        className="font-semibold text-[#2A1418] hover:text-[#722F37] transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-white hover:bg-[#E8DCC6] text-[#2A1418] transition-colors border border-[#B7A89A]/40"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-600 font-bold" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#722F37]" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-2xl bg-[#E8DCC6]/60 border border-[#B7A89A]/50 flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-[#722F37]/10 text-[#722F37]">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] text-[#722F37] font-bold uppercase block">
                      Location
                    </span>
                    <span className="font-semibold text-[#2A1418]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="p-3.5 rounded-2xl bg-[#E8DCC6]/60 border border-[#B7A89A]/50 flex items-center justify-between group hover:border-[#722F37] transition-all">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-[#722F37]/10 text-[#722F37]">
                      <Linkedin className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] text-[#722F37] font-bold uppercase block">
                        LinkedIn Profile
                      </span>
                      <a
                        href={PERSONAL_INFO.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-[#2A1418] hover:text-[#722F37] transition-colors"
                      >
                        {PERSONAL_INFO.linkedin}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white hover:bg-[#E8DCC6] text-[#722F37] transition-colors border border-[#B7A89A]/40"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Action Buttons: Email Directly & Download CV */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#722F37] text-white text-xs font-poppins font-bold hover:bg-[#5a252c] transition-colors shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#722F37] border border-[#B7A89A] text-xs font-poppins font-semibold hover:border-[#722F37] transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#722F37]" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white/90 border border-[#B7A89A]/60 shadow-xl relative">
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-[#2A1418] mb-2 flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#722F37]" />
                Send a Message
              </h3>
              <p className="text-xs text-[#553b40] mb-6">
                Fill in the details below to initiate a discussion or request a design consultation.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-3">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you, {formState.name}! Your default email client was opened to complete dispatching your message to {PERSONAL_INFO.email}.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-[#553b40] block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#E8DCC6]/40 border border-[#B7A89A]/60 text-[#2A1418] placeholder-gray-500 text-xs focus:outline-none focus:border-[#722F37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-[#553b40] block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#E8DCC6]/40 border border-[#B7A89A]/60 text-[#2A1418] placeholder-gray-500 text-xs focus:outline-none focus:border-[#722F37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-[#553b40] block mb-1.5">
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Healthcare App Redesign / UI/UX Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-[#E8DCC6]/40 border border-[#B7A89A]/60 text-[#2A1418] placeholder-gray-500 text-xs focus:outline-none focus:border-[#722F37] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-[#553b40] block mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your product vision, timeline, or design requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#E8DCC6]/40 border border-[#B7A89A]/60 text-[#2A1418] placeholder-gray-500 text-xs focus:outline-none focus:border-[#722F37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#722F37] text-white text-xs font-poppins font-bold uppercase tracking-wider hover:bg-[#5a252c] transition-all shadow-xl shadow-[#722F37]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message & Schedule Call</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
