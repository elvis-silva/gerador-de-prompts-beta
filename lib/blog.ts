import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_PATH = path.join(process.cwd(), 'content', 'blog');

/* =========================
   SINGLE POST
========================= */
export async function getPost(lang: string, slug: string) {
  if (!lang || !slug) {
    throw new Error(`getPost params inválidos: lang=${lang}, slug=${slug}`);
  }

  const filePath = path.join(BLOG_PATH, lang, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post não encontrado: ${filePath}`);
  }

  const file = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(file);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    cover: data.cover ?? '/og-default.png',
    contentHtml: marked.parse(content),
  };
}

/* =========================
   ALL POSTS (BLOG LIST)
========================= */
export function getAllPosts(lang: string) {
  if (!lang) {
    throw new Error('getAllPosts chamado sem lang');
  }

  const dir = path.join(BLOG_PATH, lang);

  if (!fs.existsSync(dir)) {
    throw new Error(`Diretório do blog não encontrado: ${dir}`);
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'));

  return files.map((file) => {
    const slug = file.replace('.md', '');
    const fullPath = path.join(dir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      cover: data.cover ?? '/og-default.png',
    };
  });
}



// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { remark } from 'remark';
// import html from 'remark-html';

// const BLOG_PATH = path.join(process.cwd(), 'content');

// export async function getPost(lang: string, slug: string) {
//   if (!lang || !slug) {
//     throw new Error(`getPost chamado com params inválidos: lang=${lang}, slug=${slug}`);
//   }

//   const filePath = path.join(BLOG_PATH, 'blog', lang, `${slug}.md`);

//   if (!fs.existsSync(filePath)) {
//     throw new Error(`Post não encontrado: ${filePath}`);
//   }

//   const file = fs.readFileSync(filePath, 'utf-8');
//   const { data, content } = matter(file);

//   const processed = await remark().use(html).process(content);

//   return {
//     slug,
//     title: data.title,
//     description: data.description,
//     cover: data.cover,
//     date: data.date,
//     author: data.author ?? 'AI2You',
//     tags: data.tags ?? [],
//     contentHtml: processed.toString()
//   };
// }


// export function getAllPosts(lang: string) {
//   const dir = path.join(BLOG_PATH, lang);
//   const files = fs.readdirSync(dir);

//   return files.map((file) => {
//     const slug = file.replace('.md', '');
//     const { data } = matter(
//       fs.readFileSync(path.join(dir, file), 'utf-8')
//     );

//     return { slug, ...data };
//   });
// }
