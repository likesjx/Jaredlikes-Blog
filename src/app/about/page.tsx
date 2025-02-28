import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about me and this blog',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        <div className="w-full md:w-1/3 bg-gray-200 dark:bg-gray-700 relative aspect-square rounded-lg overflow-hidden mb-6 md:mb-0 flex items-center justify-center">
          <div className="text-gray-500 dark:text-gray-400 text-4xl">
            JL
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Hello, I'm Jared</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a technology enthusiast, programmer, and educator passionate about AI and its applications.
            This blog is my platform to share insights, experiences, and knowledge about the tech world, 
            especially focusing on generative AI and its impact on our daily lives.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            With several years of experience in software development and AI, I aim to bridge the gap 
            between complex technical concepts and practical applications. I believe in the power of 
            technology to solve real-world problems and enhance human capabilities.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            When I'm not coding or writing, you'll find me exploring nature, reading science fiction, 
            or experimenting with new technologies.
          </p>
        </div>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About This Blog</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Jaredlikes Blog is a personal project created to share knowledge and experiences in the 
          technology world. Here, you'll find:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li className="mb-2">In-depth articles on AI, machine learning, and generative models</li>
          <li className="mb-2">Tutorials for developers looking to integrate AI into their projects</li>
          <li className="mb-2">Reflections on the future of technology and its implications</li>
          <li className="mb-2">Reviews of tools, frameworks, and resources I find valuable</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          The blog is built with Next.js 15 and Sanity.io, showcasing modern web development practices 
          while providing a smooth reading experience.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I'm always interested in connecting with fellow tech enthusiasts, developers, and curious minds.
          Feel free to reach out through any of the following channels:
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:your-email@example.com" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Email Me
          </a>
          <a 
            href="https://twitter.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}