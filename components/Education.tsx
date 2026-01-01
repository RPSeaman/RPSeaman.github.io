import React from 'react';
import { EDUCATION } from '../constants';

const getSchoolLogo = (schoolName: string) => {
  if (schoolName.includes('Harvard')) {
    return (
      <img 
        src="/images/HMS.png" 
        alt="Harvard Medical School" 
        className="w-16 mb-4 opacity-80 hover:opacity-100 transition-opacity grayscale"
      />
    );
  } else if (schoolName.includes('Colby')) {
    return (
      <img 
        src="/images/CC.png" 
        alt="Colby College" 
        className="w-16 mb-4 opacity-80 hover:opacity-100 transition-opacity grayscale"
      />
    );
  }
  return null;
};

export const Education: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-widest">Education</h2>
      </div>
      <div className="md:col-span-8">
        <div className="space-y-12">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="border-l-2 border-border-color pl-6">
              <div className="flex items-start gap-6">
                <div className="text-text-secondary flex-shrink-0">
                  {getSchoolLogo(edu.school)}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className="text-2xl font-semibold text-text-primary">{edu.school}</h3>
                    <span className="text-sm font-mono text-text-secondary whitespace-nowrap">{edu.location}</span>
                  </div>
                  <p className="text-lg text-text-secondary mb-1">{edu.degree}</p>
                  <p className="text-sm font-mono text-text-secondary">{edu.graduationDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
