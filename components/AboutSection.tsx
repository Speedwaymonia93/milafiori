'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Bike, Building2, BusFront, Car, FileText, ShieldCheck, Users } from 'lucide-react';
import {
  containerVariants,
  itemVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from '@/lib/animations';

const strengths = [
  {
    title: 'Doświadczeni instruktorzy z pasją i zaangażowaniem',
    description: 'Pracujemy z kursantami na różnych poziomach – od zupełnych podstaw po jazdy doszkalające przed egzaminem. Indywidualne podejście i cierpliwość całego zespołu to nasza wizytówka.',
    icon: Users,
  },
  {
    title: 'Nowoczesna flota',
    description: 'Szkolimy na samochodach w pełni zgodnych ze standardami egzaminacyjnymi. Komfortowe i dobrze wyposażone pojazdy zapewniają bezpieczeństwo na każdym etapie nauki.',
    icon: Building2,
  },
  {
    title: 'Skuteczne przygotowanie',
    description: 'Łączymy rzetelną teorię, praktykę na placu manewrowym i jazdy drogami Chełmży i Torunia. Spokojne tempo nauki jest zawsze dopasowane do możliwości kursanta.',
    icon: Award,
  },
  {
    title: 'Bezpieczeństwo i jakość',
    description: 'Stawiamy na kulturę jazdy, odpowiedzialność i pewność za kierownicą. Uczymy nie tylko przepisów, lecz technik, które procentują przez całe życie.',
    icon: ShieldCheck,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 dark:from-slate-900 via-white dark:via-slate-900 to-slate-50 dark:to-slate-900" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={containerVariants}
        className="container-section"
      >
<motion.div variants={slideInFromLeftVariants} className="mb-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">O firmie</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Szkoła, ktora uczy spokojnej i pewnej jazdy
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              OSK Milafiori to szkoła jazdy stworzona z prawdziwego zamiłowania do nauczania. Jej założyciel, Marcin Hoffmann, wraz z zespołem doświadczonych instruktorów dba o każdy etap szkolenia. Indywidualne podejście, spokojna atmosfera i praktyczna wiedza sprawiają, że nauka jazdy przebiega sprawnie, skutecznie i bezpiecznie.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Naszą siedzibę znajdziesz w Chełmży, przy ulicy Chełmińskiej 18. Do dyspozycji kursantów oddajemy nowoczesną salę wykładową oraz komfortowe biuro.
            </p>
            <a
              href="/STANDARDY%20OCHRONY%20MA%C5%81OLETNICH.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              STANDARDY OCHRONY MAŁOLETNICH (pdf)
            </a>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg md:h-96">
            <Image
              src="/about-us-a.webp"
              alt="Siedziba OSK Milafiori przy ulicy Chełmińskiej 18 w Chełmży"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRightVariants}
          className="mb-10 grid gap-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:p-6"
        >
          <div className="relative aspect-4/3 overflow-hidden rounded-xl">
            <Image
              src="/adam-photo.jpeg"
              alt="Pan Adam, instruktor OSK Milafiori, przy samochodzie szkoleniowym"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">Nasz instruktor</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white md:text-3xl">Poznaj Pana Adama</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Do naszego zespołu dołączył Pan Adam – instruktor nauki jazdy, który posiada doświadczenie w prowadzeniu pojazdów oraz uprawnienia do szkolenia kierowców kategorii B.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Pan Adam posiada również prawo jazdy na motocykle i autobusy. Dzięki temu może pochwalić się szerokim doświadczeniem za kierownicą różnych pojazdów i jeszcze lepiej dopasować szkolenie do potrzeb kursantów.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 dark:bg-blue-900/30"><Car className="h-4 w-4 text-blue-700 dark:text-blue-400" /> Kat. B</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 dark:bg-blue-900/30"><Bike className="h-4 w-4 text-blue-700 dark:text-blue-400" /> Motocykle</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 dark:bg-blue-900/30"><BusFront className="h-4 w-4 text-blue-700 dark:text-blue-400" /> Autobusy</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={slideInFromRightVariants} className="grid gap-5 md:grid-cols-2">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm dark:shadow-none"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
