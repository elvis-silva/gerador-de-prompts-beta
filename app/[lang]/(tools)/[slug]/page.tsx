import { notFound } from 'next/navigation';

type Props = {
  params: {
    lang: 'pt' | 'en';
    slug: string;
  };
};

const VALID_SLUGS: Record<string, string> = {
  pt: 'gerador-de-prompt',
  en: 'ai-prompt-generator',
};

export default function PromptGeneratorPage({ params }: Props) {
  const { lang, slug } = params;

  const expectedSlug = VALID_SLUGS[lang];

  // 🚫 Bloqueia URLs inválidas
  if (slug !== expectedSlug) {
    notFound();
  }

  return (
    <main>
      <h1>
        {lang === 'pt'
          ? 'Gerador de Prompt com IA'
          : 'AI Prompt Generator'}
      </h1>

      <p>
        {lang === 'pt'
          ? 'Crie prompts avançados para IA.'
          : 'Create advanced AI prompts.'}
      </p>
    </main>
  );
}
