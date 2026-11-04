import React from 'react';
import { experienceData } from '../../data/experience';
import Container from '../../components/layout/Container';
import SectionWrapper from '../../components/layout/SectionWrapper';
import SectionHeading from '../../components/common/SectionHeading';
import ExperienceCard from '../../components/ui/ExperienceCard';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <Container>
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="WORK EXPERIENCE"
          title="Professional Experience"
          description="Practical experience mentoring students, debugging Java codebases, and clarifying core algorithmic concepts."
          className="max-w-3xl mb-6 sm:mb-12"
        />

        {/* Compact Experience Card */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          {experienceData.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>

      </Container>
    </SectionWrapper>
  );
}
