"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, MapPin, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const counters = [
  { id: 'locations', value: 50, label: 'Locations', icon: MapPin },
  { id: 'countries', value: 40, label: 'Country locations', icon: Globe },
  { id: 'servers', value: 1200, label: 'Servers', icon: Server },
];

const CounterItem = ({ id, value, label, Icon }: { id: string; value: number; label: string; Icon: React.ElementType }) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const counter = { val: 0 };
    
    gsap.to(counter, {
      val: value,
      duration: 1.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        el.textContent = Math.floor(counter.val).toLocaleString();
      },
    });
  }, [value]);

  return (
    <Card className="bg-transparent border-0 text-center flex flex-col items-center">
      <CardHeader className="p-0 mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="font-headline text-4xl md:text-5xl font-bold">
          <span ref={countRef}>0</span>+
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
};

const Counters = () => {
  return (
    <section className="bg-background section-reveal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {counters.map((counter) => (
            <CounterItem key={counter.id} id={counter.id} value={counter.value} label={counter.label} Icon={counter.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
