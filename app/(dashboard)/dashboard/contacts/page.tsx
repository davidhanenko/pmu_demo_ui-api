import prismadb from '@/lib/prismadb';

import { Heading } from '../components/Heading';
import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { ContactsForm } from './components/ContactsForm';

const NAME = 'contacts';

export default async function Page() {
  const contacts = await prismadb.contacts.findFirst();

  return (
    <div className='text-white pb-12'>
      <Heading name={NAME} />

      {!contacts && <InitButton name={NAME} />}

      <InitModal name={NAME} />

      <div className='grid md:grid-cols-2 '>
        <ContactsForm contacts={contacts} />
      </div>
    </div>
  );
}
