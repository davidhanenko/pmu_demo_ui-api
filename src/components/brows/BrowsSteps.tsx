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
      className='h-[130px] my-4 relative'
      ref={cardRef}
      data-id={id}
      onClick={e => handleClick(e)}
    >
      <motion.div
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: false }}
        transition={{
          layout: { duration: 0.5, ease: 'circOut' },
        }}
        className={`bg-gradient-to-l from-purple1 to-purple3 p-4 cursor-pointer select-none overflow-hidden rounded-md ${
          isOpen
            ? 'h-[275px] absolute left-[-135px] sm:left-[-225px] w-[270px] sm:w-[450px] border-[1px] border-teal1'
            : 'h-[130px] w-[250px] sm:w-[300px]'
        } ${isOpen && id == i ? 'z-20' : ''}`}
      >
        <motion.h4
          layout={'position'}
          className='m-0 text-xl text-teal1'
        >
          <span className='mr-2 text-3xl'>{id}.</span>
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
  const [selectedId, setSelectedId] = useState('');
  return (
    <div className='col-span-12 lg:col-span-5  h-full w-full px-4 py-24'>
      <h3 className='text-white text-3xl p-4 text-center'>
        4 Simple Steps to Perfect Brows
      </h3>

      <div className='flex flex-col justify-center items-center w-full'>
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
