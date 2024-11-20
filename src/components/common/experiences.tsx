import { cn } from '@/lib/utils';
import { Timeline } from '../ui/timeline';

const workingHistory = [
  {
    name: 'NAB Innovation Center',
    duration: '2024',
    body: 'Working in Global Engineering has been a great experience. I have learned a lot and met some amazing people. Collaborating with multiple micro-services and micro-frontend is not only great but also significant betterment in career path.',
    img: 'https://rebrand.com/wp-content/uploads/2023/07/NAB-Star-Logo-On-black-Thumbnail-7-5-2023.png',
  },
  {
    name: 'FPT Software',
    duration: '2022',
    body: 'Intensive working with multiple projects and teams. I have learned a lot and met some amazing people. Collaborating with multiple micro-services and micro-frontend is not only great but also significant betterment in career path. AWS, GCP, Azure, and other cloud services are my daily tasks.',
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'G-Calls',
    duration: '2021',
    body: 'Working in Global Engineering has been a great experience. I have learned a lot and met some amazing people.',
    img: 'https://avatar.vercel.sh/john',
  },
];

const WorkingHistory = ({
  img,
  name,
  duration,
  body,
}: {
  img: string;
  name: string;
  duration: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-full cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img
          className='h-8 w-8 rounded-full object-cover'
          width='32'
          height='32'
          alt=''
          src={img}
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{duration}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{body}</blockquote>
    </figure>
  );
};

export function Experiences() {
  return (
    <div className='mx-auto h-fit max-w-2xl'>
      <Timeline
        data={workingHistory.map((work) => ({
          title: work.duration,
          content: <WorkingHistory key={work.duration} {...work} />,
        }))}
      />
    </div>
  );
}
