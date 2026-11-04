import React from 'react';

/**
 * Standard section wrapper for consistent vertical spacing, background, and anchor offsets.
 */
export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-10 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative ${className}`}
    >
      {children}
    </section>
  );
}
