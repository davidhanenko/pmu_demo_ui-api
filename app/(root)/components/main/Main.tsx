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

  const { ref: refScrollTip, inView: inViewScrollTip } =
    useInView({
      threshold: 0.8,
    });

  const { setActive } = useNav();

  useEffect(() => {
    if (inView) document.body.style.overflow = 'hidden';
  }, [inView, setActive]);

  return (
    <section ref={ref} className='h-screen bg-[#000]'>
      <div ref={refScrollTip} className='w-full h-full'>
        <MainCanvas />
        {/* scroll availability tip(mouse) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewScrollTip ? 1 : 0 }}
          transition={{ duration: 1 }}
          className='absolute bottom-3 right-3'
        >
          <ScrollAnimated
            borderColor={'border-white'}
            bgColor={'bg-white'}
          />
        </motion.div>
      </div>
    </section>
  );
};
