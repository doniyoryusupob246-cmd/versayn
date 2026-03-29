import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '../globals.css';
import { Toaster } from '@/components/ui/sonner';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // проверка locale оставь как есть (или тут тоже можно)
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const title = t('title');
  const description = t('description');

  // ⚠️ поменяй на свой домен
  const siteUrl = 'https://versayn.uz';

  // URL текущей локали (example: /ru, /uz)
  const localePath = `/${locale}`;
  const url = new URL(localePath, siteUrl);

  return {
    metadataBase: new URL(siteUrl),

    title: {
      default: title,
      template: `%s | VERSAYN`,
    },
    description,

    alternates: {
      canonical: url.pathname, // => /ru или /uz
      languages: {
        ru: '/ru',
        uz: '/uz',
      },
    },

    openGraph: {
      type: 'website',
      url: url.pathname,
      title,
      description,
      siteName: 'VERSAYN',
      locale: locale === 'ru' ? 'ru_RU' : 'uz_UZ',
      images: [
        {
          url: '/banner.jpg', // положи в /public/og.jpg
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/banner.jpg'],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    icons: {
      icon: '/favicon.png',
      apple: '/apple-touch-icon.png',
    },
  };
}
export const viewport: Viewport = {
  themeColor: '#0B0F0D',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`font-sans antialiased ${inter.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
