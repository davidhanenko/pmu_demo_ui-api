'use client';

import { TextWithHeader } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { TextWithHeaderInput } from './TextWithHeaderInput';

const Item = ({
  item,
  api,
}: {
  item: TextWithHeader;
  api: string;
}) => {
  const initData = {
    order: item.order,
    header: item.header || '',
    text: item.text,
    api: api,
    id: item.id,
  };

  return (
    <li className='p-2 bg-slate-600'>
      <TextWithHeaderInput initData={initData} />
    </li>
  );
};

export const SectionWithHeader = ({
  data,
  api,
  cb,
  addMore,
}: {
  data: TextWithHeader[];
  api: string;
  addMore: boolean;
  cb: (arg: boolean) => void;
}) => {
  const initData = {
    order: null,
    header: '',
    text: '',
    api: api,
    id: '',
  };

  return (
    <div>
      <ul className='text-sm md:p-4 grid md:grid-cols-2 gap-4'>
        {data.map(item => (
          <Item key={item.id} item={item} api={api} />
        ))}

        <div className='p-2 bg-slate-500 '>
          {!addMore ? (
            <div className='flex justify-center'>
              <Button
                className='text-blue-500'
                onClick={() => cb(true)}
              >
                Add More
              </Button>
            </div>
          ) : (
            <div className='relative'>
              <TextWithHeaderInput
                initData={initData}
                cb={cb}
              />
              <Button
                className='text-red-300 absolute bottom-2 right-0'
                onClick={() => cb(false)}
                variant={'outline'}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};
