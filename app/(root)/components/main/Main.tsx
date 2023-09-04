'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { MainCanvas } from './MainCanvas';
import { useNav } from '../../../../context/navContext';
import ScrollAnimated from '../../../../components/ScrollIndicator';

export const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0.94,
  });
  const { setActive } = useNav();

  useEffect(() => {
    if (inView) document.body.style.overflow = 'hidden';
  }, [inView, setActive]);

  return (
    <section className='h-screen bg-[#000]' ref={ref}>
      <MainCanvas />
      {/* scroll availability tip(mouse) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className='absolute bottom-3 right-3'
      >
        <ScrollAnimated
          borderColor={'border-white'}
          bgColor={'bg-white'}
        />
      </motion.div>
    </section>
  );
};
