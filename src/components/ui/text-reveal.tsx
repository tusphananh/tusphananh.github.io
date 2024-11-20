'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';

import { cn } from '@/lib/utils';

interface TextRevealByWordProps {
  text: string;
  className?: string;
  textClassName?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  textClassName,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(' ');

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[200vh]', className)}>
      <div
        className={
          'sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]'
        }
      >
        <div
          ref={targetRef}
          className={cn(
            'flex flex-wrap p-5 text-6xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-7xl lg:p-10 lg:text-8xl xl:text-9xl',
            textClassName
          )}
        >
          {words.map((word, i) => {
            if (word === '\n') {
              return <div key={i} className='h-0 basis-full' />;
            }
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='xl:lg-3 relative mx-1 lg:mx-2.5'>
      <span className={'absolute opacity-30'}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={'text-black dark:text-white'}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
