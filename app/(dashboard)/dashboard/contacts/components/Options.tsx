'use client';

import { useState } from 'react';

import { Text } from '@prisma/client';
import { SubHeading } from '../../components/SubHeading';
import { TextSection } from '../../components/TextSection';

const API = '/api/contacts/options';

export const Options = ({
  options,
}: {
  options: Text[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4'>
      <SubHeading
        title='Contact options'
        description='There are the options for contact message'
      />

      <TextSection
        data={options}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
