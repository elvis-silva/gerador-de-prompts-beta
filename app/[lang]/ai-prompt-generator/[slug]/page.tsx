import { loadDictionary } from '@/lib/i18n'
import PromptForm from '@/components/promptForm/PromptForm'

type PageProps = {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params // ✅ AQUI ESTÁ O PULO DO GATO

  console.log('ROUTE PARAMS:', lang, slug)

  const dict = await loadDictionary(lang, 'digital-marketing')

  console.log('DICT RAW:', dict)

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        {dict.niche.name}
      </h1>

      <PromptForm data={dict} />
    </main>
  )
}

