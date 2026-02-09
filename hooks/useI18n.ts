import pt from '@/i18n/pt.json';
import en from '@/i18n/en.json';

const dictionaries: Record<string, any> = { pt, en };

export function useI18n(lang: string) {
  return dictionaries[lang] || dictionaries.pt;
}
