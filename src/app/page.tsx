import { AppDock } from '@/components/common/dock';
import { ImageShowcase } from '@/components/common/image-showcase';
import { Preview } from '@/components/common/preview';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import NumberTicker from '@/components/magicui/number-ticker';
import ShinyButton from '@/components/magicui/shiny-button';
import WordRotate from '@/components/magicui/word-rotate';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { JSX, SVGProps } from 'react';

export default function Component() {
  return (
    <div className='mx-auto flex min-h-screen max-w-screen-2xl flex-col px-8'>
      <AppDock />
      <main className='flex flex-1 flex-col items-center gap-12 py-32'>
        <div className='relative flex h-96 w-full flex-col items-center justify-center gap-12'>
          <span className='pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            NADA Design
          </span>
          <WordRotate
            className='text-4xl font-bold text-black dark:text-white'
            words={['Global', 'Professional', 'Innovative']}
          />
          <ShinyButton text='Contact now' className='' />
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
              'inset-x-0 mx-auto h-full w-full skew-y-12 scale-125',
              'absolute left-0 right-0 top-0'
            )}
          />
        </div>

        <ImageShowcase />
        <p className='whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white'>
          <NumberTicker value={100} /> Projects
        </p>
        <Preview />
      </main>
      <footer
        id='contact'
        className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'
      >
        <p className='text-xs text-gray-500'>
          © 2023 Innovative Architects. All rights reserved.
        </p>
        <nav className='flex gap-4 sm:ml-auto sm:gap-6'>
          <Link
            className='text-xs text-gray-500 underline-offset-4 hover:underline'
            href='#'
          >
            <Phone className='mr-1 inline-block h-4 w-4' />
            +1 (555) 123-4567
          </Link>
          <Link
            className='text-xs text-gray-500 underline-offset-4 hover:underline'
            href='#'
          >
            <Mail className='mr-1 inline-block h-4 w-4' />
            contact@innovativearchitects.com
          </Link>
          <Link
            className='text-xs text-gray-500 underline-offset-4 hover:underline'
            href='#'
          >
            <MapPin className='mr-1 inline-block h-4 w-4' />
            123 Design Street, Creativity City, 12345
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}
