// lib/getDictionary.ts
const dictionaries = {
  pt: () => import('@/i18n/pt.json').then((module) => module.default),
  en: () => import('@/i18n/en.json').then((module) => module.default)
};

export const getDictionary = async (lang: 'pt' | 'en') => 
  dictionaries[lang]?.() ?? dictionaries.pt();

// export async function getDictionary(lang: string) {
//   try {
//     return (await import(`../i18n/${lang}.json`)).default;
//   } catch {
//     return (await import(`../i18n/pt.json`)).default;
//   }
// }
