'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Modal } from '@/components/ui/modal';

import { useModal } from '@/hooks/useModal';
import { Button } from '@/components/ui/button';

interface IInitModalProps {
  name: string;
}

export const InitModal: React.FC<IInitModalProps> = ({ name }) => {
  const [loading, setLoading] = useState(false);
  const modalState = useModal();
  const router = useRouter();

  // hydration error fix
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  const onSubmit = async () => {
    try {
      setLoading(true);
      await axios.post(`/api/${name}`, { name });
      toast.success('Section created');
      router.refresh();
      modalState.onClose();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  

  if (!name) return null;

  return (
    <Modal
      title={`Initialize ${name.toUpperCase()} Section`}
      description='Create a new section?'
      isOpen={modalState.isOpen}
      onClose={modalState.onClose}
    >
      <div className='space-y-4 py-2 pb-4'>
        <div className='space-y-2'>
          <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
            <Button
              disabled={loading}
              variant='outline'
              onClick={modalState.onClose}
            >
              Cancel
            </Button>
            <Button disabled={loading} onClick={onSubmit}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
