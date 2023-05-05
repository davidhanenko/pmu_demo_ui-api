import { motion } from 'framer-motion';
import { useNav } from '@/context/navContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainCanvas } from './MainCanvas';

export const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0.51,
  });
  const { active, setActive } = useNav();

  useEffect(() => {
    setActive('');
  }, [inView, setActive]);
  console.log(active);

  return (
    <section className='h-screen bg-stone-300' ref={ref}>
      <h2>Home</h2>
      <div className=''></div>
      <MainCanvas />
    </section>
  );
};
