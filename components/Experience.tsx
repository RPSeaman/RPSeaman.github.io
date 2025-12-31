import React from 'react';
import { WORK_EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-widest">Experience</h2>
      </div>
      <div className="md:col-span-8">
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-border-color pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary">{exp.position}</h3>
                  <p className="text-lg text-text-secondary">{exp.organization}</p>
                </div>
                <span className="text-sm font-mono text-text-secondary whitespace-nowrap">{exp.location}</span>
              </div>
              <p className="text-sm font-mono text-text-secondary">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
