'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { acceptCookieConsent, hasCookieConsent } from '@/lib/cookie-consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!hasCookieConsent());
  }, []);

  const handleAccept = () => {
    acceptCookieConsent();
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informacja o plikach cookies"
      className="fixed left-1/2 bottom-4 z-[70] w-[80vw] -translate-x-1/2"
    >
      <div className="rounded-2xl border border-blue-200 dark:border-slate-700 bg-white/95 dark:bg-slate-800/95 p-5 shadow-2xl backdrop-blur-md md:p-6">
        <p className="text-sm leading-relaxed text-gray-800 dark:text-slate-300 md:text-[15px]">
          W naszym Serwisie używamy plików cookies. Korzystając dalej z Serwisu, wyrażasz zgodę na
          stosowanie plików cookies zgodnie z Polityką prywatności. Wyrażenie zgody jest dobrowolne,
          w każdej chwili można ją cofnąć poprzez zmianę ustawień dotyczących plików „cookies” w
          używanej przeglądarce internetowej. Kliknij „Akceptuję”, aby ta informacja nie wyświetlała
          się więcej.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-lg bg-blue-600 dark:bg-blue-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            Akceptuję
          </button>
          <Link
            href="/privacy"
            className="text-sm font-semibold text-blue-700 dark:text-blue-400 underline decoration-blue-300 dark:decoration-blue-500 underline-offset-4 transition hover:text-blue-900 dark:hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            Dowiedz się więcej
          </Link>
        </div>
      </div>
    </div>
  );
}
