import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['ru', 'uz'],
  defaultLocale: 'ru',
  localePrefix: 'always',
});

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(ru|uz)/:path*'],
};
