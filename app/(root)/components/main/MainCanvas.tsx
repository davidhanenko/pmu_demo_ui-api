'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { ScrollControls, Preload } from '@react-three/drei';

import { MainOverlay } from './MainOverlay';
import { useInView } from 'react-intersection-observer';
import { Machine } from './Machine';
import CanvasLoader from './Loader';

export const MainCanvas = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <Canvas
      className=''
      ref={ref}
      shadows
      camera={{ position: [10, 3, 0], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ScrollControls
          pages={3.4}
          damping={0.5}
          enabled={inView ? true : false}
        >
          <Machine />
          <MainOverlay />
        </ScrollControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
