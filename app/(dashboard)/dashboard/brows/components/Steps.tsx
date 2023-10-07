'use client';

import { useState } from 'react';

import { Separator } from '@/components/ui/separator';
import { TextWithHeader } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { TextWithHeaderInput } from '../../components/TextWithHeaderInput';

const StepItem = ({ step }: { step: TextWithHeader }) => {
  const initData = {
    order: step.order,
    header: step.header || '',
    text: step.text,
    api: '/api/brows/steps',
    id: step.id,
  };

  return (
    <li className='p-2 bg-slate-600'>
      <TextWithHeaderInput initData={initData} />
    </li>
  );
};

export const Steps = ({
  steps,
}: {
  steps: TextWithHeader[];
}) => {
  const initData = {
    order: null,
    header: '',
    text: '',
    api: '/api/brows/steps',
    id: '',
  };

  const [addMore, setAddMore] = useState(false);

  return (
    <section className='bg-slate-700 p-4'>
      <div>
        <h2 className='text-xl font-bold'>Steps</h2>
        <p className='mt-2 text-muted-foreground'>
          This is a procedure steps of the brows page.
        </p>
      </div>
      <Separator className='my-4' />
      <div>
        <ul className='text-sm md:p-4 grid md:grid-cols-2 gap-4'>
          {steps.map(step => (
            <StepItem key={step.id} step={step} />
          ))}

          <div className='p-2 bg-slate-500 '>
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
                <TextWithHeaderInput
                  initData={initData}
                  cb={setAddMore}
                />
                <Button
                  className='text-red-300 absolute bottom-2 right-0'
                  onClick={() => setAddMore(false)}
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
