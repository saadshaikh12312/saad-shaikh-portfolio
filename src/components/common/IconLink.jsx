import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export function getSocialIcon(iconType, className = "w-4 h-4") {
  switch (iconType) {
    case 'github':
      return <GithubIcon className={className} />;
    case 'linkedin':
      return <LinkedinIcon className={className} />;
    case 'leetcode':
      return <LeetCodeIcon className={className} />;
    case 'mail':
      return <Mail className={className} />;
    default:
      return null;
  }
}

/**
 * Standard accessible link for icon-only external actions.
 */
export default function IconLink({
  href,
  icon,
  ariaLabel,
  className = '',
  target = '_blank',
  rel = 'noreferrer'
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`p-1 text-slate-400 hover:text-white transition-colors duration-180 inline-flex items-center justify-center ${className}`}
      aria-label={ariaLabel}
    >
      {typeof icon === 'string' ? getSocialIcon(icon) : icon}
    </a>
  );
}
