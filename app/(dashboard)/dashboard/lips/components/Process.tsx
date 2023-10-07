'use client';

import { useState } from 'react';

import { Separator } from '@/components/ui/separator';
import { TextWithHeader } from '@prisma/client';
import { SectionWithHeader } from '../../components/SectionWithHeader';

const API = '/api/lips/process';

export const Process = ({
  process,
}: {
  process: TextWithHeader[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4'>
      <div>
        <h2 className='text-xl font-bold'>The Process</h2>
        <p className='mt-2 text-muted-foreground'>
          This is the process of the lips page.
        </p>
      </div>
      <Separator className='my-4' />
      <SectionWithHeader
        data={process}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
