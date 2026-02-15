'use client';

import { motion } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function WhyVersayn() {
  const t = useTranslations('WhyVersayn');

  const rows = [
    {
      word: t('items.fast.word'),
      description: t('items.fast.description'),
    },
    {
      word: t('items.precise.word'),
      description: t('items.precise.description'),
    },
    {
      word: t('items.creative.word'),
      description: t('items.creative.description'),
    },
    {
      word: t('items.reliable.word'),
      description: t('items.reliable.description'),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-versayn-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <span className="inline-block rounded-full border border-versayn-green/20 bg-versayn-green/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-versayn-green">
            {t('label')}
          </span>
        </motion.div>

        {/* Rows */}
        <div className="space-y-0">
          {rows.map((row, i) => (
            <motion.div
              key={row.word}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col items-start justify-between gap-4 border-t border-border/40 py-10 sm:flex-row sm:items-center lg:py-14">
              <h3 className="font-display text-4xl font-bold tracking-tight text-foreground/[0.08] transition-colors duration-500 group-hover:text-foreground/20 sm:text-5xl lg:text-6xl xl:text-7xl">
                {row.word}
              </h3>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground text-left lg:text-right">
                {row.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
