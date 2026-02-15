'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const t = useTranslations('LanguageSwitcher');

    const onSelectChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex items-center gap-1 font-medium text-sm">
            <button
                onClick={() => onSelectChange('ru')}
                disabled={isPending}
                className={cn(
                    "transition-colors duration-200 hover:text-versayn-green",
                    locale === 'ru' ? "text-versayn-green" : "text-muted-foreground"
                )}
            >
                {t('ru')}
            </button>
            <span className="text-muted-foreground/50">|</span>
            <button
                onClick={() => onSelectChange('uz')}
                disabled={isPending}
                className={cn(
                    "transition-colors duration-200 hover:text-versayn-green",
                    locale === 'uz' ? "text-versayn-green" : "text-muted-foreground"
                )}
            >
                {t('uz')}
            </button>
        </div>
    );
}
