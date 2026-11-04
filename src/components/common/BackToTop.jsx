import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop({ className = '' }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11161d] hover:bg-[#151c26] border border-[#202833] hover:border-terracotta-500/40 text-xs font-mono text-slate-300 hover:text-white btn-interactive cursor-pointer ${className}`}
      aria-label="Back to top"
      type="button"
    >
      <span>Top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
}
