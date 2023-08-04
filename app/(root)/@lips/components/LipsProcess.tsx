'use client';

import Image from 'next/image';
import { LipsTips } from './LipsTips';

import { motion } from 'framer-motion';
import {
  lipsProcess,
  lipsTechniques,
} from '../../../../constants';

export const LipsProcess = () => {
  return (
    <div className='bg-red-lips_1 bg-local bg-[center_top_15rem] lg:bg-[right_top_5rem] bg-contain bg-no-repeat relative bg-overlay-gradient'>
      <div className='relative p-4 py-8 md:p-16 h-full'>
        <div className='h-full md:p-8 flex flex-wrap gap-12 items-center md:justify-around flex-col md:flex-row bg-glass'>
          {/* left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className='max-w-[550px] p-2 py-8 md:p-8 bg-glass'
          >
            <h4 className='text-red-500 bg-white text-3xl text-center font-semibold mb-8 py-4'>
              Lips Permanent Makeup Process
            </h4>
            <ul className='leading-6'>
              {lipsProcess.map(item => (
                <li
                  className='my-4 text-slate-800'
                  key={item.id}
                >
                  <p className='mr-1 text-xl font-bold text-gradient-animated-purple'>
                    {item.title}
                  </p>
                  <p className='inline'>{item.step}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* right */}

          <div className='w-full lg:w-fit py-12 grid gap-4 justify-items-center grid-cols-fill-250 lg:grid-auto-row'>
            {lipsTechniques.map(item => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.75 }}
                key={item.id}
                className='relative w-[250px] h-[250px]'
              >
                <Image
                  src={`/../public/images/${item.image}`}
                  alt=''
                  fill
                />
                <p className='absolute bottom-0 p-1 text-lg text-black bg-red-400 w-full'>
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <LipsTips />
    </div>
  );
};
