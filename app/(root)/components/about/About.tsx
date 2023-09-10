import Image from 'next/image';

import { motion } from 'framer-motion';

import me from '../../../../assets/images/me_1_1.png';

export const About = () => {
  return (
    <section>
      <div className='relative before:content-[""] before:opacity-70 before:bg-cover before:bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full px-6 mt-24'>
        <div className='grid grid-cols-12 gap-4 py-24'>
          <div className='col-span-12 md:col-span-7 flex flex-col items-center justify-center px-4 bg-glass-lighter'>
            <div className='text-white font-light tracking-wider py-8 px-1 md:px-8 relative leading-7'>
              <div className='opacity-30 h-full w-full absolute top-0 left-0 z-0' />

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
          <div className='col-span-12 md:col-span-5 flex justify-center mt-16 md:mt-0'>
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
      <div className='grid grid-cols-12 gap-4 md:pt-32'>
        <div className='relative col-span-12 mx-4 sm:mx-0 sm:col-start-2 sm:col-end-12 lg:col-start-6 lg:col-end-12 mt-16 bg-[#2b2266e6]'>
          <div className='flex items-center px-4 py-8 lg:p-12'>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className='relative text-white z-10 py-4 leading-8 tracking-wider border-b-[1px] border-solid border-red-500'
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
