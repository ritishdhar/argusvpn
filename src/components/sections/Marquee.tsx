"use client";

import React from 'react';

const Marquee = () => {
  const text = "Deepfake Detection • AI-Powered Analysis • Real-Time Results • Trusted Technology • Advanced Algorithms • Secure Processing";
  
  return (
    <div className="w-full overflow-hidden bg-background border-y border-border/50 py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex shrink-0">
          <span className="text-4xl md:text-5xl font-bold mx-8 text-foreground" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.1em' }}>
            {text}
          </span>
          <span className="text-4xl md:text-5xl font-bold mx-8 text-foreground" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.1em' }}>
            {text}
          </span>
        </div>
        <div className="flex shrink-0">
          <span className="text-4xl md:text-5xl font-bold mx-8 text-foreground" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.1em' }}>
            {text}
          </span>
          <span className="text-4xl md:text-5xl font-bold mx-8 text-foreground" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.1em' }}>
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

