'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const headlineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const lineVariant = {
  hidden: { y: 80, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    y: 0,
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-versayn-dark pt-24">
      {/* Subtle grid bg */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,224,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,224,97,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left: Copy */}
        <div className="flex flex-1 flex-col justify-center pt-12 lg:pt-0">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-versayn-green/20 bg-versayn-green/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-versayn-green animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-versayn-green">
              Креативное продюсерское агентство
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-3xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl">
            <motion.span variants={lineVariant} className="block">
              Мы не просто
            </motion.span>
            <motion.span variants={lineVariant} className="block">
              производим мерч <span className="text-versayn-green">&mdash;</span>
            </motion.span>
            <motion.span variants={lineVariant} className="block">
              Мы заставляем
            </motion.span>
            <motion.span variants={lineVariant} className="block text-versayn-green">
              о вас говорить.
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-md text-xs leading-relaxed text-muted-foreground lg:text-base">
            Лучшие корпоративные подарки и сувенирная продукция. Индивидуальное производство,
            передовые технологии и собственная команда экспертов, сопровождающая вас на каждом
            этапе.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-versayn-green px-8 font-display text-sm font-semibold text-versayn-dark hover:bg-versayn-green/90 hover:shadow-[0_0_30px_rgba(0,224,97,0.4)] transition-all duration-300">
              <a href="#contact">
                Начать проект
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border/50 px-8 font-display text-sm font-semibold text-foreground hover:border-versayn-green/30  transition-all duration-300 bg-transparent">
              <a href="#cases">Смотреть наши работы</a>
            </Button>
          </motion.div>

          {/* Trust chip */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2">
              <CheckCircle className="h-4 w-4 text-versayn-green" />
              <span className="text-xs font-medium text-muted-foreground">
                Удовлетворенность клиентов
              </span>
              <span className="text-xs font-bold text-foreground">100% концентрация</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Product stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-1 w-full items-center justify-center pb-12 lg:pb-0">
          <div className="animate-float relative w-full h-full flex items-center justify-center">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-3xl bg-versayn-green/5 blur-3xl" />
            <Image
              src="/hero.png"
              alt="Versayn Hero Image"
              width={600}
              height={600}
              className="object-cover mx-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

