import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Check, Copy, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import emailjs from '@emailjs/browser';

if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  try {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      limitRate: {
        id: 'portfolio-contact-form',
        throttle: 300000,
      },
    });
  } catch (err) {
    console.warn('EmailJS init warning:', err);
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || cooldown) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      );

      setIsSubmitted(true);
      setCooldown(true);

      setTimeout(() => {
        setCooldown(false);
      }, 300000);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">

          {/* Left Column: Direct Invitation & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans leading-tight">
                Let's build something useful.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                If you are looking for a developer who enjoys working across frontend, backend, APIs, databases, and full-stack applications, let's connect.
              </p>
            </div>

            {/* Quick Contact & Info Cards */}
            <div className="space-y-2 sm:space-y-2.5">
              {/* Email Card with Copy Action */}
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#11151c] border border-[#202833] flex items-center justify-between group hover:border-white/[0.18] transition-all duration-180">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-terracotta-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block uppercase">DIRECT EMAIL</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-mono text-white font-medium hover:text-terracotta-400 transition-colors truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 sm:p-2 rounded-lg bg-[#080c12] hover:bg-[#151c26] text-slate-300 hover:text-white border border-[#202833] hover:border-terracotta-500/40 transition-all cursor-pointer shrink-0 ml-2"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#11151c] border border-[#202833] flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#080c12] border border-[#202833] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-terracotta-400" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block uppercase">LOCATION</span>
                  <span className="text-xs sm:text-sm font-sans text-white font-medium">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Resume Card */}
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#11151c] border border-[#202833] flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#080c12] border border-[#202833] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-terracotta-400" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block uppercase">RESUME</span>
                    <span className="text-xs sm:text-sm font-sans text-white font-medium">
                      Saad_Shaikh_Resume.pdf
                    </span>
                  </div>
                </div>

                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.downloadResumeName}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 hover:text-white btn-gradient-border shrink-0 ml-2"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Direct Social Buttons */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-2.5 pt-0.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-mono font-semibold btn-interactive shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">Email</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#11151c] hover:bg-[#151c26] border border-[#202833] hover:border-terracotta-500/40 text-xs font-mono text-slate-200 hover:text-white btn-interactive"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span className="truncate">LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#11151c] hover:bg-[#151c26] border border-[#202833] hover:border-terracotta-500/40 text-xs font-mono text-slate-200 hover:text-white btn-interactive"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span className="truncate">GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-7 rounded-2xl bg-[#11151c] border border-[#202833] shadow-xl relative">

              {isSubmitted ? (
                <div className="py-8 sm:py-10 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-sm">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">

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
                        className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#080c12] border border-[#202833] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all font-sans"
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
                        className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#080c12] border border-[#202833] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all font-sans"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-300 font-medium">
                      SUBJECT <span className="text-terracotta-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Discussing a potential web development opportunity..."
                      className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#080c12] border border-[#202833] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all font-sans"
                    />
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
                      placeholder="Hi Saad, I came across your portfolio and I'm interested in discussing an opportunity..."
                      className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#080c12] border border-[#202833] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || cooldown}
                    className="w-full py-2.5 sm:py-3 px-5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-50 text-white text-xs font-mono font-bold tracking-wider uppercase btn-interactive shadow-md hover:shadow-[0_0_18px_rgba(240,83,53,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>SENDING MESSAGE...</span>
                    ) : cooldown ? (
                      <span>PLEASE WAIT...</span>
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