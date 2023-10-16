import prismadb from '@/lib/prismadb';

import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { Heading } from '../components/Heading';
import { Description } from './components/Description';
import { Welcome } from './components/Welcome';
import { AboutImage } from './components/AboutImage';
import { Machine } from './components/Machine';

const NAME = 'about';

export default async function Page() {
  const about = await prismadb.about.findFirst();

  const description = await prismadb.text.findMany({
    where: {
      descriptionId: about?.id,
    },
  });

  const welcome = await prismadb.textWithHeader.findMany({
    where: {
      aboutId: about?.id,
    },
  });

  const machine = await prismadb.text.findMany({
    where: {
      machineId: about?.id,
    },
  });

  return (
    <div className='text-white pb-12 md:px-4'>
      <Heading name={NAME} />
      {!about && <InitButton name={NAME} />}
      <InitModal name={NAME} />

      <Welcome welcome={welcome} />
      <div className='grid grid-cols-2 gap-4'>
        <Description description={description} />
        <AboutImage imageUrl={about?.image} />
      </div>
      <Machine machine={machine} />
    </div>
  );
}
