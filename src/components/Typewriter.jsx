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

  if (prefersReducedMotion) {
    return (
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-400 via-terracotta-500 to-amber-400 font-bold">
        {phrases[0] || 'Full-Stack Developer'}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-terracotta-400 via-terracotta-500 to-amber-400 font-bold whitespace-nowrap select-none">
      <span>{text}</span>
      <span
        className={`ml-1 inline-block w-[3px] h-[0.85em] bg-terracotta-500 align-middle transition-opacity duration-150 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </span>
  );
}