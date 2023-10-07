'use client';

import Loader from '@/components/ui/loader';

const Loading = () => {
  return (
    <div className='absolute flex h-full w-full z-50 items-center justify-center'>
      <Loader />
    </div>
  );
};

export default Loading;
