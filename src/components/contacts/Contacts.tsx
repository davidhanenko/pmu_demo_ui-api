import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../shared/SectionHeader';

export const Contacts = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Contacts');
  }, [inView, setActive]);

  return (
    <section id='contacts' className='' ref={ref}>
      <SectionHeader title='Contacts' color='teal1' />


      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
      <h1>Contacts</h1>
    </section>
  );
};
