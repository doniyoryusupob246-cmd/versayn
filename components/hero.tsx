'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Slides data is moved inside component to use translations

const AUTOPLAY_DELAY = 6000;

export default function Hero() {
  const t = useTranslations('Hero');
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/hero_pak.png',
      tag: t('slides.1.tag'),
      headline: {
        line1: t('slides.1.headline.line1'),
        line2: t('slides.1.headline.line2'),
        highlight: t('slides.1.headline.highlight'),
      },
      description: t('slides.1.description'),
      cta: t('slides.1.cta'),
    },
    {
      id: 2,
      image: '/hero_svit.png',
      tag: t('slides.2.tag'),
      headline: {
        line1: t('slides.2.headline.line1'),
        line2: t('slides.2.headline.line2'),
        line3: t('slides.2.headline.line3'),
        highlight: t('slides.2.headline.highlight'),
      },
      description: t('slides.2.description'),
      cta: t('slides.2.cta'),
    },
    {
      id: 3,
      image: "/hero_note.png",
      tag: t('slides.3.tag'),
      headline: {
        line1: t('slides.3.headline.line1'),
        line2: t('slides.3.headline.line2'),
        line3: t('slides.3.headline.line3'),
        highlight: t('slides.3.headline.highlight'),
      },
      description: t('slides.3.description'),
      cta: t('slides.3.cta'),
    },
    {
      id: 4,
      image: "/hero.png",
      tag: t('slides.4.tag'),
      headline: {
        line1: t('slides.4.headline.line1'),
        line2: t('slides.4.headline.line2'),
        line3: t('slides.4.headline.line3'),
        highlight: t('slides.4.headline.highlight'),
      },
      description: t('slides.4.description'),
      cta: t('slides.4.cta'),
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="relative min-h-[100dvh] overflow-hidden bg-versayn-dark pt-24 flex flex-col justify-center"
    >
      {/* Background with noise/gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-versayn-green/5 via-transparent to-transparent opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]" /> {/* Optional noise texture */}
      </div>

      <div className="container relative mx-auto grid h-full max-w-7xl grid-cols-1 gap-5 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">

        {/* LEFT: Text Content */}
        <div className="flex flex-col justify-center  relative z-10 pb-12 lg:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tag */}
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-versayn-green/20 bg-versayn-green/5 px-4 py-1.5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="h-2 w-2 rounded-full bg-versayn-green animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-versayn-green">
                  {slides[current].tag}
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                <span className="block">{slides[current].headline.line1}</span>
                <span className="block">{slides[current].headline.line2}</span>
                {slides[current].headline.line3 && (
                  <span className="block">{slides[current].headline.line3}</span>
                )}
                <span className="block text-versayn-green mt-2">
                  {slides[current].headline.highlight}
                </span>
              </h1>

              {/* Description */}
              <motion.p
                className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slides[current].description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-versayn-green px-8 font-display text-sm font-bold text-versayn-dark hover:bg-versayn-green/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,224,97,0.3)] hover:shadow-[0_0_35px_rgba(0,224,97,0.5)]"
                >
                  <a href="#contact">
                    {slides[current].cta}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/10 px-8 font-display text-sm font-semibold text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  <a href="#cases">{t('casesLink')} <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Image Stage */}
        <div className="relative flex flex-col justify-center  h-[50vh] lg:h-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Image Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-versayn-green/10 blur-[100px] rounded-full" />

              <Image
                src={slides[current].image}
                alt={slides[current].tag}
                width={800}
                height={800}
                className="relative z-10 sm:max-w-md lg:max-w-full lg:max-h-[600px] object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation & Progress */}
          <div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-12 z-20 flex flex-col items-end gap-6">

            {/* Counter */}
            <div className="font-display font-medium text-4xl text-white/10">0{current + 1}</div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-versayn-green"
                key={current}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
