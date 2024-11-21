'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

type AnimationStyle =
  | 'from-bottom'
  | 'from-center'
  | 'from-top'
  | 'from-left'
  | 'from-right'
  | 'fade'
  | 'top-in-bottom-out'
  | 'left-in-right-out';

interface PreviewItemProps {
  animationStyle?: AnimationStyle;
  className?: string;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
}

const animationVariants = {
  'from-bottom': {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  'from-center': {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  'from-top': {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
  },
  'from-left': {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  },
  'from-right': {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  'top-in-bottom-out': {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  'left-in-right-out': {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
};

export default function PreviewItemDialog({
  animationStyle = 'from-center',
  className,
  children,
  trigger,
}: PreviewItemProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  return (
    <div className={cn('relative', className)}>
      <div
        className='group relative size-full cursor-pointer'
        onClick={() => setIsVideoOpen(true)}
      >
        {trigger}
      </div>
      {createPortal(
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsVideoOpen(false)}
              exit={{ opacity: 0 }}
              className='fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md'
            >
              <motion.div
                {...selectedAnimation}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className='relative size-full overflow-hidden p-4 md:p-16'
              >
                {/* <motion.button className='absolute bottom-0 left-0 right-0 top-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black'>
                  <XIcon className='size-5' />
                </motion.button> */}
                <div className='relative flex size-full max-h-full max-w-full overflow-hidden rounded-2xl'>
                  {children}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
