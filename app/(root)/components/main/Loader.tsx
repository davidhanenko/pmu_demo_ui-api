'use client';

import { Html, useProgress } from '@react-three/drei';
import { Bars } from 'react-loader-spinner';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as='div'
      center
      className='flex justify-center items-center flex-col'
    >
      <Bars
        height='60'
        width='60'
        color='#fff'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />

      <p className='text-white text-sm font-bold mt-4'>
        {progress}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
