import prismadb from '@/lib/prismadb';
import { Description } from './components';
import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { Separator } from '@/components/ui/separator';
import { Heading } from '../components/Heading';

const NAME = 'brows';

const BrowsPage = async () => {
  const brows = await prismadb.brows.findUnique({
    where: {
      name: NAME,
    },
  });

  const description = await prismadb.text.findMany({
    where: {
      browsId: brows?.id,
    },
  });

  return (
    <div className='text-white'>
      <Heading name={NAME} />
      {!brows && <InitButton name={NAME} />}

      <InitModal name={NAME} />

      <Separator className='my-4' />

      <div className='grid grid-cols-2 gap-4'>
        <Description description={description} />
      </div>
    </div>
  );
};


export default BrowsPage;
