'use client'

import { ReactNode, useEffect, useState } from 'react'
import { appManager } from './AppManager'

type Props = {
  lang: string
  dict: any
  children: ReactNode
}

export function AppManagerProvider({ lang, dict, children }: Props) {
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    appManager.setLanguage(lang, dict)
    forceUpdate(v => v + 1)
  }, [lang, dict])

  return <>{children}</>
}



// 'use client'

// import { createContext, useContext, useState } from 'react'
// import { appManager } from './AppManager'

// const AppContext = createContext<any>(null)

// export function AppManagerProvider({
//   lang,
//   dict,
//   children
// }: {
//   lang: 'pt' | 'en'
//   dict: any
//   children: React.ReactNode
// }) {
//   const [, force] = useState(0)

//   appManager.setLanguage(lang, dict)

//   const update = (key: string, value: never) => {
//     appManager.update(key as any, value)
//     force(v => v + 1)
//   }

//   return (
//     <AppContext.Provider
//       value={{
//         state: appManager.state,
//         lang: appManager.lang,
//         dict: appManager.dict,
//         update
//       }}
//     >
//       <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
//         <div className="w-full max-w-5xl">{children}</div>
//       </div>
//     </AppContext.Provider>
//   )
// }

// export const useAppManager = () => {
//   const ctx = useContext(AppContext)
//   if (!ctx) throw new Error('useAppManager outside provider')
//   return ctx
// }


// 'use client'

// import { createContext, useContext, useRef } from 'react'

// type AppContextState = {
//   lang: 'pt' | 'en'
//   plan: 'free' | 'expert' | 'premium'
//   score: number
//   setState: (key: string, value: any) => void
// }

// const AppContext = createContext<AppContextState | null>(null)

// export function AppManagerProvider({ children }: { children: React.ReactNode }) {
//   const store = useRef<AppContextState>({
//     lang: 'pt',
//     plan: 'free',
//     score: 0,
//     setState(key, value) {
//       ;(store.current as any)[key] = value
//     }
//   })

//   return (
//     <AppContext.Provider value={store.current}>
//       {children}
//     </AppContext.Provider>
//   )
// }

// export function useAppManager() {
//   const ctx = useContext(AppContext)
//   if (!ctx) throw new Error('AppManagerProvider missing')
//   return ctx
// }
