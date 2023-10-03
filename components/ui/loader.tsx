'use client';

import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <RotatingLines
        width='100'
        strokeColor='#fff'
        ariaLabel='rotating-square-loading'
        strokeWidth='5'
        visible={true}
      />
    </div>
  );
}
