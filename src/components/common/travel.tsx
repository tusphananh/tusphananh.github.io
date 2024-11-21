import { cn } from '@/lib/utils';
import { Timeline } from '../ui/timeline';

const travels = [
  {
    title: '🇺🇸',
    description: 'Worked onsite in the US for 1 month',
    images: [
      'https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/2b98fc7e-7040-43ce-82e1-acff00badc00/public',
      'https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/2b98fc7e-7040-43ce-82e1-acff00badc00/public',
    ],
  },
];

export default function Travel() {
  return (
    <Timeline
      data={travels.map((item) => {
        return {
          title: item.title,
          content: <TravelCard key={item.title} {...item} />,
        };
      })}
    />
  );
}

interface ITravelCard {
  images: string[];
  title: string;
  description: string;
}

const TravelCard = ({ images, title, description }: ITravelCard) => {
  return (
    <figure
      className={cn(
        'relative w-full cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-500/10 dark:hover:bg-gray-300/10',
        'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <p className='text-xs font-medium text-gray-500 dark:text-white/80'>
          {description}
        </p>
      </div>

      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={title}
            className='w-full rounded-xl object-cover'
          />
        ))}
      </div>
    </figure>
  );
};
