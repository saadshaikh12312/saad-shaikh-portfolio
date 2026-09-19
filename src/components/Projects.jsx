import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedImageModal, setSelectedImageModal] = useState(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    wonderlust: 0,
    bookloop: 0
  });

  const nextImage = (projectId, total) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % total
    }));
  };

  const prevImage = (projectId, total) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + total) % total
    }));
  };

  const setImage = (projectId, index) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  return (
    <section id="projects" className="py-14 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Featured Work
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 font-sans">
            Production-grade full-stack web applications featuring complete CRUD operations, MVC architecture, secure authentication, and cloud integrations.
          </p>
        </div>

        {/* Compact Projects List */}
        <div className="space-y-8 sm:space-y-10">
          {projectsData.map((project) => {
            const currentImgIndex = activeImageIndexes[project.id] || 0;
            const currentImage = project.images[currentImgIndex];

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#11151c] border border-white/[0.08] hover:border-white/[0.16] p-5 sm:p-6 lg:p-7 shadow-xl relative overflow-hidden transition-all duration-200"
              >
                {/* Subtle Ambient Warmth Accent */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta-500/[0.025] blur-[100px] pointer-events-none rounded-full" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start">
                  
                  {/* Left Column: Uniform 16:9 Viewport & Thumbnails (5 cols on lg) */}
                  <div className="lg:col-span-5 flex flex-col space-y-2.5 w-full">
                    
                    {/* Consistent Window Frame */}
                    <div className="rounded-xl bg-[#0a0e14] border border-white/[0.1] overflow-hidden shadow-lg relative w-full group/preview">
                      
                      {/* Window Header */}
                      <div className="px-3 py-1.5 bg-[#141922] border-b border-white/[0.07] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
                          <span className="ml-1.5 text-[10px] sm:text-[11px] font-mono text-slate-400 truncate max-w-[150px] sm:max-w-[180px]">
                            {project.title.toLowerCase()}.onrender.com
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedImageModal(currentImage.url)}
                            className="p-0.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                            title="Expand screenshot"
                            aria-label="Expand screenshot"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                          <span className="text-[10px] font-mono text-slate-400">
                            0{currentImgIndex + 1} / 0{project.images.length}
                          </span>
                        </div>
                      </div>

                      {/* Main Screenshot Container: Exact 16:9 Aspect Ratio */}
                      <div className="relative aspect-[16/9] bg-[#070a0f] overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => setSelectedImageModal(currentImage.url)}>
                        <img
                          key={currentImage.url}
                          src={currentImage.url}
                          alt={`${project.title} - ${currentImage.caption}`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]"
                        />

                        {/* Carousel Navigation Arrows */}
                        <button
                          onClick={(e) => { e.stopPropagation(); prevImage(project.id, project.images.length); }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/[0.15] opacity-80 sm:opacity-0 group-hover/preview:opacity-100 transition-all hover:bg-terracotta-500 cursor-pointer"
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={(e) => { e.stopPropagation(); nextImage(project.id, project.images.length); }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/[0.15] opacity-80 sm:opacity-0 group-hover/preview:opacity-100 transition-all hover:bg-terracotta-500 cursor-pointer"
                          aria-label="Next screenshot"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {/* Bottom Caption Pill */}
                        <div className="absolute bottom-1.5 inset-x-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono text-slate-300 text-center truncate">
                          {currentImage.caption}
                        </div>
                      </div>

                    </div>

                    {/* Uniform Thumbnail Gallery Strip */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setImage(project.id, idx)}
                          className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-md overflow-hidden border shrink-0 transition-all duration-180 cursor-pointer bg-[#070a0f] ${
                            idx === currentImgIndex
                              ? 'border-terracotta-500 ring-1 ring-terracotta-500/40 opacity-100'
                              : 'border-white/[0.08] opacity-50 hover:opacity-90'
                          }`}
                          title={img.caption}
                        >
                          <img src={img.url} alt={img.caption} className="w-full h-full object-cover object-top" />
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Project Details (7 cols on lg) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-4">
                    
                    <div>
                      {/* Category & Index Meta Header */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-[11px] font-mono text-terracotta-400 font-semibold px-2 py-0.5 rounded bg-terracotta-500/10 border border-terracotta-500/20">
                            {project.badge}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                            {project.category}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {project.number}
                        </span>
                      </div>

                      {/* Project Title & Subtitle */}
                      <div className="mb-2">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight font-sans">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-terracotta-400/90 font-medium mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-3">
                        {project.shortDescription}
                      </p>

                      {/* Planned Enhancement (if present) */}
                      {project.plannedFeature && (
                        <div className="p-2 sm:p-2.5 rounded-lg bg-terracotta-500/[0.05] border border-terracotta-500/20 text-xs font-sans text-slate-300 mb-3 flex items-start gap-1.5">
                          <span className="text-[10px] font-mono text-terracotta-400 font-bold uppercase tracking-wider shrink-0 mt-0.5">
                            PLANNED:
                          </span>
                          <span className="text-[11px] text-slate-300">
                            {project.plannedFeature}
                          </span>
                        </div>
                      )}

                      {/* Key Capabilities */}
                      <div className="mb-3">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1.5">
                          KEY CAPABILITIES:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                          {project.keyCapabilities.slice(0, 6).map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-400 shrink-0 mt-0.5" />
                              <span className="text-[11px] sm:text-xs leading-snug">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 pt-0.5 mb-3">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.07] text-[10px] font-mono text-slate-300 hover:border-white/[0.15] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2.5 border-t border-white/[0.06]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-slate-200 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.25] btn-interactive"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold text-white rounded-lg bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)]"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageModal && (
        <div 
          onClick={() => setSelectedImageModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl border border-white/[0.15] bg-[#0d1117]" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/80 text-white border border-white/[0.2] hover:bg-terracotta-500 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedImageModal} alt="Screenshot Full View" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

    </section>
  );
}