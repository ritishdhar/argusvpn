"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/icons/Logo';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#features', label: 'Why Argus VPN' },
  { href: '#pricing', label: 'Cost' },
  { href: '#devices', label: 'Devices' },
  { href: '#support', label: 'Support' },
  { href: '#points', label: 'Get points' },
  { href: '#blog', label: 'Blog' },
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
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="logo flex items-center gap-2">
            <Logo className="h-8 w-auto" />
            <span className="font-headline text-xl font-bold hidden sm:inline">Argus VPN</span>
          </Link>

          <nav className="nav-links hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
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
            <Button variant="ghost" size="sm">Log in</Button>
            <Button ref={ctaRef} className="install-cta">Install Argus VPN</Button>
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
                    <Logo className="h-8 w-auto" />
                    <span className="font-headline text-xl font-bold">Argus VPN</span>
                  </Link>
                  <nav className="flex flex-col gap-6 mb-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4">
                    <Button variant="outline" className="w-full">Log in</Button>
                    <Button className="w-full">Install Argus VPN</Button>
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
