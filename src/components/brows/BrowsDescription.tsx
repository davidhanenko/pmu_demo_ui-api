import { CldVideoPlayer } from 'next-cloudinary';
import { motion } from 'framer-motion';

export const BrowsDescription = () => {
  return (
    <div className='col-span-12 lg:col-span-7 flex flex-col justify-between'>
      <ul className='list-none relative  w-full h-full px-8 py-24 text-3xl font-bold z-10 flex flex-col justify-center tracking-wide'>
        {' '}
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65 }}
          className='text-violet-400'
        >
          Powder brows
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
          className='text-violet-600 animation-delay-[100ms] mt-3'
        >
          Ombre brows
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.85 }}
          className='text-violet-800 animation-delay-[200ms] mt-3'
        >
          Combo brows
        </motion.li>
      </ul>

      <div className='relative'>
        <div className='absolute bg-[#000] top-0 left-0 opacity-70 z-10 w-full h-full' />
        <div className='absolute text-white top-0 h-full flex flex-col sm:justify-center z-20 p-8  tracking-wider overflow-y-scroll'>
          <p className='text-sm sm:text-lg'>
            At our studio, we specialize in the
            transformative art of permanent makeup, and one
            of our most popular techniques is the Powder
            Brows. Powder Brows is a semi-permanent eyebrow
            enhancement method that provides a soft and
            natural powdered effect. This technique is ideal
            for clients who desire a defined, filled-in brow
            look without the need for daily makeup
            application.
          </p>
          <p className='pt-4 text-sm sm:text-lg '>
            Our highly skilled and experienced artists
            utilize advanced microblading and shading
            techniques to create beautifully shaped and
            customized brows that perfectly complement your
          </p>
        </div>
        <div className=''>
          <CldVideoPlayer
            width={500}
            height={250}
            autoPlay='on-scroll'
            quality='auto'
            loop={true}
            muted={true}
            controls={false}
            src='pmu/brows_v_1_isrehe'
          />
        </div>
      </div>
    </div>
  );
};
