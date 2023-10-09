'use client';

import { TextWithImage } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SubHeading } from '../../components/SubHeading';
import { TextWithImageInput } from '../../components/TextWithImageIput';

const API = '/api/lips/kinds';

const Kind = ({
  kind,
  api,
}: {
  kind: TextWithImage;
  api: string;
}) => {
  const initData = {
    text: kind.text,
    imageUrl: kind.image,
    api: api,
    id: kind.id,
  };

  return (
    <li className='my-4 p-2 bg-slate-600'>
      <TextWithImageInput initData={initData} />
    </li>
  );
};

export const Kinds = ({
  kinds,
}: {
  kinds: TextWithImage[];
}) => {
  const initData = {
    text: '',
    imageUrl: '',
    api: API,
    id: '',
  };

  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4 my-4'>
      <SubHeading
        title='Lips Kinds'
        description='This is the kinds of lips section'
      />

      <div>
        <ul className='text-sm md:px-4 md:grid md:grid-cols-3 gap-4'>
          {kinds?.map(kind => (
            <Kind key={kind.id} kind={kind} api={API} />
          ))}

          <div className='my-4 p-2 bg-slate-500 '>
            {!addMore ? (
              <div className='flex justify-center'>
                <Button
                  className='text-blue-500'
                  onClick={() => setAddMore(true)}
                >
                  Add More
                </Button>
              </div>
            ) : (
              <div className='relative'>
                <TextWithImageInput
                  initData={initData}
                  cb={setAddMore}
                />
                <Button
                  className='text-red-300 absolute bottom-2 left-0'
                  onClick={() => setAddMore(false)}
                  variant={'outline'}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </section>
  );
};
