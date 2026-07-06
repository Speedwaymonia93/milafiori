import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL, SITE_LOCALE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Obowiązek Informacyjny | OSK Milafiori',
  description: 'Obowiązek informacyjny OSK Milafiori - informacje dotyczące przetwarzania danych osobowych zgodnie z RODO.',
  openGraph: {
    type: 'article',
    locale: SITE_LOCALE,
    url: `${SITE_URL}/obowiazek-informacyjny`,
    title: 'Obowiązek Informacyjny | OSK Milafiori',
    description: 'Obowiązek informacyjny OSK Milafiori - informacje dotyczące przetwarzania danych osobowych zgodnie z RODO.',
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
    title: 'Obowiązek Informacyjny | OSK Milafiori',
    description: 'Obowiązek informacyjny OSK Milafiori - informacje dotyczące przetwarzania danych osobowych zgodnie z RODO.',
    images: [`${SITE_URL}/logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/obowiazek-informacyjny`,
  },
};

export default function InformationObligationPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="container-section">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            ← Powrót
          </Link>
        </div>

        {/* Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Obowiązek Informacyjny</h1>
            <p className="text-gray-600 dark:text-slate-400">Informacje dotyczące przetwarzania danych osobowych</p>
            <p className="text-gray-600 dark:text-slate-400">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-slate dark:prose-invert text-gray-700 dark:text-slate-300 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Obowiązek Informacyjny</h2>
              
              <p>
                Administratorem danych osobowych Użytkownika udostępnionych za pośredctwem Serwisu, czyli podmiotem decydującym o celach i sposobach ich przetwarzania, jest &quot;MILAFIORI&quot; MARCIN HOFFMANN, ul. Ks. Stefana Wincentego Frelichowskiego 14/19, 87-140 Chełmża, NIP 8792375204, (dalej jako Administrator).
              </p>

              <p>
                Podane przez Użytkownika dane osobowe są przetwarzane przez Administratora na podstawie zgody wyrażonej przez Użytkownika, w rozumieniu art. 6 ust. 1 lit. a) Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE - zwanego dalej RODO.
              </p>

              <p>
                Podanie danych osobowych za pośrednictwem Serwisu jest dobrowolne. Użytkownik ma prawo do cofnięcia wyrażonej zgody w dowolnym momencie poprzez kontakt z Administratorem <a href="mailto:milafiori2024@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">milafiori2024@gmail.com</a>, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.
              </p>

              <p>
                Użytkownikowi przysługuje prawo dostępu do swoich danych osobowych w każdym czasie, ich sprostowania, usunięcia lub ograniczenia przetwarzania oraz prawo do wniesienia sprzeciwu wobec przetwarzania, a także prawo do przenoszenia danych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cele przetwarzania danych</h2>
              
              <p>
                Administrator przetwarza dane osobowe Użytkownika Serwisu w następujących celach:
              </p>

              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Komunikacji z Użytkownikiem, w szczególności obsługi reklamacji dotyczących produktów lub usług Administratora</li>
                <li>Przedstawiania Użytkownikowi ofert handlowych drogą elektroniczną</li>
                <li>Przedstawiania Użytkownikowi ofert handlowych w kontakcie telefonicznym</li>
              </ul>

              <p className="mt-6">
                Administrator może przetwarzać dane osobowe Użytkownika pozyskane za pośrednictwem Serwisu również w następujących celach:
              </p>

              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>w celu zawarcia i realizacji ewentualnej umowy pomiędzy Użytkownikiem a Administratorem oraz obsługi Użytkownika jako klienta Administratora zgodnie z art. 6 ust. 1 lit. b) RODO</li>
                <li>w celu prowadzenia rozliczeń finansowych z Użytkownikiem będącym klientem Administratora tytułem realizacji ewentualnej umowy zawartej między stronami, a także ewentualnego dochodzenia roszczeń od Użytkownika będącego klientem w ramach prawnie uzasadnionego interesu Administratora zgodnie z art. 6 ust. 1 lit. f) RODO oraz spełnienia obowiązków prawnych Administratora wobec organów podatkowych na podstawie odrębnych przepisów zgodnie z art. 6 ust. 1 lit. c) RODO</li>
                <li>w celu realizacji działań marketingowych Administratora w ramach prawnie uzasadnionego interesu Administratora w rozumieniu art. 6 ust. 1 lit. f) RODO, a także zgodnie z oświadczeniami woli dotyczącymi komunikacji marketingowej złożonymi wobec Administratora. Zgody udzielone w zakresie komunikacji marketingowej mogą być wycofane w dowolnym czasie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem</li>
                <li>w celu realizacji obowiązków prawnych Administratora wobec Użytkownika określonych w RODO, w rozumieniu art. 6 ust. 1 lit. c) RODO</li>
              </ul>

              <p className="mt-6">
                Więcej informacji dotyczących powyższych celów przetwarzania danych osobowych Użytkownika znajduje się w Polityce prywatności opublikowanej w Serwisie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Odbiorcy danych</h2>
              
              <p>
                Dane osobowe Użytkownika nie są przekazywane przez Administratora podmiotom trzecim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Okres przechowywania danych</h2>
              
              <p>
                Administrator przechowuje dane osobowe przez taki okres, jaki jest konieczny do osiągnięcia określonych celów, tj.:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>w przypadku świadczenia usługi/dostarczenia produktu na rzecz Użytkownika - przez okres niezbędny dla realizacji przez Administratora zamówionej usługi bądź dostarczenia produktu na rzecz Użytkownika</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Kontakt z Administratorem</h2>
              
              <p>
                W przypadku jakichkolwiek pytań lub problemów związanych z przetwarzaniem danych osobowych należy kontaktować się z Administratorem pod następującym adresem:
              </p>

              <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg mt-4">
                <p>ul. Ks. Stefana Wincentego Frelichowskiego 14/19, 87-140 Chełmża</p>
                <p>
                  Email: <a href="mailto:milafiori2024@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">milafiori2024@gmail.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Skargi do organu nadzoru</h2>
              
              <p>
                Użytkownik ma prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
              </p>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-300 dark:border-slate-700">
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Wszelkie prawa zastrzeżone © 2023 WeNet Group S.A.
              </p>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            >
              ← Powrót do formularza
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
