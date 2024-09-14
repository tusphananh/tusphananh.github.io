import { AppDock } from '@/components/common/dock';
import { ImageShowcase } from '@/components/common/image-showcase';
import { Preview } from '@/components/common/preview';
import DockerIcon from '@/components/icons/docker.icon';
import NestIcon from '@/components/icons/nest.icon';
import NextIcon from '@/components/icons/next.icon';
import NodeIcon from '@/components/icons/node.icon';
import NumberTicker from '@/components/magicui/number-ticker';
import OrbitingCircles from '@/components/magicui/orbiting-circles';
import ShinyButton from '@/components/magicui/shiny-button';
import WordRotate from '@/components/magicui/word-rotate';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { CommonInfo } from '@/constants';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const stacks = [
  {
    name: 'Next.js',
    icon: <NextIcon />,
  },
  {
    name: 'Tailwind CSS',
    icon: <NodeIcon />,
  },
  {
    name: 'TypeScript',
    icon: <NestIcon />,
  },
  {
    name: 'Vercel',
    icon: <DockerIcon />,
  },
];
export default function Component() {
  return (
    <div className='mx-auto flex w-full max-w-screen-2xl flex-col overflow-x-hidden px-8'>
      <AppDock />
      <main className='flex flex-1 flex-col items-center gap-12 py-32'>
        <div className='relative flex h-96 w-full flex-col items-center justify-center gap-12'>
          <ShootingStars />
          <ShootingStars />
          <StarsBackground />

          <span className='pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-[42px] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 md:text-8xl'>
            TUSPHANANH
          </span>

          <WordRotate
            className='text-3xl font-bold text-black dark:text-white/80 md:text-5xl'
            words={['Global', 'Professional', 'Innovative']}
          />
          <ShinyButton text='Contact now' className='' />
        </div>

        <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl'>
          <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black'>
            Stacks
          </span>

          {stacks.map((stack, index) => (
            <OrbitingCircles
              reverse={index % 2 === 0}
              className='size-[52px] border-none bg-transparent'
              duration={10 + Math.random() * 10}
              delay={1 + Math.random() * 4}
              radius={80 + 40 * index}
              key={index}
            >
              <span className='text-xl'>{stack.icon}</span>
            </OrbitingCircles>
          ))}
        </div>

        <ImageShowcase />
        <p className='whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white'>
          <NumberTicker value={4} /> Real Projects
        </p>
        <Preview />
      </main>
      <footer
        id='contact'
        className='flex w-full shrink-0 flex-col items-center justify-center gap-8 border-t px-4 py-6 sm:flex-row md:px-6'
      >
        <Link
          className='text-xs text-gray-500 underline-offset-4 hover:underline'
          href='#'
        >
          <Phone className='mr-1 inline-block h-4 w-4' />
          {CommonInfo.phone}
        </Link>
        <Link
          className='text-xs text-gray-500 underline-offset-4 hover:underline'
          href='m,'
        >
          <Mail className='mr-1 inline-block h-4 w-4' />
          {CommonInfo.email}
        </Link>
        <Link
          className='text-xs text-gray-500 underline-offset-4 hover:underline'
          href='#'
        >
          <MapPin className='mr-1 inline-block h-4 w-4' />
          {CommonInfo.location}
        </Link>
      </footer>
    </div>
  );
}
