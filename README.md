# Jaredlikes Blog

A personal blog built with Next.js 15 and Sanity.io, showcasing knowledge and utilizing generative AI.

## Features

- Modern JAMstack architecture
- Server Components for efficient rendering
- Responsive design with Tailwind CSS
- Content management with Sanity.io
- Blog posts with rich text formatting and code blocks
- Author profiles and category pages
- Dark mode support

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Sanity.io account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/jaredlikes-blog.git
cd jaredlikes-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file based on `.env.local.example` and fill in your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-28
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`.

### Sanity Studio

To access the Sanity Studio locally, navigate to `http://localhost:3000/studio`.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Set up environment variables in the Vercel dashboard
4. Deploy your project

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
