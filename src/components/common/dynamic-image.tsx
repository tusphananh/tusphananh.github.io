/* eslint-disable @next/next/no-img-element */
import { getCustomCloudflareUrl } from '@/utils';
import { SyntheticEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface IDynamicImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  onClick?: (e: SyntheticEvent) => void;
  figcaption?: string;
  disableDrag?: boolean;
  circle?: boolean;
}

function DynamicImage(props: IDynamicImageProps) {
  const {
    src,
    alt,
    width,
    height,
    className,
    imageClassName,
    onClick,
    figcaption,
    disableDrag,
    circle,
  } = props;

  const url = getCustomCloudflareUrl(src, { width, height });
  const blurUrl = getCustomCloudflareUrl(src, { width, height, blur: 250 });
  const commonImgClasses = twMerge(
    'h-full w-full object-cover rounded-xl object-cover',
    disableDrag && 'pointer-events-none',
    imageClassName
  );

  return (
    <figure className={twMerge('h-full w-full', className)}>
      <div
        onClick={onClick}
        className={twMerge(
          'relative flex h-full max-h-full w-full max-w-full items-center justify-center',
          circle && 'overflow-hidden rounded-full'
        )}
      >
        <img
          loading='lazy'
          width={width}
          height={height}
          alt={`${alt}-blur-image`}
          src={blurUrl}
          className={commonImgClasses}
        />
        <img
          loading='lazy'
          width={width}
          height={height}
          alt={alt}
          src={url}
          className={twMerge(
            'absolute bottom-0 left-0 right-0 top-0 m-auto',
            commonImgClasses
          )}
        />
      </div>
      {figcaption && (
        <figcaption className='mt-2 w-full text-center text-xs italic text-zinc-500'>
          {figcaption}
        </figcaption>
      )}
    </figure>
  );
}

export default DynamicImage;
