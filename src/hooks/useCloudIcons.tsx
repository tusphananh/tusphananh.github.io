import {
  IRenderCustomIconOptions,
  renderCustomIcon,
} from '@/components/magicui/icon-cloud';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import { fetchSimpleIcons } from 'react-icon-cloud';

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function useCloudIcons(
  slugs?: string[],
  options?: IRenderCustomIconOptions
) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!slugs?.length) return;

    fetchSimpleIcons({ slugs }).then(setData);
  }, [slugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, options)
    );
  }, [data, theme]);

  return renderedIcons;
}
