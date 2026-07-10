import React from 'react';
import { EDUCATION } from '../constants';

const getSchoolLogo = (school: string) => {
  if (school.includes('Harvard')) {
    return (
      <img 
        src="/images/HMS.png" 
        alt="Harvard Medical School" 
        className="w-12 h-12 object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
      />
    );
  } else if (school.includes('Colby')) {
    return (
      <img 
        src="/images/Colby.png" 
        alt="Colby College" 
        className="w-12 h-12 object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
      />
    );
  }
  return null;
};

export const Education: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">Education</p>
        <h2 className="text-3xl font-light text-metallic leading-tight">Academic Path</h2>
      </div>
      <div className="space-y-8 pt-2">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="border-l-2 border-border-color pl-5 space-y-2">
            <div className="flex items-start gap-4">
              <div className="text-text-secondary flex-shrink-0 pt-0.5">
                {getSchoolLogo(edu.school)}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h3 className="text-xl font-semibold text-text-primary">{edu.school}</h3>
                  <span className="text-xs font-mono text-text-secondary whitespace-nowrap">{edu.location}</span>
                </div>
                <p className="text-base text-text-secondary font-light mt-1">{edu.degree}</p>
                <p className="text-xs font-mono text-text-secondary mt-1">{edu.graduationDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-border-color mt-6">
        <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-3">Academic Focus</p>
        <div className="grid grid-cols-2 gap-3 text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
            <span>Machine Learning & AI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
            <span>Single-Cell Genomics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
            <span>Bioinformatics Pipelines</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
            <span>Clinical Informatics</span>
          </div>
        </div>
      </div>
    </div>
  );
};
