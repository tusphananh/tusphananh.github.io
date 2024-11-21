'use client';
import useResizeObserver from '@/hooks/useResizeObserver';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const [ref, size] = useResizeObserver<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, size.height]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full' ref={containerRef}>
      <div ref={ref} className='relative mx-auto max-w-7xl pb-20'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-10 md:gap-10 md:pt-20'
          >
            <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start lg:max-w-sm'>
              <div className='absolute left-3 flex size-6 items-center justify-center rounded-full bg-neutral-200/60 backdrop-blur-sm dark:bg-black/60 md:left-3 md:size-10'>
                <div className='h-4 w-4 rounded-full border border-neutral-300 bg-white/80 p-2 dark:border-neutral-700 dark:bg-neutral-600/30' />
              </div>
            </div>

            <div className='relative w-full pl-12 pr-4 md:pl-4'>
              <h3 className='mb-4 block text-left text-2xl font-bold text-neutral-800 dark:text-neutral-100/80'>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: size.height + 'px',
          }}
          className='absolute left-6 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent'
          />
        </div>
      </div>
    </div>
  );
};
