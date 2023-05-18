import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BgVideo } from './BgVideo';
import { LipsProcess } from './LipsProcess';
import { LipsTips } from './LipsTips';

export const Lips = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { setActive } = useNav();

  useEffect(() => {
    setActive('Lips');
  }, [inView, setActive]);

  return (
    <section id='lips' className='relative' ref={ref}>
      <div className='bg-about-section bg-cover bg-bottom bg-no-repeat h-[300px] flex items-center z-20'>
        <h2 className='text-red-600 text-6xl font-semibold ml-[30%]'>
          Lips
        </h2>
      </div>

      <BgVideo />
      <LipsProcess />
    </section>
  );
};
