'use client';
import { useEffect } from 'react';

import { Scroll } from '@react-three/drei';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import { About } from '../about';

import faceImg from '../../../../assets/images/faceAI2_red.png';
import { useNav } from '../../../../context/navContext';
import ScrollAnimated from '../../../../components/ScrollIndicator';

export const MainOverlay = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActive } = useNav();

  useEffect(() => {
    setActive('About');
  }, [inView, setActive]);

  return (
    <Scroll html>
      <section
        id='about'
        className='pt-40 h-screen grid grid-cols-12'
        ref={ref}
      >
        <div className='col-span-4'>
          <Image
            src={faceImg}
            alt='face image'
            width={600}
            height={800}
          />
        </div>
        <div className='col-span-4 mt-36 text-center'>
          <h1 className='text-purple3 text-5xl font-bold'>
            Hi, I&apos;m Iryna
          </h1>
          <h3 className='text-white text-xl mt-4 tracking-wider '>
            your permanent makeup artist 💋
          </h3>
          <p className='text-teal1 font-light mt-4 tracking-wider'>
            Lips. Brows. Eyeliner.
          </p>
        </div>
      </section>

      {/* mouse-scroll */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className='relative bottom-16 flex justify-center'
      >
        <ScrollAnimated />
      </motion.div>

      <section className='mt-4 grid grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
          className='col-span-10 col-start-2 lg:col-start-6 lg:col-end-12 text-center'
        >
          <div>
            <p className='text-purple3 text-2xl mb-4 font-medium'>
              Wake Up with Beautiful Brows Every Day
            </p>
            <p className='text-white font-light tracking-wider'>
              Welcome to my permanent makeup studio, where I
              help you enhance your natural beauty with
              permanent makeup techniques. Say goodbye to
              the hassle of filling in your brows, eyeliner,
              and lips every morning and hello to effortless
              beauty that lasts all day long.
            </p>
          </div>
        </motion.div>
      </section>

      <About ref={ref} />
    </Scroll>
  );
};
