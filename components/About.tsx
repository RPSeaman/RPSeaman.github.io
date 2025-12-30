import React from 'react';
import { BIO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-widest">About</h2>
      </div>
      <div className="md:col-span-8">
        <div className="prose prose-invert prose-lg text-text-primary leading-relaxed">
          {BIO.split('\n').map((paragraph, idx) => (
            paragraph.trim() && <p key={idx} className="mb-6 text-2xl font-light">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};