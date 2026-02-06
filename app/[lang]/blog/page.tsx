import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';

interface Props {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lang } = await params;

  const isPT = lang === 'pt';

  return {
    title: isPT
      ? 'Blog sobre Inteligência Artificial | AI2You'
      : 'Artificial Intelligence Blog | AI2You',

    description: isPT
      ? 'Artigos sobre inteligência artificial, automação, prompts e produtividade.'
      : 'Articles about artificial intelligence, automation, prompts and productivity.',

    alternates: {
      canonical: `https://ai2you.online/${lang}/blog`,
      languages: {
        pt: 'https://ai2you.online/pt/blog',
        en: 'https://ai2you.online/en/blog'
      }
    },

    openGraph: {
      title: isPT
        ? 'Blog AI2You'
        : 'AI2You Blog',
      description: isPT
        ? 'Conteúdos estratégicos sobre IA e automação.'
        : 'Strategic content about AI and automation.',
      url: `https://ai2you.online/${lang}/blog`,
      siteName: 'AI2You',
      images: [
        {
          url: 'https://ai2you.online/images/og-blog.jpg',
          width: 1200,
          height: 630,
          alt: 'AI2You Blog'
        }
      ],
      locale: isPT ? 'pt_BR' : 'en_US',
      type: 'website'
    },

    twitter: {
      card: 'summary_large_image',
      title: isPT ? 'Blog AI2You' : 'AI2You Blog',
      description: isPT
        ? 'Artigos sobre IA, automação e produtividade.'
        : 'Articles about AI, automation and productivity.',
      images: ['https://ai2you.online/images/og-blog.jpg']
    }
  };
}

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;

  const posts = await getAllPosts(lang);

  return (
    <main className="container">
      <header className="blogHeader">
        <h1 className="blogTitle">
          {lang === 'pt' ? 'Blog AI2You' : 'AI2You Blog'}
        </h1>
        <p className="blogSubtitle">
          {lang === 'pt'
            ? 'Conteúdos estratégicos sobre inteligência artificial, prompts e automação.'
            : 'Strategic content about artificial intelligence, prompts and automation.'}
        </p>
      </header>

      <section className="blogGrid">
        {posts.map((post) => (
          <article key={post.slug} className="blogCard">
            <Link href={`/${lang}/blog/${post.slug}`}>
              {/* <Image
                src={post.cover}
                alt={post.title}
                width={400}
                height={220}
                className="blogCardImage"
              />
              <div className="blogCardContent">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(
                    lang === 'pt' ? 'pt-BR' : 'en-US'
                  )}
                </time>
              </div> */}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
