'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { About } from '../about/About';
import { useNav } from '../../../../context/navContext';

import faceImg from '../../../../assets/images/faceAI2_red.png';

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
        className='pt-24 md:pt-40 h-screen grid grid-cols-12'
        ref={ref}
      >
        <div className='col-span-8 md:col-span-4'>
          <Image
            src={faceImg}
            alt='face image'
            width={600}
            height={800}
          />
        </div>
        <div className='col-span-12 md:col-span-4 md:mt-36 text-center'>
          <h1 className='text-purple3 text-5xl font-bold flex justify-end md:justify-center pr-4 md:pr-0'>
            Hi, I&apos;m [Name]
          </h1>
          <h3 className='text-white text-xl mt-4 tracking-wider '>
            your permanent makeup artist 💋
          </h3>
          <p className='text-teal1 font-light mt-4 tracking-wider'>
            Lips. Brows. Eyeliner.
          </p>
        </div>
      </section>

      <section className='mt-40 md:mt-4 grid grid-cols-12'>
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

      <About />
    </Scroll>
  );
};
