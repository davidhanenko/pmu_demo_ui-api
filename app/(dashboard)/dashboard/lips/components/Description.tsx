'use client';

import { useState } from 'react';

import { Separator } from '@/components/ui/separator';
import { Text } from '@prisma/client';
import { TextSection } from '../../components/TextSection';

const API = '/api/lips/description';

export const Description = ({
  description,
}: {
  description: Text[];
}) => {
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

      <TextSection
        data={description}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
