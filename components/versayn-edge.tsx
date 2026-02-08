'use client';

import { motion } from 'framer-motion';
import { Palette, Printer, Package, Rocket } from 'lucide-react';

const capabilities = [
  {
    icon: Palette,
    title: 'Стратегия дизайна',
    description: 'Мы не просто перемещаем пиксели. Мы определяем, как ваш бренд обращается к миру.',
  },
  {
    icon: Printer,
    title: 'Мастер-принт',
    description:
      'Современные технологии офсетной и цифровой печати обеспечивают четкие и яркие результаты.',
  },
  {
    icon: Package,
    title: 'Упаковочный центр',
    description: 'От создания первого прототипа до массового производства коробок премиум-класса.',
  },
  {
    icon: Rocket,
    title: 'Запуск бренда',
    description: 'Полное внедрение фирменной символики в печатных и цифровых экосистемах.',
  },
];

export default function VersaynEdge() {
  return (
    <section className="relative bg-versayn-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Край Versayn
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-2xl border border-border/20 bg-card/50 p-8 transition-all duration-500 hover:border-versayn-green/20 hover:bg-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-versayn-green/10 text-versayn-green transition-colors duration-300 group-hover:bg-versayn-green group-hover:text-versayn-dark">
                <cap.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
