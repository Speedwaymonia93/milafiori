import type { Metadata } from "next";
import { Exo_2, JetBrains_Mono } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_LOCALE } from "@/lib/constants";
import { CookieConsent } from "@/components/CookieConsent";
import { ThemeProvider } from "@/lib/theme-provider";

const exoSans = Exo_2({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "prawo jazdy Chełmża",
    "prawo jazdy Toruń",
    "szkoła nauki jazdy",
    "lekcje jazdy",
    "kurs na prawo jazdy",
    "instruktor jazdy",
    "kurs kat. B",
    "kurs kat. A",
    "kurs kat. A1",
    "kurs kat. A2",
    "prawo jazdy kategoria B",
    "prawo jazdy kategoria A",
    "prawo jazdy kategoria A1",
    "prawo jazdy kategoria A2",
    "prawo jazdy kategoria B Toruń",
    "prawo jazdy kategoria A Toruń",
    "prawo jazdy kategoria A1 Toruń",
    "prawo jazdy kategoria A2 Toruń",
    "prawo jazdy kategoria B Chełmża",
    "prawo jazdy kategoria A Chełmża",
    "prawo jazdy kategoria A1 Chełmża",
    "prawo jazdy kategoria A2 Chełmża",
    "kurs kat B",
    "kurs kat A",
    "kurs kat A1",
    "kurs kat A2",
    "kurs prawa jazdy kat B",
    "kurs prawa jazdy kat A",
    "kurs prawa jazdy kat A1",
    "kurs prawa jazdy kat A2"
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/logo.webp`,
        alt: SITE_NAME,
        width: 225,
        height: 130,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "pl-PL": SITE_URL,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${exoSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
        >
          Przejdź do głównej treści
        </a>
        <ThemeProvider>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
