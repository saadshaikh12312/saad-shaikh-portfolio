import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * Reusable Button component supporting primary, secondary, peach, and gradient outline variants.
 * Renders either as an HTML `<button>` or an `<a>` tag when `href` is provided.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  target,
  rel,
  download,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold rounded-xl transition-all duration-180 cursor-pointer select-none';

  const variants = {
    primary: 'bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)] btn-interactive',
    secondary: 'bg-[#111823] hover:bg-[#151D28] text-[#F5F7FA] border border-[#283342] hover:border-[#FF986B]/50 btn-interactive',
    peach: 'bg-[#FFB58F] hover:bg-[#FF986B] text-[#0B1018] shadow-sm btn-interactive',
    gradient: 'btn-gradient-border text-slate-200 hover:text-white',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant] || variants.primary,
    disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? (rel || 'noreferrer') : rel}
        download={download}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
