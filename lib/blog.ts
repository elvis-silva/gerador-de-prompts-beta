import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

export async function getPost(lang: string, slug: string) {
  const filePath = path.join(BLOG_PATH, lang, `${slug}.md`);
  const file = fs.readFileSync(filePath, 'utf-8');

  console.log('LANG:', lang);
  console.log('SLUG:', slug);
  console.log('FILE PATH:', filePath);


  const { data, content } = matter(file);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    slug,
    ...data,
    contentHtml: processedContent.toString()
  };
}

export function getAllPosts(lang: string) {
  const dir = path.join(BLOG_PATH, lang);
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const slug = file.replace('.md', '');
    const { data } = matter(
      fs.readFileSync(path.join(dir, file), 'utf-8')
    );

    return { slug, ...data };
  });
}
