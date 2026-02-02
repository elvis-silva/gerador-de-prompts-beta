import { appManager } from './AppManager'

interface RuleContext {
  role?: string
  tone?: string
  niche?: string
}

export function applyRules(ctx: RuleContext) {
  // RESET score a cada ciclo
  // appManager.set('score', 0)

  // // 🎯 Regra por nicho
  // if (ctx.niche === 'digital-marketing') {
  //   appManager.addScore(20)
  // }

  // // 👔 Regra por role
  // if (ctx.role === 'marketing-specialist') {
  //   appManager.addScore(30)
  //   appManager.set('tone', 'professional')
  // }

  // // 🎙 Tom de voz
  // if (ctx.tone === 'creative') {
  //   appManager.addScore(10)
  // }

  // // 💎 Upgrade automático
  // if (appManager.get().score >= 60) {
  //   appManager.set('plan', 'expert')
  // }

  // if (appManager.get().score >= 85) {
  //   appManager.set('plan', 'premium')
  // }
}
