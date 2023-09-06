'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';

import { useGLTF, useScroll } from '@react-three/drei';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const SECTION_HEIGHT = 3;
export const SECTIONS = 2;

gsap.registerPlugin(ScrollTrigger);

type ModelProps = {
  isMobile: boolean;
  isTablet: boolean;
};

const Model = ({ isMobile, isTablet }: ModelProps) => {
  const { scene } = useGLTF('./m1/model.glb');

  return (
    <primitive
      object={scene}
      scale={isTablet ? (isMobile ? 0.015 : 0.02) : 0.03}
      position={
        isTablet
          ? isMobile
            ? [1, 1, -2]
            : [0, 0, -3]
          : [2, 0, -3]
      }
      rotation={
        isTablet
          ? isMobile
            ? [-5.3, -1, 2.8]
            : [-5, -0.9, 3]
          : [-5, -0.9, 3]
      }
    />
  );
};

export const Machine = ({
  isMobile,
  isTablet,
}: ModelProps) => {
  const ref = useRef();
  const tl = useRef();
  const { scene, camera } = useThree();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.progress(scroll.offset);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      onComplete: () =>
        (document.body.style.overflow = 'auto'),
    });

    tl.current
      .to(
        ref.current.position,
        {
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
        <Model isMobile={isMobile} isTablet={isTablet} />
      </mesh>
    </group>
  );
};
