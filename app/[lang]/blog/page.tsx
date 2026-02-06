import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import styles from './BlogList.module.css';
import {
  ArrowLeftIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;
  const posts = getAllPosts(lang);

  return (
    <section className={styles.blogList}>
      <div className={styles.backNav}>
        <Link href={`/${lang}`} className={styles.backLink}>
          <ArrowLeftIcon className={styles.backIcon} />
          <span className={styles.backLink}>Voltar para AI2You</span>
        </Link>
      </div>

      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Blog AI2You</h1>
        <p className={styles.blogSubtitle}>
          Estratégias, prompts e inteligência aplicada para criar com clareza
        </p>
      </header>

      <div className={styles.blogGrid}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.blogCard}>
            <Link
        href={`/${lang}/blog/${post.slug}`}
        className={styles.blogCardLink}
      >
        {/* Cover image */}
        <div className={styles.blogCardImageWrapper}>
          <Image
            src={post.cover}
            alt={post.title}
            width={600}
            height={340}
            className={styles.blogCardImage}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className={styles.blogCardBody}>
          {/* Ícone */}
          {/* <div className={styles.postIcon} aria-hidden>
            <PencilSquareIcon />
          </div> */}

          <h2 className={styles.blogCardTitle}>
            {post.title}
          </h2>

          <p className={styles.blogCardDescription}>
            {post.description}
          </p>

          <span className={styles.readMore}>
            Ler artigo →
          </span>
        </div>
      </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

