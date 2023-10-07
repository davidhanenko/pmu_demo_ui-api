'use client';

import { Text } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { TextInput } from './TextInput';

const Item = ({
  item,
  api,
}: {
  item: Text;
  api: string;
}) => {
  const initData = {
    text: item.text,
    api: api,
    id: item.id,
  };

  return (
    <li className='my-4 p-2 bg-slate-600'>
      <TextInput initData={initData} />
    </li>
  );
};

export const TextSection = ({
  data,
  api,
  addMore,
  cb,
}: {
  data: Text[];
  api: string;
  addMore: boolean;
  cb: (arg: boolean) => void;
}) => {
  const initData = {
    text: '',
    api: api,
    id: '',
  };

  return (
    <div>
      <ul className='text-sm md:px-4'>
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
              <TextInput initData={initData} cb={cb} />
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
