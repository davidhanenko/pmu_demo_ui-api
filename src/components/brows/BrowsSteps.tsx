import { motion } from 'framer-motion';
import { browsSteps } from '../../constants/index';
import {
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

type StepCardProps = {
  title: string;
  description: string;
  id: string;
  key: number | string;
};

const StepCard = ({
  title,
  description,
  id,
}: StepCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [i, setI] = useState(null);
  const cardRef = useRef(null);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setI(e.currentTarget.dataset.id);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      if (
        isOpen &&
        !cardRef?.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    //  click outside nav listener
    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    // cleanup the event listener
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [isOpen]);

  return (
    <div
      className={`relative h-[130px] flex justify-center ${
        isOpen
          ? 'sm:odd:left-2/4 sm:even:right-2/4 lg:odd:left-1/4 lg:even:left-1/4 [&:nth-child(3)]:bottom-full last:bottom-full'
          : ''
      }`}
      ref={cardRef}
      data-id={id}
      onClick={e => handleClick(e)}
    >
      <motion.div
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          layout: { duration: 0.5, ease: 'circOut' },
        }}
        className={`bg-gradient-to-l from-rose-500 to-rose-300 p-4 cursor-pointer select-none overflow-hidden rounded-md shadow-lg overflow-none ${
          isOpen
            ? 'absolute h-[275px] w-[270px] sm:w-[450px]'
            : 'h-[130px] w-[250px] sm:w-[300px]'
        } ${isOpen && id == i ? 'z-20' : ''}`}
      >
        <motion.h4
          layout={'position'}
          className={`m-0 text-xl text-sky-300 ${
            isOpen && 'flex justify-between'
          }`}
        >
          <span>
            <span className={`mr-2 text-3xl `}>{id}.</span>
            {title}
          </span>
          {isOpen && (
            <span className='font-light text-white text-4xl'>
              &times;
            </span>
          )}
        </motion.h4>
        <p
          className={`truncate text-white pt-4 text-sm font-extralight ${
            isOpen ? 'hidden' : 'block'
          }`}
        >
          {description}
        </p>

        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`h-full pt-2 overflow-scroll`}
          >
            <p className='pb-16 text-white'>
              {description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export const BrowsSteps = () => {
  return (
    <div className='relative order-2 lg:order-1 col-span-12 lg:col-span-4 flex flex-col justify-end lg:justify-start h-full w-full px-4 py-8 sm:py-20 lg:py-8 z-20'>
      <h3 className='text-zinc-950 font-semibold text-2xl py-8 text-center'>
        4 Simple Steps to Perfect Brows
      </h3>

      <div className=' grid gap-8 sm:grid-cols-2 lg:grid-cols-1 w-full'>
        {browsSteps.map(step => (
          <StepCard
            title={step.title}
            description={step.description}
            id={step.id}
            key={step.id}
          />
        ))}
      </div>
    </div>
  );
};
