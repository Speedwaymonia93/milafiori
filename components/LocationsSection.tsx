'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import {
  containerVariants,
  itemVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from '@/lib/animations';

const LocationsMap = dynamic(
  () => import('@/components/LocationsMap').then((module) => module.LocationsMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[340px] w-full items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-sm font-semibold text-slate-500 dark:text-slate-300 md:h-[440px]">
        Ladowanie mapy...
      </div>
    ),
  }
);

const locations = [
  {
    title: 'Biuro i Sala wykladowa',
    addressLine1: 'ul. Chelminska 18,',
    addressLine2: '87-140 Chelmza',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ul.+Che%C5%82mi%C5%84ska+18%2C+87-140+Che%C5%82m%C5%BCa',
  },
  {
    title: 'Plac manewrowy',
    addressLine1: 'ul. Ksiedza Piotra Skargi 18,',
    addressLine2: '87-140 Chelmza',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ul.+Ksi%C4%99dza+Piotra+Skargi+18%2C+87-140+Che%C5%82m%C5%BCa',
  },
];

export function LocationsSection() {
  return (
    <section id="location" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-sky-50/70 to-white dark:from-slate-900 dark:via-sky-950/20 dark:to-slate-900" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="container-section"
      >
        <motion.div variants={slideInFromLeftVariants} className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-700 dark:text-sky-400">Lokalizacja</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Gdzie nas znajdziesz
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Dwie lokalizacje w Chelmzy: biuro z sala wykladowa oraz plac manewrowy. Mapa ponizej
            pokazuje oba punkty.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div variants={slideInFromLeftVariants} className="space-y-4">
            {locations.map((item) => (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm dark:shadow-none"
              >
                <div className="mb-3 flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Lokalizacja
                    </p>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                  </div>
                </div>

                <p className="text-base text-slate-700 dark:text-slate-300">{item.addressLine1}</p>
                <p className="text-base text-slate-700 dark:text-slate-300">{item.addressLine2}</p>

                <a
                  href={item.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-200 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
                >
                  <Navigation className="h-4 w-4" />
                  Otworz w mapach
                </a>
              </motion.article>
            ))}
          </motion.div>

          <motion.div variants={slideInFromRightVariants} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-xl shadow-slate-900/10 dark:shadow-none">
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <LocationsMap />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-slate-200">
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" /> Biuro i Sala wykladowa
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-blue-500" /> Plac manewrowy
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
