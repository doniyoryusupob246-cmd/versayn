'use server';

const TELEGRAM_BOT_TOKEN = '7990261848:AAFeSlRrYzvBV8sztvlBYFE30Sj1kLuc-Nc';
const TELEGRAM_CHAT_ID = '696151337';

interface ContactFormData {
    name: string;
    phone: string;
    message?: string;
    product?: string | null;
}

export async function sendTelegramMessage(data: ContactFormData) {
    const text = `
🛒 *Новая заявка с сайта!*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
📦 *Интересует:* ${data.product || 'Не указано'}

💬 *Сообщение:*
${data.message}
  `;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: text,
                    parse_mode: 'Markdown',
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API Error:', errorData);
            throw new Error(`Telegram API Error: ${errorData.description || response.statusText}`);
        }

        return { success: true };
    } catch (error) {
        console.error('Failed to send Telegram message:', error);
        return { success: false, error: 'Failed to send message' };
    }
}
