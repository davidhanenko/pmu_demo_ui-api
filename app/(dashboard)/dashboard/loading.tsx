'use client';

import { RotatingSquare } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <RotatingSquare
        height='100'
        width='100'
        color='#fff'
        ariaLabel='rotating-square-loading'
        strokeWidth='4'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
}
