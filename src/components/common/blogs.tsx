'use client';
import useCloudIcons from '@/hooks/useCloudIcons';
import { AuroraBackground } from '../ui/aurora-background';

interface IBlogCardProps {
  name: string;
  description: string;
  link: string;
  logos?: string[];
}

const blogs = [
  {
    name: 'React Best Practices',
    description:
      'After years of experience, I have gathered the best practices of React.',
    link: 'https://tusphananh.gitbook.io/best-practices',
    logos: ['react', 'typescript', 'nextdotjs'],
  },
  {
    name: 'Nest Best Practices',
    description:
      'After years of experience, I have gathered the best practices of NestJS.',
    link: 'https://tusphananh.gitbook.io/best-practices/nestjs/nestjs-common-interfaces',
    logos: ['nestjs', 'typescript', 'nodedotjs'],
  },
  {
    name: 'My VSCode Extensions',
    description: 'To be productive, you need the right tools. Here are mine.',
    link: 'https://tusphananh.gitbook.io/best-practices/vs-code/my-vs-code-extensions',
    logos: ['prettier', 'typescript', 'react', 'javascript', 'eslint'],
  },
];

export default function Blogs() {
  return (
    <div className='mx-auto grid max-w-screen-xl gap-8 gap-y-12 p-8 lg:grid-cols-2 xl:grid-cols-3'>
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
    <div className='relative flex w-full items-center justify-center'>
      <div className='supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 relative flex h-full max-w-md flex-col items-start justify-end overflow-hidden rounded-2xl border bg-gray-100/60 px-4 py-8 shadow-xl backdrop-blur-xl dark:border-gray-800/60 dark:bg-gray-800/30'>
        <AuroraBackground className='h-48 w-full overflow-hidden rounded-lg p-4'>
          <div className='mr-auto flex flex-wrap gap-4'>
            {renderedIcons?.map((icon) => icon)}
          </div>
          <h1 className='relative z-50 mb-4 mr-auto mt-auto text-wrap text-2xl font-bold opacity-80 dark:text-white'>
            {name}
          </h1>
        </AuroraBackground>

        <p className='relative z-50 my-4 text-wrap text-base font-normal text-gray-600 dark:text-slate-300'>
          {description}
        </p>
        <a
          className='rounded-lg border border-gray-500 px-4 py-1 dark:text-gray-300'
          href={link}
          target='_blank'
        >
          Read more
        </a>
      </div>
    </div>
  );
}
