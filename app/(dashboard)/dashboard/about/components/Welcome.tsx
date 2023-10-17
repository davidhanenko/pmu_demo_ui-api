'use client';

import { useState } from 'react';

import { TextWithHeader } from '@prisma/client';
import { SectionWithHeader } from '../../components/SectionWithHeader';
import { SubHeading } from '../../components/SubHeading';

const API = '/api/about/welcome';

export const Welcome = ({
  welcome,
}: {
  welcome: TextWithHeader[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4 mb-4'>
      <SubHeading
        title='Welcome text'
        description='This is the welcome section of the main page.'
      />

   
        <SectionWithHeader
          data={welcome}
          api={API}
          addMore={addMore}
          cb={setAddMore}
        />

    </section>
  );
};
