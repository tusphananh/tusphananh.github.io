/* eslint-disable @next/next/no-img-element */
'use client';

import useInView from '@/hooks/useInView';
import GlassCard from '../ui/glass-card';
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
    body: `Being part of Global Engineering has been a pivotal milestone in my career journey. 
    The opportunity to architect and integrate multiple microservices while implementing micro-frontend solutions has enhanced both my technical capabilities and collaborative skills. Working alongside exceptional professionals in this dynamic environment has not only broadened my expertise but has also positioned me for continued growth in modern software development.`,
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
    body: `Led cross-cultural development initiatives across Vietnam and US teams, spearheading the architecture and implementation of features leveraging AWS, React, and Node.js ecosystem. Pioneered the development of scalable in-house React component libraries using TurboRepo, enabling efficient mono-repo management and streamlined development workflows.`,
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
    body: `Architected and delivered full-stack solutions utilizing React, Node.js, and MongoDB, while spearheading the development of a cross-platform SDK for mobile and web applications. Established robust DevOps infrastructure by implementing CI/CD pipelines, Nginx configurations, and containerized microservices using Docker. Enhanced system observability through the implementation of ELK (Elasticsearch, Logstash, Kibana) stack for comprehensive monitoring and log analytics.`,
    img: 'https://khoinghiepvietnam.org/wp-content/uploads/2018/03/gcall-logo.png',
    achievements: ['Successfully built SDK for Mobile and Web'],
  },
];

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
    <GlassCard ref={ref}>
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
    </GlassCard>
  );
};
