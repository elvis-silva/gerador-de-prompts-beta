export async function getDictionary(lang: string) {
  try {
    return (await import(`../i18n/${lang}.json`)).default;
  } catch {
    return (await import(`../i18n/pt.json`)).default;
  }
}
