'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Scissors,
  CreditCard,
  Package,
  Calendar,
  FolderOpen,
  BookMarked,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      number: '01',
      title: t('items.1.title'),
      description: t('items.1.description'),
      image:
        '/aksessuar/tshirt.png',
      icon: Scissors,
    },
    {
      number: '02',
      title: t('items.2.title'),
      description: t('items.2.description'),
      image:
        '/aksessuar/service2.jpg',
      icon: Package,
    },
  ];

  return (
    <section id="services" className="relative bg-versayn-light py-32 lg:py-40">
      {/* Subtle animated grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-versayn-green">
            {t('label')}
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-versayn-dark sm:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
        </motion.div>

        {/* Service items */}
        <div className="space-y-32">
          {services.slice(0, 2).map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col items-center gap-12 lg:gap-20 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
              {/* Text */}
              <div className="flex-1">
                <span className="font-display text-6xl font-bold text-versayn-dark/[0.06] lg:text-8xl">
                  {service.number}
                </span>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-versayn-dark lg:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-versayn-dark/60">
                  {service.description}
                </p>

                <Button
                  asChild
                  className="group mt-8 rounded-full bg-versayn-dark px-6 font-display text-sm font-semibold text-versayn-light hover:bg-versayn-dark/90 transition-all duration-300">
                  <a href="#contact">
                    {t('cta')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Image */}
              {service.image && (
                <div className="relative flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={service.image || '/placeholder.svg'}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Green accent card */}
                </div>
              )}
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
