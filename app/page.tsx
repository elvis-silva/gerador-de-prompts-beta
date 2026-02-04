import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

const SUPPORTED_LANGS = ['pt', 'en'] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

function resolveLangFromHeader(
  acceptLanguage: string | null
): Lang | null {
  if (!acceptLanguage) return null;

  const langs = acceptLanguage
    .split(',')
    .map(l => l.split(';')[0].trim().slice(0, 2));

  const match = langs.find(l =>
    SUPPORTED_LANGS.includes(l as Lang)
  );

  return (match as Lang) ?? null;
}

export default async function RootPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieLang = cookieStore.get('lang')?.value as Lang | undefined;
  const headerLang = resolveLangFromHeader(
    headerStore.get('accept-language')
  );

  const lang: Lang =
    cookieLang && SUPPORTED_LANGS.includes(cookieLang)
      ? cookieLang
      : headerLang ?? 'pt';

  redirect(`/${lang}`);
}




// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

// export default async function RootPage() {
//   const cookieStore = await cookies();
//   const cookieLang = cookieStore.get('lang')?.value;

//   const lang = cookieLang === 'en' ? 'en' : 'pt';

//   redirect(`/${lang}`);
// }


// import { headers } from 'next/headers';
// import { redirect } from 'next/navigation';


// export default async function RootPage() {
//   const headerList = await headers();
//   const acceptLanguage = headerList.get('accept-language') || '';

//   // Lógica simples de detecção de idioma (PT se contiver 'pt', caso contrário EN)
//   const lang = acceptLanguage.includes('pt') ? 'pt' : 'en';

//   // Redirecionamento permanente (308) ou temporário (307)
//   redirect(`/${lang}`);
// }

