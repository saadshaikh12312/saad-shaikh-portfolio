import React from 'react';
import { educationData } from '../../data/education';
import Container from '../../components/layout/Container';
import SectionWrapper from '../../components/layout/SectionWrapper';
import SectionHeading from '../../components/common/SectionHeading';
import EducationCard from '../../components/ui/EducationCard';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <Container>
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="BACKGROUND & CREDENTIALS"
          title="Education"
          description="Verified academic foundation in computer science, software engineering principles, and core mathematics."
          className="max-w-3xl mb-6 sm:mb-12"
        />

        {/* Compact Polished Academic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 max-w-5xl">
          {educationData.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} />
          ))}
        </div>

      </Container>
    </SectionWrapper>
  );
}
