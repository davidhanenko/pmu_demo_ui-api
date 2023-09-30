import prismadb from '@/lib/prismadb';
import { Description } from './components';
import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { Separator } from '@/components/ui/separator';
import { Heading } from '../components/Heading';

const BrowsPage = async () => {
  const brows = await prismadb.brows.findUnique({
    where: {
      name: 'brows',
    },
  });

  const name = 'brows';

  return (
    <div className='text-white'>
      <Heading name={name} />
      {!brows && <InitButton name={name} />}

      <InitModal name={name} />

      <Separator className='my-4' />

      <div className='grid grid-cols-2 gap-4'>
        <Description />
      </div>
    </div>
  );
};

export default BrowsPage;
