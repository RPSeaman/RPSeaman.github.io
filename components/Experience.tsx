import React from 'react';
import { WORK_EXPERIENCE } from '../constants';

const getOrgLogo = (organization: string) => {
  if (organization.includes('MDI')) {
    return (
      <img 
        src="/images/MDIBL.png" 
        alt="MDI Biological Laboratory" 
        className="w-12 h-12 object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
      />
    );
  } else if (organization.includes('Harvard Medical School')) {
    return (
      <img
        src="/images/HIDIVE.png"
        alt="HIDIVE Lab"
        className="w-12 h-12 object-contain opacity-80 hover:opacity-100 invert grayscale hover:grayscale-0 transition-all duration-500"
      />
    );
  }
  return null;
};

export const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">Journey</p>
        <h2 className="text-3xl font-light text-metallic leading-tight">Work Experience</h2>
      </div>
      <div className="space-y-8 pt-2">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-border-color pl-5 space-y-2">
            <div className="flex items-start gap-4">
              <div className="text-text-secondary flex-shrink-0 pt-0.5">
                {getOrgLogo(exp.organization)}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{exp.position}</h3>
                    <p className="text-base text-text-secondary font-light mt-0.5">{exp.organization}</p>
                  </div>
                  <span className="text-xs font-mono text-text-secondary whitespace-nowrap">{exp.location}</span>
                </div>
                <p className="text-xs font-mono text-text-secondary mt-1">{exp.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
