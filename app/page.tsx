import type { Metadata } from 'next';
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
import { CONTACT_INFO, FAQ, SERVICES, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SITE_LOCALE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Prawo jazdy Chełmża i Toruń | Ośrodek Szkolenia Kierowców Milafiori',
  description:
    'Profesjonalna szkoła nauki jazdy w Chełmży i Toruniu — kursy kat. B, A, A1, A2, lekcje doszkalające i przygotowanie do egzaminu.',
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: SITE_URL,
    title: 'Prawo jazdy Chełmża i Toruń | Ośrodek Szkolenia Kierowców Milafiori',
    description:
      'Profesjonalna szkoła nauki jazdy w Chełmży i Toruniu — kursy kat. B, A, A1, A2, lekcje doszkalające i przygotowanie do egzaminu.',
    images: [
      {
        url: `${SITE_URL}/logo.webp`,
        alt: SITE_NAME,
        width: 225,
        height: 130,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prawo jazdy Chełmża i Toruń | Ośrodek Szkolenia Kierowców Milafiori',
    description:
      'Profesjonalna szkoła nauki jazdy w Chełmży i Toruniu — kursy kat. B, A, A1, A2, lekcje doszkalające i przygotowanie do egzaminu.',
    images: [`${SITE_URL}/logo.webp`],
    creator: '@osk_milafiori',
    site: '@osk_milafiori',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'pl-PL': SITE_URL,
    },
  },
};

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
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: CONTACT_INFO.phone,
          email: CONTACT_INFO.email,
          contactType: 'customer service',
          areaServed: 'PL',
          availableLanguage: ['Polski'],
        },
      ],
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
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}#faq`,
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}#services`,
      serviceType: 'Kurs prawa jazdy',
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: ['Chełmża', 'Toruń'],
      audience: {
        '@type': 'Audience',
        audienceType: 'Kierowcy',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Kursy prawa jazdy',
        itemListElement: SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
          },
        })),
      },
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
