'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  async function changeLang(lang: 'pt' | 'en') {
    // 1. Persiste no cookie (SERVER)
    await fetch('/api/lang', {
      method: 'POST',
      body: JSON.stringify({ lang }),
      headers: { 'Content-Type': 'application/json' }
    });

    // 2. Redireciona mantendo a rota atual
    const segments = pathname.split('/');
    segments[1] = lang;

    router.push(segments.join('/'));
    router.refresh();
  }

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button onClick={() => changeLang('pt')}>PT</button>
      <button onClick={() => changeLang('en')}>EN</button>
    </div>
  );
}
