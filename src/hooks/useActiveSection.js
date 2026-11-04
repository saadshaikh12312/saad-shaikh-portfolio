import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../data/navigation';
import { SCROLL_SPY_OFFSET } from '../utils/constants';

/**
 * Custom hook to track the active section during scroll and detect if the header is scrolled.
 * @param {string} initialSection
 * @returns {{ activeSection: string, setActiveSection: Function, isScrolled: boolean, isClickingRef: React.MutableRefObject<boolean> }}
 */
export function useActiveSection(initialSection = 'home') {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickingRef = useRef(false);

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
      const sectionIds = navLinks.map(link => link.id);
      let currentSection = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= SCROLL_SPY_OFFSET) {
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

  return { activeSection, setActiveSection, isScrolled, isClickingRef };
}
