'use client';

import Image from 'next/image';
import { LipsTips } from './LipsTips';

import { motion } from 'framer-motion';

import {
  TextWithHeader,
  TextWithImage,
} from '@prisma/client';

export const LipsProcess = ({
  lipsProcess,
  lipsTips,
  lipsTechniques,
}: {
  lipsProcess: TextWithHeader[];
  lipsTips: TextWithHeader[];
  lipsTechniques: TextWithImage[];
}) => {
  return (
    <div className='bg-red-lips_1 bg-local bg-[center_top_15rem] lg:bg-[right_top_5rem] bg-contain bg-no-repeat relative bg-white bg-overlay-gradient'>
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
            <div className='flex justify-center items-center gap-1 text-3xl  mb-8 py-4'>
              <p className='text-red-500 bg-white p-2 font-bold -skew-y-3'>
                The
              </p>
              <p className=' text-slate-800  text-center font-semibold'>
                Process
              </p>
            </div>
            <ul className='leading-6'>
              {lipsProcess.map(item => (
                <li
                  className='my-4 text-slate-800'
                  key={item.id}
                >
                  <p className='mr-1 text-xl font-bold text-slate-800 flex justify-end'>
                    {item.header}
                  </p>
                  <p className='inline'>{item.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* right */}

          <div className='w-full lg:w-fit py-12 grid gap-4 justify-items-center grid-cols-fill-250 lg:grid-auto-row'>
            {!!lipsTechniques &&
              lipsTechniques?.map(item => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.75 }}
                  key={item.id}
                  className='relative w-[250px] h-[250px]'
                >
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                  />
                  <p className='absolute bottom-0 p-1 text-lg text-black bg-red-400 w-full'>
                    {item.text}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      <LipsTips lipsTips={lipsTips} />
    </div>
  );
};
