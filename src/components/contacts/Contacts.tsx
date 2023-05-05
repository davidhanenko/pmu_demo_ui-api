import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Contacts = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { setActive } = useNav();

  useEffect(() => {
    setActive('Contacts');
  }, [inView, setActive]);
  return (
    <section id='contacts' className='h-screen' ref={ref}>
      <h1>Contacts</h1>
    </section>
  );
};
