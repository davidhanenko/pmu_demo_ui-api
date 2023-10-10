'use client';

import { useState } from 'react';

import { TextWithHeader } from '@prisma/client';
import { SectionWithHeader } from '../../components/SectionWithHeader';
import { SubHeading } from '../../components/SubHeading';

const API = '/api/lips/process';

export const Process = ({
  process,
}: {
  process: TextWithHeader[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4'>
      <SubHeading
        title='The Process'
        description='This is the process of the lips page.'
      />

      <SectionWithHeader
        data={process}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
