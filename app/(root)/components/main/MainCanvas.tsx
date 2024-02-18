'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { ScrollControls, Preload } from '@react-three/drei';

import { MainOverlay } from './MainOverlay';
import { useInView } from 'react-intersection-observer';
import { Machine } from './Machine';
import CanvasLoader from './Loader';
import useMediaQuery from '../../../../lib/useMediaQuery';

export const MainCanvas = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(768);

  return (
    <Canvas
      className=''
      ref={ref}
      shadows
      camera={{
        position: isMobile ? [10, 10, 0] : [12, 3, 0],
        fov: 50,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* update values for tablets */}
      <Suspense fallback={<CanvasLoader />}>
        <ScrollControls
          pages={isTablet ? (isMobile ? 3.2 : 2.9) : 2.4}
          damping={isMobile ? 0.5 : 0.5}
          enabled={inView ? true : false}
        >
          <Machine
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <MainOverlay />
        </ScrollControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
