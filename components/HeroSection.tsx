'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { containerVariants, itemVariants, slideInFromLeftVariants } from '@/lib/animations';

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="start" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-slate-900 via-white dark:via-slate-900 to-purple-50 dark:to-slate-900 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={slideInFromLeftVariants} className="space-y-6">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="rounded-full px-4 py-2 backdrop-blur-md border border-white/20 dark:border-slate-700/40 bg-white/10 dark:bg-slate-800/20 w-fit"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                <span className="text-sm font-semibold dark:text-slate-300">Szkoła jazdy w Chełmży</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight dark:text-white"
            >
              Nauka jazdy, która <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">wygląda pewnie</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              Pragniesz usiąść za kierownicą i samodzielnie przemierzać drogi? Ośrodek Szkolenia Kierowców Milafiori w Chełmży to miejsce, w którym Twoja nauka jazdy stanie się przyjemnością. Zadbamy o to, abyś opanował technikę jazdy i czuł się pewnie w każdej sytuacji drogowej. Oferujemy kursy na prawo jazdy kategorii A, A1, A2 oraz B – dołącz do nas i spełnij swój cel!
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                Zapisz się na kurs
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold backdrop-blur-md border border-white/20 dark:border-slate-700/40 bg-white/10 dark:bg-slate-800/20 dark:text-slate-100 hover:bg-white/20 dark:hover:bg-slate-700/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                Zobacz ceny
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-slate-700"
            >
              {[
                { value: '500+', label: 'Absolwentów' },
                { value: '4+', label: 'Lat doświadczenia' },
                { value: '100%', label: 'Zdawalności' },
              ].map((stat) => (
                  <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="space-y-1"
                >
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Liquid Glass Card */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl p-8 space-y-6 backdrop-blur-md border border-white/20 dark:border-slate-700/40 bg-gradient-to-br from-blue-500/20 dark:from-blue-900/20 to-purple-500/20 dark:to-purple-900/20">
              {/* Card Content */}
              <div>
                <div className="text-3xl font-black mb-3 dark:text-white">🎯 Szybki Zapis</div>
                <p className="text-gray-700 dark:text-slate-300">Zarejestruj się w 60 sekund i dołącz do naszej szkoły jazdy.</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  'Elastyczne harmonogramy jazd',
                  'Doświadczony instruktor z pasją i zaangaowaniem',
                  'Nowoczesne samochody szkoleniowe',
                  'Pełne wsparcie przed egzaminem',
                ].map((feature) => (
                  <motion.div
                    key={feature}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm font-semibold dark:text-slate-300"
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                href="#contact"
                className="block w-full py-3 bg-blue-600 dark:bg-blue-700 text-white font-bold rounded-lg text-center hover:bg-blue-700 dark:hover:bg-blue-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                Zapisz się teraz
              </motion.a>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity }}
              className="absolute -top-12 -right-12 w-24 h-24 bg-blue-400/20 dark:bg-blue-900/40 rounded-full blur-2xl"
            />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={reduceMotion ? undefined : { duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-400/20 dark:bg-purple-900/40 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
