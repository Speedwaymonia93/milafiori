'use client';

import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from '@/lib/animations';

const pricingItems = [
  {
    name: 'Prawo jazdy kat. A',
    price: '3600 zl',
    details: ['Kurs podstawowy', 'Teoria i praktyka', 'Przygotowanie do egzaminu'],
  },
  {
    name: 'Prawo jazdy kat. A2',
    price: '3500 zl',
    details: ['Kurs podstawowy', 'Teoria i praktyka', 'Przygotowanie do egzaminu'],
  },
  {
    name: 'Prawo jazdy kat. A1',
    price: '3400 zl',
    details: ['Kurs podstawowy', 'Teoria i praktyka', 'Przygotowanie do egzaminu'],
  },
  {
    name: 'Prawo jazdy kat. B',
    price: '3300 zl',
    details: ['Kurs podstawowy', 'Teoria i praktyka', 'Przygotowanie do egzaminu'],
  },
  {
    name: 'Przejscie z kat. A1 do kat. A2',
    price: '2100 zl',
    details: ['Kurs uzupelniajacy', 'Rozszerzenie uprawnien', 'Przygotowanie do egzaminu'],
  },
  {
    name: 'Przejscie z kat. A2 do kat. A',
    price: '2100 zl',
    details: ['Kurs uzupelniajacy', 'Rozszerzenie uprawnien', 'Przygotowanie do egzaminu'],
  },
  {
    name: 'Pojedyncza godzina kat. A',
    price: '180 zl / 1h',
    details: ['Jazda doszkalajaca', 'Praca nad manewrami', 'Wsparcie instruktora'],
  },
  {
    name: 'Pojedyncza godzina kat. B',
    price: '110 zl / 1h',
    details: ['Jazda doszkalajaca', 'Praca nad manewrami', 'Wsparcie instruktora'],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-emerald-50 dark:from-blue-950 dark:via-slate-900 dark:to-emerald-950" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="container-section"
      >
        <motion.div variants={slideInFromLeftVariants} className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Cennik</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Jasne ceny bez ukrytych kosztow
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Ostateczna cena zalezy od wybranego pakietu i harmonogramu zajec. Skontaktuj sie z
            nami, aby otrzymac dopasowana oferte.
          </p>
        </motion.div>

        <motion.div variants={slideInFromRightVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pricingItems.map((item) => (
            <motion.article
              key={item.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col rounded-2xl border border-white/50 bg-white/85 p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-700 dark:bg-slate-800 dark:shadow-none cursor-pointer"
            >
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{item.name}</h3>
              <p className="mt-3 text-3xl font-black text-blue-700 dark:text-blue-300">{item.price}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-200 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
              >
                Zapytaj o szczgóły
              </a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
