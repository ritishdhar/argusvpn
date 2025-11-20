import { Button } from '@/components/ui/button';
import { AppStoreBadge } from '@/components/icons/AppStoreBadge';
import { GooglePlayBadge } from '@/components/icons/GooglePlayBadge';
import { HeroIllustration } from './HeroIllustration';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero" style={{ minHeight: 'calc(100vh - 5rem)'}}>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        
        {/* Background Illustration */}
        <div className="absolute inset-0 flex items-center justify-center -z-0">
          <div className="relative w-full max-w-3xl h-full">
            <HeroIllustration className="w-full h-full" />
          </div>
        </div>

        {/* Foreground Text Content */}
        <div className="relative z-10 text-center flex flex-col items-center pt-24 md:pt-32">
          <div className="font-headline text-6xl md:text-8xl font-bold tracking-wider text-white hero-h1 mb-4">
            <span className="inline-block" style={{marginRight: '0.1em'}}>A</span>
            <span className="inline-block" style={{marginRight: '0.1em'}}>R</span>
            <span className="inline-block" style={{marginRight: '0.1em'}}>G</span>
            <span className="inline-block" style={{marginRight: '0.1em'}}>U</span>
            <span className="inline-block">S</span>
          </div>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-2 hero-subtext">
            VPN that simply works
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8 hero-subtext">
            30-days money back guarantee. Fast. Reliable. Safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-bold hero-cta">Install Argus VPN</Button>
          </div>
          <div className="flex gap-4 mt-6 justify-center hero-cta">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>
      </div>
      <div className="animated-semicircle"></div>
    </section>
  );
};

export default Hero;
