import { getPost } from '@/lib/blog';
import Image from 'next/image';

interface Props {
  params: { lang: string; slug: string };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.lang, params.slug);

  return (
    <article className="blogPost">
      <header>
        {/* <Image
          src={post.cover}
          alt={post.title}
          width={1200}
          height={630}
          priority
        />
        <h1>{post.title}</h1>
        <p>{post.description}</p> */}

        <h1>pagina de blog</h1>
      </header>

      <section
        className="blogContent"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
