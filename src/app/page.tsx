export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Sharing insights on technology, AI, programming, and digital life.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Latest Posts</h2>
        
        <p className="text-gray-600 dark:text-gray-300">
          No posts yet. Check back soon!
        </p>
      </section>
    </div>
  );
}