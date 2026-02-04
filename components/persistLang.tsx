'use client'
import { useEffect } from 'react'

export function PersistLang({ lang }: { lang: string }) {
  useEffect(() => {
    fetch('/api/lang', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang })
    })
  }, [lang])

  return null
}