import prismadb from '@/lib/prismadb';

import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { Separator } from '@/components/ui/separator';
import { Heading } from '../components/Heading';
import { Description } from './components/Description';
import { Process } from './components/Process';
import { Tips } from './components/Tips';

const NAME = 'lips';

const Page = async () => {
  const lips = await prismadb.lips.findFirst();

  const description = await prismadb.text.findMany({
    where: {
      lipsId: lips?.id,
    },
  });

  const process = await prismadb.textWithHeader.findMany({
    where: {
      lipsProcessId: lips?.id,
    },
  });

  const tips = await prismadb.textWithHeader.findMany({
    where: {
      lipsTipsId: lips?.id,
    },
  });

  return (
    <div className='text-white pb-12'>
      <Heading name={NAME} />
      {!lips && <InitButton name={NAME} />}

      <InitModal name={NAME} />

      <Separator className='my-4' />
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <Description description={description} />
      </div>
      <Process process={process} />
      <Tips tips={tips} />
    </div>
  );
};

export default Page;
