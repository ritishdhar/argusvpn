import { Button } from '@/components/ui/button';
import { AppStoreBadge } from '@/components/icons/AppStoreBadge';
import { GooglePlayBadge } from '@/components/icons/GooglePlayBadge';
import { HeroIllustration } from './HeroIllustration';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight mb-4 hero-h1">
              VPN that simply works
            </h1>
            <p className="text-lg text-muted-foreground mb-2 hero-subtext">
              30-days money back guarantee
            </p>
            <p className="text-lg text-muted-foreground mb-8 hero-subtext">
              Fast. Reliable. Safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="font-bold hero-cta">Install Argus VPN</Button>
            </div>
            <div className="flex gap-4 mt-6 justify-center md:justify-start hero-cta">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <HeroIllustration className="w-full max-w-lg mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
