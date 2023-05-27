import { useEffect } from 'react';
import { useNav } from '@/context/navContext';
import { useInView } from 'react-intersection-observer';
import { BgVideo } from './BgVideo';
import { LipsProcess } from './LipsProcess';
import { SectionHeader } from '../shared';

import lipsImg from '../../assets/images/pink_lips.png';

export const Lips = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Lips');
  }, [inView, setActive]);

  return (
    <section id='lips' className='relative min-h-screen z-10'>
      <div
        className='absolute top-0 left-0 h-full w-full z-10'
        ref={ref}
      />
      <SectionHeader
        title='Lips'
        textColorClass={'text-red-600'}
        src={lipsImg}
      />

      <BgVideo />
      <LipsProcess />
    </section>
  );
};
