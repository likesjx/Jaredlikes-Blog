import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getClient } from '@/sanity/lib/client';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { formatDate } from '@/lib/utils';
import { PortableText } from '@portabletext/react';
import type { Post } from '@/types';
import type { Metadata } from 'next';

export const revalidate = 60; // Revalidate content at most every 60 seconds

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getClient().fetch<Post>(postBySlugQuery, { slug: params.slug });
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} by ${post.author.name}`,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} by ${post.author.name}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getClient().fetch<string[]>(postSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

// Custom components for the blog content
const PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 relative w-full h-96">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          className="rounded-lg object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-6">
        {value.filename && (
          <div className="text-xs text-gray-500 mb-2">{value.filename}</div>
        )}
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-6 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="my-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href}
          rel={rel}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function PostPage({ params }: PostPageProps) {
  const post = await getClient().fetch<Post>(postBySlugQuery, { slug: params.slug });
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-10">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {post.author && (
            <>
              <span className="mx-2">•</span>
              <Link href={`/author/${post.author.slug}`} className="hover:underline">
                {post.author.name}
              </Link>
            </>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        
        {post.excerpt && (
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 italic">
            {post.excerpt}
          </p>
        )}
        
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map(category => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                {category.title}
              </Link>
            ))}
          </div>
        )}
        
        {post.mainImage && (
          <div className="relative w-full h-96 sm:h-[32rem] mb-8">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 1024px, 1200px"
              priority
            />
          </div>
        )}
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {post.body && <PortableText value={post.body} components={PortableTextComponents} />}
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          About the Author
        </h3>
        <div className="flex items-start">
          {post.author.image && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <Image
                src={urlFor(post.author.image).width(64).height(64).url()}
                alt={post.author.name}
                className="rounded-full object-cover"
                fill
                sizes="64px"
              />
            </div>
          )}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">
              <Link href={`/author/${post.author.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {post.author.name}
              </Link>
            </h4>
            {post.author.bio && (
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                <PortableText value={post.author.bio} />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}