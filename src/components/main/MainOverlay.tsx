import { Scroll } from '@react-three/drei';
import Image from 'next/image';

import faceImg from '../../assets/images/faceAI1.png';

export const MainOverlay = () => {
  return (
    <Scroll html>
      <section className='mt-44 grid grid-cols-12'>
        <div className='col-span-4'>
          <Image
            src={faceImg}
            alt='face image'
            width={600}
            height={800}
          />
        </div>
        <div className='text-white col-span-4 mt-36 text-center'>
          <p className='text-cyan-800 text-5xl font-bold'>Hi, I'm Iryna</p>
          <p className='text-white text-xl mt-4 tracking-wider font-thin'>your permanent artist</p>
        </div>
      </section>
    </Scroll>
  );
};
