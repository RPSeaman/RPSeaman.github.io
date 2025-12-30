import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-widest">Contact</h2>
      </div>

      <div className="md:col-span-8 max-w-lg">
        <p className="text-2xl text-text-primary font-light mb-12">
          Lets get in contact!<br />
          <a href="mailto:ryan.patrick.seaman@gmail.com" className="border-b border-text-secondary hover:border-text-primary transition-colors">ryan.patrick.seaman@gmail.com</a>
        </p>
      </div>
    </div>
  );
};