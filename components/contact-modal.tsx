'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { IMaskInput } from 'react-imask';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { sendTelegramMessage } from '@/actions/telegram';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';



interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string | null;
}

import { useTranslations } from 'next-intl';

export function ContactModal({ isOpen, onClose, productName }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const t = useTranslations('ContactModal');
    const tContact = useTranslations('Contact');

    const formSchema = z.object({
        name: z.string().min(2, {
            message: tContact('form.validation.nameMin'),
        }),
        phone: z.string().min(17, {
            message: tContact('form.validation.phoneMin'),
        }),
        message: z.string().min(10, {
            message: tContact('form.validation.messageMin'),
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);

        try {
            const result = await sendTelegramMessage({
                ...values,
                product: productName,
            });

            if (result.success) {
                toast.success(tContact('form.successMessage'));
                form.reset();
                onClose();
            } else {
                toast.error(tContact('form.errorMessage'));
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(tContact('form.errorMessage'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t('title')}</DialogTitle>
                    <DialogDescription>
                        {t('description', { productName: productName || 'продукт' })}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">{t('nameLabel')}</Label>
                        <Input
                            id="name"
                            placeholder={t('nameLabel')}
                            {...form.register('name')}
                            className={form.formState.errors.name ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.name && (
                            <p className="text-sm text-red-500">
                                {form.formState.errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">{t('phoneLabel')}</Label>
                        <Controller
                            name="phone"
                            control={form.control}
                            render={({ field: { onChange, value, ref, onBlur } }) => (
                                <IMaskInput
                                    mask="+{998} 00 000 00 00"
                                    value={value}
                                    unmask={false}
                                    inputRef={ref}
                                    onBlur={onBlur} // Important for valid/invalid state functionality
                                    onAccept={(value) => onChange(value)}
                                    placeholder="+998 90 123 45 67"
                                    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${form.formState.errors.phone ? 'border-red-500' : ''
                                        }`}
                                />
                            )}
                        />
                        {form.formState.errors.phone && (
                            <p className="text-sm text-red-500">
                                {form.formState.errors.phone.message}
                            </p>
                        )}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="message">{t('messageLabel')}</Label>
                        <Textarea
                            id="message"
                            placeholder={t('messagePlaceholder')}
                            {...form.register('message')}
                            className={form.formState.errors.message ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.message && (
                            <p className="text-sm text-red-500">
                                {form.formState.errors.message.message}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-end pt-4">
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-versayn-green text-versayn-dark hover:bg-versayn-green/90">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {t('sendingButton')}
                                </>
                            ) : (
                                t('submitButton')
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
