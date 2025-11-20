import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* The main glowing arc */}
      <svg
        className="hero-arc absolute top-0 w-full h-auto"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <radialGradient
            id="arc-gradient"
            cx="50%"
            cy="0"
            r="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="1" />
            <stop offset="0.6" stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="arc-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-200 650 C 300 -100, 1140 -100, 1640 650"
          stroke="url(#arc-gradient)"
          strokeWidth="2"
          filter="url(#arc-glow)"
        />
      </svg>
      
      {/* Floating Orb / Magnifying Glass */}
      <div className="hero-floating hero-floating-fallback w-full max-w-lg mx-auto">
        <svg
          className="hero-magnifying-glass"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(138, 43, 226, 0.3)" />
              <stop offset="100%" stopColor="rgba(74, 0, 224, 0.3)" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Background Glow */}
          <circle cx="250" cy="250" r="150" fill="url(#grad1)" filter="url(#glow)" />
    
          {/* Main element */}
          <g style={{ willChange: 'transform' }}>
            <path
              d="M250 100 Q180 180 250 250 Q320 180 250 100 Z"
              fill="rgba(255, 255, 255, 0.1)"
            />
            <path
              d="M250 400 Q180 320 250 250 Q320 320 250 400 Z"
              fill="rgba(255, 255, 255, 0.1)"
            />
            <path
              d="M100 250 Q180 180 250 250 Q180 320 100 250 Z"
              fill="rgba(255, 255, 255, 0.1)"
            />
            <path
              d="M400 250 Q320 180 250 250 Q320 320 400 250 Z"
              fill="rgba(255, 255, 255, 0.1)"
            />
            <circle cx="250" cy="250" r="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            <circle cx="250" cy="250" r="75" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
    
            {/* Inner details */}
            <circle cx="250" cy="250" r="10" fill="hsl(var(--primary))" />
            <path d="M250 170 L250 330" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M170 250 L330 250" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
          </g>
          
          {/* Orbiting particles */}
          <circle cx="250" cy="250" r="120" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 8"/>
          <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 10"/>
          
        </svg>
      </div>
    </div>
  );
}
