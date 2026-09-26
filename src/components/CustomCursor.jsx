import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const mediaQueryFine = window.matchMedia('(pointer: fine)');
      const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

      // Only enable on desktop with fine pointer and when reduced motion is not requested
      if (!mediaQueryFine.matches || mediaQueryReducedMotion.matches) {
        return;
      }

      setIsEnabled(true);
      document.documentElement.classList.add('has-custom-cursor');

      const onMouseMove = (e) => {
        mousePos.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);

        // Direct placement for inner dot (zero delay)
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
      };

      const onMouseDown = () => setIsClicking(true);
      const onMouseUp = () => setIsClicking(false);

      const onMouseLeave = () => setIsVisible(false);
      const onMouseEnter = () => setIsVisible(true);

      // Track hover on interactive elements
      const onMouseOver = (e) => {
        const target = e.target;
        if (!target || typeof target.closest !== 'function') return;

        if (
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('label') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          target.closest('.btn-interactive') ||
          target.closest('.btn-gradient-border') ||
          target.closest('[data-cursor-interactive]')
        ) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      };

      // Smooth outer ring lerp follow
      const animate = () => {
        const lerpFactor = 0.22;
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
        }

        animFrameId.current = requestAnimationFrame(animate);
      };

      animFrameId.current = requestAnimationFrame(animate);

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseover', onMouseOver, { passive: true });

      return () => {
        document.documentElement.classList.remove('has-custom-cursor');
        if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseover', onMouseOver);
      };
    } catch (err) {
      console.warn('Custom cursor initialization error:', err);
    }
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* 1. Center Orange Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[999999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta-500 transition-opacity duration-150 will-change-transform shadow-[0_0_8px_rgba(240,83,53,0.9)] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'w-2 h-2 scale-125' : 'w-1.5 h-1.5'}`}
        style={{
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          marginTop: isHovered ? '-4px' : '-3px',
          marginLeft: isHovered ? '-4px' : '-3px',
        }}
      />

      {/* 2. Outer Smooth Delay Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[999998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'border-terracotta-500/80 bg-terracotta-500/[0.08] shadow-[0_0_14px_rgba(240,83,53,0.3)] scale-110'
            : 'border-terracotta-500/40 bg-transparent scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          width: isHovered ? '42px' : '28px',
          height: isHovered ? '42px' : '28px',
          marginTop: isHovered ? '-21px' : '-14px',
          marginLeft: isHovered ? '-21px' : '-14px',
          borderWidth: '1.5px',
        }}
      />
    </>
  );
}
