'use client';

import { useState } from 'react';

import { Separator } from '@/components/ui/separator';
import { TextWithHeader } from '@prisma/client';
import { SectionWithHeader } from '../../components/SectionWithHeader';

const API = '/api/lips/tips';

export const Tips = ({
  tips,
}: {
  tips: TextWithHeader[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4'>
      <div>
        <h2 className='text-xl font-bold'>Tips</h2>
        <p className='mt-2 text-muted-foreground'>
          This is the tips section of the lips page.
        </p>
      </div>
      <Separator className='my-4' />
      <SectionWithHeader
        data={tips}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
