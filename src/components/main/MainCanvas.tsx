import { Canvas, useFrame } from '@react-three/fiber';

import {
  Loader,
  OrbitControls,
  ScrollControls,
  Preload,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { Suspense, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MainOverlay } from './MainOverlay';

export const SECTION_HEIGHT = 2.3;
export const SECTIONS = 2;

const Model = () => {
  const { scene } = useGLTF('./m1/model.glb');
  return (
    <primitive
      object={scene}
      scale={0.03}
      position={[2, 0, -3]}
      rotation={[-5, -1, 3]}
    />
  );
};

const Machine = () => {
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        x: -10,
        y: -SECTION_HEIGHT * (SECTIONS),
        z: 6,
      },
      0
    );
    tl.current.to(
      ref.current.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI / 2,
        z: Math.PI,
      },
      0
    );
  }, []);

  return (
    <group ref={ref}>
      <mesh>
        <hemisphereLight
          intensity={0.25}
          groundColor='black'
        />
        <spotLight
          position={[0, 50, 10]}
          angle={0.9}
          penumbra={1}
          intensity={10}
          castShadow
          shadow-mapSize-width={1024}
        />
        <pointLight intensity={20} />
        <Model />
      </mesh>
    </group>
  );
};

export const MainCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [10, 3, 0], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <ScrollControls pages={2} damping={0.25}>
          <Machine />
          <MainOverlay />
        </ScrollControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
