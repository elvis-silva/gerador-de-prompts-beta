'use client'

import { useEffect, useState } from 'react'

export function InstallPWAButton() {
  const [prompt, setPrompt] = useState<any>(null)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (!prompt) return null

  return (
    <button
      onClick={() => {
        prompt.prompt()
        setPrompt(null)
      }}
    >
      Install App
    </button>
  )
}
