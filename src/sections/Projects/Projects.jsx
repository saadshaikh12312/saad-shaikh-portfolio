import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import { X } from 'lucide-react';
import Container from '../../components/layout/Container';
import SectionWrapper from '../../components/layout/SectionWrapper';
import SectionHeading from '../../components/common/SectionHeading';
import ProjectCard from '../../components/ui/ProjectCard';

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
    <SectionWrapper id="projects">
      <Container>
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="FEATURED PROJECTS"
          title="Featured Work"
          description="Production-grade full-stack web applications featuring complete CRUD operations, MVC architecture, secure authentication, and cloud integrations."
          className="max-w-3xl mb-6 sm:mb-12"
        />

        {/* Compact Projects List */}
        <div className="space-y-6 sm:space-y-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              currentImgIndex={activeImageIndexes[project.id] || 0}
              onPrevImage={() => prevImage(project.id, project.images.length)}
              onNextImage={() => nextImage(project.id, project.images.length)}
              onSetImage={(idx) => setImage(project.id, idx)}
              onExpandModal={(url) => setSelectedImageModal(url)}
            />
          ))}
        </div>

      </Container>

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
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
            <img src={selectedImageModal} alt="Screenshot Full View" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

    </SectionWrapper>
  );
}
