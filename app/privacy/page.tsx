import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Polityka Prywatności | OSK Milafiori',
  description: 'Polityka prywatności OSK Milafiori - informacje o przetwarzaniu danych osobowych.',
};

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Polityka Prywatności</h1>
            <p className="text-gray-600 dark:text-slate-400">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-slate dark:prose-invert text-gray-700 dark:text-slate-300 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">POLITYKA PRYWATNOŚCI SERWISU oskmilafiori.pl</h2>
              
              <p>
                Ochrona prywatności Użytkowników jest dla "MILAFIORI" MARCIN HOFFMANN szczególnie ważna. Z tego względu Użytkownicy Serwisu oskmilafiori.pl mają zagwarantowane wysokie standardy ochrony prywatności. "MILAFIORI" MARCIN HOFFMANN jako Administrator danych dba o bezpieczeństwo udostępnionych przez Użytkowników danych.
              </p>

              <p>
                Celem Administratora jest również należyte informowanie Użytkowników o prawach i obowiązkach związanych z przetwarzaniem danych osobowych, szczególnie wobec treści przepisów o ochronie danych osobowych określonych w rozporządzeniu Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27.04.2016r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej jako „RODO"). Dlatego też, dbając o ochronę prywatności Użytkowników Serwisu, w niniejszym dokumencie Administrator informuje o podstawach prawnych przetwarzania danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z Serwisu oskmilafiori.pl (dalej jako „Serwis"), sposobach zbierania, przetwarzania i ochrony danych osobowych, a także o prawach Użytkowników.
              </p>

              <p>
                Użytkownikiem jest każda osoba fizyczna, której dane dotyczą, korzystająca z serwisu internetowego oskmilafiori.pl lub usług elektronicznych dostępnych za pośrednictwem Serwisu.
              </p>

              <p>
                Administratorem danych osobowych udostępnionych przez Użytkownika w Serwisie oskmilafiori.pl jest "MILAFIORI" MARCIN HOFFMANN, ul. Ks. Stefana Wincentego Frelichowskiego 14/19, 87-140 Chełmża, NIP 8792375204, (dalej jako „Administrator").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">ZGODA UŻYTKOWNIKA</h2>
              
              <p>
                Korzystanie z Serwisu oskmilafiori.pl przez Użytkownika oznacza, że Użytkownik akceptuje, że Administrator gromadzi oraz wykorzystuje dane osobowe zgodnie z niniejszą Polityką Prywatności.
              </p>

              <p>
                Dane osobowe Użytkownika Serwisu są przetwarzane przez Administratora w oparciu o jego zgodę, zaś w niektórych przypadkach opisanych w niniejszym dokumencie, w ramach prawnie uzasadnionego interesu Administratora. Użytkownik ma prawo w dowolnym momencie wycofać wyrażoną wcześniej zgodę. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.
              </p>

              <p>
                W przypadku, gdy nastąpi zmiana niniejszej Polityki Prywatności, a Użytkownik nadal będzie korzystał z Serwisu, to poczytuje się to za wyrażenie zgody na aktualne warunki Polityki Prywatności.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">DANE OSOBOWE PRZETWARZANE PRZEZ ADMINISTRATORA</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Sposób pozyskiwania danych osobowych</h3>
              <p>
                Administrator pozyskuje dane osobowe bezpośrednio od Użytkownika za pośrednictwem Serwisu, poprzez dostępne w nim funkcjonalności i narzędzia do komunikacji oraz przesłanie za ich pośrednictwem wiadomości do Administratora.
              </p>
              <p>
                Podanie danych osobowych przez Użytkownika jest dobrowolne.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">Rodzaje przetwarzanych danych osobowych</h3>
              <p>
                Administrator gromadzi za pośrednictwem Serwisu następujące dane osobowe dotyczące Użytkownika:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Treść wiadomości</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">CELE PRZETWARZANIA DANYCH OSOBOWYCH</h2>
              
              <p>
                Sposób przetwarzania przez Administratora danych dotyczących Użytkownika zależy od sposobu korzystania przez Użytkownika z Serwisu i dostępnych w nim funkcjonalności. Administrator przetwarza dane osobowe Użytkownika w następujących celach:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-4">Komunikacji z Użytkownikiem</h3>
              <p>
                Administrator wykorzystuje dane osobowe Użytkownika w celu komunikacji z nim w spersonalizowany sposób. Komunikowane Użytkownikowi informacje dotyczą oferowanych produktów lub usług, bezpieczeństwa danych osobowych, aktualizacji sieci, przypomnień, ale również sugerowanych ofert Administratora lub jego partnerów. Komunikacja z Użytkownikiem dotyczy także obsługi Użytkownika. Dane osobowe wykorzystywane są w celu pomocy Użytkownikowi, rozwiązaniu problemów technicznych oraz odpowiedzi na jego skargi lub reklamacje.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-4">Przedstawiania Użytkownikowi ofert handlowych drogą elektroniczną</h3>
              <p>
                Celem korzystania z danych osobowych Użytkownika udostępnionych przez niego za pośrednictwem funkcjonalności i narzędzi do komunikacji dostępnych w Serwisie jest komunikacja marketingowa prowadzona przez Administratora w ramach prowadzonej działalności, w szczególności przedstawianie ofert handlowych Użytkownikowi drogą elektroniczną.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-4">Przedstawiania Użytkownikowi ofert handlowych w kontakcie telefonicznym</h3>
              <p>
                Celem korzystania z danych osobowych Użytkownika udostępnionych przez niego za pośrednictwem funkcjonalności i narzędzi do komunikacji dostępnych w Serwisie jest komunikacja marketingowa prowadzona przez Administratora w ramach prowadzonej działalności, w szczególności poprzez przedstawianie ofert handlowych Użytkownikowi w kontakcie telefonicznym.
              </p>

              <p className="mt-6">
                Administrator może przetwarzać dane osobowe Użytkownika pozyskane za pośrednictwem Serwisu również w następujących celach:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4 mt-4">
                <li>w celu zawarcia i realizacji ewentualnej umowy pomiędzy Użytkownikiem a Administratorem oraz obsługi Użytkownika jako klienta Administratora zgodnie z art. 6 ust. 1 lit. b) RODO</li>
                <li>w celu prowadzenia rozliczeń finansowych z Użytkownikiem będącym klientem Administratora tytułem realizacji ewentualnej umowy zawartej między stronami, a także ewentualnego dochodzenia roszczeń od Użytkownika będącego klientem w ramach prawnie uzasadnionego interesu Administratora zgodnie z art. 6 ust. 1 lit. f) RODO oraz spełnienia obowiązków prawnych Administratora wobec organów podatkowych na podstawie odrębnych przepisów zgodnie z art. 6 ust. 1 lit. c) RODO</li>
                <li>w celu realizacji działań marketingowych Administratora w ramach prawnie uzasadnionego interesu Administratora w rozumieniu art. 6 ust. 1 lit. f) RODO, a także zgodnie z oświadczeniami woli dotyczącymi komunikacji marketingowej złożonymi wobec Administratora. Zgody udzielone w zakresie komunikacji marketingowej mogą być wycofane w dowolnym czasie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem</li>
                <li>w celu realizacji obowiązków prawnych Administratora wobec Użytkownika określonych w RODO, w rozumieniu art. 6 ust. 1 lit. c) RODO</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">UDOSTĘPNIANIE DANYCH OSOBOWYCH</h2>
              
              <p>
                Dane osobowe Użytkownika nie są przekazywane przez Administratora podmiotom trzecim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">PRAWA UŻYTKOWNIKA</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Prawa Użytkownika</h3>
              <p>
                Użytkownik na każdym etapie przetwarzania jego danych zapewniony ma szereg uprawnień pozwalających mu uzyskać dostęp do swoich danych, weryfikację prawidłowości przetwarzania danych, ich korektę, jak również ma prawo zgłoszenia sprzeciwu wobec ich przetwarzania, może żądać usunięcia danych, ograniczenia przetwarzania lub przeniesienia danych.
              </p>

              <p>
                W przypadku chęci skorzystania przez Użytkownika z przysługujących mu praw jako podmiotu danych osobowych, może on się skontaktować z Administratorem za pomocą następujących danych kontaktowych: "MILAFIORI" MARCIN HOFFMANN, ul. Ks. Stefana Wincentego Frelichowskiego 14/19, 87-140 Chełmża, <a href="mailto:milafiori2024@gmil.com" className="text-blue-600 dark:text-blue-400 hover:underline">milafiori2024@gmil.com</a>.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">Prawo wniesienia skargi do organu nadzorczego</h3>
              <p>
                Użytkownik, którego dane osobowe są przetwarzane przez Administratora ma prawo wnieść skargę do organu nadzoru właściwego w sprawach ochrony danych osobowych (Prezesa Urzędu Ochrony Danych Osobowych).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">PLIKI COOKIES</h2>
              
              <p>
                Administrator informuje, iż podczas korzystania z Serwisu w urządzeniu końcowym Użytkownika zapisywane są krótkie informacje tekstowe zwane „cookies". Pliki „cookies" zawierają takie dane informatyczne jak: adres IP dotyczący Użytkownika, nazwa strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym Użytkownika, zapis parametrów i statystyki oraz unikalny numer. Pliki „cookies" są kierowane do serwera Serwisu za pośrednictwem przeglądarki internetowej zainstalowanej w urządzeniu końcowym Użytkownika.
              </p>

              <p>
                Pliki „cookies" wykorzystywane są w Serwisie w celu:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>utrzymania technicznej poprawności i ciągłości sesji pomiędzy serwerem Serwisu a urządzeniem końcowym Użytkownika</li>
                <li>optymalizacji korzystania przez Użytkownika ze stron internetowych Serwisu i dostosowania sposobu ich wyświetlania na urządzeniu końcowym Użytkownika</li>
                <li>zapewnienia bezpieczeństwa korzystania z Serwisu</li>
                <li>zbierania statystyk odwiedzin stron Serwisu wspierających ulepszanie ich struktury i zawartości</li>
                <li>wyświetlania na urządzeniu końcowym Użytkownika treści reklamowych optymalnie dostosowanych do jego preferencji</li>
              </ul>

              <p className="mt-4">
                W ramach Serwisu stosowane są dwa rodzaje plików „cookies": „sesyjne" oraz „stałe". „Sesyjne" pliki „cookies" są plikami ulegającymi automatycznemu usunięciu z urządzenia końcowego Użytkownika Serwisu po jego wylogowaniu z Serwisu lub po opuszczeniu przez niego stron internetowych Serwisu lub po wyłączeniu przeglądarki internetowej. „Stałe" pliki „cookies" przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików „cookies" lub do czasu ich usunięcia przez Użytkownika. „Stałe" pliki „cookies" instalowane są w urządzeniu końcowym Użytkownika wyłącznie za jego zgodą.
              </p>

              <p className="mt-4">
                Administrator informuje, że:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>przeglądarki internetowe domyślnie akceptują instalowanie plików „cookies" w urządzeniu końcowym Użytkownika. Każdy Użytkownik Serwisu może dokonać w dowolnym czasie zmiany ustawień dotyczących plików „cookies" w używanej przez niego przeglądarce internetowej</li>
                <li>ograniczenie stosowania plików „cookies" przez Użytkownika może ujemnie wpłynąć na poprawność i ciągłość świadczenia Usług w Serwisie</li>
                <li>pliki „cookies" zainstalowane w urządzeniu końcowym Użytkownika Serwisu mogą być wykorzystywane przez współpracujących z Administratorem reklamodawców lub partnerów biznesowych</li>
                <li>pliki „cookies" można uznać za dane osobowe jedynie w powiązaniu z innymi danymi identyfikującymi tożsamość, udostępnionymi Administratorowi przez Użytkownika w ramach korzystania z Serwisu</li>
                <li>dostęp do plików „cookies" przetwarzanych przez serwer Serwisu posiada wyłącznie Administrator</li>
                <li>jeśli Użytkownik nie zgadza się na zapisywanie i odbieranie informacji w plikach „cookies", może zmienić zasady dotyczące plików „cookies" za pomocą ustawień swojej przeglądarki internetowej</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">INNE WAŻNE INFORMACJE</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Ochrona bezpieczeństwa danych osobowych</h3>
              <p>
                Administrator wprowadza odpowiednie środki mające na celu zapewnienie bezpieczeństwa danych osobowych Użytkownika. Bezpieczne korzystanie z Serwisu zapewniają stosowane systemy oraz procedury chroniące przed dostępem oraz ujawnieniem danych osobom niepożądanym. Ponadto stosowane przez Administratora systemy oraz procesy są regularnie monitorowane w celu wykrycia ewentualnych zagrożeń. Pozyskane przez Administratora dane osobowe przechowywane są w systemach komputerowych, do których dostęp jest ściśle ograniczony.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">Przechowywanie danych osobowych</h3>
              <p>
                Okres przechowywania danych osobowych Użytkowników uzależniony jest od celów przetwarzania przez Administratora danych.
              </p>
              <p>
                Administrator przechowuje dane osobowe przez taki okres, jaki jest konieczny do osiągnięcia określonych celów, tj.:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>w przypadku świadczenia usługi/dostarczenia produktu na rzecz Użytkownika - przez okres niezbędny dla realizacji przez Administratora zamówionej usługi bądź dostarczenia produktu na rzecz Użytkownika</li>
              </ul>
              <p className="mt-4">
                W każdym z powyższych przypadków, po upływie niezbędnego okresu przetwarzania, dane mogą być przetwarzane tylko w celu dochodzenia roszczeń na tle łączących strony relacji do czasu ostatecznego rozstrzygnięcia tych roszczeń na drodze prawnej.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">Zmiany Polityki prywatności</h3>
              <p>
                W celu uaktualnienia informacji zawartych w niniejszej Polityce prywatności oraz jej zgodności z obowiązującymi przepisami prawa, niniejsza Polityka prywatności może ulec zmianie. W przypadku zmiany treści Polityki prywatności, zmieniona zostanie data jej aktualizacji wskazana na końcu jej tekstu. W celu zasięgnięcia informacji o sposobie ochrony danych osobowych, Administrator rekomenduje Użytkownikom regularne zapoznawanie się z postanowieniami Polityki Prywatności.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">Informacje kontaktowe</h3>
              <p>
                W celu uzyskania jakichkolwiek informacji dotyczących niniejszej Polityki Prywatności, Użytkownik może skontaktować się z Administratorem danych osobowych: "MILAFIORI" MARCIN HOFFMANN, ul. Ks. Stefana Wincentego Frelichowskiego 14/19, 87-140 Chełmża, z wykorzystaniem następujących danych kontaktowych: <a href="mailto:milafiori2024@gmil.com" className="text-blue-600 dark:text-blue-400 hover:underline">milafiori2024@gmil.com</a>.
              </p>
              <p className="mt-4">
                Ponadto istnieje również możliwość kontaktu drogą pocztową pod adresem: ul. Ks. Stefana Wincentego Frelichowskiego 14/19, 87-140 Chełmża.
              </p>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-300 dark:border-slate-700">
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Ostatnia aktualizacja niniejszego dokumentu miała miejsce dnia 13.08.2024.
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
