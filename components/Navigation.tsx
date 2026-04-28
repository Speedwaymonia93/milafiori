'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { useEffect, useSyncExternalStore, useState } from 'react';
import { useTheme } from '@/lib/theme-provider';

const navigationItems = [
  { label: 'Home', href: '#start' },
  { label: 'O Firmie', href: '#about' },
  { label: 'Oferta', href: '#offer' },
  { label: 'Cennik', href: '#pricing' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Lokalizacja', href: '#location' },
  { label: 'Kontakt', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const { theme, toggleTheme } = useTheme();
  const mobileMenuId = 'mobile-nav-menu';

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 right-0 top-0 z-1000 m-4 rounded-lg border border-white/30 dark:border-slate-700/30 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md md:m-6"
      >
        <div className="container-section flex items-center justify-between py-2 md:py-3">
          <a
            href="#start"
            className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Przejdz do sekcji Home"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-lg border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 md:h-32 md:w-32">
              <Image
                src="/logo.webp"
                alt="Logo OSK Milafiori"
                fill
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="hidden text-lg font-black tracking-tight text-slate-900 dark:text-white sm:inline md:text-2xl">
              OSK MILAFIORI
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navigationItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="rounded-sm text-base lg:text-lg font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="rounded-lg p-2.5 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              type="button"
              aria-label={mounted && theme === 'light' ? 'Włącz tryb ciemny' : 'Włącz tryb jasny'}
              title={mounted && theme === 'light' ? 'Tryb ciemny' : 'Tryb jasny'}
            >
              {mounted ? (
                theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>
            <motion.a
              href="tel:+48500000000"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 px-4 py-2 font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition"
            >
              <Phone className="h-4 w-4" />
              Zadzwoń
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-slate-900 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
            type="button"
            aria-label={isOpen ? 'Zamknij menu nawigacji' : 'Otworz menu nawigacji'}
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            id={mobileMenuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/40 dark:border-slate-700/40 md:hidden"
            role="region"
            aria-label="Menu mobilne"
          >
            <div className="container-section flex flex-col gap-2 py-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md py-3 text-lg font-semibold text-slate-900 dark:text-slate-100 transition hover:text-blue-700 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="mt-2 rounded-md py-3 text-base font-semibold text-slate-900 dark:text-slate-100 transition hover:text-blue-700 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 flex items-center gap-2"
              >
                {mounted ? (
                  theme === 'light' ? (
                    <>
                      <Moon className="h-4 w-4" />
                      Tryb ciemny
                    </>
                  ) : (
                    <>
                      <Sun className="h-4 w-4" />
                      Tryb jasny
                    </>
                  )
                ) : null}
              </button>
              <a
                href="tel:+48 609 207 867"
                className="mt-1 flex items-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-700 px-4 py-3 font-semibold text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition"
              >
                <Phone className="h-4 w-4" />
                Zadzwoń
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
