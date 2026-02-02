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
  const { lang, slug } = await params 

  console.log('ROUTE PARAMS:', lang, slug)

  const dict = await loadDictionary(lang, slug)

  console.log('DICT RAW:', dict)

  return (
    <main className="p-10">
      <div className={styles.centeredContainer}>
        <h1 className={styles.textTitle}>
          Gerador de Prompt
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





// import { getDictionary } from '@/dictionaries/default-dictionaries';
// import { PromptForm } from '@/components/promptForm/PromptForm';
// import { Breadcrumb } from 'antd';

// // IMPORTAÇÃO DIRETA (Evita o erro de 'undefined' no Server Side)
// import Title from 'antd/es/typography/Title';
// import Paragraph from 'antd/es/typography/Paragraph';

// export default async function NichePage({ 
//   params 
// }: { 
//   params: Promise<{ lang: string; slug: string }> 
// }) {
//   const { lang, slug } = await params;
//   const dict: any = await getDictionary(lang);
  
//   const nicheData = dict.niche[slug] || { title: slug, description: '' };

//   return (
//     <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
//       <Breadcrumb 
//         items={[
//           { title: dict.common.home, href: `/${lang}` }, 
//           { title: nicheData.title }
//         ]} 
//       />
      
//       <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
//         <Title level={1} className="gradient-text">
//           {nicheData.title}
//         </Title>
//         <Paragraph style={{ fontSize: '1.1rem' }}>
//           {nicheData.description}
//         </Paragraph>
//       </div>

//       <PromptForm dict={dict} />
//     </main>
//   );
// }