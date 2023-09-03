import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className='flex justify-center items-center flex-col'
    >
      <span className='text-sm w-2 h-2 rounded-full relative translate-z-0'></span>
      <p className='text-white text-sm font-bold mt-4'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
