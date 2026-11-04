import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../../components/common/Icons';
import { personalInfo } from '../../data/personal';
import { scrollToSection } from '../../utils/helpers';
import Container from '../../components/layout/Container';
import Typewriter from './Typewriter';
import ProfileVisual from './ProfileVisual';
import './Hero.css';

export default function Hero() {
  const heroDescription = "I build practical full-stack web applications across both the MERN and Java ecosystems, focusing on dependable backend APIs, responsive web interfaces, and clean, problem-solving code.";

  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <section id="home" className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#0B1018]">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      {/* Faint single ambient warmth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] sm:h-[300px] bg-[#FF986B]/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column: Typographic Hook & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-4.5 md:space-y-5">

            {/* Location First */}
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

            {/* Action Buttons Hierarchy */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
              {/* Primary Call to Action: View My Work */}
              <a
                href="#projects"
                onClick={(e) => handleScrollClick(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs sm:text-sm font-mono font-semibold btn-interactive shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Call to Action: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScrollClick(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#111823] hover:bg-[#151D28] text-[#F5F7FA] border border-[#283342] hover:border-[#FF986B]/50 text-xs sm:text-sm font-mono font-semibold btn-interactive transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF986B]" />
                <span>Contact Me</span>
              </a>

              {/* Tertiary Action: Resume */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-[#AAB6C6] hover:text-[#F5F7FA] hover:bg-white/[0.04] transition-colors"
              >
                <FileText className="w-4 h-4 text-[#FF986B]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Minimal Social & Verification Strip */}
            <div className="pt-2 sm:pt-3 border-t border-[#283342] w-full flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-[#AAB6C6]">
              <span className="text-[11px] uppercase tracking-wider text-[#AAB6C6]/70">
                PROFILES:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F5F7FA] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F5F7FA] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F5F7FA] transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-[#FF986B]" />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: Circular Profile Visual & Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <ProfileVisual />
          </div>

        </div>
      </Container>
    </section>
  );
}
