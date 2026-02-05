'use client';

import { usePathname, useRouter } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

const languages = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' }
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split('/')[1];

  function changeLanguage(lang: string) {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/'));
  }

  return (
    <div className={styles.switcher}>
      {languages.map(lang => (
        <button
          key={lang.code}
          type="button"
          aria-label={lang.label}
          className={`${styles.button} ${
            currentLang === lang.code ? styles.active : ''
          }`}
          onClick={() => changeLanguage(lang.code)}
        >
          <span className={styles.flag}>{lang.flag}</span>
        </button>
      ))}
    </div>
  );
}


// 'use client';

// import { useLocale } from 'next-intl';
// import { usePathname, useRouter } from 'next-intl/navigation';
// import styles from './LanguageSwitcher.module.css';

// const languages = [
//   { locale: 'pt-BR', label: 'Português', flag: '🇧🇷' },
//   { locale: 'en', label: 'English', flag: '🇺🇸' }
// ];

// export default function LanguageSwitcher() {
//   const locale = useLocale();
//   const pathname = usePathname();
//   const router = useRouter();

//   function changeLanguage(nextLocale: string) {
//     router.push(pathname, { locale: nextLocale });
//   }

//   return (
//     <div className={styles.switcher}>
//       {languages.map(lang => (
//         <button
//           key={lang.locale}
//           type="button"
//           aria-label={lang.label}
//           onClick={() => changeLanguage(lang.locale)}
//           className={`${styles.button} ${
//             locale === lang.locale ? styles.active : ''
//           }`}
//         >
//           <span className={styles.flag}>{lang.flag}</span>
//         </button>
//       ))}
//     </div>
//   );
// }






// 'use client';

// import { usePathname, useRouter } from 'next/navigation';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   async function changeLang(lang: 'pt' | 'en') {
//     // 1. Persiste no cookie (SERVER)
//     await fetch('/api/lang', {
//       method: 'POST',
//       body: JSON.stringify({ lang }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     // 2. Redireciona mantendo a rota atual
//     const segments = pathname.split('/');
//     segments[1] = lang;

//     router.push(segments.join('/'));
//     router.refresh();
//   }

//   return (
//     <div style={{ display: 'flex', gap: 8 }}>
//       <button onClick={() => changeLang('pt')}>PT</button>
//       <button onClick={() => changeLang('en')}>EN</button>
//     </div>
//   );
// }
