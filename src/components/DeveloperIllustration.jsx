import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function DeveloperIllustration() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] mx-auto flex flex-col items-center select-none">
      
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-terracotta-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Main Open Composition Frame */}
      <div className="relative w-full aspect-[4/3.4] flex items-center justify-center">
        
        {/* Subtle Architectural Orbit Ring */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border border-white/[0.05] pointer-events-none" />
        <div className="absolute inset-10 sm:inset-14 rounded-full border border-terracotta-500/[0.07] pointer-events-none" />

        {/* Floating Subtle Tech Badges */}
        {/* 1. Java Tag (Top Left) */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 px-2.5 py-1 rounded-lg bg-[#11161d]/90 border border-[#202833] text-[10px] sm:text-[11px] font-mono text-terracotta-400 font-semibold shadow-md animate-float-subtle">
          JAVA
        </div>

        {/* 2. React Tag (Top Right) */}
        <div className="absolute top-3 sm:top-6 right-2 sm:right-4 z-10 px-2.5 py-1 rounded-lg bg-[#11161d]/90 border border-[#202833] text-[10px] sm:text-[11px] font-mono text-[#38bdf8] font-semibold shadow-md animate-float-subtle" style={{ animationDelay: '1.2s' }}>
          REACT
        </div>

        {/* 3. Node.js Tag (Bottom Left) */}
        <div className="absolute bottom-6 sm:bottom-8 left-1 sm:left-2 z-10 px-2.5 py-1 rounded-lg bg-[#11161d]/90 border border-[#202833] text-[10px] sm:text-[11px] font-mono text-[#4ade80] font-semibold shadow-md animate-float-subtle" style={{ animationDelay: '2.4s' }}>
          NODE.JS
        </div>

        {/* 4. MongoDB Tag (Bottom Right) */}
        <div className="absolute bottom-6 sm:bottom-8 right-1 sm:right-2 z-10 px-2.5 py-1 rounded-lg bg-[#11161d]/90 border border-[#202833] text-[10px] sm:text-[11px] font-mono text-[#34d399] font-semibold shadow-md animate-float-subtle" style={{ animationDelay: '3.6s' }}>
          MONGODB
        </div>

        {/* Stylized Developer Vector Art */}
        <div className="relative w-[78%] h-[82%] flex items-center justify-center drop-shadow-lg">
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f05335" />
                <stop offset="100%" stopColor="#c53117" />
              </linearGradient>
              <linearGradient id="haloGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f05335" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#f05335" stopOpacity="0.01" />
              </linearGradient>
            </defs>

            {/* Ambient Background Disc */}
            <circle cx="200" cy="140" r="105" fill="url(#haloGrad)" />

            {/* Desk Surface */}
            <rect x="45" y="240" width="310" height="10" rx="3" fill="#334155" />
            <rect x="50" y="250" width="300" height="4" fill="#1e293b" />

            {/* Coffee Mug */}
            <rect x="75" y="215" width="22" height="25" rx="3" fill="#e2e8f0" />
            <path d="M97 222 C 103 222, 103 233, 97 233" stroke="#e2e8f0" strokeWidth="3" fill="none" />
            {/* Steam */}
            <path d="M82 205 Q 85 200 82 195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
            <path d="M88 205 Q 91 200 88 195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

            {/* Laptop Base */}
            <rect x="145" y="235" width="110" height="6" rx="2" fill="#64748b" />
            
            {/* Laptop Screen */}
            <rect x="155" y="160" width="90" height="75" rx="4" fill="url(#screenGrad)" stroke="#475569" strokeWidth="1.5" />
            
            {/* Code Glow Lines */}
            <rect x="165" y="172" width="35" height="3" rx="1.5" fill="#f05335" />
            <rect x="165" y="180" width="55" height="3" rx="1.5" fill="#38bdf8" />
            <rect x="175" y="188" width="45" height="3" rx="1.5" fill="#4ade80" />
            <rect x="175" y="196" width="50" height="3" rx="1.5" fill="#e2e8f0" />
            <rect x="165" y="204" width="30" height="3" rx="1.5" fill="#f59e0b" />
            <rect x="165" y="212" width="60" height="3" rx="1.5" fill="#a855f7" />

            {/* Developer Torso */}
            <path d="M140 240 L150 180 Q 200 165 250 180 L260 240 Z" fill="url(#hoodieGrad)" />
            
            {/* Head / Face */}
            <circle cx="200" cy="130" r="28" fill="#ffedd5" />
            
            {/* Modern Hair */}
            <path d="M174 130 C 172 105, 228 105, 226 130 C 220 110, 180 110, 174 130 Z" fill="#1e293b" />
            <path d="M172 125 C 168 115, 175 102, 190 98 C 210 94, 228 105, 228 120 C 222 105, 185 105, 172 125 Z" fill="#0f172a" />

            {/* Glasses */}
            <rect x="183" y="124" width="14" height="10" rx="3" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <rect x="203" y="124" width="14" height="10" rx="3" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="197" y1="128" x2="203" y2="128" stroke="#0f172a" strokeWidth="2" />

            {/* Smile */}
            <path d="M194 145 Q 200 150 206 145" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Headphones */}
            <path d="M172 128 C 170 95, 230 95, 228 128" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <rect x="168" y="122" width="6" height="15" rx="3" fill="#f05335" />
            <rect x="226" y="122" width="6" height="15" rx="3" fill="#f05335" />

            {/* Hands on Keyboard */}
            <ellipse cx="180" cy="235" rx="12" ry="5" fill="#ffedd5" />
            <ellipse cx="220" cy="235" rx="12" ry="5" fill="#ffedd5" />
          </svg>
        </div>

      </div>

      {/* Compact Status Block */}
      <div className="w-full max-w-[320px] px-4 py-2.5 rounded-xl bg-[#11161d] border border-[#202833] flex items-center justify-between gap-3 shadow-sm mt-1">
        <div>
          <div className="text-xs font-semibold text-white font-sans">
            {personalInfo.name}
          </div>
          <div className="text-[11px] text-slate-400 font-mono">
            {personalInfo.role} · Pune, Maharashtra
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 shrink-0 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available</span>
        </div>
      </div>

    </div>
  );
}