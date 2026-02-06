export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  cover: string;
  date: string;
  author: string;
  contentHtml: string;
  tags?: string[];
}
