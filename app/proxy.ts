import { NextRequest, NextResponse } from 'next/server'

const locales = ['pt', 'en'] as const
type Locale = typeof locales[number]

const defaultLocale: Locale = 'pt'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ⛔ Ignorar rotas internas e arquivos
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 🔹 Já tem locale na URL
  const urlLocale = locales.find(
    locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (urlLocale) {
    const response = NextResponse.next()
    response.cookies.set('lang', urlLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    })
    return response
  }

  // 🔹 Cookie
  const cookieLocale = request.cookies.get('lang')?.value as Locale | undefined

  // 🔹 Se está na raiz "/" → redireciona UMA vez
  if (pathname === '/') {
    const locale =
      (cookieLocale && locales.includes(cookieLocale))
        ? cookieLocale
        : defaultLocale

    const response = NextResponse.redirect(
      new URL(`/${locale}`, request.url)
    )

    response.cookies.set('lang', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    })

    return response
  }

  console.log('PROXY:', pathname)

  return NextResponse.next()
}
