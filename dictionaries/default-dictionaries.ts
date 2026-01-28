const dictionaries = {
  en: () => import('@/i18n/en.json').then((module) => module.default),
  pt: () => import('@/i18n/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Garante que o locale seja um dos suportados, senão usa 'pt' como fallback
  const loader = dictionaries[locale as keyof typeof dictionaries] || dictionaries.pt;
  return loader();
};