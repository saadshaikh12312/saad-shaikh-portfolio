import React, { useState, useEffect } from 'react';

export default function Typewriter({ phrases, typingSpeed = 75, deletingSpeed = 40, pauseTime = 1600 }) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || !phrases || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((idx) => (idx + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime, prefersReducedMotion]);

  const renderStyledText = (rawText) => {
    // If the text contains "Developer", highlight the preceding part with soft orange #FFB58F and Developer with white
    const devIndex = rawText.indexOf('Developer');
    if (devIndex !== -1) {
      const prefix = rawText.substring(0, devIndex);
      const rest = rawText.substring(devIndex);
      return (
        <>
          <span className="text-[#FFB58F] font-bold">{prefix}</span>
          <span className="text-[#F5F7FA] font-bold">{rest}</span>
        </>
      );
    }
    return <span className="text-[#FFB58F] font-bold">{rawText}</span>;
  };

  if (prefersReducedMotion) {
    const staticText = phrases[0] || 'Backend & API Developer';
    return (
      <span className="font-bold select-none">
        {renderStyledText(staticText)}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center font-bold whitespace-nowrap select-none">
      <span>{renderStyledText(text)}</span>
      <span
        className={`ml-1 inline-block w-[3px] h-[0.85em] bg-[#FF986B] align-middle transition-opacity duration-150 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </span>
  );
}