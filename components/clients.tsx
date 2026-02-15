'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const clients = [
  { name: '2GIS', logo: '/brand/2gis.png' },
  { name: 'Axmad', logo: '/brand/axmad.png' },
  { name: 'BM', logo: '/brand/bm.png' },
  { name: 'Bombar', logo: '/brand/bombar.png' },
  { name: 'Chinyt', logo: '/brand/chinyt.png' },
  { name: 'Faster', logo: '/brand/faster.png' },
  { name: 'Feed Up', logo: '/brand/feedup.png' },
  { name: 'Jetour', logo: '/brand/jetour.png' },
  { name: 'Komolon', logo: '/brand/komolon.png' },
  { name: 'Milly Xola', logo: '/brand/millyxola.png' },
  { name: 'Nomdor', logo: '/brand/nomdor.png' },
  { name: 'Octobank', logo: '/brand/octobank.png' },
  { name: 'OSSP', logo: '/brand/ossp.png' },
  { name: 'Penda', logo: '/brand/penda.png' },
  { name: 'Perla', logo: '/brand/perla.png' },
  { name: 'Saff', logo: '/brand/saff.png' },
  { name: 'Tanho', logo: '/brand/tanho.png' },
];

export default function Clients() {
  const t = useTranslations('Clients');

  return (
    <section className="relative overflow-hidden bg-versayn-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t('label')}
          </span>
          <div className="h-px flex-1 bg-border/30" />
        </motion.div>
      </div>

      <div className="group relative flex overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-versayn-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-versayn-dark to-transparent" />

        <motion.div
          className="flex gap-16 pr-16"
          animate={{ x: '-50%' }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{ width: 'fit-content' }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="relative flex h-24 w-48 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 opacity-50">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
