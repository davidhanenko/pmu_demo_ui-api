import { Canvas } from '@react-three/fiber';

import { Html, useProgress } from '@react-three/drei';
import {
  Loader,
  OrbitControls,
  Preload,
  useGLTF,
} from '@react-three/drei';
import { Suspense } from 'react';

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
  return (
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
        <Machine />
  
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
