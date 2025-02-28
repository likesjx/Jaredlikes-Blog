import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { formatDate } from '@/lib/utils';
import type { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {post.mainImage && (
        <div className="relative w-full h-48">
          <Image
            src={urlFor(post.mainImage).width(800).height(400).url()}
            alt={post.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="mx-2">•</span>
          {post.author && (
            <Link href={`/author/${post.author.slug}`} className="hover:underline">
              {post.author.name}
            </Link>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          <Link href={`/post/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="inline-block px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}