'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ContactModal } from './contact-modal';

interface Product {
  title: string;
  spec: string;
  image: string;
  label: string | null;
  category: string;
}
import { useTranslations } from 'next-intl';

const tabs = ['accessories', 'polygraphy'];

export default function Drops() {
  const t = useTranslations('Drops');
  const [activeTab, setActiveTab] = useState<string>('accessories');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      title: t('products.tshirt.title'),
      spec: t('products.tshirt.spec'),
      image: '/aksessuar/tshirt.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.sweatshirt.title'),
      spec: t('products.sweatshirt.spec'),
      image: '/aksessuar/svitshot.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.vest.title'),
      spec: t('products.vest.spec'),
      image: '/aksessuar/jilet.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.cap.title'),
      spec: t('products.cap.spec'),
      image: '/aksessuar/kepka.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.gifts.title'),
      spec: t('products.gifts.spec'),
      image: '/aksessuar/service2.jpg',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.notebooks.title'),
      spec: t('products.notebooks.spec'),
      image: '/aksessuar/bloknot.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.menu.title'),
      spec: t('products.menu.spec'),
      image: '/aksessuar/menu.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.pens.title'),
      spec: t('products.pens.spec'),
      image: '/aksessuar/ruchka.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.frames.title'),
      spec: t('products.frames.spec'),
      image: '/aksessuar/ramka.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.statues.title'),
      spec: t('products.statues.spec'),
      image: '/aksessuar/statuetka.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.cards.title'),
      spec: t('products.cards.spec'),
      image: '/aksessuar/taklif.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.thermos.title'),
      spec: t('products.thermos.spec'),
      image: '/aksessuar/termos.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.badges.title'),
      spec: t('products.badges.spec'),
      image: '/aksessuar/znachok.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.folders.title'),
      spec: t('products.folders.spec'),
      image: '/aksessuar/fayl.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.flags.title'),
      spec: t('products.flags.spec'),
      image: '/aksessuar/flag.png',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.glass.title'),
      spec: t('products.glass.spec'),
      image: '/aksessuar/service3.jpg',
      label: null,
      category: 'accessories',
    },
    {
      title: t('products.flyer.title'),
      spec: t('products.flyer.spec'),
      image: '/poligrafiya/flyer.jpg',
      label: null,
      category: 'polygraphy',
    },
    {
      title: t('products.businessCard.title'),
      spec: t('products.businessCard.spec'),
      image: '/poligrafiya/vizzitka.jpg',
      label: null,
      category: 'polygraphy',
    },
    {
      title: t('products.catalog.title'),
      spec: t('products.catalog.spec'),
      image: '/poligrafiya/katalog.jpg',
      label: null,
      category: 'polygraphy',
    },
    {
      title: t('products.booklet.title'),
      spec: t('products.booklet.spec'),
      image: '/poligrafiya/buklet.jpg',
      label: null,
      category: 'polygraphy',
    }, {
      title: t('products.doorhanger.title'),
      spec: t('products.doorhanger.spec'),
      image: '/poligrafiya/doorhanger.png',
      label: null,
      category: 'polygraphy',
    }, {
      title: t('products.file.title'),
      spec: t('products.file.spec'),
      image: '/poligrafiya/fayl.jpg',
      label: null,
      category: 'polygraphy',
    }, {
      title: t('products.calendar.title'),
      spec: t('products.calendar.spec'),
      image: '/poligrafiya/kalendar.jpg',
      label: null,
      category: 'polygraphy',
    }, {
      title: t('products.leaflet.title'),
      spec: t('products.leaflet.spec'),
      image: '/poligrafiya/liflet.jpg',
      label: null,
      category: 'polygraphy',
    }, {
      title: t('products.polyMenu.title'),
      spec: t('products.polyMenu.spec'),
      image: '/poligrafiya/menu.jpg',
      label: null,
      category: 'polygraphy',
    }, {
      title: t('products.bag.title'),
      spec: t('products.bag.spec'),
      image: '/poligrafiya/paket.jpg',
      label: null,
      category: 'polygraphy',
    },
  ];

  const filtered: Product[] = activeTab ? products.filter((p) => p.category === activeTab) : products;

  const handleOpenModal = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-versayn-dark py-5 lg:py-40">
      {/* Marquee */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.03]">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display text-[12rem] font-bold uppercase tracking-tight">
              {t('marquee')}
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
              {t('label')}
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            {t('titleLine1')}
            <br />
            <span className="text-versayn-green">{t('titleLine2')}</span>
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
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeTab === tab
                ? 'border-versayn-green bg-versayn-green text-versayn-dark'
                : 'border-border/40 text-muted-foreground hover:border-versayn-green/40 hover:text-foreground'
                }`}>
              {t(`tabs.${tab}`)}
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
                  <button
                    onClick={() => handleOpenModal(product.title)}
                    className="mt-4 w-full rounded-full border border-versayn-green/20 bg-versayn-green/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-versayn-green transition-colors hover:bg-versayn-green hover:text-versayn-dark">
                    {t('detailsButton')}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />
    </section>
  );
}
