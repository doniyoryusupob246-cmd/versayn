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

const services = [
  {
    number: '01',
    title: 'Футболки',
    description:
      'Создаём брендированные футболки, которые работают на узнаваемость вашей компании. Качественные материалы, точная печать и продуманный дизайн превращают обычный мерч в мощный инструмент маркетинга. Идеально подходят для сотрудников, мероприятий, промо- кампаний и корпоративных подарков.',
    image:
      '/service1.jpg',
    icon: Scissors,
  },
  {
    number: '02',
    title: 'Корпоративные подарочные наборы',
    description:
      'Продуманные до деталей подарочные решения, которые усиливают имидж вашей компании и делают бренд запоминающимся. Мы создаём наборы, которые приятно дарить и ещё приятнее получать — от концепции до безупречного исполнения.',
    image:
      '/service2.jpg',
    icon: Package,
  },
  {
    number: '03',
    title: 'Визитные карточки',
    description:
      'Ваше первое впечатление в печатном виде. Мы создаем визитки, которые выглядят так же премиально, как и предлагаемые вами услуги. Различные варианты отделки, различные материалы, всегда запоминающиеся.',
    icon: CreditCard,
  },
  {
    number: '04',
    title: 'Буклеты и каталоги',
    description:
      'Высококачественные издания, которые расскажут историю вашего бренда благодаря печати и переплету журнального уровня. Идеально подходят для лукбуков, каталогов и годовых отчетов.',
    icon: CreditCard,
  },
  {
    number: '05',
    title: 'Календари',
    description:
      'Круглогодичное присутствие бренда на каждом столе и стене. Календари на заказ с высококачественными фотографиями и отделкой, которые люди действительно захотят выставлять напоказ.',
    icon: Calendar,
  },
  {
    number: '06',
    title: 'Папки и файлы',
    description:
      'Папки для презентаций, которые внушают уважение в любом зале заседаний. Разработаны с использованием высокоточных карманов и имеют премиальную отделку для достижения корпоративного совершенства.',
    icon: FolderOpen,
  },
  {
    number: '07',
    title: 'Блокноты',
    description:
      'Фирменные блокноты, которые станут вашими ежедневными спутниками. Обложки на заказ, высококачественные внутренние страницы и прочный переплет. Идеальный корпоративный подарок.',
    icon: BookMarked,
  },
];

const featureItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
  }),
};

export default function Services() {
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
            Наши услуги
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-versayn-dark sm:text-5xl lg:text-6xl">
            Что мы создаем.
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
                    Запросить цену
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

        {/* Remaining services in compact grid */}
        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 font-display text-2xl font-bold tracking-tight text-versayn-dark">
            Дополнительные услуги
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(2).map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group rounded-2xl border border-versayn-dark/10 bg-white p-8 transition-all duration-300 hover:border-versayn-green/30 hover:shadow-xl">
                <service.icon className="h-6 w-6 text-versayn-green" />
                <h4 className="mt-4 font-display text-lg font-bold text-versayn-dark">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-versayn-dark/60">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-versayn-green transition-colors hover:text-versayn-dark">
                  Запросить цену
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
