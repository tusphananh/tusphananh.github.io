'use client';
import { Meteors } from '../ui/meteors';

interface IBlogCardProps {
  name: string;
  description: string;
  link: string;
  image: string;
}

const blogs = [
  {
    name: 'React Best Practices',
    description: 'Learn the best practices of React.',
    link: 'https://tusphananh.gitbook.io/best-practices',
    image:
      'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Nest Best Practices',
    description: 'Nest the best practices of React.',
    link: 'https://tusphananh.gitbook.io/best-practices',
    image:
      'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'My VSCode Extensions',
    description: 'My favorite VSCode extensions.',
    link: 'https://tusphananh.gitbook.io/best-practices',
    image:
      'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Blogs() {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-wrap items-center justify-center gap-8 px-8'>
      {blogs.map((blog) => (
        <BlogCard key={blog.name} {...blog} />
      ))}
    </div>
  );
}

export function BlogCard(props: IBlogCardProps) {
  const { name, description, link, image } = props;
  return (
    <div className=''>
      <div className='relative w-full min-w-96 max-w-xs'>
        <div className='absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl' />
        <div className='relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl'>
          <div className='mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-2 w-2 text-gray-300'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25'
              />
            </svg>
          </div>

          <h1 className='relative z-50 mb-4 text-xl font-bold text-white'>
            {name}
          </h1>

          <p className='relative z-50 mb-4 text-base font-normal text-slate-500'>
            {description}
          </p>

          <img
            src={image}
            alt={name}
            className='mb-8 h-48 w-full rounded-lg object-cover'
          />
          <a
            className='rounded-lg border border-gray-500 px-4 py-1 text-gray-300'
            href={link}
            target='_blank'
          >
            Explore
          </a>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
