'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: 5000, suffix: '+', label: 'Реализованные проекты' },
  { value: 1200, suffix: '+', label: 'Счастливые клиенты' },
  { value: 24, suffix: '/7', label: 'Производственные циклы' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-versayn-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left: Big statement */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
              Более 10+ лет
              <br />
              превращаем идеи
              <br />
              <span className="text-versayn-green">в реальность.</span>
            </motion.h2>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-14 flex flex-wrap gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-versayn-green lg:text-3xl">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Story + Image */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Video / Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-video overflow-hidden rounded-2xl border border-border/30">
              <Image
                src="/images/about-studio.jpg"
                alt="Versayn production studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-versayn-green/90 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                  <svg
                    className="ml-1 h-5 w-5 text-versayn-dark"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-versayn-green">
                Агентство Эволюция
              </span>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                От современной типографии до полноценной дизайнерско-производственной компании — VERSAYN создаёт решения, которые усиливают бренды и повышают их узнаваемость.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Мы специализируемся на разработке и производстве корпоративных подарков, мерча и сувенирной продукции, помогая компаниям выстраивать сильный и запоминающийся образ. Каждый продукт — это не просто предмет, а инструмент маркетинга, который работает на доверие, лояльность и долгосрочные отношения с клиентами и партнёрами.
                <br />
                <br />
                Объединяя высокую эстетику, передовые технологии и экспертный подход, мы сопровождаем проекты на всех этапах — от идеи и дизайна до производства и готового результата.
                Наша задача — сделать так, чтобы о вашем бренде говорили, его узнавали и выбирали.
                <br />
                <br />
                VERSAYN — корпоративные подарки, которые превращают внимание в ценность бренда.

              </p>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
}
