'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Building2, ShieldCheck, Users } from 'lucide-react';
import {
  containerVariants,
  itemVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from '@/lib/animations';

const strengths = [
  {
    title: 'Doświadczony instruktor z pasją i zaangażowaniem',
    description: 'Pracujemy z kursantami na różnych poziomach – od zupełnych podstaw po jazdy doszkalające przed egzaminem. Indywidualne podejście i cierpliwość to nasza wizytówka.',
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
              OSK Milafiori to szkoła jazdy stworzona z prawdziwego zamiłowania do nauczania. Jej założyciel, Marcin Hoffmann, postawił sobie za cel zapewnienie kursantom nauki na najwyższym poziomie – z dbałością o każdy etap szkolenia. Dysponuje wieloletnim doświadczeniem w branży motoryzacyjnej, doskonale rozumie potrzeby swoich uczniów i podchodzi do każdego z nich indywidualnie. Dzięki temu nauka jazdy przebiega sprawnie, skutecznie i w pełni bezpiecznie.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Naszą siedzibę znajdziesz w Chełmży, przy ulicy Chełmińskiej 18. Do dyspozycji kursantów oddajemy nowoczesną salę wykładową oraz komfortowe biuro.
            </p>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg md:h-96">
            <Image
              src="/about-us-a.webp"
              alt="Siedziba OSK Milafiori przy ulicy Chełmińskiej 18 w Chełmży"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
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
