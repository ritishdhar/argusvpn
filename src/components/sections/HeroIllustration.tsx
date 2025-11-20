import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Dust Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatDust ${15 + Math.random() * 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Moving Blurry Orbs around the eye */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        const radius = 250 + (i % 3) * 50;
        const size = 60 + (i % 2) * 30;
        const duration = 20 + (i % 3) * 5;
        return (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-2xl pointer-events-none"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, rgba(139, 92, 246, ${0.3 + (i % 3) * 0.1}), rgba(139, 92, 246, 0))`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
              animation: `orbitOrb ${duration}s infinite linear`,
              animationDelay: `${i * 0.5}s`,
              '--radius': `${radius}px`,
              '--angle': `${angle}deg`,
            } as React.CSSProperties & { '--radius': string; '--angle': string }}
          />
        );
      })}

      {/* The main glowing parabola */}
      <div className="hero-parabola animated-parabola" />
      
      {/* Inverted Parabola Arc - Glowing Curve (Background Layer) */}
      <svg
        className="absolute inset-0 w-[200%] h-full pointer-events-none -z-10"
        style={{ left: '-50%' }}
        viewBox="0 0 2400 1400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for the parabola */}
          <filter id="parabolaGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for the parabola stroke - Soft fade at ends */}
          <linearGradient id="parabolaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="30%" stopColor="rgba(167, 139, 250, 0.6)" />
            <stop offset="50%" stopColor="rgba(196, 181, 253, 1)" />
            <stop offset="70%" stopColor="rgba(167, 139, 250, 0.6)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>

          {/* Additional glow gradient */}
          <radialGradient id="parabolaRadialGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(196, 181, 253, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </radialGradient>
        </defs>

        {/* TOP ARC (Inverted Parabola) - Scaled Down Proportional */}
        <g className="arc-top">
          <path
            className="hero-parabola-path"
            d="M 700,700 Q 1200,300 1700,700"
            fill="none"
            stroke="url(#parabolaGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#parabolaGlow)"
            opacity="0.9"
          />
          <path
            d="M 700,700 Q 1200,300 1700,700"
            fill="none"
            stroke="rgba(196, 181, 253, 0.4)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M 700,700 Q 1200,300 1700,700"
            fill="none"
            stroke="rgba(196, 181, 253, 0.2)"
            strokeWidth="45"
            strokeLinecap="round"
            opacity="0.3"
          />
          <ellipse
            cx="1200"
            cy="500"
            rx="250"
            ry="150"
            fill="url(#parabolaRadialGlow)"
            opacity="0.6"
          />
        </g>

        {/* BOTTOM ARC (Mirrored Parabola) - Scaled Down Proportional */}
        <g className="arc-bottom">
          <path
            className="hero-parabola-path"
            d="M 700,700 Q 1200,1100 1700,700"
            fill="none"
            stroke="url(#parabolaGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#parabolaGlow)"
            opacity="0.9"
          />
          <path
            d="M 700,700 Q 1200,1100 1700,700"
            fill="none"
            stroke="rgba(196, 181, 253, 0.4)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M 700,700 Q 1200,1100 1700,700"
            fill="none"
            stroke="rgba(196, 181, 253, 0.2)"
            strokeWidth="45"
            strokeLinecap="round"
            opacity="0.3"
          />
          <ellipse
            cx="1200"
            cy="900"
            rx="250"
            ry="150"
            fill="url(#parabolaRadialGlow)"
            opacity="0.6"
          />
        </g>
      </svg>
      
      {/* Floating Orb / Tech Eye (Iris) */}
      <div className="hero-floating w-full max-w-2xl mx-auto">
        <svg
          className="hero-magnifying-glass"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <defs>
            {/* Iris Main Gradient */}
            <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="30%" stopColor="#000000" /> {/* Pupil */}
              <stop offset="40%" stopColor="#4c1d95" /> {/* Dark Violet */}
              <stop offset="60%" stopColor="#8b5cf6" /> {/* Bright Violet */}
              <stop offset="80%" stopColor="#6d28d9" /> {/* Mid Violet */}
              <stop offset="95%" stopColor="#1e1b4b" /> {/* Dark Edge */}
            </radialGradient>
            
            {/* Glow Effect */}
            <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Glow Halo */}
          <circle cx="250" cy="250" r="140" fill="rgba(139, 92, 246, 0.1)" filter="url(#eyeGlow)" />
          
          {/* Main Eyeball Body / Sclera Container */}
          <g transform="translate(250 250)">
             {/* Mechanical Outer Ring */}
            <circle r="130" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="20 10" />
            <circle r="120" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="4" />

            {/* The IRIS */}
            <circle r="100" fill="url(#irisGradient)" filter="url(#eyeGlow)" />
            
            {/* Iris Detail Lines (Fibers) */}
            <g opacity="0.4">
              {[...Array(12)].map((_, i) => (
                <path
                  key={i}
                  d="M 0 35 L 0 90"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  transform={`rotate(${i * 30})`}
                />
              ))}
            </g>

            {/* Pupil Highlights / Glint */}
            <circle cx="-20" cy="-20" r="10" fill="rgba(255,255,255,0.8)" filter="url(#eyeGlow)" />
            <circle cx="15" cy="15" r="4" fill="rgba(255,255,255,0.5)" />
            
            {/* Tech Overlay / HUD elements */}
            <path d="M -140 0 A 140 140 0 0 1 140 0" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="2" strokeDasharray="5 5" transform="rotate(45)" />
            <path d="M -140 0 A 140 140 0 0 0 140 0" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="2" strokeDasharray="10 20" transform="rotate(-45)" />
          </g>

          {/* Orbiting particles */}
          <g transform="translate(250 250)">
             <circle r="160" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
             <circle r="190" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="40 60"/>
          </g>
        </svg>
      </div>
    </div>
  );
}
