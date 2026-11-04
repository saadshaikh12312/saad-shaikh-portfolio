import React from 'react';

/**
 * Standardized section header with eyebrow badge, main title, and optional description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  eyebrowDotColor = 'bg-terracotta-500',
  eyebrowTextColor = 'text-terracotta-400'
}) {
  return (
    <div className={`space-y-1.5 sm:space-y-3 ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-mono ${eyebrowTextColor} tracking-wider uppercase font-semibold`}>
          <span className={`w-1.5 h-1.5 rounded-full ${eyebrowDotColor}`} />
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
