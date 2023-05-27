import { CldVideoPlayer } from 'next-cloudinary';
import { motion } from 'framer-motion';

export const BgVideo = () => {
  return (
    <div className='relative z-[-1] mb-36 lg:mb-0'>
      <div className='absolute top-0 left-0 bg-[#0000000] h-full w-full z-10'>
        <ul className='absolute top-full lg:top-auto lg:bottom-16 lg:left-16 2xl:bottom-48 z-10 list-none text-2xl lg:text-3xl font-semibold p-4 lg:p-0 tracking-wide'>
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
            <div className='h-full md:h-[270px] w-full md:w-[700px] bg-[#da31315f] md:absolute top-0  md:top-6 right-0 md:right-6 flex items-center justify-center md:px-12 '>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5 }}
                className='text-white p-4 sm:p-8 md:p-4 text-sm sm:text-base md:text-lg tracking-wide'
              >
                Enhance Your Natural Beauty with Lips
                Permanent Makeup Introduction: Welcome to my
                place, where we specialize in enhancing your
                natural beauty through the art of permanent
                makeup. In this section, we&apos;ll guide
                you through the lips permanent makeup
                process, available techniques and provide
                helpful tips.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CldVideoPlayer
          width='1460'
          height='822'
          autoPlay='on-scroll'
          quality='auto'
          loop={true}
          muted={true}
          controls={false}
          src='pmu/pexels-engin-akyurt-6067531-3840x2160-30fps_f5x5an'
        />
      </div>
    </div>
  );
};
