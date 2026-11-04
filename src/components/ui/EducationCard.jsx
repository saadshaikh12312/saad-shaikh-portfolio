import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function EducationCard({ edu }) {
  return (
    <div
      className={`p-4 sm:p-6 rounded-2xl bg-[#11151c] border transition-all duration-180 flex flex-col justify-between relative group ${
        edu.isPrimary
          ? 'border-[#202833] hover:border-terracotta-500/40 hover:bg-[#141924]'
          : 'border-[#202833] hover:border-white/[0.18] hover:bg-[#131822]'
      }`}
    >
      <div>
        {/* Card Top Row: Degree & Duration */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-2.5 sm:pb-3.5 mb-2.5 sm:mb-3.5 border-b border-white/[0.06]">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-terracotta-500/40 transition-colors">
              {edu.isPrimary ? (
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terracotta-400" />
              ) : (
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              )}
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-white font-sans leading-tight">
                {edu.degree}
              </h3>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                {edu.college}
              </div>
              {edu.university && (
                <div className="text-[11px] sm:text-xs text-slate-400 font-sans mt-0.5">
                  {edu.university}
                </div>
              )}
            </div>
          </div>

          <span className="inline-flex items-center gap-1 sm:gap-1.5 self-start px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#080c12] border border-[#202833] text-[10.5px] sm:text-[11px] font-mono text-terracotta-400 shrink-0 font-medium">
            <Calendar className="w-3 h-3 text-slate-400" />
            {edu.duration}
          </span>
        </div>

        {/* Location Meta */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-slate-300 mb-3 sm:mb-4">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>{edu.location}</span>
        </div>
      </div>

      {/* Performance Metrics Pills */}
      <div className="pt-2 sm:pt-2.5 border-t border-white/[0.04] flex flex-wrap items-center gap-2 sm:gap-2.5">
        {edu.isPrimary ? (
          <>
            <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#080c12] border border-[#202833] flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-base sm:text-xl font-bold font-mono text-white tracking-tight">
                {edu.overallCgpa}
              </span>
              <span className="text-[9.5px] sm:text-[11px] font-mono text-terracotta-400 font-semibold uppercase">
                Overall CGPA
              </span>
            </div>

            <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#080c12] border border-[#202833] flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-base sm:text-xl font-bold font-mono text-white tracking-tight">
                {edu.principalCgpa}
              </span>
              <span className="text-[9.5px] sm:text-[11px] font-mono text-amber-400 font-semibold uppercase">
                Principal CGPA
              </span>
            </div>
          </>
        ) : (
          <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#080c12] border border-[#202833] flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-base sm:text-xl font-bold font-mono text-white tracking-tight">
              {edu.percentage}
            </span>
            <span className="text-[9.5px] sm:text-[11px] font-mono text-slate-300 font-semibold uppercase">
              Percentage
            </span>
          </div>
        )}
      </div>

    </div>
  );
}
