export interface ContentBase {
  slug: string;
}

export interface NewsArticle extends ContentBase {
  title: string;
}

export interface Person {
  name: string;
}
