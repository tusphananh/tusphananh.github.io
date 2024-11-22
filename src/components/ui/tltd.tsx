import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TLTRProps {
  children: React.ReactNode;
  className?: string;
}
export default function TLTR(props: TLTRProps) {
  const { className } = props;
  return (
    <blockquote
      className={twMerge(
        'text-wrap border-l border-l-fuchsia-600 px-4 text-sm',
        className
      )}
    >
      <strong className='text-fuchsia-600'>TLTR</strong>&nbsp;
      {props.children}
    </blockquote>
  );
}
