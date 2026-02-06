import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from './types';

export async function getPost(
  lang: string,
  slug: string
): Promise<BlogPost> {
  const filePath = path.join(
    process.cwd(),
    'content',
    lang,
    'blog',
    `${slug}.md`
  );

  const file = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);

  if (!data.title || !data.description || !data.cover) {
    throw new Error(`Post ${slug} está com frontmatter incompleto`);
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    cover: data.cover,
    date: data.date,
    author: data.author ?? 'AI2You',
    tags: data.tags ?? [],
    contentHtml: processed.toString()
  };
}
