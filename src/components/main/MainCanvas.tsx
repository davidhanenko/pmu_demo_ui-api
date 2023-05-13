import {
  Canvas,
  useFrame,
  useThree,
} from '@react-three/fiber';
import { Suspense, useLayoutEffect, useRef } from 'react';

import {
  Loader,
  OrbitControls,
  ScrollControls,
  Preload,
  useGLTF,
  useScroll,
} from '@react-three/drei';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MainOverlay } from './MainOverlay';
import { useInView } from 'react-intersection-observer';
// import {
//   PreventScrolling,
//   ReEnableScrolling,
// } from 'prevent-scrolling';

export const SECTION_HEIGHT = 3;
export const SECTIONS = 2;

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const { scene } = useGLTF('./m1/model.glb');
  return (
    <primitive
      object={scene}
      scale={0.03}
      position={[2, 0, -3]}
      rotation={[-5, -0.9, 3]}
    />
  );
};

const Machine = () => {
  const ref = useRef();
  const tl = useRef();
  const { scene, camera } = useThree();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.progress(scroll.offset);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current
      .to(
        ref.current.position,
        {
          // scrollTrigger: {
          //   trigger: '#main',
          //   start: 'bottom bottom',
          //   endTrigger: '#about',
          //   end: 'bottom bottom',
          //   markers: true,
          //   scrub: 1,
          // },
          duration: 2,
          x: -4,
          y: -SECTION_HEIGHT * (SECTIONS + 1),
          z: 0,
        },
        0
      )
      .to(camera.position, {
        x: 10,
        y: 0,
        z: -2,
      });
    tl.current.to(
      ref.current.position,
      {
        // scrollTrigger: {
        //   trigger: '#main',
        //   start: 'bottom bottom',
        //   endTrigger: '#about',
        //   end: 'bottom bottom',
        //   markers: true,
        //   scrub: 1,
        // },
        duration: 2,
        x: 3,
        y: -SECTION_HEIGHT + 2,
        z: 0,
      },
      2
    );

    tl.current.to(
      ref.current.rotation,
      {
        // scrollTrigger: {
        //   trigger: '#main',
        // },
        duration: 2,
        x: 0,
        y: Math.PI / 2,
        z: Math.PI,
      },
      0
    );

    tl.current.to(
      ref.current.rotation,
      {
        // scrollTrigger: {
        //   trigger: '#main',
        // },
        duration: 2,
        x: 3,
        y: Math.PI / 6,
        z: Math.PI / 2,
      },
      2
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
          position={[0, 50, 25]}
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
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // useEffect(() => {
  //   if (inView) {
  //     PreventScrolling();
  //   } else {
  //     ReEnableScrolling();
  //   }
  // }, [inView]);

  return (
    <Canvas
      className=''
      ref={ref}
      shadows
      camera={{ position: [10, 3, 0], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ScrollControls pages={3} damping={0.5}>
          <Machine />
          <MainOverlay />
        </ScrollControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
