'use client';
import { motion } from 'framer-motion';

export const BrowsTypes = () => {
  return (
    <div className='py-20'>
      <ul className='list-none relative px-8 text-xl lg:text-3xl font-bold z-10 tracking-wide'>
        {' '}
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65 }}
          className='text-rose-400'
        >
          Powder brows
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
          className='text-rose-500 animation-delay-[100ms] mt-3'
        >
          Ombre brows
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.85 }}
          className='text-rose-600 animation-delay-[200ms] mt-3'
        >
          Combo brows
        </motion.li>
      </ul>
    </div>
  );
};
