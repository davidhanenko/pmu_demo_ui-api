'use client';

import { useEffect } from 'react';
import { useNav } from '@/context/navContext';
import { useInView } from 'react-intersection-observer';
import { BrowsTypes } from './BrowsTypes';
import { BrowsSteps } from './BrowsSteps';
import { SectionHeader } from '../shared';

import browImg from '@/assets/images/brow_1.png';

import { BrowsDescription } from './BrowsDescription';

const videoSrc =
  'https://res.cloudinary.com/ddqehibx0/video/upload/v1684093291/pmu/brows_v_1_isrehe.mp4';

export const Brows = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Brows');
  }, [inView, setActive]);

  return (
    <section id='brows' className='min-h-screen' ref={ref}>
      <SectionHeader
        title='Brows'
        textColorClass='text-amber-600'
        src={browImg}
      />

      <div className='relative h-[1100px] sm:h-[1000px] w-full bg-brows-section bg-bottom bg-cover bg-no-repeat'>
        <div className='absolute top-0 left-0 grid grid-cols-12 h-full w-full'>
          <BrowsTypes />
          <BrowsSteps />
        </div>
        <div className='relative'>
          <div className='relative md:clip-bg-brows-2 lg:clip-bg-brows-1 h-full w-full'>
            <video
              width='1400'
              height='720'
              muted
              loop
              autoPlay
              className='h-full w-full'
            >
              <source src={videoSrc} type='video/mp4' />
            </video>
            <div className='absolute top-0 left-0 h-full w-full bg-[#000] opacity-70' />

            <BrowsDescription />
          </div>
        </div>
      </div>
    </section>
  );
};
