export type Article = {
  slug: string;
  title: string;
  image: string;
  date: string;
};

export type Section = {
  slug: string;
  title: string;
  articles: Article[];
};