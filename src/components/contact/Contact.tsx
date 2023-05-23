import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useNav } from '@/context/navContext';

import { SectionHeader } from '../shared';
import { Contacts } from './Contacts';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Contacts');
  }, [inView, setActive]);

  return (
    <section id='contacts' ref={ref}>
      <SectionHeader title='Contacts' color='teal1' />

      <div className='bg-pink-50 p-12 pb-28 flex flex-col lg:grid grid-cols-2'>
        <Contacts />
        <ContactForm />
      </div>
    </section>
  );
};
