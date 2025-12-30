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

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono text-text-secondary uppercase">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border-color py-2 text-text-primary focus:outline-none focus:border-text-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-text-secondary uppercase">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-border-color py-2 text-text-primary focus:outline-none focus:border-text-primary transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-text-secondary uppercase">Message</label>
            <textarea className="w-full bg-transparent border-b border-border-color py-2 text-text-primary focus:outline-none focus:border-text-primary transition-colors h-24 resize-none"></textarea>
          </div>
          <button className="px-8 py-3 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};