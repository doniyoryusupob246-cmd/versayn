'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      quote: t('items.1.quote'),
      author: t('items.1.author'),
      role: t('items.1.role'),
    },
    {
      quote: t('items.2.quote'),
      author: t('items.2.author'),
      role: t('items.2.role'),
    },
    {
      quote: t('items.3.quote'),
      author: t('items.3.author'),
      role: t('items.3.role'),
    },
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="cases" className="relative overflow-hidden bg-versayn-dark py-32 lg:py-40">
      {/* Quote bg */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Quote className="h-64 w-64 text-foreground/[0.02] lg:h-96 lg:w-96" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block text-xs font-semibold uppercase tracking-widest text-versayn-green">
          {t('label')}
        </motion.span>

        <div className="relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <p className="font-display text-2xl font-medium leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
                {`"${testimonials[current].quote}"`}
              </p>
              <div className="mt-8">
                <p className="text-sm font-bold text-foreground">{testimonials[current].author}</p>
                <p className="mt-1 text-xs text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-all duration-300 hover:border-versayn-green/40 hover:text-foreground"
            aria-label="Previous testimonial">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-versayn-green' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-all duration-300 hover:border-versayn-green/40 hover:text-foreground"
            aria-label="Next testimonial">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
