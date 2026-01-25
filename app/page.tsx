import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  const headerList = await headers();
  const acceptLanguage = headerList.get('accept-language') || '';

  // Lógica simples de detecção de idioma (PT se contiver 'pt', caso contrário EN)
  const lang = acceptLanguage.includes('pt') ? 'pt' : 'en';

  // Redirecionamento permanente (308) ou temporário (307)
  redirect(`/${lang}`);
}

