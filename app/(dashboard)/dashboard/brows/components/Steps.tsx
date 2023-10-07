'use client';

import { useState } from 'react';

import { Separator } from '@/components/ui/separator';
import { TextWithHeader } from '@prisma/client';
import { SectionWithHeader } from '../../components/SectionWithHeader';

const API = '/api/brows/steps';

export const Steps = ({
  steps,
}: {
  steps: TextWithHeader[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4'>
      <div>
        <h2 className='text-xl font-bold'>Steps</h2>
        <p className='mt-2 text-muted-foreground'>
          This is a procedure steps of the brows page.
        </p>
      </div>
      <Separator className='my-4' />
      <SectionWithHeader
        data={steps}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
