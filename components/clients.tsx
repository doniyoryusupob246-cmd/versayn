'use client';

import { motion } from 'framer-motion';

const clients = ['NIKE', 'ADIDAS', 'SONY', 'PRADA', 'MERCEDES', 'SAMSUNG'];

export default function Clients() {
  return (
    <section className="relative bg-versayn-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Доверено
          </span>
          <div className="h-px flex-1 bg-border/30" />
        </motion.div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex items-center justify-center py-4">
              <span className="font-display text-lg font-bold tracking-widest text-muted-foreground/30 transition-all duration-500 group-hover:text-foreground group-hover:scale-110">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
