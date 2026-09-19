import React from 'react';
import { MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function DeveloperIllustration() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[440px] mx-auto group">
      
      {/* Subtle background ambient warmth */}
      <div className="absolute -top-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 bg-terracotta-500/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 bg-amber-500/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

      {/* Main Illustration Container */}
      <div className="rounded-2xl bg-[#11151c] border border-white/[0.08] shadow-xl overflow-hidden relative p-4 sm:p-6 md:p-7 flex flex-col items-center justify-between transition-all duration-200 group-hover:border-white/[0.15]">
        
        {/* Top Mini Header with Tech Tags */}
        <div className="w-full flex items-center justify-between pb-3 mb-1 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-1 text-[10px] sm:text-[11px] font-mono text-slate-400">workspace.dev</span>
          </div>

          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-terracotta-400 bg-terracotta-500/10 px-2 py-0.5 rounded border border-terracotta-500/20 font-semibold">
            <span>MERN + JAVA</span>
          </div>
        </div>

        {/* Stylized Modern Developer Vector Art */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3.1] my-1 flex items-center justify-center">
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f05335" />
                <stop offset="100%" stopColor="#c53117" />
              </linearGradient>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f05335" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f05335" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Ambient Background Circle */}
            <circle cx="200" cy="140" r="110" fill="url(#glowGrad)" />

            {/* Floating Tech Badges / Icons */}
            {/* Java Badge */}
            <g className="animate-pulse-subtle">
              <rect x="50" y="50" width="55" height="26" rx="8" fill="#151b24" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="77" y="67" fill="#f05335" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">JAVA</text>
            </g>

            {/* React Badge */}
            <g>
              <rect x="295" y="45" width="58" height="26" rx="8" fill="#151b24" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="324" y="62" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">REACT</text>
            </g>

            {/* Node.js Badge */}
            <g>
              <rect x="35" y="140" width="65" height="26" rx="8" fill="#151b24" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="67" y="157" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">NODE.JS</text>
            </g>

            {/* MongoDB Badge */}
            <g>
              <rect x="300" y="145" width="70" height="26" rx="8" fill="#151b24" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="335" y="162" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="monospace" textAnchor="middle">MONGODB</text>
            </g>

            {/* Desk Surface */}
            <rect x="40" y="240" width="320" height="12" rx="4" fill="#334155" />
            <rect x="45" y="252" width="310" height="4" fill="#1e293b" />

            {/* Coffee Mug */}
            <rect x="75" y="215" width="22" height="25" rx="3" fill="#e2e8f0" />
            <path d="M97 222 C 103 222, 103 233, 97 233" stroke="#e2e8f0" strokeWidth="3" fill="none" />
            {/* Steam */}
            <path d="M82 205 Q 85 200 82 195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
            <path d="M88 205 Q 91 200 88 195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

            {/* Laptop Base */}
            <rect x="145" y="235" width="110" height="6" rx="2" fill="#64748b" />
            
            {/* Laptop Screen Back / Glow */}
            <rect x="155" y="160" width="90" height="75" rx="4" fill="url(#screenGrad)" stroke="#475569" strokeWidth="2" />
            
            {/* Laptop Screen Content Lines (Code Glow) */}
            <rect x="165" y="172" width="35" height="3" rx="1.5" fill="#f05335" />
            <rect x="165" y="180" width="55" height="3" rx="1.5" fill="#38bdf8" />
            <rect x="175" y="188" width="45" height="3" rx="1.5" fill="#4ade80" />
            <rect x="175" y="196" width="50" height="3" rx="1.5" fill="#e2e8f0" />
            <rect x="165" y="204" width="30" height="3" rx="1.5" fill="#f59e0b" />
            <rect x="165" y="212" width="60" height="3" rx="1.5" fill="#a855f7" />

            {/* Developer Body / Silhouette in Warm Terracotta Hoodie */}
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
            <path d="M172 128 C 170 95, 230 95, 228 128" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
            <rect x="168" y="122" width="6" height="15" rx="3" fill="#f05335" />
            <rect x="226" y="122" width="6" height="15" rx="3" fill="#f05335" />

            {/* Hands on Keyboard */}
            <ellipse cx="180" cy="235" rx="12" ry="5" fill="#ffedd5" />
            <ellipse cx="220" cy="235" rx="12" ry="5" fill="#ffedd5" />
          </svg>
        </div>

        {/* Lower Summary Info Bar */}
        <div className="w-full pt-3 mt-1 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-terracotta-500/10 border border-terracotta-500/30 flex items-center justify-center font-bold text-terracotta-400 text-xs font-mono">
              SS
            </div>
            <div>
              <div className="text-xs font-semibold text-white font-sans">
                {personalInfo.name}
              </div>
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3 text-terracotta-400" />
                {personalInfo.location}
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[10px] font-mono text-emerald-300 self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{personalInfo.status}</span>
          </div>

        </div>

      </div>

    </div>
  );
}