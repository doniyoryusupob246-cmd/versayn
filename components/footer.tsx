'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  const footerLinks = {
    explore: [
      { label: tNav('cases'), href: '#cases' },
      { label: tNav('services'), href: '#services' },
      { label: tNav('about'), href: '#about' },
      { label: tNav('contacts'), href: '#contact' },
    ],
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/versayn.uz/' },
      { label: 'Telegram', href: 'https://t.me/versayn_official' },
      { label: 'Telegram 2', href: 'https://t.me/versayn_uz' },
    ],
  };

  return (
    <footer className="border-t border-border/20 bg-versayn-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="" width={80} height={80} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t('description')}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-versayn-green">
                {t('exploreLabel')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-versayn-green">
                {t('socialLabel')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-xs">
            <Link href="tel:+998916444441">
              <button className="flex items-center gap-2 rounded-full bg-versayn-green px-4 py-2.5 text-sm text-versayn-dark transition-all duration-300 hover:bg-versayn-green/90">
                <Phone size={18} />{t('contactButton')}
              </button>
            </Link>
            <Link className='' href="https://yandex.uz/maps/10335/tashkent/?ll=69.296561%2C41.289730&mode=poi&poi%5Bpoint%5D=69.296673%2C41.289560&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D16224549466&z=19">
              <button className="mt-4 flex items-center gap-2 rounded-full bg-versayn-green px-4 py-2.5 text-sm text-versayn-dark transition-all duration-300 hover:bg-versayn-green/90">
                <MapPin size={18} />{t('locationButton')}
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">{t('rights')}</p>
          <p className="text-xs text-muted-foreground/50">{t('madeFor')}</p>
        </motion.div>
      </div>
    </footer>
  );
}
