import { NAV_OFFSET } from './constants';

/**
 * Smoothly scrolls to a page section by ID, taking into account fixed navbar height.
 * @param {string} targetId - Section ID without '#'
 * @param {number} offset - Pixel offset (negative to account for sticky header)
 */
export function scrollToSection(targetId, offset = NAV_OFFSET) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const y = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/**
 * Conditionally joins CSS class strings together.
 * @param  {...any} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
