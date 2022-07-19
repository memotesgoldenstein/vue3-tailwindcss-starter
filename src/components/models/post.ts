export type Author = {
  name: string;
  href: string;
  image: Image;
};

export type Category = {
  name: string;
  href: string;
};

export type Image = {
  url: string;
};

export type Post = {
  id: string;
  title: string;
  author: Author;
  category: Category;
  datetime: string;
  date: string;
  description: string;
  href: string;
  image: Image;
  readingTime: string;
};
