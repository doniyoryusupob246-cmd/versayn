'use server';

interface ContactFormData {
  name: string;
  phone: string;
  message?: string;
  product?: string | null;
}

function escapeHtml(s: string) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export async function sendTelegramMessage(data: ContactFormData) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  console.log('token?', !!process.env.TELEGRAM_BOT_TOKEN);
  console.log('chatId?', !!process.env.TELEGRAM_CHAT_ID);
  if (!token || !chatId) {
    console.warn('Telegram: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set');
    return { success: false, error: 'Server configuration error' };
  }

  const name = escapeHtml(data.name ?? '');
  const phone = escapeHtml(data.phone ?? '');
  const product = escapeHtml(data.product || 'Не указано');
  const message = escapeHtml(data.message?.trim() || '—');

  const text =
    `🛒 <b>Новая заявка с сайта!</b>\n\n` +
    `👤 <b>Имя:</b> ${name}\n` +
    `📱 <b>Телефон:</b> ${phone}\n` +
    `📦 <b>Интересует:</b> ${product}\n\n` +
    `💬 <b>Сообщение:</b>\n${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId, // строкой ок
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const raw = await response.text();
      console.error('Telegram API Error raw:', raw);
      return { success: false, error: raw };
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return { success: false, error: 'Failed to send message' };
  }
}
