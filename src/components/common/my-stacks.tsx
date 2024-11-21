'use client';

import useCloudIcons from '@/hooks/useCloudIcons';
import { cn } from '@/lib/utils';
import DotPattern from '../ui/dot-pattern';
import RevealScroll from '../ui/reveal-scroll';

const slugs = [
  'typescript',
  'react',
  'nodedotjs',
  'express',
  'amazonaws',
  'postgresql',
  'nginx',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'sonarqube',
  'figma',
  'sass',
  'nextdotjs',
  'cloudflare',
  'nestjs',
  'mongodb',
  'redis',
];

export function MyStacks() {
  const renderedIcons = useCloudIcons(slugs, { size: 24 });

  if (!renderedIcons?.length) {
    return null;
  }

  return (
    <RevealScroll
      items={renderedIcons.map((icon) => (
        <div className='flex items-center justify-center rounded-full bg-gray-500/10 p-3 backdrop-blur-sm dark:bg-gray-100/10'>
          {icon}
        </div>
      ))}
      background={
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'
          )}
        />
      }
    />
  );
}
