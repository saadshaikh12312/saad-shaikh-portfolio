import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
            <span>WORK EXPERIENCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Professional Experience
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 font-sans">
            Practical experience mentoring students, debugging Java codebases, and clarifying core algorithmic concepts.
          </p>
        </div>

        {/* Compact Experience Card */}
        <div className="max-w-4xl space-y-5">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl bg-[#11151c] border border-white/[0.08] hover:border-white/[0.16] hover:bg-[#131822] transition-all duration-180 relative group"
            >
              {/* Header: Role, Company, Duration & Location */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-terracotta-500/40 transition-colors">
                    <Briefcase className="w-4 h-4 text-terracotta-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-sans">
                      {exp.role}
                      {exp.type && <span className="text-[11px] font-mono text-slate-400 font-normal ml-2 px-2 py-0.5 rounded bg-white/[0.04]">({exp.type})</span>}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-terracotta-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 self-start sm:self-auto">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300 font-medium text-[11px]">
                    <Calendar className="w-3 h-3 text-terracotta-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px]">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                {exp.description}
              </p>

              {/* Core Areas */}
              <div className="pt-3 border-t border-white/[0.04] flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] font-mono text-slate-400 mr-1 uppercase tracking-wider font-semibold">
                  CORE FOCUS:
                </span>
                {exp.coreAreas.map((area, aIdx) => (
                  <span
                    key={aIdx}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[11px] sm:text-xs font-mono text-slate-300 hover:border-white/[0.15] transition-colors"
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