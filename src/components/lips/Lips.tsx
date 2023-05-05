import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Lips = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { setActive } = useNav();

  useEffect(() => {
    setActive('Lips');
  }, [inView, setActive]);

  return (
    <section id='lips' className='h-screen' ref={ref}>
      <h1>Lips</h1>
    </section>
  );
};
