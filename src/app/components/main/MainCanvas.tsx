'use client'

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';

import { ScrollControls, Preload } from '@react-three/drei';

import { MainOverlay } from './MainOverlay';
import { useInView } from 'react-intersection-observer';
import { Machine } from './Machine';

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
      <Suspense fallback={null}>
        <ScrollControls
          pages={3}
          damping={0.5}
          enabled={inView ? true : false}
          // style={{ overscrollBehavior: 'contain' }}
        >
          <Machine />
          <MainOverlay />
        </ScrollControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
