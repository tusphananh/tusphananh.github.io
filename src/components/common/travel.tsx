import { cn } from '@/lib/utils';
import { Timeline } from '../ui/timeline';

const id = '4yK5HBtoBLElo88KvPkiIA';
const travels = [
  {
    title: '🇺🇸 United State',
    description:
      'Remarkable onsite trip in the US for 1 month. Atlanta is a beautiful city with cold weather. I moved here to collaborate with the other teams to design new system for our upcoming features.',
    images: [
      '9cebe955-0951-474f-fa3e-9679afd10e00',
      'c27fcf00-886b-4e40-c3f3-e3a2f30a0800',
      '727cf508-1068-4e78-8913-cb8cef366100',
      'deda38b1-9219-4e00-8b50-cae6cc092f00',
    ],
  },
  {
    title: '🇰🇷 Korea',
    description:
      'Watching K-drama was urged me to visit Korea. I went to Seoul to prove that it is also amazing as movie.',
    images: [
      '26f09768-a51b-44f0-8bbf-286ae6716a00',
      '8cabba96-89b3-4941-d52a-7a68b4afa900',
      'd7754d87-7b23-4c42-94a2-a55e7e273a00',
      'f399f8a6-9886-4cd2-e199-a84501fbcd00',
    ],
  },
  {
    title: '🇹🇭 Thailand',
    description:
      'Amazing trip in Thailand, our journey from Bangkok to Chiang Mai then Ban Rak Thai. It took us 9 hours from Bangkok to Chiang Mai and 6 hours to Ban Rak Thai.',
    images: [
      '40c6b0ea-b0ca-4f53-5df6-4343fbfbbd00',
      '7f30018f-3d6f-4d77-3e33-b1c093127200',
      '849c10e4-fe65-4697-010f-a643e61c2d00',
      '0b2df73a-c74b-4f66-970f-46f2fe206900',
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
            src={'https://imagedelivery.net/' + id + '/' + image + '/public'}
            alt={title}
            className='h-full w-full rounded-xl object-cover'
          />
        ))}
      </div>
    </figure>
  );
};
