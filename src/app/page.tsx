"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from '@/components/Preloader';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import Features from '@/components/sections/Features';
import Counters from '@/components/sections/Counters';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
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
        .from(".hero-h1", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
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
        }, "-=0.3");

      // --- CONTINUOUS ANIMATION ---
      gsap.to(".hero-illustration-float", {
        x: '+=20',
        y: '-=10',
        rotation: 0.8,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        duration: 3.6,
      });

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

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <Preloader />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Partners />
          <Features />
          <Counters />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
