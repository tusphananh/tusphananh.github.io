'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';

import { cn } from '@/lib/utils';

interface RevealByScrollProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  background?: ReactNode;
}

/**
 * @description: Reveal item one by one by scroll with opacity animation and progress,
 * each item will be revealed by scroll one by one
 * only one item will be shown at a time
 * if next item is shown, the previous item will be hidden with fade out animation
 */

const RevealScroll: FC<RevealByScrollProps> = ({
  items,
  className,
  itemClassName,
  background,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[200vh]', className)}>
      <div
        className={
          'sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]'
        }
      >
        {background}
        <div
          ref={targetRef}
          className={cn(
            'flex flex-wrap justify-center gap-8 p-5 text-6xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-7xl lg:p-10 lg:text-8xl xl:text-9xl'
          )}
        >
          {items.map((item, i) => {
            const start = i / items.length;
            const end = start + 1 / items.length;
            return (
              <RevealItem
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                className={itemClassName}
              >
                {item}
              </RevealItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const RevealItem: FC<RevealItemProps> = ({
  children,
  className,
  progress,
  range,
}) => {
  // if progress is in range, show the item with fade in animation
  // else hide the item with fade out animation

  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.div className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
};

export default RevealScroll;
