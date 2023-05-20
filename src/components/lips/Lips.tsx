import { useEffect } from 'react';
import { useNav } from '@/context/navContext';
import { useInView } from 'react-intersection-observer';
import { BgVideo } from './BgVideo';
import { LipsProcess } from './LipsProcess';
import SectionHeader from '../shared/SectionHeader';

export const Lips = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Lips');
  }, [inView, setActive]);

  return (
    <section id='lips' className='relative min-h-screen'>
      <div
        className='absolute top-0 left-0 h-full w-full z-10'
        ref={ref}
      />
      <SectionHeader title='Lips' color='red-600' />

      <BgVideo />
      <LipsProcess />
    </section>
  );
};
