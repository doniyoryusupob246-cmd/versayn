'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-versayn-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left: Big headline */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Нам доверяет
              <br />
              нечто
              <br />
              <span className="text-versayn-green italic">великое,</span>
              <br />и мы вместе.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-versayn-green" />
                <span className="text-sm text-muted-foreground">hello@versayn.agency</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-versayn-green" />
                <span className="text-sm text-muted-foreground">
                  Main St, Creative District, NY
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 rounded-2xl border border-border/30 bg-card/50 p-8 backdrop-blur-sm">
              <motion.div
                custom={0}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <Input
                  placeholder="Your Name"
                  className="border-border/40 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-versayn-green"
                />
              </motion.div>

              <motion.div
                custom={1}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="border-border/40 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-versayn-green"
                />
              </motion.div>

              <motion.div
                custom={2}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <Textarea
                  placeholder="Tell us about your project"
                  rows={5}
                  className="border-border/40 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-versayn-green resize-none"
                />
              </motion.div>

              <motion.div
                custom={3}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <Button
                  type="submit"
                  className="group w-full rounded-full bg-versayn-green px-8 py-6 font-display text-sm font-semibold uppercase tracking-wider text-versayn-dark hover:bg-versayn-green/90 hover:shadow-[0_0_30px_rgba(0,224,97,0.4)] transition-all duration-300">
                  Отправить
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
