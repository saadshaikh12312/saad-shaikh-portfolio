import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Server, Layout, Database, Layers, CheckCircle2 } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('java'); // 'java' | 'mern'

  return (
    <div className="relative w-full max-w-[470px] mx-auto lg:max-w-none">
      
      {/* Subtle back ambient glow */}
      <div className="absolute -top-6 -right-6 w-36 h-36 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-slate-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container Card */}
      <div className="rounded-2xl bg-[#11151c] border border-white/[0.08] shadow-2xl overflow-hidden relative">
        
        {/* Top Window Bar with Ecosystem Tabs */}
        <div className="px-4 py-3 bg-[#151a23] border-b border-white/[0.07] flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block" />
            <span className="hidden sm:inline-block ml-1 font-mono text-[11px] text-slate-400">
              fullstack-workspace
            </span>
          </div>

          {/* Interactive Dual-Stack Switcher */}
          <div className="flex items-center bg-[#0d1117] p-1 rounded-lg border border-white/[0.06] text-xs font-mono">
            <button
              onClick={() => setActiveTab('java')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === 'java'
                  ? 'bg-terracotta-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Java / Spring
            </button>
            <button
              onClick={() => setActiveTab('mern')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === 'mern'
                  ? 'bg-terracotta-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              MERN Stack
            </button>
          </div>

        </div>

        {/* Tab Content Display */}
        <div className="p-5 font-mono text-xs leading-relaxed min-h-[220px] flex flex-col justify-between">
          {activeTab === 'java' ? (
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 mb-2 border-b border-white/[0.05]">
                <span>// Java & Spring Boot API Architecture</span>
                <span className="text-terracotta-400">Java 17 / 21</span>
              </div>
              <div>
                <span className="text-terracotta-400">@RestController</span>
              </div>
              <div>
                <span className="text-terracotta-400">@RequestMapping</span>
                <span className="text-slate-300">(</span>
                <span className="text-emerald-400">"/api/v1/fullstack"</span>
                <span className="text-slate-300">)</span>
              </div>
              <div>
                <span className="text-purple-400">public class</span>{' '}
                <span className="text-amber-300">ApplicationService</span>{' '}
                <span className="text-slate-300">{'{'}</span>
              </div>
              <div className="pl-4 space-y-1 border-l border-white/[0.06] my-1">
                <div>
                  <span className="text-purple-400">private final</span>{' '}
                  <span className="text-sky-300">Database</span>{' '}
                  <span className="text-slate-200">mySQL</span>;
                </div>
                <div>
                  <span className="text-terracotta-400">@GetMapping</span>
                  <span className="text-slate-300">(</span>
                  <span className="text-emerald-400">"/capabilities"</span>
                  <span className="text-slate-300">)</span>
                </div>
                <div className="pl-3">
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-sky-300">List</span>
                  <span className="text-slate-300">.of(</span>
                  <span className="text-emerald-400">"Spring Boot"</span>,{' '}
                  <span className="text-emerald-400">"REST APIs"</span>,{' '}
                  <span className="text-emerald-400">"MySQL"</span>
                  <span className="text-slate-300">);</span>
                </div>
              </div>
              <div>
                <span className="text-slate-300">{'}'}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 mb-2 border-b border-white/[0.05]">
                <span>// MERN Stack Web Flow (Express + React)</span>
                <span className="text-sky-400">Node.js + React</span>
              </div>
              <div>
                <span className="text-purple-400">import</span>{' '}
                <span className="text-slate-200">express</span>{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-emerald-400">'express'</span>;
              </div>
              <div>
                <span className="text-purple-400">import</span>{' '}
                <span className="text-slate-200">mongoose</span>{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-emerald-400">'mongoose'</span>;
              </div>
              <div className="pt-1">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-amber-300">app</span>{' '}
                <span className="text-slate-400">=</span>{' '}
                <span className="text-sky-300">express</span>();
              </div>
              <div className="pl-4 space-y-1 border-l border-white/[0.06] my-1">
                <div>
                  <span className="text-amber-300">app</span>.
                  <span className="text-sky-300">use</span>(
                  <span className="text-emerald-400">'/api/mern'</span>,{' '}
                  <span className="text-slate-200">listingRouter</span>);
                </div>
                <div>
                  <span className="text-slate-400">// Connected to MongoDB Atlas & React Client</span>
                </div>
              </div>
              <div>
                <span className="text-purple-400">export default</span>{' '}
                <span className="text-amber-300">app</span>;
              </div>
            </div>
          )}

          {/* 6 Technology Badges Grid */}
          <div className="pt-4 mt-2 border-t border-white/[0.06] grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center">
            {['JAVA', 'SPRING BOOT', 'REACT', 'NODE.JS', 'EXPRESS', 'MONGODB'].map((tech, idx) => (
              <span
                key={idx}
                className="px-1.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-slate-300 hover:border-terracotta-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Lower Summary Info Bar */}
        <div className="p-4 bg-[#0d1117] border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Identity Tag */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-terracotta-500/10 border border-terracotta-500/30 flex items-center justify-center font-bold text-terracotta-400 text-sm font-mono">
              SS
            </div>
            <div>
              <div className="text-xs font-semibold text-white font-sans">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {personalInfo.role} · {personalInfo.taglineRole}
              </div>
            </div>
          </div>

          {/* Active Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] font-mono text-emerald-300 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{personalInfo.status}</span>
          </div>

        </div>

      </div>

    </div>
  );
}