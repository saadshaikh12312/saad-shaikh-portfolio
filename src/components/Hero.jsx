import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Typewriter from './Typewriter';
import ProfileVisual from './ProfileVisual';

export default function Hero() {
  const heroDescription = "I build practical full-stack web applications across both the MERN and Java ecosystems, focusing on dependable backend APIs, responsive web interfaces, and clean, problem-solving code.";

  return (
    <section id="home" className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#0B1018]">
      {/* Background Subtle Grid - Pure background decoration without masking content */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      {/* Very faint single ambient warmth - restrained and comfortable */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] sm:h-[300px] bg-[#FF986B]/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column: Typographic Hook & Narrative (7 cols ~58%) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-4.5 md:space-y-5">

            {/* Location First: Small orange location icon + subtle uppercase monospace styling */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-wider text-[#AAB6C6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF986B]" />
              <span className="uppercase font-medium text-[#AAB6C6]">
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline & Zero-Shift Auto-Typing Role */}
            <div className="space-y-1 w-full max-w-[700px]">
              <h1 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-bold tracking-tight text-[#F5F7FA] leading-[1.1] font-sans">
                {personalInfo.heroGreeting}
              </h1>

              {/* Zero-shift fixed-dimension title container */}
              <div className="h-[34px] sm:h-[44px] md:h-[50px] lg:h-[54px] flex items-center overflow-hidden w-full">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold tracking-tight font-sans block">
                  <Typewriter phrases={personalInfo.typingPhrases} />
                </span>
              </div>
            </div>

            {/* Concise Editorial Statement */}
            <p className="text-sm sm:text-base text-[#AAB6C6] leading-relaxed max-w-xl font-sans pt-0.5">
              {heroDescription}
            </p>

            {/* Three-Tier Action Buttons Hierarchy (14-16px rounded, consistent height, soft orange) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* 1. Primary: Soft peach-orange background, dark text, arrow icon */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-[#0B1018] rounded-[15px] bg-[#FFB58F] hover:bg-[#FF986B] btn-interactive shadow-sm transition-colors cursor-pointer flex-1 sm:flex-initial text-center"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-[#0B1018] group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* 2. Secondary: Neutral dark button with subtle border and orange envelope icon */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 min-h-[44px] text-xs sm:text-sm font-medium text-[#F5F7FA] hover:text-white rounded-[15px] bg-[#111823] hover:bg-[#151D28] border border-[#283342] hover:border-[#FF986B]/50 transition-colors btn-interactive cursor-pointer flex-1 sm:flex-initial text-center"
              >
                <Mail className="w-4 h-4 text-[#FF986B]" />
                <span>Contact Me</span>
              </a>

              {/* 3. Tertiary: Neutral dark button with document icon */}
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.downloadResumeName}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 min-h-[44px] text-xs sm:text-sm font-medium text-[#F5F7FA] hover:text-white rounded-[15px] bg-[#111823] hover:bg-[#151D28] border border-[#283342] hover:border-[#FF986B]/50 transition-colors btn-interactive cursor-pointer w-full sm:w-auto text-center"
              >
                <FileText className="w-4 h-4 text-[#FF986B]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Clean Horizontal Social Row */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#AAB6C6] border-t border-[#283342]/70 w-full max-w-xl">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#AAB6C6] hover:text-[#F5F7FA] transition-colors duration-180"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#AAB6C6] hover:text-[#F5F7FA] transition-colors duration-180"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#AAB6C6] hover:text-[#F5F7FA] transition-colors duration-180"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-[#FF986B]" />
                <span>LeetCode</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-[#AAB6C6] hover:text-[#F5F7FA] transition-colors duration-180"
                aria-label="Email Me"
              >
                <Mail className="w-3.5 h-3.5 text-[#AAB6C6]" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Visual (5 cols ~42%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-4 sm:pt-6 lg:pt-0">
            <ProfileVisual />
          </div>

        </div>
      </div>
    </section>
  );
}