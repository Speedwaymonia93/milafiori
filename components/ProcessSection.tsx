'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Route, Trophy } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

const steps = [
  {
    title: 'Rejestracja',
    description: 'Szybki zapis online. Wybierz kategorię, termin teorii i zaplanuj pierwsze jazdy.',
    icon: BookOpen,
    number: '01',
  },
  {
    title: 'Teoria i Sala',
    description: 'Czytelny materiał szkoleniowy. Lekcje w nowoczesnej sali przy Chełmińskiej 18.',
    icon: Route,
    number: '02',
  },
  {
    title: 'Jazdy Praktyczne',
    description: 'Plac manewrowy, trasy w Chełmży i Toruniu. Budujemy pewność za kierownicą.',
    icon: Trophy,
    number: '03',
  },
  {
    title: 'Egzamin',
    description: 'Ostatnie poprawki i jazdy doszkalające. Pełny plan przed egzaminem w WORD.',
    icon: CheckCircle2,
    number: '04',
  },
];

const benefits = [
  'Nowoczesna sala wykładowa z multimediami',
  'Plac manewrowy i jazdy na rzeczywistych trasach',
  'Elastyczne harmonogramy dostosowane do Twoich potrzeb',
];

export function ProcessSection() {
  return (
    <section id="process" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-slate-900 dark:to-purple-950 -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="container-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Proces</p>
              <h2 className="text-3xl md:text-5xl font-black">
                Nauka jazdy od podstaw do egzaminu
              </h2>
            </div>

            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              Cztery, jasno zdefiniowane etapy nauki jazdy, które prowadzą od rejestracji do zdanego egzaminu. Każdy krok został zaplanowany dla Twojego sukcesu.
            </p>

            {/* Benefits */}
            <div className="space-y-3 pt-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-slate-300 font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Steps */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl space-y-4 relative overflow-hidden group backdrop-blur-md border border-white/20 dark:border-slate-700 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-950/40 dark:to-purple-950/40"
                >
                  {/* Step Number Background */}
                  <div className="absolute -top-8 -right-8 text-6xl font-black text-blue-400/10 dark:text-blue-300/5 group-hover:text-blue-400/20 dark:group-hover:text-blue-300/10 transition">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white relative z-10">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connection Line (for desktop) */}
                  {index % 2 === 0 && index !== steps.length - 1 && (
                    <div className="hidden sm:block absolute bottom-0 right-0 w-1 h-16 bg-gradient-to-b from-blue-400/50 to-transparent translate-x-full" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
