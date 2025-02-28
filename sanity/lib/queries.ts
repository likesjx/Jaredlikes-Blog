import { groq } from 'next-sanity';

export const postFields = `
  _id,
  title,
  'slug': slug.current,
  'author': author->{name, 'slug': slug.current, image, bio},
  'categories': categories[]->{title, 'slug': slug.current},
  mainImage,
  excerpt,
  publishedAt,
`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
    body,
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
    body,
  }
`;

export const authorQuery = groq`
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    'slug': slug.current,
    image,
    bio,
    'posts': *[_type == "post" && references(^._id)] | order(publishedAt desc) {
      ${postFields}
    }
  }
`;

export const categoryQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    'slug': slug.current,
    description,
    'posts': *[_type == "post" && references(^._id)] | order(publishedAt desc) {
      ${postFields}
    }
  }
`;