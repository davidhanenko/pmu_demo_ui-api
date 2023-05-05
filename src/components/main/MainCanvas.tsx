import { Canvas } from '@react-three/fiber';

import { Html, useProgress } from '@react-three/drei';
import {
  Loader,
  OrbitControls,
  ScrollControls,
  Preload,
  useGLTF,
} from '@react-three/drei';
import { Suspense, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 2;

const Model = () => {
  const { scene } = useGLTF('./machine/tattoo_machine.glb');
  return (
    <primitive
      object={scene}
      scale={0.5}
      position={[0, 3, 2]}
      rotation={[-5, -1, 3]}
    />
  );
};

const Machine = () => {
  const ref = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );
    tl.current.to(ref.current.rotation, {
      duration: 2,
      y: 2,
      x: 5,
    });
  }, []);

  return (
    <group ref={ref}>
      <mesh>
        <hemisphereLight
          intensity={0.15}
          groundColor='black'
        />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.1}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
        />
        <pointLight intensity={1} />
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
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ScrollControls pages={2} damping={0.25}>
          <Machine />
        </ScrollControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
