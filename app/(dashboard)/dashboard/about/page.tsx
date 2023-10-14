import prismadb from '@/lib/prismadb';

import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { Heading } from '../components/Heading';
import { Description } from './components/Description';

const NAME = 'about';

export default async function Page() {
  const about = await prismadb.about.findFirst();

  const description = await prismadb.text.findMany({
    where: {
      descriptionId: about?.id,
    },
  });

  return (
    <div className='text-white pb-12'>
      <Heading name={NAME} />
      {!about && <InitButton name={NAME} />}
      <InitModal name={NAME} />
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <Description description={description} />
      </div>
    </div>
  );
}
