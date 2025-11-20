"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from '@/components/Preloader';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import UploadAnalyze from '@/components/sections/UploadAnalyze';
import Marquee from '@/components/sections/Marquee';
import Features from '@/components/sections/Features';
import Counters from '@/components/sections/Counters';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import { useIsMobile } from '@/hooks/use-mobile';
import Footer from '@/components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const comp = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    let handleMouseMove: (e: MouseEvent) => void;

    let ctx = gsap.context(() => {
      // --- PRELOADER ---
      const preloader = document.getElementById('preloader');
      if (preloader) {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.8,
          delay: 0.9,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(preloader, { display: 'none' });
          },
        });
      }
      
      const timeline = gsap.timeline({ delay: 1.1 });

      // --- HERO ANIMATION ---
      timeline
        .from(".hero-h1 span", {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
        })
        .from(".hero-subtext", {
          y: 20,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
        }, "-=0.4")
        .from(".hero-cta", {
          scale: 0.95,
          opacity: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power2.out',
        }, "-=0.3")
        // Eye Blink Animation - Slower and smoother
        // Top arc (eyelid) moves down gracefully
        .fromTo('.arc-top', 
          { y: 200, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 2.2, ease: 'power2.out' }, 
          0.5)
        // Bottom arc (eyelid) moves up at the same time
        .fromTo('.arc-bottom', 
          { y: -200, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 2.2, ease: 'power2.out' }, 
          '<')
        // Eyeball scales in smoothly after the eyelids start opening
        .fromTo('.hero-floating', 
          { scale: 0.3, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' }, 
          '<0.6')
        // Background glow fades in gently
        .fromTo('.hero-parabola', 
          { opacity: 0 }, 
          { opacity: 1, duration: 2, ease: 'sine.inOut' }, 
          '<');


      // --- HERO FLOATING ANIMATION ---
      // Run unconditionally
      gsap.fromTo('.hero-floating', 
        { x: -40 }, 
        {
          x: 40,    
          duration: 5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.to('.hero-floating', {
        rotation: 5,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Mouse interaction 
      handleMouseMove = (e: MouseEvent) => {
        // Only run on non-mobile devices
        if (window.innerWidth < 768) return;

        const { clientX, clientY } = e;
        // Normalize to -0.5 to 0.5
        const x = clientX / window.innerWidth - 0.5;
        const y = clientY / window.innerHeight - 0.5;

        // Target the inner SVG (.hero-magnifying-glass)
        // Use overwrite: 'auto' to prevent conflict if any other tween touches this
        gsap.to('.hero-magnifying-glass', {
          x: x * 250, // Horizontal range ±125px
          y: y * 80,  // Vertical range ±40px (Constrained)
          rotation: (x + y) * 20,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // --- SCROLL TRIGGERS ---
      const sections = gsap.utils.toArray('.section-reveal');
      sections.forEach((section: any) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
      
      const featureCards = gsap.utils.toArray('.feature-card');
      gsap.from(featureCards, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      });
      
      const faqItems = gsap.utils.toArray('.faq-item');
      gsap.from(faqItems, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      });

    }, comp);

    return () => {
      if (handleMouseMove) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      ctx.revert();
    };
  }, []); // Empty dependency array ensures it runs once

  return (
    <div ref={comp} className="bg-background">
      <Preloader />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <div>
            <UploadAnalyze />
            <Marquee />
            <Features />
            <div className="space-y-24 md:space-y-32">
              <Counters />
              <Faq />
              <Cta />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
