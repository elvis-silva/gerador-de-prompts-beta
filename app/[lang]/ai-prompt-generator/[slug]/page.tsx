import { loadDictionary } from '@/lib/i18n'
import PromptForm from '@/components/promptForm/PromptForm'
import styles from './page.module.css'

type PageProps = {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params // ✅ AQUI ESTÁ O PULO DO GATO

  console.log('ROUTE PARAMS:', lang, slug)

  const dict = await loadDictionary(lang, slug)

  console.log('DICT RAW:', dict)

  return (
    <main className="p-10">
      <div className={styles.centeredContainer}>
        <h1 className={styles.textTitle}>
          AI Prompt Generator
          <br />
          <span className={styles.textHighlight}>{dict.niche.name}</span>
        </h1>

        {/* <p className={styles.textSubtitle}>
          Aqui é um parágrafo muito chique
        </p> */}
      </div>

      <PromptForm data={dict} />
    </main>
  )
}

