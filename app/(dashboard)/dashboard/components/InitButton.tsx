'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/useModal';

export const InitButton = ({ name }: { name: string }) => {
  const modalState = useModal();

  return (
    <div className='flex w-full justify-end'>
      <Button
        onClick={() =>
          modalState.onOpen(state => state.onOpen)
        }
      >
        <FontAwesomeIcon
          icon={faPlus}
          className='w-4 h-4 mr-2 text-green-500'
        />
        Initialize &nbsp;{' '}
        <span className='capitalize'>{name}</span>
      </Button>
    </div>
  );
};
