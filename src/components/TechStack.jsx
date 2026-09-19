import React from 'react';
import { techStackCategories } from '../data/portfolioData';
import { Server, Layers, Layout, Database, Wrench, ShieldCheck } from 'lucide-react';

export default function TechStack() {
  const getCategoryIcon = (index) => {
    switch (index) {
      case '01': return Server;
      case '02': return Layers;
      case '03': return Layout;
      case '04': return Database;
      case '05': return Wrench;
      case '06': return ShieldCheck;
      default: return Server;
    }
  };

  return (
    <section id="stack" className="py-24 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
            <span>FULL-STACK TOOLING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Full-Stack Tech Stack
          </h2>

          <p className="text-base text-slate-400 font-sans">
            The technologies I use across backend, frontend, databases, and development workflows.
          </p>
        </div>

        {/* 6-Card Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.index);
            const isHighlighted = cat.index === '01' || cat.index === '02';

            return (
              <div
                key={cat.index}
                className={`p-6 rounded-2xl bg-[#11151c] border transition-all duration-200 group flex flex-col justify-between ${
                  isHighlighted 
                    ? 'border-white/[0.12] hover:border-terracotta-500/40 hover:bg-[#131922]' 
                    : 'border-white/[0.07] hover:border-white/[0.18] hover:bg-[#131922]'
                }`}
              >
                <div>
                  {/* Top Bar: Index, Badge & Category Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-400 font-bold px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                        {cat.index}
                      </span>
                      <span className="font-mono text-[10px] text-terracotta-400 px-2 py-0.5 rounded bg-terracotta-500/10 border border-terracotta-500/20 font-medium">
                        {cat.badge}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center group-hover:border-terracotta-500/40 transition-colors">
                      <Icon className="w-4 h-4 text-terracotta-400" />
                    </div>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 font-sans">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skill Badges / Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                          isHighlighted
                            ? 'bg-white/[0.06] text-slate-100 border border-white/[0.12] group-hover:border-terracotta-500/30'
                            : 'bg-white/[0.03] text-slate-300 border border-white/[0.07]'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500/80" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PRACTICAL WORKFLOW</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-300">{cat.skills.length} Skills</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}