
import { motion } from 'framer-motion';

export const BrowsTypes = () => {
  return (
    <div className='order-1 lg:order-2 relative col-span-12 lg:col-span-7 flex lg:justify-end h-full py-20'>
      <ul className='list-none relative px-8 text-3xl font-bold z-10 tracking-wide'>
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
