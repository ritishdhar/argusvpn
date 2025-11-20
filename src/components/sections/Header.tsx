"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#upload-analyze', label: 'Analyze Media' },
  { href: '#features', label: 'How It Works' },
  { href: '#counters', label: 'Statistics' },
  { href: '#faq', label: 'FAQ' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // GSAP animations
    const ctx = gsap.context(() => {
      // Idle float animation
      gsap.to(headerRef.current, { 
        y: '+=6', 
        x: '+=4', 
        duration: 4.5, 
        ease: 'sine.inOut', 
        repeat: -1, 
        yoyo: true, 
      });

      // CTA hover animation
      if (ctaRef.current) {
        const cta = ctaRef.current;
        const ctaAnimation = gsap.to(cta, {
          y: -4,
          boxShadow: '0 10px 25px -5px hsla(var(--primary), 0.4)',
          paused: true,
          duration: 0.3,
          ease: 'power2.out',
        });

        cta.addEventListener('mouseenter', () => ctaAnimation.play());
        cta.addEventListener('mouseleave', () => ctaAnimation.reverse());
      }
    }, headerRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "site-header fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto rounded-full",
        "bg-[rgba(12,14,22,0.42)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.06)]",
        "transition-all duration-150 ease-in-out",
        isScrolled ? "h-16 shadow-lg shadow-black/20" : "h-20"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="logo flex items-center gap-2">
            <span className="font-headline text-xl font-bold hidden sm:inline">Truthlens AI</span>
          </Link>

          <nav className="nav-links hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="nav-right hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span>EN</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              ref={ctaRef} 
              className="install-cta"
              onClick={() => {
                document.getElementById('upload-analyze')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Analyze Media
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="p-6">
                  <Link href="/" className="flex items-center gap-2 mb-8">
                    <span className="font-headline text-xl font-bold">Truthlens AI</span>
                  </Link>
                  <nav className="flex flex-col gap-6 mb-8">
                    {navLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => {
                          const element = document.querySelector(link.href);
                          element?.scrollIntoView({ behavior: 'smooth' });
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4">
                    <Button 
                      className="w-full"
                      onClick={() => {
                        document.getElementById('upload-analyze')?.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Analyze Media
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
