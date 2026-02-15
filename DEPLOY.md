# Инструкция по деплою

## Переменные окружения

Перед деплоем настройте переменные (см. `.env.example`):

- `TELEGRAM_BOT_TOKEN` — токен бота Telegram для отправки заявок с формы контактов
- `TELEGRAM_CHAT_ID` — ID чата/канала, куда приходят заявки

Скопируйте `.env.example` в `.env` и заполните значения локально.

---

## Вариант 1: Vercel

1. Подключите репозиторий к [Vercel](https://vercel.com) (Import Project).
2. **Build and Output Settings**
   - Build Command: `npm run build` (или оставьте по умолчанию)
   - Output Directory: по умолчанию (Next.js)
   - Root Directory: корень проекта (оставьте пустым, если репозиторий — корень)
3. **Environment Variables** (Settings → Environment Variables):
   - `TELEGRAM_BOT_TOKEN` = ваш токен
   - `TELEGRAM_CHAT_ID` = ваш chat id
4. Деплой по push в основную ветку (или по настроенным веткам).

---

## Вариант 2: VPS / Docker

### Сборка и запуск контейнера

```bash
# Сборка образа
docker build -t versayn .

# Запуск (порт 3000, передать секреты)
docker run -p 3000:3000 \
  -e TELEGRAM_BOT_TOKEN=your_token \
  -e TELEGRAM_CHAT_ID=your_chat_id \
  versayn
```

Приложение будет доступно на `http://localhost:3000`. Запросы на `/` будут перенаправляться на `/ru` или `/uz` (i18n).

### Healthcheck

В образ встроен healthcheck: проверка `http://localhost:3000/ru` каждые 30 с. Для оркестрации (Docker Compose, Kubernetes) контейнер будет помечаться unhealthy при падении приложения.

### Рекомендации для production на VPS

- Поставьте обратный прокси (Nginx или Caddy) перед контейнером для HTTPS и домена.
- Используйте `docker compose` или systemd для автозапуска и перезапуска.
- Переменные окружения задавайте через `-e` или файл (например, `env_file` в docker-compose), не храните секреты в коде.
