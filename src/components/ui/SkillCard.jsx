import React from 'react';
import { Layout, Server, Database, Wrench, ShieldCheck, Code2 } from 'lucide-react';

export function getCategoryIcon(category) {
  switch (category) {
    case 'Frontend': return Layout;
    case 'Backend': return Server;
    case 'Databases': return Database;
    case 'Tools & Technologies': return Wrench;
    case 'Core Concepts': return ShieldCheck;
    default: return Code2;
  }
}

/**
 * Technical skill category card presenting categorized skills and counter.
 */
export default function SkillCard({ category, skills, index }) {
  const IconComponent = getCategoryIcon(category);

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-[#11151c] border border-[#202833] hover:border-terracotta-500/40 hover:bg-[#131922] transition-all duration-180 group flex flex-col justify-between">
      <div>
        {/* Category Card Header */}
        <div className="flex items-center justify-between mb-2.5 sm:mb-3.5 pb-2 sm:pb-2.5 border-b border-white/[0.05]">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center group-hover:border-terracotta-500/40 transition-colors">
              <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terracotta-400" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white font-sans">
              {category}
            </h3>
          </div>

          <span className="font-mono text-[11px] sm:text-xs text-slate-400">
            0{index + 1}
          </span>
        </div>

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
          {skills.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10.5px] sm:text-xs font-mono bg-[#080c12] text-slate-200 border border-[#202833] group-hover:border-white/[0.12] hover:border-terracotta-500/40 hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500/90" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2.5 sm:pt-3.5 mt-2.5 sm:mt-3.5 border-t border-white/[0.04] flex items-center justify-between text-[10.5px] sm:text-[11px] font-mono text-slate-400">
        <span>{skills.length} skills</span>
      </div>
    </div>
  );
}
