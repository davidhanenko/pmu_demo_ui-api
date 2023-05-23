import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainCanvas } from './MainCanvas';

export const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0.91,
  });
  const { setActive } = useNav();

  useEffect(() => {
    if (inView) document.body.style.overflow = 'hidden';
  }, [inView]);

  return (
    <section
      className='h-screen bg-[#000]'
      ref={ref}
    >
      <MainCanvas />
    </section>
  );
};
