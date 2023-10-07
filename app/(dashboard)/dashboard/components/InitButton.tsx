'use client';

import { Plus } from 'lucide-react';

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
        <Plus className='w-4 h-4 mr-2 text-green-500' />
        Initialize &nbsp;{' '}
        <span className='capitalize'>{name}</span>
      </Button>
    </div>
  );
};
