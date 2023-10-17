import prismadb from '@/lib/prismadb';

import { Heading } from '../components/Heading';
import { InitModal } from '../components/InitModal';
import { InitButton } from '../components/InitButton';
import { ContactsForm } from './components/ContactsForm';
import { Options } from './components/Options';

const NAME = 'contacts';

export default async function Page() {
  const contacts = await prismadb.contacts.findFirst();

  const options = await prismadb.text.findMany({
    where: {
      contactsId: contacts?.id,
    },
  });

  return (
    <div className='text-white pb-12 md:px-4'>
      <Heading name={NAME} />

      {!contacts && <InitButton name={NAME} />}

      <InitModal name={NAME} />

      <div className='grid md:grid-cols-2 gap-4 '>
        <ContactsForm contacts={contacts} />
        <Options options={options} />
      </div>
    </div>
  );
}
