'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './language-switcher';

const navLinks = [
  { label: 'Работа', href: '#cases' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navbar');

  const menuItems = [
    { title: t('services'), href: '#services' },
    { title: t('cases'), href: '#cases' },
    { title: t('about'), href: '#about' },
    { title: t('contacts'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-foreground">
            VERSAYN
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-versayn-green">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <Button
              className="group relative h-9 overflow-hidden rounded-full bg-white text-versayn-dark hover:bg-white/90"
              asChild>
              <Link href="#contact">
                <span className="relative z-10 px-4 text-xs font-bold uppercase tracking-wider">
                  {t('cta')}
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-versayn-green to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/20 bg-card/50 text-foreground lg:hidden">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border/10 bg-background lg:hidden">
            <div className="space-y-4 px-6 py-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-foreground hover:text-versayn-green">
                  {item.title}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <LanguageSwitcher />
                <Button className="w-full rounded-full bg-white text-versayn-dark" asChild>
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    {t('cta')}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
