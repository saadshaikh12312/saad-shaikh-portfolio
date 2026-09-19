import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
            <span>BACKGROUND & CREDENTIALS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Education
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 font-sans">
            Verified academic foundation in computer science, software engineering principles, and core mathematics.
          </p>
        </div>

        {/* Compact Polished Academic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl bg-[#11151c] border transition-all duration-180 flex flex-col justify-between relative group ${
                edu.isPrimary
                  ? 'border-white/[0.1] hover:border-terracotta-500/40 hover:bg-[#141924]'
                  : 'border-white/[0.07] hover:border-white/[0.16] hover:bg-[#131822]'
              }`}
            >
              <div>
                {/* Card Top Row: Degree & Duration */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3.5 mb-3.5 border-b border-white/[0.06]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-terracotta-500/40 transition-colors">
                      {edu.isPrimary ? (
                        <GraduationCap className="w-4 h-4 text-terracotta-400" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-sans leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                        {edu.college}
                      </div>
                      {edu.university && (
                        <div className="text-xs text-slate-400 font-sans mt-0.5">
                          {edu.university}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-terracotta-400 shrink-0 font-medium">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {edu.duration}
                  </span>
                </div>

                {/* Location Meta */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Performance Metrics Pills */}
              <div className="pt-2.5 border-t border-white/[0.04] flex flex-wrap items-center gap-2.5">
                {edu.isPrimary ? (
                  <>
                    <div className="px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-baseline gap-2">
                      <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                        {edu.overallCgpa}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-terracotta-400 font-semibold uppercase">
                        Overall CGPA
                      </span>
                    </div>

                    <div className="px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-baseline gap-2">
                      <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                        {edu.principalCgpa}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-amber-400 font-semibold uppercase">
                        Principal CGPA
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-baseline gap-2">
                    <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                      {edu.percentage}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 font-semibold uppercase">
                      Percentage
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}