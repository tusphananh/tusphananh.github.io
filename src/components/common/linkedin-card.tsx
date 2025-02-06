import { ReactNode } from 'react';
import GlassCard from '../ui/glass-card';
import PreviewItemDialog from '../ui/preview-item';
import DynamicImage from './dynamic-image';

export default function ProductCard(props: {
  name: string;
  url: string;
  logo: string;
  date: string;
  images: string[];
  description: ReactNode;
  readMoreLink?: string;
}) {
  const { name, description, url, logo, date, images, readMoreLink } = props;
  return (
    <div className='w-full px-4'>
      <GlassCard className='mx-auto max-w-screen-sm'>
        <div className='mb-4 flex w-fit items-center gap-4'>
          <DynamicImage
            src={logo}
            width={60}
            height={60}
            alt={name}
            className='mx-auto h-12 w-12'
            imageClassName='rounded-sm'
          />
          <span>
            <a target='_blank' className='font-semibold underline' href={url}>
              {name}
            </a>
            <h3 className='text-sm text-white/40'>{date}</h3>
          </span>
        </div>

        {description}

        {readMoreLink && (
          <a
            href={readMoreLink}
            target='_blank'
            className='text-blue-500 hover:underline'
          >
            Read more
          </a>
        )}

        <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {images.map((image, index) => {
            return (
              <PreviewItemDialog
                key={'preview-dialog-' + index}
                trigger={
                  <DynamicImage
                    key={'trigger-' + index}
                    width={900}
                    height={900}
                    src={image}
                    alt={name + ' preview ' + index}
                    className='size-full overflow-hidden sm:max-h-72'
                    imageClassName='object-cover'
                  />
                }
              >
                <DynamicImage
                  key={'preview-' + index}
                  width={1920}
                  height={1080}
                  src={image}
                  alt={'Choiee Demo Day' + index}
                  className='m-auto max-h-full max-w-full overflow-hidden'
                  imageClassName='object-cover w-auto h-auto max-h-full max-w-full rounded-xl'
                />
              </PreviewItemDialog>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
