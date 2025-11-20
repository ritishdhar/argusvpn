"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const Cta = () => {
  return (
    <section id="cta" className="bg-background section-reveal">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
          Ready to detect deepfakes?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Upload a video or use your webcam to instantly check whether it's real, fake, or uncertain. Get transparent, visual AI results with detailed evidence and confidence scores.
        </p>
        <Button 
          size="lg" 
          className="font-bold"
          onClick={() => {
            document.getElementById('upload-analyze')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Analyze Media
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Cta;
