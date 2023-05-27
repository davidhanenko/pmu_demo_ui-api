import { useEffect } from 'react';
import { useNav } from '@/context/navContext';
import { useInView } from 'react-intersection-observer';
import { BrowsTypes } from './BrowsTypes';
import { BrowsSteps } from './BrowsSteps';
import { SectionHeader } from '../shared';

import browImg from '../../assets/images/brow_1.png';
import { CldVideoPlayer } from 'next-cloudinary';
import { BrowsDescription } from './BrowsDescription';

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
            <CldVideoPlayer
              className=''
              width={500}
              height={250}
              autoPlay='on-scroll'
              quality='auto'
              loop={true}
              muted={true}
              controls={false}
              src='pmu/brows_v_1_isrehe'
            />
            <div className='absolute top-0 left-0 h-full w-full bg-[#000] opacity-70' />

            <BrowsDescription />
          </div>
        </div>
      </div>
    </section>
  );
};
