'use client';

import { useState } from 'react';

import { Separator } from '@/components/ui/separator';
import { TextInput } from '../../components/TextInput';
import { Text } from '@prisma/client';

import { Button } from '@/components/ui/button';

const DescriptionParagraph = ({ desc }: { desc: Text }) => {
  const initData = {
    text: desc.text,
    api: '/api/lips/description',
    id: desc.id,
  };

  return (
    <li className='my-4 p-2 bg-slate-600'>
      <TextInput initData={initData} />
    </li>
  );
};

export const Description = ({
  description,
}: {
  description: Text[];
}) => {
  const initData = {
    text: '',
    api: '/api/lips/description',
    id: '',
  };

  const [addMore, setAddMore] = useState(false);

  return (
    <section className='col-span-2 md:col-span-1 bg-slate-700 p-4'>
      <div>
        <h2 className='text-xl font-bold'>Description</h2>
        <p className='mt-2 text-muted-foreground'>
          This is a description of the lips page.
        </p>
      </div>
      <Separator className='my-4' />
      <div>
        <ul className='text-sm md:px-4'>
          {description.map(desc => (
            <DescriptionParagraph
              key={desc.id}
              desc={desc}
            />
          ))}
        </ul>

        <div className='md:mx-4 p-2 bg-slate-500 '>
          {!addMore ? (
            <div className='flex justify-center'>
              <Button
                className='text-blue-500'
                onClick={() => setAddMore(true)}
              >
                Add More
              </Button>
            </div>
          ) : (
            <>
              <TextInput
                initData={initData}
                cb={setAddMore}
              />
              <Button
                className='text-blue-500'
                onClick={() => setAddMore(false)}
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
