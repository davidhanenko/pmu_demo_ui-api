import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainCanvas } from './MainCanvas';

export const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { setActive } = useNav();

  // useEffect(() => {
  //   setActive('');
  // }, [inView, setActive]);

  return (
    <section
      className='h-screen bg-[#000] fixed w-full'
      ref={ref}
    >
      <MainCanvas />
    </section>
  );
};
