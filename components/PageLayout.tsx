import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-primary selection:bg-accent-teal/30 selection:text-white relative overflow-x-hidden">
      {/* Background ambient elements wrapper for theme-level opacity/contrast dimming */}
      <div className="spheres-wrapper">
        {/* Soft, large volumetric background blur glows to back-light the glassmorphic panels */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-accent-indigo/10 blur-[120px] pointer-events-none z-0" />
        <div className="fixed top-[20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-accent-teal/8 blur-[130px] pointer-events-none z-0" />
        <div className="fixed bottom-[15%] left-[-15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-accent-violet/6 blur-[140px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-accent-teal/6 blur-[110px] pointer-events-none z-0" />
      </div>
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
