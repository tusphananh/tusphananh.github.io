import { ImageShowcase } from '@/components/common/image-showcase';
import { MyStacks } from '@/components/common/my-stacks';
import { Preview } from '@/components/common/preview';
import StackOrbit from '@/components/common/stack-orbit';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import NumberTicker from '@/components/magicui/number-ticker';
import ShimmerButton from '@/components/magicui/shimmer-button';
import ShineBorder from '@/components/magicui/shine-border';
import ShinyButton from '@/components/magicui/shiny-button';
import WordRotate from '@/components/magicui/word-rotate';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { CommonInfo } from '@/constants';
import Link from 'next/link';

export default function Component() {
  return (
    <div className='mx-auto flex w-full max-w-screen-2xl flex-col overflow-x-hidden px-8'>
      <main className='flex flex-1 flex-col items-center gap-12 py-32'>
        <div className='relative flex w-full flex-col items-center justify-center gap-12'>
          <span className='flex gap-8 text-7xl md:text-8xl'>
            <p className='pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
              Hello
            </p>
            <span className='animate-wave'>👋</span>
          </span>

          <AnimatedShinyText className='inline-flex w-full items-center justify-center px-4 py-1 text-xl transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
            <span className='w-full'>
              My name is <span className='font-mono font-bold'>tusphananh</span>
              , I&apos;m focused on 3 things:
            </span>
          </AnimatedShinyText>

          <WordRotate
            className='text-3xl font-bold text-black dark:text-white/80 md:text-5xl'
            words={['Global Engineer', 'Performance', 'Innovative']}
          />
          <Link href={`mailto:${CommonInfo.email}`}>
            <ShinyButton text='Contact now' />
          </Link>
        </div>

        <div className='relative flex w-full flex-col items-center justify-center gap-12'>
          <ShootingStars />
          <ShootingStars />
          <StarsBackground />
          <StackOrbit />
        </div>

        <p className='pointer-events-none w-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
          Further more
        </p>

        <MyStacks />

        <ImageShowcase />
        <p className='whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white'>
          <NumberTicker value={4} /> Real Projects
        </p>
        <Preview />

        <ShineBorder
          className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border'
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
            What Can I Help You?
          </span>
          <Link target='_blank' href={CommonInfo.gitbook}>
            <ShimmerButton className='mt-8 shadow-2xl'>
              <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
                Click this !
              </span>
            </ShimmerButton>
          </Link>
        </ShineBorder>
      </main>
    </div>
  );
}
