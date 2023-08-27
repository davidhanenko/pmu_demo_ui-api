'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainCanvas } from './MainCanvas';
import { useNav } from '../../../../context/navContext';

export const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0.94,
  });
  const { setActive } = useNav();

  useEffect(() => {
    if (inView) document.body.style.overflow = 'hidden';
    // setActive('About')
  }, [inView, setActive]);

  return (
    <section className='h-screen bg-[#000]' ref={ref}>
      <MainCanvas />
    </section>
  );
};
