import React from 'react';
import { personalInfo } from '../../data/personal';
import { navLinks } from '../../data/navigation';
import Container from './Container';
import BackToTop from '../common/BackToTop';
import SocialLinks from '../common/SocialLinks';

export default function Footer() {
  return (
    <footer className="py-6 sm:py-10 border-t border-[#202833] bg-[#070a0f] text-slate-400">
      <Container className="space-y-4 sm:space-y-5">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/[0.06]">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 shadow-[0_0_8px_rgba(240,83,53,0.7)] inline-block" />
            <span className="font-sans font-bold text-white text-sm sm:text-base tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-slate-400">
              — {personalInfo.role} ({personalInfo.positioning})
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors duration-180"
              >
                {link.label}
              </a>
            ))}
          </div>

          <BackToTop className="self-start sm:self-auto" />
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="text-[11px] sm:text-xs">
            © 2026 {personalInfo.name} — Full-Stack Developer (MERN & Java)
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <span className="text-slate-500 text-[11px]">
              {personalInfo.location}
            </span>

            <SocialLinks />
          </div>
        </div>

      </Container>
    </footer>
  );
}
