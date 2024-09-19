'use client';

import { useState } from 'react';

import { Text } from '@prisma/client';
import { TextSection } from '../../components/TextSection';
import { SubHeading } from '../../components/SubHeading';

const API = '/api/about/machine';

export const Machine = ({
  machine,
}: {
  machine: Text[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='col-span-2 md:col-span-1 bg-slate-700 p-4 mt-4'>
      <SubHeading
        title='Machine description'
        description={
          'This is a description to the used machine.'
        }
      />

      <TextSection
        data={machine}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
