/* eslint-disable @next/next/no-img-element */
'use client';

import useInView from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Timeline } from '../ui/timeline';
import TypingAnimation from '../ui/typing-animation';

interface IWorkingHistory {
  img: string;
  name: string;
  duration: string;
  body: string;
  title: string;
  achievements?: string[];
}

const workingHistory: IWorkingHistory[] = [
  {
    name: 'NAB Innovation Center',
    duration: '2024',
    title: 'Software Engineer',
    body: 'Working in Global Engineering has been a great experience. I have learned a lot and met some amazing people. Collaborating with multiple micro-services and micro-frontend is not only great but also significant betterment in career path.',
    img: 'https://rebrand.com/wp-content/uploads/2023/07/NAB-Star-Logo-On-black-Thumbnail-7-5-2023.png',
    achievements: [
      'Applied Graphql codegen to generate typescript types for graphql queries and mutations',
      'Implemented new hooks for React to reduce boilerplate code',
    ],
  },
  {
    name: 'FPT Software',
    duration: '2022',
    title: 'Software Engineer',
    body: 'Intensive working with multiple teams both in Vietnam and US. In charge of designing and implementing new features with AWS, React, and NodeJS. Also, building in-house React Libraries with TurboRepo.',
    img: 'https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/logo-fpt.png?modified=20241017090751',
    achievements: [
      "2022's Top performer",
      "2021's Top performer",
      'US onsite training',
    ],
  },
  {
    name: 'Gcalls',
    duration: '2021',
    title: 'Intern Fullstack Developer',
    body: 'Full experience with React, NodeJS, and MongoDB. Worked on building a new SDK for Mobile and Web. Set up CI/CD, Nginx, and Docker for Microservices. Implemented ELK stacks to monitor system.',
    img: 'https://khoinghiepvietnam.org/wp-content/uploads/2018/03/gcall-logo.png',
    achievements: ['Successfully built SDK for Mobile and Web'],
  },
];

const WorkingHistory = ({
  img,
  name,
  body,
  title,
  achievements,
}: IWorkingHistory) => {
  const [ref, isInView] = useInView({
    disableRecheck: true,
  });
  return (
    <figure
      ref={ref}
      className={cn(
        'relative w-full cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-white/60 hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-500/10 dark:hover:bg-gray-300/10',
        'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img
          className='h-10 w-10 rounded-full bg-gray-200 object-cover dark:bg-black'
          width='32'
          height='32'
          alt=''
          src={img}
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium text-gray-500 dark:text-white/40'>
            {title}
          </p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm dark:text-white/80'>
        {isInView && (
          <TypingAnimation
            text={body}
            className='text-left text-sm font-normal dark:text-white/70'
            duration={10}
          />
        )}
      </blockquote>

      {/* Achievements */}

      <ul className='mt-4 space-y-2'>
        {achievements?.map((achievement, index) => (
          <li key={index} className='text-xs dark:text-white/70'>
            {isInView && (
              <TypingAnimation
                text={`🚀 ${achievement}`}
                className='text-left text-xs font-normal text-gray-600 dark:text-white/70'
                duration={50}
              />
            )}
          </li>
        ))}
      </ul>
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
