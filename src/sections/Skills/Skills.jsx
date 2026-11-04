import React, { useState } from 'react';
import { skillsCategories } from '../../data/skills';
import Container from '../../components/layout/Container';
import SectionWrapper from '../../components/layout/SectionWrapper';
import SectionHeading from '../../components/common/SectionHeading';
import SkillCard from '../../components/ui/SkillCard';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === activeFilter);

  const totalSkillsCount = skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <SectionWrapper id="skills">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3.5 sm:gap-6">
          <SectionHeading
            eyebrow="SKILLS & TECHNOLOGIES"
            title="Technical Stack & Foundation"
            description="Organized technical proficiencies across frontend, backend, databases, developer tooling, and core computer science fundamentals."
            className="max-w-2xl"
          />

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#11151c] border border-[#202833] overflow-x-auto no-scrollbar max-w-full w-full sm:w-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono whitespace-nowrap transition-all duration-180 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-terracotta-500 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
              type="button"
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
                type="button"
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid (1-col on mobile, 2-col on tablet, 3-col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredCategories.map((cat, idx) => (
            <SkillCard
              key={cat.category}
              category={cat.category}
              skills={cat.skills}
              index={idx}
            />
          ))}
        </div>

      </Container>
    </SectionWrapper>
  );
}
