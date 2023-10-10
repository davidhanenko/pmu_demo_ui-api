import prismadb from '@/lib/prismadb';

import { Description } from './components/Description';
import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { Separator } from '@/components/ui/separator';
import { Heading } from '../components/Heading';
import { Steps } from './components/Steps';
import { VideoBg } from './components/VideoBg';

const NAME = 'brows';

const Page = async () => {
  const brows = await prismadb.brows.findFirst();

  const description = await prismadb.text.findMany({
    where: {
      browsId: brows?.id,
    },
  });
  const steps = await prismadb.textWithHeader.findMany({
    where: {
      browsId: brows?.id,
    },
  });

  return (
    <div className='text-white pb-12'>
      <Heading name={NAME} />
      {!brows && <InitButton name={NAME} />}

      <InitModal name={NAME} />

      <Separator className='my-4' />

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <Description description={description} />
        <VideoBg videoUrl={brows?.videoBg} />
      </div>
      <Steps steps={steps} />
    </div>
  );
};

export default Page;
