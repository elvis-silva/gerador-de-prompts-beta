import { getPost } from '@/lib/blog';
import Image from 'next/image';
import './blog.css'
import styles from '@/app/[lang]/blog/BlogList.module.css'
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

interface Props {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export default async function BlogPost({ params }: Props) {
  const { lang, slug } = await params;

  const post = await getPost(lang, slug);

  return (
    <article className="blogPost">
      <div className={styles.backNav}>
        <Link href={`/${lang}/blog`} className={styles.backLink}>
          <ArrowLeftIcon className={styles.backIcon} />
          <span className={styles.backLink}>{
          lang === 'pt' ? "Voltar para Blog" : "Back to Blog"}</span>
        </Link>
      </div>

      <header>
        <Image 
          src={post.cover}
          alt={post.title}
          width={1200}
          height={630}
          priority
        />
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </header>

      <section
        className="blogContent"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <footer className="cta">
        <UserGroupIcon className="brandingIcon" />
        <h2>{ lang === 'pt' ? "O Futuro é Colaborativo" : "The Future is Collaborative"}</h2>
        <p>
          {lang === 'pt' ? "A IA não substitui pessoas. Ela amplia capacidades quando bem direcionada." 
          : "AI does not replace people. It enhances capabilities when properly targeted."}
        </p>

        <Link
          href="/pt/gerador-de-prompt" className="ctaButton"
        >
          <span>{lang === 'pt' ? "Acessar Gerador de Prompts" : "Access Prompt Generator"}</span>
          <ArrowRightIcon className="ctaIcon" />
        </Link>

        <span className="ctaNote">
          {lang === 'pt' ? "Pare de lutar com a tecnologia. Domine os resultados." 
          : "Stop fighting the technology. Master the results."}
        </span>
      </footer>
    </article>
  );
}
