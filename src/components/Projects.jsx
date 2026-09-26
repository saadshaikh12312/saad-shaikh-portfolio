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
    <section id="projects" className="py-10 sm:py-16 md:py-20 border-t border-white/[0.06] bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-12 space-y-1.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Featured Work
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans">
            Production-grade full-stack web applications featuring complete CRUD operations, MVC architecture, secure authentication, and cloud integrations.
          </p>
        </div>

        {/* Compact Projects List */}
        <div className="space-y-6 sm:space-y-10">
          {projectsData.map((project) => {
            const currentImgIndex = activeImageIndexes[project.id] || 0;
            const currentImage = project.images[currentImgIndex];

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#11151c] border border-[#202833] hover:border-white/[0.18] p-4 sm:p-6 lg:p-7 shadow-xl relative overflow-hidden transition-all duration-200"
              >
                {/* Subtle Ambient Warmth Accent */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta-500/[0.025] blur-[100px] pointer-events-none rounded-full" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
                  
                  {/* Left Column: Uniform 16:9 Viewport & Thumbnails (5 cols on lg) */}
                  <div className="lg:col-span-5 flex flex-col space-y-2 w-full">
                    
                    {/* Consistent Window Frame (Fixed 16:9 Aspect Ratio) */}
                    <div className="rounded-xl bg-[#080c12] border border-[#202833] overflow-hidden shadow-lg relative w-full group/preview">
                      
                      {/* Window Header */}
                      <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#141922] border-b border-[#202833] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
                          <span className="ml-1 text-[10px] sm:text-[11px] font-mono text-slate-400 truncate max-w-[130px] sm:max-w-[180px]">
                            {project.title.toLowerCase()}.onrender.com
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <button
                            onClick={() => setSelectedImageModal(currentImage.url)}
                            className="p-0.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                            title="Expand screenshot"
                            aria-label="Expand screenshot"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                          <span className="text-[9.5px] sm:text-[10px] font-mono text-slate-400">
                            0{currentImgIndex + 1} / 0{project.images.length}
                          </span>
                        </div>
                      </div>

                      {/* Main Screenshot Container: Exact 16:9 Aspect Ratio (160-190px on mobile) */}
                      <div className="relative aspect-[16/9] max-h-[220px] sm:max-h-none bg-[#070a0f] overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => setSelectedImageModal(currentImage.url)}>
                        <img
                          key={currentImage.url}
                          src={currentImage.url}
                          alt={`${project.title} - ${currentImage.caption}`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]"
                        />

                        {/* Carousel Navigation Arrows */}
                        <button
                          onClick={(e) => { e.stopPropagation(); prevImage(project.id, project.images.length); }}
                          className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/[0.15] opacity-90 sm:opacity-0 group-hover/preview:opacity-100 transition-all hover:bg-terracotta-500 cursor-pointer"
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </button>

                        <button
                          onClick={(e) => { e.stopPropagation(); nextImage(project.id, project.images.length); }}
                          className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/[0.15] opacity-90 sm:opacity-0 group-hover/preview:opacity-100 transition-all hover:bg-terracotta-500 cursor-pointer"
                          aria-label="Next screenshot"
                        >
                          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </button>

                        {/* Bottom Caption Pill */}
                        <div className="absolute bottom-1 inset-x-1 sm:bottom-1.5 sm:inset-x-1.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-white/[0.08] text-[9.5px] sm:text-[10px] font-mono text-slate-300 text-center truncate">
                          {currentImage.caption}
                        </div>
                      </div>

                    </div>

                    {/* Uniform Thumbnail Gallery Strip */}
                    <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setImage(project.id, idx)}
                          className={`relative w-12 h-7 sm:w-16 sm:h-10 rounded overflow-hidden border shrink-0 transition-all duration-180 cursor-pointer bg-[#070a0f] ${
                            idx === currentImgIndex
                              ? 'border-terracotta-500 ring-1 ring-terracotta-500/40 opacity-100'
                              : 'border-[#202833] opacity-60 hover:opacity-100 hover:border-slate-500'
                          }`}
                          title={img.caption}
                        >
                          <img src={img.url} alt={img.caption} className="w-full h-full object-cover object-top" />
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Project Details (7 cols on lg) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                    
                    <div>
                      {/* Category & Index Meta Header */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9.5px] sm:text-[11px] font-mono text-terracotta-400 font-semibold px-2 py-0.5 rounded bg-terracotta-500/10 border border-terracotta-500/20">
                            {project.badge}
                          </span>
                          <span className="text-[9.5px] sm:text-[11px] font-mono text-slate-300 px-2 py-0.5 rounded bg-[#080c12] border border-[#202833]">
                            {project.category}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {project.number}
                        </span>
                      </div>

                      {/* Project Title & Subtitle */}
                      <div className="mb-1.5">
                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight font-sans">
                          {project.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-mono text-terracotta-400 font-medium mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-2 sm:mb-3">
                        {project.shortDescription}
                      </p>

                      {/* Planned Enhancement (if present) */}
                      {project.plannedFeature && (
                        <div className="p-2 sm:p-2.5 rounded-lg bg-terracotta-500/[0.06] border border-terracotta-500/25 text-xs font-sans text-slate-300 mb-2 sm:mb-3 flex items-start gap-1.5">
                          <span className="text-[9.5px] sm:text-[10px] font-mono text-terracotta-400 font-bold uppercase tracking-wider shrink-0 mt-0.5">
                            PLANNED:
                          </span>
                          <span className="text-[10.5px] sm:text-[11px] text-slate-300">
                            {project.plannedFeature}
                          </span>
                        </div>
                      )}

                      {/* Key Capabilities */}
                      <div className="mb-2 sm:mb-3">
                        <span className="text-[9.5px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                          KEY CAPABILITIES:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 text-xs text-slate-300">
                          {project.keyCapabilities.slice(0, 6).map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-terracotta-400 shrink-0 mt-0.5" />
                              <span className="text-[10.5px] sm:text-xs leading-snug text-slate-300">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 pt-0.5 mb-2 sm:mb-3">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-1.5 sm:px-2 py-0.5 rounded bg-[#080c12] border border-[#202833] text-[9.5px] sm:text-[10px] font-mono text-slate-300 hover:border-terracotta-500/40 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons (Full width / side-by-side on mobile) */}
                    <div className="flex items-center gap-2 sm:gap-2.5 pt-2 border-t border-white/[0.06] w-full">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-slate-200 hover:text-white rounded-lg border border-[#202833] bg-[#080c12] hover:bg-[#151c26] hover:border-terracotta-500/40 btn-interactive text-center"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold text-white rounded-lg bg-terracotta-500 hover:bg-terracotta-600 btn-interactive shadow-sm hover:shadow-[0_0_15px_rgba(240,83,53,0.35)] text-center"
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl border border-white/[0.15] bg-[#0d1117]" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-black/80 text-white border border-white/[0.2] hover:bg-terracotta-500 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            <img src={selectedImageModal} alt="Screenshot Full View" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

    </section>
  );
}