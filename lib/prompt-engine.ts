type ScoreLevel = 'basic' | 'standard' | 'expert' | 'premium'

export function getScoreLevel(score: number): ScoreLevel {
  if (score >= 90) return 'premium'
  if (score >= 75) return 'expert'
  if (score >= 60) return 'standard'
  return 'basic'
}

export function resolveTone({
  specialization,
  defaultTone,
  toneOverrides
}: {
  specialization: string
  defaultTone: string
  toneOverrides: Record<string, string>
}) {
  return toneOverrides[specialization] ?? defaultTone
}
