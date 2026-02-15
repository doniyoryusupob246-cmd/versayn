'use server';

interface ContactFormData {
    name: string;
    phone: string;
    message?: string;
    product?: string | null;
}

export async function sendTelegramMessage(data: ContactFormData) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
        console.warn('Telegram: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set');
        return { success: false, error: 'Server configuration error' };
    }

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
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
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
