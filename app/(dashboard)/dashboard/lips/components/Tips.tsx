'use client';

import { useState } from 'react';


import { TextWithHeader } from '@prisma/client';
import { SectionWithHeader } from '../../components/SectionWithHeader';
import { SubHeading } from '../../components/SubHeading';

const API = '/api/lips/tips';

export const Tips = ({
  tips,
}: {
  tips: TextWithHeader[];
}) => {
  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4 my-4'>
      <SubHeading
        title='Tips'
        description='This is the tips section of the lips page.'
      />

      <SectionWithHeader
        data={tips}
        api={API}
        addMore={addMore}
        cb={setAddMore}
      />
    </section>
  );
};
