'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const footerLinks = {
  explore: [
    { label: 'Работа', href: '#cases' },
    { label: 'Услуги', href: '#services' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Behance', href: '#' },
  ],
};

export default function Footer() {
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
              Креативное агентство и производственная компания, специализирующаяся на
              высококачественной печати и брендинге. Расположена в самом сердце цифровой эпохи.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-versayn-green">
                Исследовать
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
                Социальные сеть
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
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-versayn-green">
              Информационная рассылка / Ранний доступ
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-l-full border border-border/40 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-versayn-green/40 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-r-full bg-versayn-green px-4 text-versayn-dark transition-all duration-300 hover:bg-versayn-green/90"
                aria-label="Subscribe">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">{'2024 VERSAYN. All rights reserved.'}</p>
          <p className="text-xs text-muted-foreground/50">Разработано для будущего</p>
        </motion.div>
      </div>
    </footer>
  );
}
