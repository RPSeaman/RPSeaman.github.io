import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-6 flex flex-col h-full justify-between">
      <div>
        <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">Contact</p>
        <h2 className="text-3xl font-light text-metallic leading-tight">Let's Connect</h2>
      </div>
      <div className="pt-2">
        <p className="text-base text-text-secondary font-light mb-6">
          Have a question or want to work together?
        </p>
        <a 
          href="mailto:ryan.patrick.seaman@gmail.com" 
          className="w-full px-5 py-2.5 rounded-full glass-panel-nested glass-panel-nested-hover border border-white/10 hover:border-accent-teal/30 text-text-primary text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_rgba(0,0,0,0.15)] group"
        >
          <Mail className="w-4 h-4 text-accent-teal group-hover:scale-110 transition-transform" />
          <span>Email Me</span>
          <ArrowRight className="w-4 h-4 text-text-secondary group-hover:translate-x-1 transition-transform ml-auto" />
        </a>
        <p className="text-xs font-mono text-text-secondary/60 text-center mt-4">
          ryan.patrick.seaman@gmail.com
        </p>
      </div>
    </div>
  );
};