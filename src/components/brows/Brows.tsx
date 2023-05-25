import { useEffect } from 'react';
import { useNav } from '@/context/navContext';
import { useInView } from 'react-intersection-observer';
import { BrowsDescription } from './BrowsDescription';
import { BrowsSteps } from './BrowsSteps';
import { SectionHeader } from '../shared';

import browImg from '../../assets/images/brow_1.png';

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
        color='purple3'
        src={browImg}
      />
      <div className='grid grid-cols-12 bg-about-section_2 bg-bottom bg-cover bg-no-repeat'>
        <BrowsDescription />
        <BrowsSteps />
      </div>
    </section>
  );
};
