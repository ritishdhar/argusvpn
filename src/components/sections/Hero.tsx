"use client";

import { Button } from '@/components/ui/button';
import { HeroIllustration } from './HeroIllustration';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative flex items-center justify-center overflow-hidden bg-background" style={{ minHeight: '100vh'}}>
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        
        {/* Background Illustration */}
        <div className="absolute inset-0 flex items-center justify-center -z-0 opacity-40">
          <div className="relative w-full h-full">
            <HeroIllustration className="w-full h-full" />
          </div>
        </div>

        {/* Foreground Text Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center pt-24">
          <div className="font-headline text-6xl md:text-8xl font-bold text-white hero-h1 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            TRUTHLENS
          </div>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 hero-subtext" style={{ fontFamily: "'Inter', sans-serif" }}>
            Explainable Deepfake Detection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="font-bold hero-cta"
              onClick={() => {
                document.getElementById('upload-analyze')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Analyze Media
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <button
            onClick={() => {
              document.getElementById('upload-analyze')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
