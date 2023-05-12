import { useNav } from '@/context/navContext';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import me from '../../assets/images/me.jpg';
import bg_1 from '../../assets/images/bg_1.png';

export const About = ({ ref }) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.51,
  // });
  // const { setActive } = useNav();

  // useEffect(() => {
  //   setActive('About');
  // }, [inView, setActive]);

  return (
    <section
      id='about'
      className='bg-about-section opacity-80 bg-cover bg-center px-6 mt-24'
      ref={ref}
    >
      <div className='grid grid-cols-12 gap-4 py-24'>
        <div className='col-span-7'>
          <p className='text-white font-light tracking-wider'>
            Welcome to my permanent makeup studio, where I
            help you enhance your natural beauty with
            permanent makeup techniques. Say goodbye to the
            hassle of filling in your brows, eyeliner, and
            lips every morning and hello to effortless
            beauty that lasts all day long.
          </p>
        </div>
        <div className='col-span-5 flex justify-center'>
          <Image
            src={me}
            alt='me'
            width={300}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};
