'use client';

import { Separator } from '@/components/ui/separator';
import { TextInput } from '../../components/TextInput';
import { Text } from '@prisma/client';

import { Button } from '@/components/ui/button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTextInput } from '@/hooks/useTextInput';

export const Description = ({
  description,
}: {
  description: Text[];
}) => {
  const initData = {
    text: '',
    api: '/api/brows/description',
    id: '',
  };

  const addMoreState = useTextInput();

  return (
    <section className='col-span-2 md:col-span-1 bg-slate-700 p-4'>
      <div>
        <h2 className='text-xl font-bold'>Description</h2>
        <p className='mt-2 text-muted-foreground'>
          This is a description of the brows page.
        </p>
      </div>
      <Separator className='my-4' />
      <div>
        <ul className='text-sm px-4'>
          {description.map(desc => (
            <DescriptionItem key={desc.id} desc={desc} />
          ))}
        </ul>

        <div className='mx-4 p-2 bg-slate-500 '>
          {!addMoreState.addMore ? (
            <div className='flex justify-center'>
              <Button
                className='text-blue-500'
                onClick={addMoreState.onAddMoreOpen}
              >
                <FontAwesomeIcon icon={faPlus} /> Add More
              </Button>
            </div>
          ) : (
            <>
              <TextInput initData={initData} />
              <Button
                className='text-blue-500'
                onClick={addMoreState.onAddMoreClose}
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const DescriptionItem = ({ desc }: { desc: Text }) => {
  const initData = {
    text: desc.text,
    api: '/api/brows/description',
    id: desc.id,
  };

  return (
    <li className='my-4 p-2 bg-slate-600'>
      <TextInput initData={initData} />
    </li>
  );
};
