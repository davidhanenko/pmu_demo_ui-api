'use client';

import { motion } from 'framer-motion';

import { lipsDescription } from '../../../../constants';

const videoSrc = process.env.NEXT_PUBLIC_VIDEO_LIPS_SRC;

export const BgVideo = () => {
  return (
    <div className='relative z-[-1] mb-36 lg:mb-0'>
      <div className='absolute top-0 left-0 bg-[#0000000] h-full w-full z-10'>
        <ul className='absolute top-full lg:top-auto lg:bottom-16 lg:left-16 2xl:bottom-48 z-10 list-none text-xl lg:text-3xl font-semibold p-4 lg:p-0 tracking-wide'>
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.75 }}
            className='text-pink-400'
          >
            Lip blush/Aquarelle
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85 }}
            className='text-pink-600 lg:mt-3'
          >
            Lipstick effect
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.95 }}
            className='text-pink-800 lg:mt-3'
          >
            Dark lips neutralization
          </motion.li>
        </ul>

        <div className='absolute flex justify-center md:right-16 top-0 md:top-1/3 z-20 max-h-full md:max-f-auto overflow-scroll md:overflow-visible'>
          <div className='relative'>
            <div className='hidden md:block h-full md:h-[270px] w-full md:w-[700px] bg-[#421414a6] md:absolute top-0 right-0'></div>
            <div className='h-full md:h-[270px] w-full md:w-[700px] md:bg-[#da31315f] md:absolute top-0  md:top-6 right-0 md:right-6 flex items-center justify-center md:px-12'>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5 }}
                className='text-white p-4 sm:p-8 md:p-4 text-sm sm:text-base md:text-lg tracking-wide'
              >
                {lipsDescription}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <video
          width='1400'
          height='720'
          muted
          loop
          autoPlay
          playsInline
          className='h-full w-full'
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};
