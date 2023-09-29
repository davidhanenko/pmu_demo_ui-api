import prismadb from '@/lib/prismadb';
import { Description } from './components';
import { InitModal } from './components/InitModal';

const BrowsPage = async () => {
  const brows = await prismadb.brows.findUnique({
    where: {
      name: 'brows',
    },
  });

  console.log( brows );
  
  if ( !brows ) { 
    
  }

  return (
    <div className='text-white'>
      <header className='text-2xl'>
        <span className='text-slate-400 font-bold'>
          Brows
        </span>{' '}
        Settings
      </header>

      <InitModal />

      <Description />
    </div>
  );
};

export default BrowsPage;
