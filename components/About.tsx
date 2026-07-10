import React from 'react';
import { BIO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">About</p>
        <h2 className="text-3xl font-light text-metallic leading-tight">Bio</h2>
      </div>
      <div className="prose prose-invert prose-lg text-text-primary leading-relaxed">
        {BIO.split('\n').map((paragraph, idx) => (
          paragraph.trim() && <p key={idx} className="text-lg md:text-xl font-light text-text-secondary mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};