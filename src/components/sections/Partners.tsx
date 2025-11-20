import { HboLogo } from '../icons/HboLogo';
import { HuluLogo } from '../icons/HuluLogo';
import { NetflixLogo } from '../icons/NetflixLogo';
import { PrimeVideoLogo } from '../icons/PrimeVideoLogo';
import { YoutubeLogo } from '../icons/YoutubeLogo';

const partners = [
  { name: 'Netflix', component: NetflixLogo },
  { name: 'YouTube', component: YoutubeLogo },
  { name: 'HBO', component: HboLogo },
  { name: 'Hulu', component: HuluLogo },
  { name: 'Prime Video', component: PrimeVideoLogo },
];

const Partners = () => {
  return (
    <section className="bg-background section-reveal">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-muted-foreground font-semibold mb-8">
          Works With
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
          {partners.map((partner) => (
            <partner.component
              key={partner.name}
              className="h-8 md:h-10 w-auto text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              aria-label={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
