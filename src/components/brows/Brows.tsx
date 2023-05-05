import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Brows = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { setActive } = useNav();

  useEffect(() => {
    setActive('Brows');
  }, [inView, setActive]);

  return (
    <section id='brows' className='h-screen' ref={ref}>
      <h1>Brows</h1>
    </section>
  );
};
