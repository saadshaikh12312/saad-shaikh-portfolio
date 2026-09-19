import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Server, Layers, Layout, Code2, MapPin } from 'lucide-react';

export default function About() {
  const cards = [
    {
      number: "01",
      title: "Java Backend",
      desc: "Building structured REST APIs and services with Java, Spring Boot, and MySQL.",
      icon: Server
    },
    {
      number: "02",
      title: "MERN Stack",
      desc: "Developing dynamic full-stack applications with MongoDB, Express.js, React, and Node.js.",
      icon: Layers
    },
    {
      number: "03",
      title: "Frontend UI",
      desc: "Crafting clean, responsive interfaces with React, HTML5, CSS3, Tailwind, and Bootstrap.",
      icon: Layout
    },
    {
      number: "04",
      title: "Core CS",
      desc: "Applying Data Structures & Algorithms, OOP principles, DBMS normalization, and clean MVC workflows.",
      icon: Code2
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial 2-Column Format */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Label + Headline & Focus (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                <span>ABOUT ME</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-sans">
                {personalInfo.aboutHeadline}
              </h2>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#11151c] border border-white/[0.07] space-y-1.5">
                <span className="text-[10px] font-mono text-terracotta-400 uppercase tracking-wider block font-semibold">
                  DUAL-STACK SPECIALIZATION
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Bridging dependable <span className="text-white font-medium">Java & Spring Boot</span> backend services with dynamic <span className="text-white font-medium">MERN Stack</span> full-stack web applications.
                </p>
              </div>

              <div className="pt-0.5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151c] border border-white/[0.07] text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + 4 Capability Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-3 text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base font-sans">
              {personalInfo.aboutNarrative.map((paragraph, index) => (
                <p key={index} className="text-slate-300/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 4 Capability Cards Grid (2x2) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {cards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 sm:p-4.5 rounded-xl bg-[#11151c] border border-white/[0.07] hover:border-white/[0.15] hover:bg-[#131922] transition-all duration-180 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-slate-500 font-bold">
                          {card.number}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center group-hover:border-terracotta-500/40 transition-colors">
                          <IconComponent className="w-3.5 h-3.5 text-terracotta-400" />
                        </div>
                      </div>

                      <h3 className="text-sm font-semibold text-white mb-1 font-sans">
                        {card.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}