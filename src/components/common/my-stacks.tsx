'use client';

import { renderCustomIcon } from '@/components/magicui/icon-cloud';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import { fetchSimpleIcons } from 'react-icon-cloud';
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

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function MyStacks() {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, [slugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'light')
    );
  }, [data, theme]);

  if (!renderedIcons?.length) {
    return null;
  }

  return (
    <RevealScroll
      items={renderedIcons}
      background={
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'
          )}
        />
      }
    />
  );
}
