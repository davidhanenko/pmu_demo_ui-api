import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { setActive } = useNav();

  useEffect(() => {
    setActive('About');
  }, [inView, setActive]);

  return (
    <section id='about' className='h-screen' ref={ref}>
      <h1>About</h1>
    </section>
  );
};
