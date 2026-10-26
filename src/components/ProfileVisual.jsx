import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ProfileVisual() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto flex flex-col items-center select-none">
      
      {/* Main Composition Frame */}
      <div className="relative w-full flex items-center justify-center py-4">
        
        {/* Subtle, restrained single orbit line around portrait */}
        <div 
          className="absolute w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] lg:w-[360px] lg:h-[360px] rounded-full border border-[#283342]/60 pointer-events-none" 
          aria-hidden="true"
        />

        {/* Floating Technology Badges with their native colors & compact dark cards */}
        {/* 1. Java Tag (Top Left) */}
        <div 
          className="absolute top-1 sm:top-2 left-0 sm:left-1 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151D28] border border-[#283342] text-[11px] sm:text-xs font-mono font-medium text-[#F5F7FA] shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#EA2D2E]" />
          <span>Java</span>
        </div>

        {/* 2. React Tag (Top Right) */}
        <div 
          className="absolute top-2 sm:top-4 right-0 sm:right-1 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151D28] border border-[#283342] text-[11px] sm:text-xs font-mono font-medium text-[#F5F7FA] shadow-md" 
        >
          <span className="w-2 h-2 rounded-full bg-[#00D8FE]" />
          <span>React</span>
        </div>

        {/* 3. Node.js Tag (Bottom Left) */}
        <div 
          className="absolute bottom-4 sm:bottom-6 left-0 sm:left-1 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151D28] border border-[#283342] text-[11px] sm:text-xs font-mono font-medium text-[#F5F7FA] shadow-md" 
        >
          <span className="w-2 h-2 rounded-full bg-[#5FA04E]" />
          <span>Node.js</span>
        </div>

        {/* 4. MongoDB Tag (Bottom Right) */}
        <div 
          className="absolute bottom-4 sm:bottom-6 right-0 sm:right-1 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151D28] border border-[#283342] text-[11px] sm:text-xs font-mono font-medium text-[#F5F7FA] shadow-md" 
        >
          <span className="w-2 h-2 rounded-full bg-[#00ED64]" />
          <span>MongoDB</span>
        </div>

        {/* Circular Profile Photo:
            - Desktop: ~330-360px square
            - Tablet: scaled down proportionally
            - Mobile: ~210-240px
            - Thin, soft peach-orange border (~3.5px solid #FFB58F)
            - No multiple rings or heavy glowing effects
        */}
        <div className="relative w-[210px] h-[210px] sm:w-[270px] sm:h-[270px] lg:w-[320px] lg:h-[320px] xl:w-[340px] xl:h-[340px] shrink-0 rounded-full border-[3.5px] border-[#FFB58F] bg-[#111823] p-[2px] shadow-sm flex items-center justify-center">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#111823]">
            <picture className="w-full h-full block rounded-full overflow-hidden">
              <source 
                srcSet={`${personalInfo.profilePhotoMobile} 400w, ${personalInfo.profilePhoto} 800w`} 
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 270px, 340px"
                type="image/webp" 
              />
              <img 
                src={personalInfo.profilePhotoFallback} 
                alt="Saad Shaikh, Full-Stack Developer" 
                width="360" 
                height="360" 
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </picture>
          </div>
        </div>

      </div>

      {/* Compact Profile Information Card below portrait */}
      <div className="w-full max-w-[310px] sm:max-w-[330px] px-4 py-3 rounded-2xl bg-[#151D28] border border-[#283342] flex items-center justify-between gap-3 shadow-sm mt-3">
        <div>
          <div className="text-sm font-semibold text-[#F5F7FA] font-sans">
            {personalInfo.name}
          </div>
          <div className="text-xs text-[#AAB6C6] font-mono mt-0.5">
            Full-Stack Developer
          </div>
          <div className="text-[11px] text-[#AAB6C6]/80 font-mono">
            Pune, Maharashtra
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[11px] font-mono text-[#10b981] shrink-0 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          <span>Available</span>
        </div>
      </div>

    </div>
  );
}
