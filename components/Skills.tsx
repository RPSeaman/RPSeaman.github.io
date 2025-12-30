import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-widest">Expertise</h2>
      </div>
      <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-text-primary font-medium mb-4">{cat}</h3>
            <ul className="space-y-2">
              {SKILLS.filter(s => s.category === cat).map(skill => (
                <li key={skill.name} className="text-text-secondary text-sm font-mono">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};