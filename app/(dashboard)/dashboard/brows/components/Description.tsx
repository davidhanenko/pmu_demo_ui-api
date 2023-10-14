'use client';

import { useState } from 'react';

import { Text } from '@prisma/client';
import { TextSection } from '../../components/TextSection';
import { SubHeading } from '../../components/SubHeading';

const API = '/api/brows/description';

export const Description = ({
  description,
}: {
  description: Text[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='col-span-2 md:col-span-1 bg-slate-700 p-4'>
      <SubHeading
        title='Description'
        description={
          'This is a description of the brows page.'
        }
      />

      <TextSection
        data={description}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
