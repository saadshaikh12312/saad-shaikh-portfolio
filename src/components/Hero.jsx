import React from 'react';
import { ArrowRight, Mail, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Typewriter from './Typewriter';
import DeveloperIllustration from './DeveloperIllustration';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 sm:pt-22 md:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-grid-pattern">
      {/* Subtle ambient warmth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[550px] h-[250px] sm:h-[300px] bg-terracotta-500/[0.035] blur-[100px] sm:blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hook & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6">
            
            {/* Status & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-wider text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase font-medium text-[10px] sm:text-[11px]">
                {personalInfo.location}
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-terracotta-500/10 text-terracotta-400 border border-terracotta-500/20 font-semibold">
                MERN + JAVA
              </span>
            </div>

            {/* Heading & Zero-Shift Auto-Typing Title */}
            <div className="space-y-1 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.1] font-sans">
                {personalInfo.heroGreeting}
              </h1>

              {/* Zero-shift fixed-dimension title container */}
              <div className="h-[36px] sm:h-[44px] md:h-[52px] lg:h-[58px] flex items-center overflow-hidden w-full max-w-xl">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-200 font-sans block truncate">
                  <Typewriter phrases={personalInfo.typingPhrases} />
                </span>
              </div>
            </div>

            {/* Concise Developer Statement */}
            <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl font-sans">
              {personalInfo.heroStatement}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-white rounded-xl bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm hover:shadow-[0_0_18px_rgba(240,83,53,0.35)] group flex-1 sm:flex-initial"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-4.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-200 rounded-xl bg-[#11151c] hover:bg-[#181f2a] border border-white/[0.09] hover:border-white/[0.2] btn-interactive flex-1 sm:flex-initial"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-mono text-slate-300 hover:text-white rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.2] btn-interactive w-full sm:w-auto"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terracotta-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Quick Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5 text-xs font-mono text-slate-400 border-t border-white/[0.06] w-full max-w-xl">
              <span className="text-slate-500 font-sans text-xs">CONNECT:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-terracotta-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-terracotta-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-terracotta-400 transition-colors"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-terracotta-400" />
                <span>LeetCode</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-terracotta-400 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Developer Illustration (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-2 lg:pt-0">
            <DeveloperIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}