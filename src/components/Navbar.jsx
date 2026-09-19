import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#0a0e14]/95 backdrop-blur-md border-b border-white/[0.08] shadow-md shadow-black/30' 
        : 'bg-[#0a0e14]/80 backdrop-blur-sm border-b border-white/[0.04]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-17">
          
          {/* Brand Wordmark */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500 group-hover:scale-125 transition-transform duration-200 shadow-[0_0_8px_rgba(240,83,53,0.7)]" />
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-terracotta-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="hidden lg:inline-block font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06] ml-1">
              MERN + JAVA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all duration-180 ${
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-white/[0.08] border border-white/[0.08]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons (Desktop only) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white rounded-lg border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02] hover:bg-white/[0.06] btn-interactive"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white rounded-lg bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e14]/98 backdrop-blur-xl border-b border-white/[0.08] px-4 pt-2 pb-5 space-y-1 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-terracotta-400 bg-white/[0.05] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 flex items-center gap-2 border-t border-white/[0.06]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono font-medium text-slate-300 rounded-lg border border-white/[0.1] bg-white/[0.02]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono font-semibold text-white rounded-lg bg-terracotta-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}