import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PricingSection } from '@/components/PricingSection';
import { GallerySection } from '@/components/GallerySection';
import { LocationsSection } from '@/components/LocationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollRoadIndicator } from '@/components/ScrollRoadIndicator';
import { CONTACT_INFO, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/constants';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone,
      logo: `${SITE_URL}/logo.webp`,
      sameAs: [
        'https://www.facebook.com/',
        'https://www.instagram.com/',
        'https://www.tiktok.com/',
      ],
    },
    {
      '@type': ['LocalBusiness', 'DrivingSchool'],
      '@id': `${SITE_URL}#driving-school`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      areaServed: ['Chełmża', 'Toruń'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chełmża',
        addressCountry: 'PL',
      },
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '14:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'pl-PL',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-white dark:bg-slate-950 focus:outline-none">
        <Navigation />
        <ScrollRoadIndicator />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <LocationsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
