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
    <section id="skills" className="py-14 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
              <span>SKILLS & TECHNOLOGIES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
              Technical Stack & Foundation
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-400 font-sans">
              Organized technical proficiencies across frontend, backend, databases, developer tooling, and core computer science fundamentals.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#11151c] border border-white/[0.07] self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-180 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-terracotta-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              All ({totalSkillsCount})
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveFilter(cat.category)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-180 cursor-pointer ${
                  activeFilter === cat.category
                    ? 'bg-terracotta-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = getCategoryIcon(cat.category);

            return (
              <div
                key={cat.category}
                className="p-5 sm:p-6 rounded-2xl bg-[#11151c] border border-white/[0.07] hover:border-white/[0.16] hover:bg-[#131922] transition-all duration-180 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/[0.05]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center group-hover:border-terracotta-500/40 transition-colors">
                        <IconComponent className="w-4 h-4 text-terracotta-400" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                        {cat.category}
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono bg-white/[0.03] text-slate-200 border border-white/[0.07] group-hover:border-white/[0.12] hover:border-terracotta-500/40 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500/80" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.skills.length} skills</span>
                  <span className="text-terracotta-400/80 font-medium">Verified Core</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}