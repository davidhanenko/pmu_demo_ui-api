import prismadb from '@/lib/prismadb';

import { Heading } from '../components/Heading';
import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { Separator } from '@/components/ui/separator';
import { ContactsForm } from './components/ContactsForm';

const NAME = 'contacts';

export default async function Page() {
  const contacts = await prismadb.contacts.findFirst();

  return (
    <div className='text-white pb-12'>
      <Heading name={NAME} />

      {!contacts && <InitButton name={NAME} />}

      <InitModal name={NAME} />

      <Separator className='my-4' />

      <div className='grid grid-cols-2'>
        {!!contacts && <ContactsForm contacts={contacts} />}
      </div>
    </div>
  );
}
