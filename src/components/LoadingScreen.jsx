import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onStartExit, onComplete }) {
  const [stage, setStage] = useState(0); // 0: initial, 1: eyebrow, 2: name, 3: role, 4: stack, 5: progress, 6: ready
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Lock body scroll while loading screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // If user prefers reduced motion, skip long animation
    if (prefersReducedMotion) {
      setStage(6);
      setProgress(100);
      const timer = setTimeout(() => {
        setIsExiting(true);
        if (onStartExit) onStartExit();
        setTimeout(() => {
          setIsMounted(false);
          document.body.style.overflow = originalOverflow || '';
          if (onComplete) onComplete();
        }, 200);
      }, 300);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow || '';
      };
    }

    // Choreographed sequence timers
    const tEyebrow = setTimeout(() => setStage(1), 150);   // 0.15s: 01 / PORTFOLIO INITIALIZATION
    const tName = setTimeout(() => setStage(2), 350);      // 0.35s: SAAD SHAIKH
    const tRole = setTimeout(() => setStage(3), 550);      // 0.55s: FULL-STACK DEVELOPER
    const tStack = setTimeout(() => setStage(4), 750);     // 0.75s: MERN • JAVA • REST APIs
    const tProgress = setTimeout(() => setStage(5), 950);  // 0.95s: Progress bar starts filling

    // Smooth progress animation over ~550ms using cubic ease-out
    let animFrame;
    const progressStartTime = performance.now() + 950;
    const progressDuration = 2000;

    const animateProgress = (currentTime) => {
      if (currentTime < progressStartTime) {
        animFrame = requestAnimationFrame(animateProgress);
        return;
      }

      const elapsed = currentTime - progressStartTime;
      const fraction = Math.min(elapsed / progressDuration, 1);
      
      // Smooth cubic ease-out
      const eased = 1 - Math.pow(1 - fraction, 3);
      setProgress(Math.round(eased * 100));

      if (fraction < 1) {
        animFrame = requestAnimationFrame(animateProgress);
      } else {
        // 100% reached -> READY
        setStage(6);

        // Short 150ms hold, then smooth cross-fade exit
        setTimeout(() => {
          setIsExiting(true);
          if (onStartExit) onStartExit();

          // Wait for 450ms transition duration before unmounting
          setTimeout(() => {
            setIsMounted(false);
            document.body.style.overflow = originalOverflow || '';
            if (onComplete) onComplete();
          }, 450);
        }, 250);
      }
    };

    animFrame = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(tEyebrow);
      clearTimeout(tName);
      clearTimeout(tRole);
      clearTimeout(tStack);
      clearTimeout(tProgress);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [onStartExit, onComplete]);

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
        width: '100vw',
        height: '100dvh',
        backgroundColor: '#080c12',
      }}
      className={`fixed inset-0 z-[99999] w-full h-full h-[100dvh] min-h-[100dvh] bg-[#080c12] text-slate-100 flex items-center justify-center p-4 sm:p-6 select-none overflow-hidden transition-opacity duration-450 ease-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Centered Loading Container - Perfectly Centered Across All Viewports */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4">
        
        {/* 1. Eyebrow */}
        {/* <div
          className={`text-[11px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase mb-4 sm:mb-5 transition-all duration-400 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          01 / PORTFOLIO INITIALIZATION
        </div> */}

        {/* 2. Main Name & Role */}
        <div className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-5">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans transition-all duration-400 ease-out ${
              stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            SAAD SHAIKH
          </h1>

          <div
            className={`text-sm sm:text-lg md:text-xl font-semibold tracking-tight text-terracotta-500 font-sans transition-all duration-400 ease-out ${
              stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            FULL-STACK DEVELOPER
          </div>
        </div>

        {/* 3. Tech Stack Line */}
        <div
          className={`text-xs sm:text-sm font-mono text-slate-400 tracking-wide mb-6 sm:mb-8 transition-all duration-400 ease-out ${
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
          className={`w-full max-w-[240px] sm:max-w-[280px] space-y-3 transition-all duration-400 ease-out ${
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
