'use client';

import { useState } from 'react';

import { Text } from '@prisma/client';
import { TextSection } from '../../components/TextSection';
import { SubHeading } from '../../components/SubHeading';

const API = '/api/about/description';

export const Description = ({
  description,
}: {
  description: Text[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='col-span-2 md:col-span-1 bg-slate-700 p-4'>
      <SubHeading
        title='About section'
        description={
          'This is a main part of the about page.'
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
