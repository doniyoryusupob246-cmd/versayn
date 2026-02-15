'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

export default function Cases() {
  const t = useTranslations('Cases');

  const cases = [
    {
      title: t('items.1.title'),
      category: t('items.1.category'),
      image: '/images/case-1.jpg',
      size: 'large',
    },
    {
      title: t('items.2.title'),
      category: t('items.2.category'),
      image: '/images/case-2.jpg',
      size: 'large',
    },
    {
      title: t('items.3.title'),
      category: t('items.3.category'),
      image: '/images/case-3.jpg',
      size: 'small',
    },
    {
      title: t('items.4.title'),
      category: t('items.4.category'),
      image: '/images/case-4.jpg',
      size: 'small',
    },
  ];

  return (
    <section id="cases" className="relative bg-versayn-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-versayn-green">
              {t('label')}
            </motion.span>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t('viewAll')}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border/30 bg-card ${item.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'
                }`}>
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-versayn-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-versayn-green">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-versayn-green text-versayn-dark transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
