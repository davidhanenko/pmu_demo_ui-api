'use client';

import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { BrowsTypes } from './BrowsTypes';
import { BrowsSteps } from './BrowsSteps';
import { SectionHeader } from '../../components/shared';

import browImg from 'assets/images/brow_1.png';

import { BrowsDescription } from './BrowsDescription';
import { useNav } from '../../../../context/navContext';

const videoSrc = process.env.NEXT_PUBLIC_VIDEO_BROWS_SRC;

export const Brows = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Brows');
  }, [inView, setActive]);

  return (
    <section
      id='brows'
      className='min-h-screen relative'
      ref={ref}
    >
      <SectionHeader
        title='Brows'
        textColorClass='text-amber-600'
        src={browImg}
      />
      <div className='md:hidden bg-amber-50'>
        <BrowsTypes />
      </div>

      <div className='relative h-[1100px] sm:h-[1000px] w-full bg-brows-section bg-bottom bg-cover bg-no-repeat'>
        <div className='absolute top-0 left-0 grid grid-cols-12 h-full w-full'>
          <div className='hidden order-1 lg:order-2 relative col-span-12 lg:col-span-7 md:flex lg:justify-end h-full'>
            <BrowsTypes />
          </div>
          <BrowsSteps />
        </div>
        <div className='relative'>
          <div className='relative md:clip-bg-brows-2 lg:clip-bg-brows-1 h-full w-full'>
            <video
              muted
              loop
              autoPlay
              playsInline
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