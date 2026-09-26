import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Layout, Server, Database, Wrench, ShieldCheck, Code2 } from 'lucide-react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend': return Layout;
      case 'Backend': return Server;
      case 'Databases': return Database;
      case 'Tools & Technologies': return Wrench;
      case 'Core Concepts': return ShieldCheck;
      default: return Code2;
    }
  };

  const filteredCategories = activeFilter === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === activeFilter);

  const totalSkillsCount = skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-10 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3.5 sm:gap-6">
          <div className="max-w-2xl space-y-1.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
              <span>SKILLS & TECHNOLOGIES</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
              Technical Stack & Foundation
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans">
              Organized technical proficiencies across frontend, backend, databases, developer tooling, and core computer science fundamentals.
            </p>
          </div>

          {/* Filter Bar (Scrollable on small mobile screens without page overflow) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#11151c] border border-[#202833] overflow-x-auto no-scrollbar max-w-full w-full sm:w-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono whitespace-nowrap transition-all duration-180 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-terracotta-500 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              All ({totalSkillsCount})
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveFilter(cat.category)}
                className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono whitespace-nowrap transition-all duration-180 cursor-pointer ${
                  activeFilter === cat.category
                    ? 'bg-terracotta-500 text-white font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid (1-col on mobile, 2-col on tablet, 3-col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = getCategoryIcon(cat.category);

            return (
              <div
                key={cat.category}
                className="p-4 sm:p-6 rounded-2xl bg-[#11151c] border border-[#202833] hover:border-terracotta-500/40 hover:bg-[#131922] transition-all duration-180 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3.5 pb-2 sm:pb-2.5 border-b border-white/[0.05]">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center group-hover:border-terracotta-500/40 transition-colors">
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terracotta-400" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                        {cat.category}
                      </h3>
                    </div>

                    <span className="font-mono text-[11px] sm:text-xs text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                    {cat.skills.map((skill, sIdx) => (
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
                  <span>{cat.skills.length} skills</span>
                  <span className="text-terracotta-400 font-medium">Verified Core</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}