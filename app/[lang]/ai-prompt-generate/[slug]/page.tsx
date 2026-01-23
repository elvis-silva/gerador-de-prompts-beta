import { getDictionary } from '@/dictionaries/default-dictionaries';
import PromptForm from '@/components/promptForm/PromptForm';
import { Breadcrumb } from 'antd';

// IMPORTAÇÃO DIRETA (Evita o erro de 'undefined' no Server Side)
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

export default async function NichePage({ 
  params 
}: { 
  params: Promise<{ lang: string; slug: string }> 
}) {
  const { lang, slug } = await params;
  const dict: any = await getDictionary(lang);
  
  const nicheData = dict.niche[slug] || { title: slug, description: '' };

  return (
    <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <Breadcrumb 
        items={[
          { title: dict.common.home, href: `/${lang}` }, 
          { title: nicheData.title }
        ]} 
      />
      
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
        <Title level={1} className="gradient-text">
          {nicheData.title}
        </Title>
        <Paragraph style={{ fontSize: '1.1rem' }}>
          {nicheData.description}
        </Paragraph>
      </div>

      <PromptForm dict={dict} />
    </main>
  );
}