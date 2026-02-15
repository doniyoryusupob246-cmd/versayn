'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { IMaskInput } from 'react-imask';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { sendTelegramMessage } from '@/actions/telegram';
import { toast } from 'sonner';

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
  }),
};

import { useTranslations } from 'next-intl';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations('Contact');

  const formSchema = z.object({
    name: z.string().min(2, { message: t('form.validation.nameMin') }),
    phone: z.string().min(17, { message: t('form.validation.phoneMin') }), // +998 99 999 99 99 (17 chars)
    message: z.string().optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const result = await sendTelegramMessage({
        name: data.name,
        phone: data.phone,
        message: data.message || '',
        product: 'Contact Form'
      });

      if (result.success) {
        toast.success(t('form.successMessage'));
        form.reset();
      } else {
        toast.error(t('form.errorMessage'));
      }
    } catch (error) {
      toast.error(t('form.errorMessage'));
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {t('headline.line1')}
              <br />
              {t('headline.line2')}
              <br />
              <span className="text-versayn-green italic">{t('headline.line3')}</span>
              <br />{t('headline.line4')}
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
                  {t('address')}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl border border-border/30 bg-card/50 p-8 backdrop-blur-sm">
              <motion.div
                custom={0}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <div className="space-y-2">
                  <Input
                    {...form.register('name')}
                    placeholder={t('form.namePlaceholder')}
                    className={cn(
                      "border-border/40 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-versayn-green",
                      form.formState.errors.name && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                custom={1}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <div className="space-y-2">
                  <IMaskInput
                    mask="{+998} 00 000 00 00"
                    definitions={{
                      '0': /[0-9]/
                    }}
                    {...form.register('phone')}
                    onAccept={(value: string) => {
                      form.setValue('phone', value, { shouldValidate: true });
                    }}
                    placeholder={t('form.phonePlaceholder')}
                    className={cn(
                      "flex h-9 w-full rounded-md border border-border/40 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-versayn-green disabled:cursor-not-allowed disabled:opacity-50 text-foreground",
                      form.formState.errors.phone && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                custom={2}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <div className="space-y-2">
                  <Textarea
                    {...form.register('message')}
                    placeholder={t('form.messagePlaceholder')}
                    rows={5}
                    className="border-border/40 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-versayn-green resize-none"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                custom={3}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full rounded-full bg-versayn-green px-8 py-6 font-display text-sm font-semibold uppercase tracking-wider text-versayn-dark hover:bg-versayn-green/90 hover:shadow-[0_0_30px_rgba(0,224,97,0.4)] transition-all duration-300">
                  {isSubmitting ? t('form.sendingButton') : t('form.submitButton')}
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
