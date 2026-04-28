'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Car, Bike, Trophy, BookOpen } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

const courses = [
  {
    title: 'Kategoria B',
    note: 'Samochód osobowy',
    description: 'Kurs na prawo jazdy kategorii B starannie zaplanowany i dostosowany do Twoich potrzeb. Zajęcia teoretyczne w komfortowej sali przy ul. Chełmińskiej 18, praktyczne – na placu manewrowym oraz drogach Chełmży i Torunia.',
    icon: Car,
    features: ['Teoria w sali wykładowej', 'Plac manewrowy + drogi publiczne', 'Jazdy w Chełmży i Toruniu', 'Nowoczesne samochody szkoleniowe'],
  },
  {
    title: 'Kategoria A / A2',
    note: 'Motocykl',
    description: 'Profesjonalni instruktorzy z wieloletnim doświadczeniem zapewniają solidne podstawy teorii i praktyki. Uczymy nie tylko przepisów, ale też technik jazdy, które gwarantują bezpieczne poruszanie się po drogach.',
    icon: Bike,
    features: ['Techniki jazdy motocyklem', 'Zasady ruchu drogowego', 'Doświadczony instruktor z pasją', 'Bezpieczna i pewna nauka'],
  },
  {
    title: 'Jazdy doszkalające',
    note: 'Przed egzaminem',
    description: 'Zdajemy sobie sprawę, że każdy uczy się inaczej. Dostosowujemy metody nauczania do Twoich potrzeb i oczekiwań. Elastyczne terminy zajęć umożliwiają naukę w czasie, który Ci odpowiada.',
    icon: Trophy,
    features: ['Indywidualne podejście', 'Elastyczne terminy zajęć', 'Personalizowane tempo nauki', 'Pełne wsparcie instruktora'],
  },
  {
    title: 'Dodatkowe usługi',
    note: 'Wsparcie i doradztwo',
    description: 'Oferujemy pomoc w przygotowaniu do egzaminu, doradztwo w wyborze kursu oraz możliwość korzystania z placu manewrowego poza godzinami zajęć. Przyjazna atmosfera i doświadczeni instruktorzy zawsze chętni do odpowiedzi na pytania.',
    icon: BookOpen,
    features: ['Przygotowanie do egzaminu', 'Doradztwo w wyborze kursu', 'Plac manewrowy na żądanie', 'Przyjazna atmosfera nauki'],
  },
];

export function ServicesSection() {
  return (
    <section id="offer" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-blue-50/50 to-white dark:from-slate-900 dark:via-blue-950/50 dark:to-slate-900 -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="container-section"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 space-y-4">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">Oferta</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Kursy dostosowane do Twoich potrzeb
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl">
            Wybierz kurs, który pasuje do Twoich celów i harmonogramu. Wszystkie kursy prowadzone przez doświadczonych instruktorów.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col gap-4 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:bg-linear-to-br hover:from-blue-500/20 hover:to-purple-500/20 dark:border-slate-700 dark:bg-slate-800/40 dark:hover:from-blue-950/20 dark:hover:to-purple-950/20 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black">{course.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-slate-400">{course.description}</p>

                {/* Note */}
                <p className="text-xs font-semibold text-gray-500 dark:text-slate-500 uppercase">{course.note}</p>

                {/* Features */}
                <ul className="flex-1 space-y-2">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto space-y-3 border-t border-white/20 pt-4 dark:border-slate-700">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition w-full"
                  >
                    Zapisz się
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
