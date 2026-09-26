import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Lock body scroll while loading screen is active
    document.body.style.overflow = 'hidden';

    // Fast path for reduced motion
    if (prefersReducedMotion) {
      setProgress(100);
      setStage(6);
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsMounted(false);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 150);
      }, 250);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }

    // Sequence stages
    const t1 = setTimeout(() => setStage(1), 100);  // Eyebrow
    const t2 = setTimeout(() => setStage(2), 220);  // Name
    const t3 = setTimeout(() => setStage(3), 360);  // Role
    const t4 = setTimeout(() => setStage(4), 500);  // Stack
    const t5 = setTimeout(() => setStage(5), 650);  // Progress starts

    // Smooth progress fill over ~500ms
    let animFrame;
    const progressStartTime = performance.now() + 650;
    const progressDuration = 500;

    const animateProgress = (currentTime) => {
      if (currentTime < progressStartTime) {
        animFrame = requestAnimationFrame(animateProgress);
        return;
      }

      const elapsed = currentTime - progressStartTime;
      const fraction = Math.min(elapsed / progressDuration, 1);
      const eased = 1 - Math.pow(1 - fraction, 3);
      setProgress(Math.round(eased * 100));

      if (fraction < 1) {
        animFrame = requestAnimationFrame(animateProgress);
      } else {
        setStage(6); // READY
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsMounted(false);
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 350);
        }, 150);
      }
    };

    animFrame = requestAnimationFrame(animateProgress);

    // Hard fallback timer (guarantees completion even if browser tab was backgrounded)
    const fallbackTimer = setTimeout(() => {
      setProgress(100);
      setStage(6);
      setIsExiting(true);
      setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 350);
    }, 1800);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <div
      role="progressbar"
      aria-label="Portfolio initializing"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        backgroundColor: '#080c12',
        zIndex: 99999,
      }}
      className={`fixed inset-0 z-[99999] w-full h-full h-[100dvh] bg-[#080c12] text-slate-100 flex items-center justify-center p-4 select-none overflow-hidden transition-opacity duration-350 ease-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4">
        
        {/* 1. Eyebrow */}
        <div
          className={`text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase mb-3 sm:mb-4 transition-all duration-300 ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          01 / PORTFOLIO INITIALIZATION
        </div>

        {/* 2. Main Name & Role */}
        <div className="space-y-1 mb-3 sm:mb-4">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans transition-all duration-300 ${
              stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            SAAD SHAIKH
          </h1>

          <div
            className={`text-sm sm:text-lg md:text-xl font-semibold tracking-tight text-terracotta-500 font-sans transition-all duration-300 ${
              stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            FULL-STACK DEVELOPER
          </div>
        </div>

        {/* 3. Tech Stack Line */}
        <div
          className={`text-xs sm:text-sm font-mono text-slate-400 tracking-wide mb-5 sm:mb-7 transition-all duration-300 ${
            stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span>MERN</span>
          <span className="mx-2 text-terracotta-500">•</span>
          <span>JAVA</span>
          <span className="mx-2 text-terracotta-500">•</span>
          <span>REST APIs</span>
        </div>

        {/* 4. Progress Bar & Status Text */}
        <div
          className={`w-full max-w-[240px] sm:max-w-[280px] space-y-2.5 transition-all duration-300 ${
            stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {/* Progress Track */}
          <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-terracotta-500 rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(240,83,53,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Label */}
          <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase flex items-center justify-center gap-1.5 min-h-[18px]">
            {stage >= 6 ? (
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                READY
              </span>
            ) : (
              <span className="text-slate-400">
                INITIALIZING {progress > 0 && <span className="text-slate-400 ml-1">({progress}%)</span>}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
