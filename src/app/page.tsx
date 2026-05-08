import { HeroSection } from '@/components/sections/HeroSection';
import { BenefitSection } from '@/components/sections/BenefitSection';
import { UnitsSection } from '@/components/sections/UnitsSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { HowToBuySection } from '@/components/sections/HowToBuySection';
import { GallerySection } from '@/components/sections/GallerySection';
import { KPRCalculator } from '@/components/sections/KPRCalculator';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTAFormSection } from '@/components/sections/CTAFormSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4
                   focus:left-4 focus:z-50 focus:px-4 focus:py-2
                   focus:bg-primary focus:text-white focus:rounded"
      >
        Langsung ke konten utama
      </a>

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <BenefitSection />
        <UnitsSection />
        <LocationSection />
        <HowToBuySection />
        <GallerySection />
        <KPRCalculator />
        <TestimonialSection />
        <FAQSection />
        <CTAFormSection />
      </main>

      <FooterSection />
    </>
  );
}
