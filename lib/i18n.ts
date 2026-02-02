type Dictionaries = {
  [lang: string]: {
    [scope: string]: () => Promise<any>
  }
}

const dictionaries: Dictionaries = {
  pt: {
    common: () => import('../app/data/pt/common.json').then(m => m.default),
    'prompt-form': () =>
      import('../app/data/pt/prompt-form.json').then(m => m.default),
    'digital-marketing': () =>
      import('../app/data/pt/digital-marketing.json').then(m => m.default),
    'software-development': () =>
      import('../app/data/pt/software-development.json').then(m => m.default)
  },
  en: {
    common: () => import('../app/data/en/common.json').then(m => m.default),
    'prompt-form': () =>
      import('../app/data/en/prompt-form.json').then(m => m.default),
    'digital-marketing': () =>
      import('../app/data/en/digital-marketing.json').then(m => m.default),
    'software-development': () =>
      import('../app/data/en/software-development.json').then(m => m.default)
  }
}

export async function loadDictionary(lang?: string, scope?: string) {
  if (!lang || !scope) {
    throw new Error(
      `Invalid dictionary params → lang=${lang}, scope=${scope}`
    )
  }

  try {
    const dict = await import(`../app/data/${lang}/${scope}.json`)
    return dict.default
  } catch {
    throw new Error(`Dictionary not found: ${lang}/${scope}`)
  }
}


// Evite erro de build com import dinâmico:

// export async function loadDictionary(
//   lang: string,
//   scope: string
// ) {
//   try {
//     return (await import(`../data/i18n/${lang}/${scope}.json`)).default
//   } catch {
//     return null
//   }
// }
