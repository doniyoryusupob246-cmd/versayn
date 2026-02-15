import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ru', 'uz'],
 
  // Used when no locale matches
  defaultLocale: 'ru',

  // The default locale can be used without a prefix (e.g. /about).
  // If you prefer to always show the locale prefix (e.g. /ru/about),
  // set this to `always`.
  localePrefix: 'always' 
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|uz)/:path*']
};
