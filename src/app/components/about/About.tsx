import { useEffect } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import me from '../../../assets/images/me_1.jpg';

export const About = () => {
  return (
    <section>
      <div className='relative before:content-[""] before:opacity-70 before:bg-cover before:bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full px-6 mt-24'>
        <div className='grid grid-cols-12 gap-4 py-24'>
          <div className='col-span-7 flex flex-col items-center justify-center px-4 bg-glass'>
            <div className='text-white font-light tracking-wider p-8 relative leading-7'>
              <div className='bg-[#421414a6] opacity-50 h-full w-full absolute top-0 left-0 z-0' />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5 }}
                className='relative z-10'
              >
                I&apos;m a passionate and highly skilled
                permanent makeup artist based in the vibrant
                city of New York 🗽. With expertise in brow,
                lips, and eyeliner enhancements, I am
                dedicated to helping you enhance your
                natural features and achieve your desired
                look.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5 }}
                className='relative z-10 pt-4'
              >
                My artistic journey began years ago when I
                discovered my love for creating beauty
                through makeup. After extensive training and
                certifications, I delved into the world of
                permanent makeup, where I found my true
                calling. With meticulous attention to detail
                and a keen eye for aesthetics, I bring a
                personalized touch to each and every client,
                ensuring stunning, natural-looking results.
              </motion.p>
            </div>
          </div>
          <div className='col-span-5 flex justify-center'>
            <motion.div
              initial={{
                opacity: 0,
                rotateY: 180,
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='z-10'
            >
              <div className='z-10 shadow-teal-800'>
                <Image
                  src={me}
                  alt='me'
                  width={300}
                  height={450}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4 pt-32'>
        <div className='relative col-start-6 col-end-12 mt-16'>
          <div className='absolute -top-6 -left-6 bg-[#421414a6] w-full h-[350px]'></div>
          <div className='absolute top-0 left-0 bg-[#da31315f] w-full h-[350px] flex items-center  p-12'>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className='relative text-white z-10 py-4 leading-8 tracking-wider border-b-[1px] border-solid border-black'
            >
              I rely on the best tools in the industry to
              deliver exceptional results. That&apos;s why I
              choose the Cheyenne Luna tattoo machine. Its
              innovative design and advanced technology
              provide unparalleled precision, control, and
              comfort. With the Luna, I can create flawless
              permanent makeup that enhances your natural
              beauty and boosts your confidence. Experience
              the difference with the Cheyenne Luna.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
