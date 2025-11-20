import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureAnonymousIcon } from '../icons/FeatureAnonymousIcon';
import { FeatureDataProtectionIcon } from '../icons/FeatureDataProtectionIcon';
import { FeatureFastIcon } from '../icons/FeatureFastIcon';

const features = [
  {
    icon: FeatureDataProtectionIcon,
    title: "Appearance Analysis (CLIP / LN-Tuned)",
    description: "Identifies semantic inconsistencies in facial features and textures using a CLIP-based visual encoder tuned for deepfake detection."
  },
  {
    icon: FeatureFastIcon,
    title: "Frequency Artifact Detection (GANDCTAnalysis)",
    description: "Analyzes DCT coefficients in image frames to spot subtle GAN-generated artifacts invisible in the pixel domain."
  },
  {
    icon: FeatureAnonymousIcon,
    title: "Audio-Visual Sync Verification (SyncNet)",
    description: "Measures alignment between mouth movements and speech to detect re-dubbed or lip-synced fakes."
  },
  {
    icon: FeatureDataProtectionIcon,
    title: "Audio Authenticity Check",
    description: "Evaluates the speech track using mel-spectrogram analysis or a lightweight CNN to detect synthetic audio."
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-card features-section section-reveal py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">How Truthlens AI Works?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our multimodal AI pipeline combines appearance analysis, frequency detection, and audio-visual synchronization to provide transparent, explainable deepfake detection results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-background border-border hover:border-primary/50 transition-colors duration-300 feature-card rounded-xl">
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
