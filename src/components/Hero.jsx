import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Typewriter from './Typewriter';
import DeveloperIllustration from './DeveloperIllustration';

export default function Hero() {
  const heroDescription = "I build practical full-stack web applications across both the MERN and Java ecosystems, focusing on dependable backend APIs, responsive web interfaces, and clean, problem-solving code.";

  return (
    <section id="home" className="relative pt-18 sm:pt-24 md:pt-28 pb-10 sm:pb-16 md:pb-20 overflow-hidden bg-[#080c12]">
      {/* Background Subtle Grid - Strictly background layer with no masking of foreground */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-70" />

      {/* Subtle ambient warmth glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[250px] sm:h-[300px] bg-terracotta-500/[0.04] blur-[100px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* Left Column: Typographic Hook & Narrative (7 cols ~58%) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-3.5 sm:space-y-4 md:space-y-5">

            {/* Minimal Location & Status Indicator */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-wider text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase font-medium text-slate-300">
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline & Zero-Shift Auto-Typing Role */}
            <div className="space-y-1 w-full max-w-[700px]">
              <h1 className="text-[30px] sm:text-[44px] md:text-[56px] lg:text-[68px] font-bold tracking-tight text-white leading-[1.08] font-sans">
                {personalInfo.heroGreeting}
              </h1>

              {/* Zero-shift fixed-dimension title container */}
              <div className="h-[32px] sm:h-[44px] md:h-[54px] lg:h-[58px] flex items-center overflow-hidden w-full">
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-200 font-sans block">
                  <Typewriter phrases={personalInfo.typingPhrases} />
                </span>
              </div>
            </div>

            {/* Concise Editorial Statement */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl font-sans pt-0.5 sm:pt-1">
              {heroDescription}
            </p>

            {/* Three-Tier Action Buttons Hierarchy (Mobile Optimized) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1.5 sm:pt-2 w-full sm:w-auto">
              {/* 1. Primary: Solid Coral View My Work */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-5 sm:py-2.5 min-h-[40px] sm:min-h-[44px] text-xs sm:text-sm font-semibold text-white rounded-xl bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm hover:shadow-[0_0_18px_rgba(240,83,53,0.35)] group cursor-pointer flex-1 sm:flex-initial text-center"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* 2. Secondary: Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-5 sm:py-2.5 min-h-[40px] sm:min-h-[44px] text-xs sm:text-sm font-medium text-slate-200 hover:text-white rounded-xl bg-[#11161d] hover:bg-[#151c26] border border-[#202833] hover:border-terracotta-500/50 hover:shadow-[0_0_14px_rgba(240,83,53,0.15)] btn-interactive cursor-pointer flex-1 sm:flex-initial text-center"
              >
                <Mail className="w-3.5 h-3.5 text-terracotta-400" />
                <span>Contact Me</span>
              </a>

              {/* 3. Tertiary: Transparent Outlined Resume Button */}
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.downloadResumeName}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-5 sm:py-2.5 min-h-[40px] sm:min-h-[44px] text-xs sm:text-sm font-mono font-medium text-slate-300 hover:text-white bg-transparent border border-transparent hover:border-transparent rounded-xl btn-gradient-border cursor-pointer w-full sm:w-auto text-center"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terracotta-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Clean Horizontal Social Row */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3.5 sm:gap-5 text-xs font-mono text-slate-400 border-t border-white/[0.08] w-full max-w-xl">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-terracotta-400" />
                <span>LeetCode</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="Email Me"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Open Vector Illustration Composition (5 cols ~42%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-4 sm:pt-6 lg:pt-0">
            <DeveloperIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}