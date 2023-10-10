'use client';

import { useEffect, useState } from 'react';

import { CldUploadWidget } from 'next-cloudinary';

import { ImagePlus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export const VideoUpload: React.FC<VideoUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
    setIsUploading(false); // Mark the upload as complete
  };

  const onClickUpload = () => {
    setIsUploading(true); // Mark the upload as in progress
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
        uploadPreset={
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        }
      >
        {({ open }) => {
          const onClick = () => {
            if (!isUploading) {
              open();
              onClickUpload();
            }
          };

          return (
            <Button
              type='button'
              disabled={disabled || isUploading}
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
