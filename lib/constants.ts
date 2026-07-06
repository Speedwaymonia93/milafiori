import { Service } from './types';

export const SITE_NAME = 'Ośrodek Szkolenia Kierowców Milafiori';
export const SITE_DESCRIPTION =
  'Profesjonalna szkoła nauki jazdy oferująca kompleksowe kursy i lekcje jazdy w Chełmży i Toruniu i okolicach.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://osk-milafiori.pl';
export const SITE_LOCALE = 'pl_PL';

// Services/Courses offered
export const SERVICES: Service[] = [
  {
    id: 'category-b',
    title: 'Prawo jazdy kategorii B',
    description: 'Standardowe prawo jazdy dla samochodów osobowych',
    features: [
      'Profesjonalni instruktorzy',
      'Nowoczesne pojazdy',
      'Elastyczny harmonogram',
      'Lekcje teoretyczne i praktyczne',
    ],
  },
  {
    id: 'advanced-driving',
    title: 'Zaawansowane techniki jazdy',
    description: 'Zaawansowane umiejętności bezpieczeństwa i manewrowania',
    features: [
      'Ekspercka instrukcja',
      'Techniki defensywnej jazdy',
      'Przygotowanie do jazdy zimowej',
      'Budowanie pewności na autostradzie',
    ],
  },
  {
    id: 'refresher-course',
    title: 'Kurs odświeżający',
    description: 'Aktualizacja umiejętności i wiedzy kierowcy',
    features: [
      'Skupienie na aktualizacjach bezpieczeństwa',
      'Odświeżenie przepisów drogowych',
      'Ocena praktyczna',
      'Spersonalizowana informacja zwrotna',
    ],
  },
  {
    id: 'individual-lessons',
    title: 'Lekcje indywidualne',
    description: 'Indywidualne, spersonalizowane instrukcje',
    features: [
      'Spersonalizowany program nauki',
      'Twoje tempo i harmonogram',
      'Skoncentrowany rozwój umiejętności',
      'Bezpośrednia informacja zwrotna od instruktora',
    ],
  },
];

// FAQ items
export const FAQ = [
  {
    question: 'Jak długo trwa kurs?',
    answer:
      'Nasz standardowy kurs trwa 4-6 tygodni, w zależności od Twojej dostępności i tempa nauki. Lekcje indywidualne można zaplanować zgodnie z Twoim harmonogramem.',
  },
  {
    question: 'Jakie dokumenty muszę przynieść?',
    answer:
      'Będziesz potrzebować ważnego dowodu tożsamości, zaświadczenia lekarskiego (jeśli wymagane) oraz potwierdzenia miejsca zamieszkania. Nasz personel dostarczy pełną listę kontrolną podczas rejestracji.',
  },
  {
    question: 'Czy pojazdy są nowoczesne i dobrze utrzymane?',
    answer:
      'Tak, wszystkie nasze pojazdy są regularnie serwisowane, ubezpieczone i wyposażone w podwójne sterowanie dla bezpieczeństwa. Używamy nowoczesnych, niezawodnych samochodów.',
  },
  {
    question: 'Czy mogę wybrać swojego instruktora?',
    answer:
      'Chociaż staramy się uwzględniać preferencje, dostępność instruktorów zależy od sezonu i Twojego harmonogramu. Zapewniamy ciągłość z tym samym instruktorem, gdy to możliwe.',
  },
  {
    question: 'Jakie są Wasze ceny?',
    answer:
      'Nasze ceny są konkurencyjne i przejrzyste. Skontaktuj się z nami, aby uzyskać szczegółowe informacje o cenach i specjalnych pakietach.',
  },
];

// Contact information
export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'milafiori2024@gmail.com',
  phone: '+48 609 207 867',
  address: 'Chełmża i Toruń, Polska',
  hours: {
    monday: '8:00 - 18:00',
    tuesday: '8:00 - 18:00',
    wednesday: '8:00 - 18:00',
    thursday: '8:00 - 18:00',
    friday: '8:00 - 18:00',
    saturday: '9:00 - 14:00',
    sunday: 'Closed',
  },
};
