'use client';
import { motion } from 'framer-motion';
import { LampContainer } from '../ui/lamp';

export function LampDemo({ children }: { children: React.ReactNode }) {
  return (
    <LampContainer className='mt-32'>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
      >
        {children}
      </motion.h1>
    </LampContainer>
  );
}
