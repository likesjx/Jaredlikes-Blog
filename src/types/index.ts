import type { Image, PortableTextBlock } from 'sanity';

export interface Author {
  _id: string;
  name: string;
  slug: string;
  image?: Image;
  bio?: PortableTextBlock[];
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  author: Author;
  mainImage?: Image;
  categories?: Category[];
  publishedAt: string;
  excerpt?: string;
  body?: PortableTextBlock[];
}