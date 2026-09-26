import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-12 space-y-1.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
            <span>WORK EXPERIENCE</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Professional Experience
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans">
            Practical experience mentoring students, debugging Java codebases, and clarifying core algorithmic concepts.
          </p>
        </div>

        {/* Compact Experience Card */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-7 rounded-2xl bg-[#11151c] border border-[#202833] hover:border-terracotta-500/40 hover:bg-[#131822] transition-all duration-180 relative group"
            >
              {/* Header: Role, Company, Duration & Location */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3 sm:pb-3.5 mb-3 sm:mb-3.5 border-b border-white/[0.06]">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-terracotta-500/40 transition-colors">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terracotta-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white font-sans flex flex-wrap items-center gap-1.5">
                      <span>{exp.role}</span>
                      {exp.type && <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 font-normal px-2 py-0.5 rounded bg-[#080c12] border border-[#202833]">({exp.type})</span>}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-terracotta-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs font-mono text-slate-300 self-start sm:self-auto">
                  <span className="flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#080c12] border border-[#202833] text-slate-200 font-medium">
                    <Calendar className="w-3 h-3 text-terracotta-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#080c12] border border-[#202833] text-slate-300">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-3 sm:mb-4">
                {exp.description}
              </p>

              {/* Core Areas */}
              <div className="pt-2 sm:pt-3 border-t border-white/[0.04] flex flex-wrap items-center gap-1 sm:gap-1.5">
                <span className="text-[9.5px] sm:text-[10px] font-mono text-slate-400 mr-1 uppercase tracking-wider font-semibold">
                  CORE FOCUS:
                </span>
                {exp.coreAreas.map((area, aIdx) => (
                  <span
                    key={aIdx}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#080c12] border border-[#202833] text-[10.5px] sm:text-xs font-mono text-slate-300 hover:border-terracotta-500/40 hover:text-white transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}