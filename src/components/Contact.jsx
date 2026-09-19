import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Check, Copy, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Invitation & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans leading-tight">
                Let's build something useful.
              </h2>

              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                If you are looking for a developer who enjoys working across frontend, backend, APIs, databases, and full-stack applications, let's connect.
              </p>
            </div>

            {/* Quick Contact & Info Cards */}
            <div className="space-y-2.5 pt-0.5">
              {/* Email Card with Copy Action */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#11151c] border border-white/[0.08] flex items-center justify-between group hover:border-white/[0.15] transition-all duration-180">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-terracotta-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">DIRECT EMAIL</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-mono text-white font-medium hover:text-terracotta-400 transition-colors truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 sm:p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.06] transition-all cursor-pointer shrink-0 ml-2"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#11151c] border border-white/[0.08] flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-terracotta-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">LOCATION</span>
                  <span className="text-xs sm:text-sm font-sans text-white font-medium">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Resume Card */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#11151c] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-terracotta-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">RESUME</span>
                    <span className="text-xs sm:text-sm font-sans text-white font-medium">
                      Saad_Shaikh_Resume.pdf
                    </span>
                  </div>
                </div>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-xs font-mono text-terracotta-400 hover:text-white border border-white/[0.08] btn-interactive"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Direct Social Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-mono font-semibold btn-interactive shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#11151c] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-white/[0.2] btn-interactive"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#11151c] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-white/[0.2] btn-interactive"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-2xl bg-[#11151c] border border-white/[0.08] shadow-xl relative">
              
              {isSubmitted ? (
                <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-sm">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* Your Name */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-mono text-slate-300 font-medium">
                        YOUR NAME <span className="text-terracotta-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Henderson"
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0a0e14] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all font-sans"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-mono text-slate-300 font-medium">
                        EMAIL ADDRESS <span className="text-terracotta-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0a0e14] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all font-sans"
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-300 font-medium">
                      MESSAGE <span className="text-terracotta-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Saad, I came across your portfolio and would like to discuss..."
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0a0e14] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-50 text-white text-xs font-mono font-bold tracking-wider uppercase btn-interactive shadow-md hover:shadow-[0_0_18px_rgba(240,83,53,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <span>Send Message →</span>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}