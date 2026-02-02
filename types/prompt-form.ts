export interface PromptOption {
  label: string
  value: string
}

export interface PromptFormSchema {
  niche: {
    key: string
    name: Record<string, string>
  }
  roles: PromptOption[]
  tones: PromptOption[]
  strategicContexts: PromptOption[]
  responsibilities: PromptOption[]
  strategies: PromptOption[]
  grammarStyles: PromptOption[]
  targetAudiences: PromptOption[]
  responseFormats: PromptOption[]
}
