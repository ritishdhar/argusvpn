import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const Cta = () => {
  return (
    <section className="py-16 md:py-24 bg-background section-reveal">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Experience the internet without borders. Secure, fast, and reliable VPN service that simply works.
        </p>
        <Button size="lg" className="font-bold">
          Install Argus VPN
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Cta;
