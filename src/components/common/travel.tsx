import GlassCard from '../ui/glass-card';
import PreviewItemDialog from '../ui/preview-item';
import { Timeline } from '../ui/timeline';
import DynamicImage from './dynamic-image';

const id = '4yK5HBtoBLElo88KvPkiIA';
const travels = [
  {
    title: '🇺🇸 United State',
    description: `Completed a strategic one-month onsite engagement in Atlanta, USA, collaborating directly with cross-functional teams to architect and design system infrastructure for upcoming product initiatives. This immersive experience not only facilitated seamless team integration but also enabled effective knowledge transfer and alignment on critical system design decisions.`,
    images: [
      '9cebe955-0951-474f-fa3e-9679afd10e00',
      'c27fcf00-886b-4e40-c3f3-e3a2f30a0800',
      '727cf508-1068-4e78-8913-cb8cef366100',
      'deda38b1-9219-4e00-8b50-cae6cc092f00',
    ],
  },
  {
    title: '🇰🇷 Korea',
    description: `Inspired by Korean cultural media, I embarked on an enriching journey to Seoul, where I experienced firsthand the captivating blend of tradition and modernity that makes the city truly remarkable. The immersive experience validated the authentic portrayal of Korean culture and urban lifestyle depicted in contemporary media.`,
    images: [
      '26f09768-a51b-44f0-8bbf-286ae6716a00',
      '8cabba96-89b3-4941-d52a-7a68b4afa900',
      'd7754d87-7b23-4c42-94a2-a55e7e273a00',
      'f399f8a6-9886-4cd2-e199-a84501fbcd00',
    ],
  },
  {
    title: '🇹🇭 Thailand',
    description: `Embarked on an extraordinary cross-country expedition through Thailand, traversing from the vibrant metropolis of Bangkok to the cultural hub of Chiang Mai, and ultimately reaching the serene Ban Rak Thai. This comprehensive journey encompassed diverse landscapes and cultural experiences, spanning a 9-hour trek to Chiang Mai followed by a 6-hour venture to the picturesque Ban Rak Thai village.`,
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
    <div className='mx-auto h-fit max-w-screen-lg'>
      <Timeline
        data={travels.map((item) => {
          return {
            title: item.title,
            content: <TravelCard key={item.title} {...item} />,
          };
        })}
      />
    </div>
  );
}

interface ITravelCard {
  images: string[];
  title: string;
  description: string;
}

const TravelCard = ({ images, title, description }: ITravelCard) => {
  return (
    <GlassCard>
      <div className='flex flex-row items-center gap-2'>
        <p className='text-sm font-medium text-gray-500 dark:text-white/60 md:text-base'>
          {description}
        </p>
      </div>

      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {images.map((image, index) => {
          const url =
            'https://imagedelivery.net/' + id + '/' + image + '/public';
          return (
            <PreviewItemDialog
              key={'preview-dialog-' + index}
              trigger={
                <DynamicImage
                  key={'trigger-' + index}
                  width={900}
                  height={900}
                  src={url}
                  alt={title}
                  className='size-full overflow-hidden sm:max-h-72'
                  imageClassName='object-cover'
                />
              }
            >
              <DynamicImage
                key={'preview-' + index}
                width={1920}
                height={1080}
                src={url}
                alt={title}
                className='m-auto max-h-full max-w-full overflow-hidden'
                imageClassName='object-cover w-auto h-auto max-h-full max-w-full rounded-xl'
              />
            </PreviewItemDialog>
          );
        })}
      </div>
    </GlassCard>
  );
};
