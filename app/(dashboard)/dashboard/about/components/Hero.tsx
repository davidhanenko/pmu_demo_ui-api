'use client';

import { SubHeading } from '../../components/SubHeading';
import { TextInput } from '../../components/TextInput';

const API = '/api/about';

export const Hero = ({
  heroName,
}: {
  heroName: string;
}) => {
  return (
    <section className='col-span-2 md:col-span-1 bg-slate-700 p-4 mt-4'>
      <SubHeading
        title='Hero Name'
        description={'This is the Hero name.'}
      />

      <TextInput
        initData={{ text: heroName, api: API, id: '' }}
      />
    </section>
  );
};
