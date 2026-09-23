import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Typewriter from './Typewriter';
import DeveloperIllustration from './DeveloperIllustration';

export default function Hero() {
  const heroDescription = "I build practical full-stack web applications across the MERN and Java ecosystems, with a focus on clean interfaces, reliable backend APIs, and scalable solutions.";

  return (
    <section id="home" className="relative pt-22 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-grid-subtle">
      {/* Subtle ambient warmth glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[300px] bg-terracotta-500/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Typographic Hook & Narrative (7 cols ~58%) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">

            {/* Minimal Location & Status Indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase text-[11px] font-medium text-slate-300">
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline & Zero-Shift Auto-Typing Role */}
            <div className="space-y-1.5 w-full max-w-[700px]">
              <h1 className="text-[40px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-bold tracking-tight text-white leading-[1.02] font-sans">
                {personalInfo.heroGreeting}
              </h1>

              {/* Zero-shift fixed-dimension title container */}
              <div className="h-[36px] sm:h-[46px] md:h-[54px] lg:h-[60px] flex items-center overflow-hidden w-full">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-200 font-sans block truncate">
                  <Typewriter phrases={personalInfo.typingPhrases} />
                </span>
              </div>
            </div>

            {/* Concise Editorial Statement */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-sans pt-1">
              {heroDescription}
            </p>

            {/* Three-Tier Action Buttons Hierarchy */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              {/* 1. Primary: Solid Coral */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white rounded-xl bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm hover:shadow-[0_0_18px_rgba(240,83,53,0.35)] group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* 2. Secondary: Outlined / Subtle */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 px-4.5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 rounded-xl bg-[#11161d] hover:bg-[#151c26] border border-[#202833] hover:border-white/[0.2] btn-interactive"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Contact Me</span>
              </a>

              {/* 3. Tertiary: Ghost / Text button */}
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.downloadResumeName}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 rounded-xl py-2.5 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors duration-160"
              >
                <FileText className="w-3.5 h-3.5 text-terracotta-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Clean Horizontal Social Row */}
            <div className="pt-3 flex flex-wrap items-center gap-5 text-xs font-mono text-slate-400 border-t border-white/[0.05] w-full max-w-xl">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-160"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-160"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-160"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-terracotta-400" />
                <span>LeetCode</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-160"
                aria-label="Email Me"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Open Vector Illustration Composition (5 cols ~42%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-4 lg:pt-0">
            <DeveloperIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}