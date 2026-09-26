import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickingRef = useRef(false);
  const menuRef = useRef(null);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Robust scroll spy handler for fixed navbar & active navigation item
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      if (isClickingRef.current) return;

      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // 1. Top of page -> Home
      if (scrollPos < 120) {
        setActiveSection('home');
        return;
      }

      // 2. Bottom of page -> Contact
      if (windowHeight + scrollPos >= fullHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // 3. Middle sections: find the section closest to the top offset
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      let currentSection = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile dropdown is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close the mobile menu with Escape for keyboard and accessibility support.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler with exact offset compensation for fixed navbar
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    isClickingRef.current = true;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -72; // Fixed navbar height offset
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 700);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 bg-[#080c12] ${
      isScrolled 
        ? 'border-b border-[#202833] shadow-lg shadow-black/60' 
        : 'border-b border-white/[0.06]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Wordmark with Accent Dot */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-terracotta-500 group-hover:scale-125 transition-transform duration-200 shadow-[0_0_8px_rgba(240,83,53,0.8)]" />
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-terracotta-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="hidden lg:inline-block font-mono text-[10px] text-slate-400 ml-1">
              / MERN + JAVA
            </span>
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#11161d]/70 p-1 rounded-xl border border-[#202833]/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all duration-180 relative ${
                    isActive
                      ? 'text-white bg-[#11161d] border border-terracotta-500/60 shadow-[0_0_12px_rgba(240,83,53,0.2)] font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Secondary GitHub Link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white rounded-lg bg-[#11161d] border border-[#202833] hover:border-terracotta-500/40 btn-interactive"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            
            {/* Primary Filled Terracotta Resume CTA Button (Restored) */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white rounded-lg bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`mobile-menu-toggle md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-[#11161d] border border-[#202833] hover:border-terracotta-500/50 cursor-pointer ${mobileMenuOpen ? 'is-open' : ''}`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            type="button"
          >
            <span className="mobile-menu-icon" aria-hidden="true">
              {mobileMenuOpen ? <X className="w-5 h-5 text-terracotta-400" /> : <Menu className="w-5 h-5" />}
            </span>
          </button>
        </div>
      </div>

      {/* Animated mobile dropdown. Keeping it mounted allows a smooth exit transition. */}
      <div
        ref={menuRef}
        id="mobile-navigation-panel"
        aria-hidden={!mobileMenuOpen}
        className={`mobile-navigation-panel md:hidden absolute top-full left-0 right-0 z-50 ${mobileMenuOpen ? 'is-open' : ''}`}
      >
        <div className="mobile-navigation-inner mx-3 mt-2 mb-3 rounded-2xl border border-[#252d39] bg-[#0b1018]/[0.98] shadow-[0_18px_50px_rgba(0,0,0,0.48)]">
          <div className="flex flex-col gap-1 p-2.5">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={(e) => handleNavClick(e, link.id)}
                  style={{ '--menu-item-index': index }}
                  className={`mobile-nav-link flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'text-white bg-[#151c26] border border-terracotta-500/35 font-semibold'
                      : 'text-slate-300 border border-transparent hover:text-white hover:bg-white/[0.035]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 shadow-[0_0_8px_rgba(240,83,53,0.55)]" />}
                </a>
              );
            })}
          </div>

          <div className="mobile-menu-actions mx-3 flex items-center gap-2.5 border-t border-white/[0.08] pt-3 pb-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-mono text-slate-300 hover:text-white rounded-xl border border-[#252d39] bg-[#111720] hover:border-terracotta-500/40 btn-interactive"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-mono font-semibold text-white rounded-xl bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}