import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'VERSAYN — Reklama & Poligrafiya',
  description:
    "Premium printing, outdoor advertising, and branded merchandise with agency-level design. We don't just print — we build brands.",
  generator: 'v0.app',
};

export const viewport: Viewport = {
  themeColor: '#0B0F0D',
};

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${_inter}`}>{children}</body>
      <Toaster />
    </html>
  );
}
