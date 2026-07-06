'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/p/O%C5%9Brodek-Szkolenia-Kierowc%C3%B3w-Milafiori-Che%C5%82m%C5%BCa-61558633289386/',
      label: 'Facebook',
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent dark:from-blue-950/5 via-blue-900/10 dark:via-blue-900/5 to-transparent -z-10" />

      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
                M
              </div>
              <span className="text-xl font-black">OSK MILAFIORI</span>
            </div>
            <p className="text-gray-400 dark:text-slate-400">
              Profesjonalna szkoła jazdy oferująca nowoczesne kursy i elastyczne harmonogramy w Chełmży i Toruniu.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-lg font-bold">Szybkie linki</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#start' },
                { label: 'O Firmie', href: '#about' },
                { label: 'Oferta', href: '#offer' },
                { label: 'Cennik', href: '#pricing' },
                { label: 'Galeria', href: '#gallery' },
                { label: 'Lokalizacja', href: '#location' },
                { label: 'Kontakt', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Kontakt</h3>
            <div className="space-y-3">
              <a
                href="tel:+48609207867"
                className="flex items-center gap-3 text-gray-400 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+48 609 207 867</span>
              </a>
              <a
                href="mailto:milafiori2024@gmail.com"
                className="flex items-center gap-3 text-gray-400 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>milafiori2024@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 dark:text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>
                  Chełmża & Toruń<br />
                  Polska
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-8 py-8 border-t border-gray-800 dark:border-slate-800"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Otworz profil ${social.label}`}
                whileHover={reduceMotion ? undefined : { scale: 1.12, y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center text-sm text-gray-500 border-t border-gray-800 pt-8"
        >
          <p>&copy; {currentYear} OSK Milafiori. Wszystkie prawa zastrzeżone.</p>
          <div className="mt-4 flex justify-center gap-6 text-xs flex-wrap">
            <a href="/privacy" className="hover:text-gray-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
              Polityka Prywatności
            </a>
            <a href="/obowiazek-informacyjny" className="hover:text-gray-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
              Obowiązek Informacyjny
            </a>
            <a href="#" className="hover:text-gray-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
              Mapa Strony
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
