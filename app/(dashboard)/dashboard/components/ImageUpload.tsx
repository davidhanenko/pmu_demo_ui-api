'use client';

import { useEffect, useState } from 'react';

import { CldUploadWidget } from 'next-cloudinary';

import { ImagePlus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className='mb-4 flex items-center gap-4'>
        {value.map(url => (
          <div
            key={url}
            className='relative rounded-md overflow-hidden'
          >
            <div className='z-10 absolute top-2 right-2'>
              <Button
                type='button'
                onClick={() => onRemove(url)}
                variant='destructive'
                size='sm'
              >
                <Trash className='h-4 w-4' />
              </Button>
            </div>
            <video
              muted
              className='h-full w-full object-cover'
            >
              <source src={url} type='video/mp4' />
            </video>
          </div>
        ))}
      </div>
      <CldUploadWidget
        onUpload={onUpload}
        uploadPreset='cyfbstp7'
      >
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type='button'
              disabled={disabled}
              variant='secondary'
              onClick={onClick}
            >
              <ImagePlus className='h-4 w-4 mr-2' />
              Upload
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};