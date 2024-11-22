'use client';
import useCloudIcons from '@/hooks/useCloudIcons';
import { AuroraBackground } from '../ui/aurora-background';
import GlassCard from '../ui/glass-card';
import TLTR from '../ui/tltd';

interface IBlogCardProps {
  name: string;
  description: string;
  link: string;
  logos?: string[];
}

const blogs = [
  {
    name: 'React Best Practices',
    description: `Developed deep expertise in React best practices, focusing on custom hooks development, performance-optimized components, and implementing pure functions for predictable, side-effect-free applications.`,
    link: 'https://tusphananh.gitbook.io/best-practices',
    logos: ['react', 'typescript', 'nextdotjs'],
  },
  {
    name: 'Nest Best Practices',
    description:
      'What began as crafting basic NestJS APIs evolved into architecting enterprise solutions, where I transformed complex pagination, security, and multi-database challenges into elegant, reusable patterns that power our applications today.',
    link: 'https://tusphananh.gitbook.io/best-practices/nestjs/nestjs-common-interfaces',
    logos: ['nestjs', 'typescript', 'nodedotjs'],
  },
  {
    name: 'My VSCode Extensions',
    description:
      'Optimize your development environment with these battle-tested VS Code extensions, carefully selected to boost productivity, enhance code intelligence, and accelerate development cycles.',
    link: 'https://tusphananh.gitbook.io/best-practices/vs-code/my-vs-code-extensions',
    logos: ['prettier', 'typescript', 'react', 'javascript', 'eslint'],
  },
  {
    name: 'Cool Stuffs',
    description: `Collection of high-quality design resources discovered across the web, featuring comprehensive diagram tools, professional icon libraries, and modern UI components for elevated digital experiences.`,
    link: 'https://tusphananh.gitbook.io/best-practices/cool-stuff/cool-websites-for-development',
    logos: ['figma', 'typescript', 'react', 'javascript', 'eslint'],
  },
];

export default function Blogs() {
  return (
    <div className='mx-auto grid max-w-screen-xl gap-8 gap-y-12 p-8 lg:grid-cols-2'>
      {blogs.map((blog) => (
        <BlogCard key={blog.name} {...blog} />
      ))}
    </div>
  );
}

export function BlogCard(props: IBlogCardProps) {
  const { name, description, link, logos } = props;

  const renderedIcons = useCloudIcons(logos, { size: 24 });

  return (
    <div className='flex items-center justify-center'>
      <GlassCard className='size-full max-w-md'>
        <div className='flex size-full flex-col'>
          <AuroraBackground className='h-48 w-full overflow-hidden rounded-lg p-4'>
            <div className='mr-auto flex flex-wrap gap-4'>
              {renderedIcons?.map((icon) => icon)}
            </div>
            <h1 className='relative z-50 mb-4 mr-auto mt-auto text-wrap text-2xl font-bold opacity-80 dark:text-white'>
              {name}
            </h1>
          </AuroraBackground>

          <div className='relative z-50 my-4'>
            <TLTR className='text-gray-600 dark:text-slate-300'>
              {description}
            </TLTR>
          </div>
          <a
            className='mt-auto size-fit rounded-lg border border-gray-500 px-4 py-1 dark:text-gray-300'
            href={link}
            target='_blank'
          >
            Read more
          </a>
        </div>
      </GlassCard>
    </div>
  );
}
