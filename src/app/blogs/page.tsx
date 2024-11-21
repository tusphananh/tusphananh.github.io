import Blogs from '@/components/common/blogs';

export default function BlogsPages() {
  return (
    <div className='min-safe-area'>
      <h1 className='mt-8 text-center text-3xl font-bold'>Blogs</h1>
      <div className='flex flex-col items-center'>
        <p className='text-center text-lg'>
          I&apos;m a software engineer, I love to write blogs about technology,
          programming, and my life.
        </p>
        <Blogs />
      </div>
    </div>
  );
}
