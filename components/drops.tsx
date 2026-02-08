'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const tabs = ['Полиграфия', 'Аксессуары'];

const products = [
  {
    title: 'Футболка',
    spec: '320GSM Single Jersey / Screen Printed',
    image: 'https://hazken.com/assets/images/bg/tshirts-print.jpg',
    label: 'NEW DROP',
    category: 'Аксессуары',
  },
  {
    title: 'Бокал',
    spec: 'Technical Embroidery',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPq3l6HiZKEdU9KWvBXPScQ1Xewe-MYI37A&s',
    label: 'IN STOCK',
    category: 'Аксессуары',
  },
  {
    title: 'Флаер',
    spec: 'Acid-Etched Branding',
    image:
      'https://img.freepik.com/premium-psd/easily-customizable-blank-16x11-a4-letter-mockup-present-your-design-3d-render_433979-3956.jpg?semt=ais_hybrid&w=740&q=80',
    label: 'POPULAR',
    category: 'Полиграфия',
  },
  {
    title: 'Визитка',
    spec: 'Premium Corporate Gift',
    image: 'https://yesimadesigner.com/wp-content/uploads/2019/04/Sadie-Adler.png',
    label: null,
    category: 'Полиграфия',
  },
  {
    title: 'Каталог',
    spec: 'Large Format / Vinyl / UV Resistant',
    image:
      'https://img.freepik.com/free-vector/hand-drawn-product-catalog-template_23-2149860884.jpg',
    label: 'NEW',
    category: 'Полиграфия',
  },
  {
    title: 'Флаг бренда',
    spec: 'High-Quality Textile / Custom Print',
    image:
      'https://thumbs.dreamstime.com/b/d-реалистический-национальный-флаг-узбекистана-изолированный-от-291965038.jpg',
    label: null,
    category: 'Аксессуары',
  },
];

export default function Drops() {
  const [activeTab, setActiveTab] = useState('Полиграфия');

  const filtered = activeTab ? products.filter((p) => p.category === activeTab) : 'Полиграфия';

  return (
    <section className="relative overflow-hidden bg-versayn-dark py-32 lg:py-40">
      {/* Marquee */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.03]">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display text-[12rem] font-bold uppercase tracking-tight">
              VERSAYN &bull; MERCH &bull; PRINT &bull; BRANDING &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-versayn-green animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-versayn-green">
              {'Live: Merch Drop 2024'}
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Фирменный
            <br />
            <span className="text-versayn-green">Матрица товаров.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'border-versayn-green bg-versayn-green text-versayn-dark'
                  : 'border-border/40 text-muted-foreground hover:border-versayn-green/40 hover:text-foreground'
              }`}>
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/20 bg-card transition-all duration-500 hover:border-versayn-green/20 hover:shadow-[0_8px_40px_rgba(0,224,97,0.08)]">
                {/* Label */}
                {product.label && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-versayn-green px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-versayn-dark">
                    {product.label}
                  </div>
                )}
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Spotlight hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-versayn-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{product.spec}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
