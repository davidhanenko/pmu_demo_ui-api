'use client';

import { Separator } from '@/components/ui/separator';
import { TextInput } from '../../components/TextInput';

const initData = {
  text: '',
  api: '/api/brows/description',
  id: '',
};

export const Description = () => {
  return (
    <section className='col-span-2 md:col-span-1 bg-slate-700 p-4'>
      <div>
        <h2 className='text-xl font-bold'>Description</h2>
        <p className='mt-2 text-sm text-muted-foreground'>
          This is a description of the brows page.
        </p>
      </div>
      <Separator className='my-4' />
      <div>
        <TextInput initData={initData} />
      </div>
    </section>
  );
};
