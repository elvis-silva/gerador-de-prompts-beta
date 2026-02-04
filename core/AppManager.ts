import pt from '@/i18n/pt.json'
import en from '@/i18n/en.json'

type Dictionary = Record<string, any>

class AppManager {
  private static instance: AppManager

  lang: string = 'en'
  dict: Dictionary = {}

  nicheData: any = null
  score = 0
  plan: 'free' | 'expert' | 'premium' = 'free'
  role: string = ''

  static getInstance() {
    if (!this.instance) {
      this.instance = new AppManager()
    }
    return this.instance
  }

   

//   useHomeDictionary() {
//    const  dictionaries = { 'pt': pt, 'en': en };
//   const { lang } = useParams();
//   return dictionaries[lang as keyof typeof dictionaries] ?? pt;
// }

  setRole(role: string): string {
    this.role = role
    return this.role
  }

  /* 🔹 i18n */
  setLanguage(lang: string, dict: Dictionary) {
    this.lang = lang
    this.dict = dict
  }

  t(path: string, fallback?: string) {
    return path
      .split('.')
      .reduce((obj, key) => obj?.[key], this.dict) ?? fallback ?? path
  }

  /* 🔹 Niche */
  setNicheData(data: any) {
    this.nicheData = data
  }

  /* 🔹 Rules / Score */
  updateScore(delta: number) {
    this.score += delta

    if (this.score >= 80) this.plan = 'premium'
    else if (this.score >= 50) this.plan = 'expert'
    else this.plan = 'free'
  }

  reset() {
    this.score = 0
    this.plan = 'free'
  }
}

export const appManager = AppManager.getInstance()


// class AppManager {
//   private static instance: AppManager

//   nicheData: any = null
//   lang = 'en'
//   score = 0
//   plan: 'free' | 'expert' | 'premium' = 'free'

//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new AppManager()
//     }
//     return this.instance
//   }

//   setNicheData(data: any) {
//     this.nicheData = data
//   }

//   updateScore(value: number) {
//     this.score = value
//     if (value >= 80) this.plan = 'premium'
//     else if (value >= 50) this.plan = 'expert'
//     else this.plan = 'free'
//   }
// }

// export const appManager = AppManager.getInstance()




// class AppManager {
//   private static instance: AppManager

//   lang: 'pt' | 'en' = 'en'
//   dict: any = {}

//   state = {
//     role: '',
//     tone: '',
//     score: 0,
//     plan: 'free'
//   }

//   static getInstance() {
//     if (!AppManager.instance) {
//       AppManager.instance = new AppManager()
//     }
//     return AppManager.instance
//   }

//   setLanguage(lang: 'pt' | 'en', dict: any) {
//     this.lang = lang
//     this.dict = dict
//   }

//   update(key: keyof AppManager['state'], value: never) {
//     this.state[key] = value
//     this.applyRules()
//   }

//   applyRules() {
//     if (this.state.role && this.state.tone) {
//       this.state.score += 10
//     }

//     if (this.state.score >= 80) this.state.plan = 'premium'
//     else if (this.state.score >= 40) this.state.plan = 'expert'
//     else this.state.plan = 'free'
//   }
// }

// export const appManager = AppManager.getInstance()

// export type Plan = 'free' | 'expert' | 'premium'
// export type Lang = 'pt' | 'en'

// export interface AppState {
//   lang: Lang
//   plan: Plan
//   niche?: string
//   role?: string
//   tone?: string
//   score: number
// }

// class AppManager {
//   private static instance: AppManager
//   private state: AppState

//   private constructor() {
//     this.state = {
//       lang: 'pt',
//       plan: 'free',
//       score: 0
//     }
//   }

//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new AppManager()
//     }
//     return this.instance
//   }

//   get() {
//     return this.state
//   }

//   set<K extends keyof AppState>(key: K, value: AppState[K]) {
//     this.state[key] = value
//   }

//   addScore(value: number) {
//     this.state.score += value
//   }

//   isPremium() {
//     return this.state.plan !== 'free'
//   }
// }

// export const appManager = AppManager.getInstance()
