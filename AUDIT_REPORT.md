# Итоговый отчёт: аудит и подготовка к деплою

## Что было не так

| Проблема | Описание |
|----------|----------|
| **404 /noise.png** | В `components/hero.tsx` использовался фон `url('/noise.png')`, файла в `public/` не было. |
| **Deprecated middleware** | Next.js 16 переименовал `middleware.ts` в `proxy.ts` и ожидает экспорт функции `proxy`. |
| **Секреты в коде** | В `actions/telegram.ts` были захардкожены `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`. |
| **ignoreBuildErrors** | В `next.config.mjs` было `typescript.ignoreBuildErrors: true`, ошибки типов не ломали сборку. |
| **Скрипты** | В `package.json` лишние пробелы в `dev`/`start`, не было `typecheck` и `validate`. |
| **ESLint** | Не было конфига и пакетов — команда `npm run lint` не работала. |
| **React purity** | В `components/ui/sidebar.tsx` использовался `Math.random()` в рендере (нарушение правил линтера). |

## Что сделано

1. **noise.png** — в `public/` добавлен минимальный PNG (1×1), запрос к `/noise.png` больше не даёт 404.
2. **proxy.ts** — создан `proxy.ts` с вызовом `createMiddleware` из next-intl и экспортом `proxy(request)`; `middleware.ts` удалён.
3. **next.config.mjs** — убран блок `typescript.ignoreBuildErrors`, добавлен `output: 'standalone'` для Docker.
4. **app/[locale]/layout.tsx** — убрано `locale as any`, проверка локали через `(routing.locales as readonly string[]).includes(locale)`.
5. **actions/telegram.ts** — токен и chat id берутся из `process.env.TELEGRAM_*`; при отсутствии переменных возвращается ошибка и пишется предупреждение в консоль.
6. **.env.example** — добавлен с переменными `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`.
7. **.gitignore** — добавлена строка `.env`, чтобы локальные секреты не попадали в репозиторий.
8. **package.json** — исправлены пробелы в скриптах, добавлены `typecheck` и `validate`.
9. **ESLint** — установлены `eslint@^9` и `eslint-config-next`, добавлен `eslint.config.mjs` (Next.js core-web-vitals + globalIgnores).
10. **components/ui/sidebar.tsx** — «случайная» ширина скелетона заменена на фиксированную `70%` для соблюдения правил чистоты рендера.
11. **Dockerfile** — multi-stage: сборка с `npm ci --legacy-peer-deps` и `next build`, образ на `node:20-alpine` с копированием `standalone` и `public`, healthcheck по `http://localhost:3000/ru`.
12. **.dockerignore** — добавлен (исключены `node_modules`, `.next`, `.git`, `.env*`, и т.д.).
13. **DEPLOY.md** — инструкция деплоя: переменные окружения, Vercel (шаги и переменные), VPS/Docker (сборка, запуск, healthcheck, рекомендации).

## Изменённые и добавленные файлы

- **Изменены:** `next.config.mjs`, `package.json`, `app/[locale]/layout.tsx`, `actions/telegram.ts`, `.gitignore`, `components/ui/sidebar.tsx`
- **Добавлены:** `public/noise.png`, `proxy.ts`, `.env.example`, `eslint.config.mjs`, `Dockerfile`, `.dockerignore`, `DEPLOY.md`, `AUDIT_REPORT.md`
- **Удалён:** `middleware.ts`
- **devDependencies:** добавлены `eslint`, `eslint-config-next` (установка с `--legacy-peer-deps` из‑за peer-конфликта с `react-day-picker`).

## Команды для деплоя

### Локальная проверка

```bash
npm run validate   # lint + typecheck + build
npm run start      # запуск production (после build)
```

### Vercel

- Подключить репозиторий, в настройках задать `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`, деплой по push.

### VPS / Docker

```bash
docker build -t versayn .
docker run -p 3000:3000 -e TELEGRAM_BOT_TOKEN=... -e TELEGRAM_CHAT_ID=... versayn
```

Подробности — в [DEPLOY.md](DEPLOY.md).
