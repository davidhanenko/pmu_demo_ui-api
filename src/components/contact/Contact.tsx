'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useNav } from '@/context/navContext';

import { SectionHeader } from '../shared';
import { Contacts } from './Contacts';
import { ContactForm } from './ContactForm';

import contactImg from '../../assets/images/pink_email.png';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Contacts');
  }, [inView, setActive]);

  return (
    <section
      id='contacts'
      className='relative'
      ref={ref}
    >
      <SectionHeader
        title='Contacts'
        textColorClass='text-pink-400'
        src={contactImg}
      />

      <div className='bg-contact-bg bg-no-repeat bg-top bg-cover py-12 lg:p-24 pb-[300px] flex flex-col gap-16 lg:gap-4 lg:grid lg:grid-cols-2'>
        <Contacts />
        <ContactForm />
      </div>
    </section>
  );
};
