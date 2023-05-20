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
  index: number;
  key: number | string;
};

const StepCard = ({
  title,
  description,
  index,
}: StepCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [i, setI] = useState(null);
  const cardRef = useRef(null);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setI(e.target.dataset.id);
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
    <div className='h-[130px] my-4 relative' ref={cardRef}>
      <motion.div
        layout
        transition={{
          layout: { duration: 0.5, ease: 'circOut' },
        }}
        className={`bg-gradient-to-l from-purple1 to-purple3 p-4 cursor-pointer select-none overflow-hidden rounded-md ${
          isOpen
            ? 'h-[300px] absolute left-[-150px] sm:left-[-175px] w-[300px] sm:w-[350px] border-[1px] border-teal1'
            : 'h-[130px] w-[300px]'
        } ${index == i ? 'z-20' : ''}`}
      >
        <div
          data-id={index}
          onClick={e => handleClick(e)}
          className='absolute top-0 left-0 h-full w-full'
        />
        <motion.h4
          layout={'position'}
          className='m-0 text-xl text-teal1'
        >
          <span className='mr-2 text-3xl'>
            {index + 1}.
          </span>
          {title}
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
            <p className='pb-8 text-white'>{description}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export const BrowsSteps = () => {
  return (
    <div className='col-span-12 lg:col-span-5  h-full w-full px-4 py-16'>
      <h3 className='text-white text-3xl p-4 text-center'>
        4 Steps to Perfect Powder Brows
      </h3>

      <div className='flex flex-col justify-center items-center w-full'>
        {browsSteps.map((step, i) => (
          <StepCard
            title={step.title}
            description={step.description}
            index={i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
