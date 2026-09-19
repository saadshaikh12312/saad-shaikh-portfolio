import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { LeetCodeIcon } from './Icons';
import { ArrowUpRight } from 'lucide-react';

export default function LeetCodeJourney() {
  const milestones = ['01', '25', '50', '75', '100'];

  return (
    <section id="dsa" className="py-14 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
            <span>PROBLEM SOLVING</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans mb-2">
            100 Days of LeetCode
          </h2>

          <p className="text-sm text-slate-400 font-sans max-w-2xl">
            A consistent practice journey focused on data structures, algorithms, and improving problem-solving skills.
          </p>
        </div>

        {/* Single Horizontal Premium Editorial Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#11151c] border border-white/[0.08] hover:border-white/[0.14] transition-all relative overflow-hidden">
          
          {/* Subtle top accent border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-terracotta-500/40 to-transparent" />

          {/* Main 3-Column Strip: Left (100 DAYS) | Center (Statement) | Right (Button) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            
            {/* Left: Large 100 DAYS Typography */}
            <div className="flex items-baseline gap-3 shrink-0">
              <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">
                100
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-terracotta-400 tracking-widest uppercase">
                  DAYS
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  CHALLENGE
                </span>
              </div>
            </div>

            {/* Center: Statement & Supporting Copy */}
            <div className="flex-1 lg:px-8 space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-white font-sans">
                Consistency over intensity.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                A daily commitment to improving problem-solving fundamentals through LeetCode.
              </p>
            </div>

            {/* Right: Secondary Outlined Action Button */}
            <div className="shrink-0">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.06] hover:border-terracotta-500/40 text-xs font-mono text-slate-200 hover:text-white transition-all group"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-terracotta-400" />
                <span>View LeetCode Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Bottom Row: Subtle Milestone Progression Strip + Personal Touch */}
          <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Subtle Horizontal Progression: 01 ───── 25 ───── 50 ───── 75 ───── 100 */}
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono text-slate-400">
              {milestones.map((m, idx) => (
                <React.Fragment key={m}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500/80" />
                    <span className="text-slate-300 font-medium">{m}</span>
                  </div>
                  {idx < milestones.length - 1 && (
                    <span className="text-slate-500 text-[10px]">─────────</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Subtle Personal Touch Line */}
            <div className="text-xs font-sans text-slate-400 italic">
              Learning by solving. Improving by consistency.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}