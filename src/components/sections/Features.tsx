import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureAnonymousIcon } from '../icons/FeatureAnonymousIcon';
import { FeatureDataProtectionIcon } from '../icons/FeatureDataProtectionIcon';
import { FeatureFastIcon } from '../icons/FeatureFastIcon';

const features = [
  {
    icon: FeatureDataProtectionIcon,
    title: "Data Protection",
    description: "Military-grade encryption to secure your internet connection and keep your data safe from prying eyes."
  },
  {
    icon: FeatureFastIcon,
    title: "Super-fast",
    description: "Enjoy a high-speed, stable connection for seamless streaming, gaming, and browsing without any buffering."
  },
  {
    icon: FeatureAnonymousIcon,
    title: "Completely anonymous",
    description: "Our strict no-logs policy ensures your online activities are never recorded, giving you complete privacy."
  }
];

const Features = () => {
  return (
    <section className="bg-card features-section section-reveal py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Why Argus VPN?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We provide a top-tier VPN service with features designed for speed, security, and simplicity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-background border-border hover:border-primary/50 transition-colors duration-300 feature-card">
              <CardHeader className="items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
