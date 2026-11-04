import React, { useState } from 'react';
import LoadingScreen from '../components/feedback/LoadingScreen';
import CustomCursor from '../components/feedback/CustomCursor';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Projects from '../sections/Projects/Projects';
import Experience from '../sections/Experience/Experience';
import Education from '../sections/Education/Education';
import Contact from '../sections/Contact/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#080c12] text-slate-100 flex flex-col selection:bg-terracotta-500 selection:text-white relative">
      {/* Custom Orange Dot Cursor for Desktop Pointer Devices */}
      <CustomCursor />

      {/* First-Load Preloader Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Fixed Top Navigation */}
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
  );
}
