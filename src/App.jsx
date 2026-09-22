import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isPageRevealed, setIsPageRevealed] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c12] text-slate-100 flex flex-col selection:bg-terracotta-500 selection:text-white relative">
      {/* First-Load Preloader Screen (True Full-Screen, 100% Opaque) */}
      {!isLoadingComplete && (
        <LoadingScreen
          onStartExit={() => setIsPageRevealed(true)}
          onComplete={() => setIsLoadingComplete(true)}
        />
      )}

      {/* Main Page Content - seamlessly revealed when loader completes */}
      <div
        className={`flex flex-col min-h-screen w-full transition-all duration-500 ease-out ${
          isPageRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {/* Sticky Top Navigation */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </div>
  );
}