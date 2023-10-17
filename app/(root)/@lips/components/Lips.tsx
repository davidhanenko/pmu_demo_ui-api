'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BgVideo } from './BgVideo';
import { LipsProcess } from './LipsProcess';
import { SectionHeader } from '../../components/shared/SectionHeader';
import { useNav } from '../../../../context/navContext';
import {
  Text,
  TextWithHeader,
  TextWithImage,
} from '@prisma/client';

import lipsImg from '../../../../assets/images/pink_lips.png';

interface ILipsProps {
  lipsDescription: Text[];
  lipsProcess: TextWithHeader[];
  lipsTips: TextWithHeader[];
  lipsTechniques: TextWithImage[];
  videoUrl: string;
}

export const Lips: React.FC<ILipsProps> = ({
  lipsDescription,
  lipsProcess,
  lipsTips,
  lipsTechniques,
  videoUrl,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setActive } = useNav();

  useEffect(() => {
    inView && setActive('Lips');
  }, [inView, setActive]);

  return (
    <section
      id='lips'
      className='relative min-h-screen z-10'
    >
      <div
        className='absolute top-0 left-0 h-full w-full z-10'
        ref={ref}
      />
      <SectionHeader
        title='Lips'
        textColorClass={'text-red-600'}
        src={lipsImg}
      />

      <BgVideo
        videoUrl={videoUrl}
        lipsDescription={lipsDescription}
      />
      <LipsProcess
        lipsProcess={lipsProcess}
        lipsTips={lipsTips}
        lipsTechniques={lipsTechniques}
      />
    </section>
  );
};
