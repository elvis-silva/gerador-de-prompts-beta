import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['pt', 'en'] as const;
const DEFAULT_LOCALE: 'pt' | 'en' = 'pt';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const localeInPath = SUPPORTED_LOCALES.find(
    l => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (localeInPath) {
    const response = NextResponse.next();
    response.cookies.set('lang', localeInPath, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    });
    return response;
  }

  if (pathname === '/') {
    const cookieLang = request.cookies.get('lang')?.value;

    const locale: 'pt' | 'en' =
      cookieLang === 'pt' || cookieLang === 'en'
        ? cookieLang
        : DEFAULT_LOCALE;

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;

    const response = NextResponse.redirect(url);
    response.cookies.set('lang', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)']
};
