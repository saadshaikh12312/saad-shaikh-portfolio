import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-10 border-t border-white/[0.08] bg-[#070a0f] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500 shadow-[0_0_8px_rgba(240,83,53,0.7)] inline-block" />
            <span className="font-sans font-bold text-white text-sm sm:text-base tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-slate-400">
              — {personalInfo.role} ({personalInfo.positioning})
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
            <a href="#home" className="text-slate-400 hover:text-white transition-colors duration-180">Home</a>
            <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-180">About</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors duration-180">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors duration-180">Projects</a>
            <a href="#experience" className="text-slate-400 hover:text-white transition-colors duration-180">Experience</a>
            <a href="#education" className="text-slate-400 hover:text-white transition-colors duration-180">Education</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-180">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white btn-interactive cursor-pointer self-end md:self-auto"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div>
            © 2026 {personalInfo.name} — Built with clean code, curiosity, and consistency.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-[11px] hidden sm:inline">
              {personalInfo.location}
            </span>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-white transition-colors duration-180"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}