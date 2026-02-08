'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Работа', href: '#cases' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-versayn-dark/80 backdrop-blur-xl border-b border-versayn-green/10'
          : 'bg-transparent'
      }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-versayn-green">
            <span className="font-display text-sm font-bold text-versayn-dark">V</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            VERSAYN
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-versayn-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-versayn-green px-6 font-display text-sm font-semibold text-versayn-dark hover:bg-versayn-green/90 hover:shadow-[0_0_24px_rgba(0,224,97,0.4)] transition-all duration-300">
            <a href="#contact">Получите бесплатную консультацию</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-versayn-dark/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 w-full rounded-full bg-versayn-green font-display text-sm font-semibold text-versayn-dark hover:bg-versayn-green/90">
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
