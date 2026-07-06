'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { containerVariants, itemVariants } from '@/lib/animations';

const phoneRegex = /^\+?[0-9\s-]{7,20}$/;

const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki').max(100),
  email: z.string().email('Podaj poprawny adres email'),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), 'Podaj poprawny numer telefonu'),
  course: z.string().min(1, 'Wybierz kurs'),
  message: z.string().max(500, 'Wiadomość może mieć maksymalnie 500 znaków').optional(),
  agreedToPrivacy: z.boolean().refine((val) => val === true, {
    message: 'Musisz zaakceptować Politykę prywatności',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const courses = [
  'Kategoria B',
  'Kategoria A / A2',
  'Jazdy doszkalające',
  'Zaawansowany kurs',
];

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-white dark:from-slate-900 via-blue-50/30 dark:via-blue-950/20 to-white dark:to-slate-900 -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="container-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          {/* Left - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 space-y-8 backdrop-blur-md border border-white/20 dark:border-slate-700/30 bg-linear-to-br from-blue-500/20 dark:from-blue-900/20 to-purple-500/20 dark:to-purple-900/20"
          >
            <div>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Kontakt</p>
              <h2 className="text-3xl md:text-4xl font-black dark:text-white">
                Gotowy do jazdy?
              </h2>
              <p className="mt-3 text-gray-800 dark:text-slate-300">
                Skontaktuj się z nami przez telefon, email lub wypełnij formularz poniżej.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {/* Phone */}
              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+48609207867"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/20 dark:hover:bg-slate-700/20 transition"
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Zadzwoń do nas</p>
                  <p className="text-lg font-black text-gray-900 dark:text-white">+48 609 207 867</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:milafiori2024@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/20 dark:hover:bg-slate-700/20 transition"
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Wyślij email</p>
                  <p className="text-lg font-black text-gray-900 dark:text-white break-all">milafiori2024@gmail.com</p>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-lg"
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Godziny pracy</p>
                  <p className="text-lg font-black text-gray-900 dark:text-white">Elastyczne harmonogramy</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={itemVariants}
            className="rounded-2xl p-8 space-y-5 backdrop-blur-md border border-white/40 dark:border-slate-700/40 bg-white/70 dark:bg-slate-800/70"
            noValidate
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-sm font-bold mb-2 dark:text-slate-200">Imię i nazwisko</label>
              <input
                {...register('name')}
                id="contact-name"
                type="text"
                placeholder="Jan Kowalski"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition"
              />
              {errors.name && (
                <p id="contact-name-error" role="alert" className="text-sm text-red-700 dark:text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-sm font-bold mb-2 dark:text-slate-200">Email</label>
              <input
                {...register('email')}
                id="contact-email"
                type="email"
                placeholder="jan@example.com"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition"
              />
              {errors.email && (
                <p id="contact-email-error" role="alert" className="text-sm text-red-700 dark:text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-bold mb-2 dark:text-slate-200">Telefon (opcjonalnie)</label>
              <input
                {...register('phone')}
                id="contact-phone"
                type="tel"
                placeholder="+48 xxx xxx xxx"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition"
              />
              {errors.phone && (
                <p id="contact-phone-error" role="alert" className="text-sm text-red-700 dark:text-red-400 mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Course */}
            <div>
              <label htmlFor="contact-course" className="block text-sm font-bold mb-2 dark:text-slate-200">Wybierz kurs</label>
              <select
                {...register('course')}
                id="contact-course"
                required
                aria-invalid={Boolean(errors.course)}
                aria-describedby={errors.course ? 'contact-course-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition"
              >
                <option value="" disabled>-- Wybierz kurs --</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              {errors.course && (
                <p id="contact-course-error" role="alert" className="text-sm text-red-700 dark:text-red-400 mt-1">{errors.course.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-sm font-bold mb-2 dark:text-slate-200">Wiadomość (opcjonalnie)</label>
              <textarea
                {...register('message')}
                id="contact-message"
                placeholder="Napisz, kiedy chcesz zacząć lub o co zapytać..."
                rows={4}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition resize-none"
              />
              {errors.message && (
                <p id="contact-message-error" role="alert" className="text-sm text-red-700 dark:text-red-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Privacy Checkbox */}
            <div>
              <div className="flex gap-3">
                <input
                  {...register('agreedToPrivacy')}
                  id="contact-privacy"
                  type="checkbox"
                  aria-invalid={Boolean(errors.agreedToPrivacy)}
                  aria-describedby={errors.agreedToPrivacy ? 'contact-privacy-error' : undefined}
                  className="w-5 h-5 rounded border-gray-300 dark:border-slate-600 text-blue-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 cursor-pointer mt-1 shrink-0"
                />
                <label htmlFor="contact-privacy" className="text-xs text-gray-700 dark:text-slate-300 leading-relaxed cursor-pointer">
                  Zapoznałem się z{' '}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                  >
                    Polityką prywatności
                  </a>
                  {' '}serwisu oskmilafiori.pl oraz wyrażam zgodę na przetwarzanie przez &ldquo;MILAFIORI&rdquo; MARCIN HOFFMANN, ul. Ks. Stefana Wincentego Frelichowskiego 14/19, 87-140 Chełmża, udostępnionych przeze mnie danych osobowych na zasadach opisanych w{' '}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                  >
                    Polityce prywatności
                  </a>
                  {' '}dostępnej w Serwisie. Oświadczam, że są mi znane cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda może być wycofana w dowolnym czasie poprzez kontakt z Administratorem pod adresem milafiori2024@gmil.com, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Więcej informacji dotyczących przetwarzania danych osobowych -{' '}
                  <a
                    href="/obowiazek-informacyjny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                  >
                    Obowiązek Informacyjny
                  </a>
                </label>
              </div>
              {errors.agreedToPrivacy && (
                <p id="contact-privacy-error" role="alert" className="text-sm text-red-700 dark:text-red-400 mt-2">
                  {errors.agreedToPrivacy.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition disabled:opacity-70 disabled:cursor-not-allowed ${
                submitStatus === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Wysłano!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            <div aria-live="polite" className="min-h-5 text-center">
            {submitStatus === 'error' && (
              <p role="alert" className="text-sm text-red-700 dark:text-red-400 text-center">
                Błąd podczas wysyłania. Spróbuj ponownie.
              </p>
            )}
            {submitStatus === 'success' && (
              <p className="text-sm text-green-700 dark:text-green-400 text-center">Formularz został wysłany poprawnie.</p>
            )}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
