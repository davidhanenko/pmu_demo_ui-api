'use client';

import { useState } from 'react';

import { TextWithHeader } from '@prisma/client';
import { SectionWithHeader } from '../../components/SectionWithHeader';
import { SubHeading } from '../../components/SubHeading';

const API = '/api/brows/steps';

export const Steps = ({
  steps,
}: {
  steps: TextWithHeader[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4'>
      <SubHeading
        title='Steps'
        description='This is a procedure steps of the brows page.'
      />

      <SectionWithHeader
        data={steps}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
