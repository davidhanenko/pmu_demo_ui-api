import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BrowsDescription } from './BrowsDescription';
import { BrowsSteps } from './BrowsSteps';

export const Brows = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { setActive } = useNav();

  useEffect(() => {
    setActive('Brows');
  }, [inView, setActive]);

  return (
    <section id='brows' className=' bg-[#fff]' ref={ref}>
      <div className='grid grid-cols-12'>
        <BrowsDescription />
        <BrowsSteps />
      </div>
    </section>
  );
};
