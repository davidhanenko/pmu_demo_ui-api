import prismadb from '@/lib/prismadb';

import { Contact } from './components/Contact';

export default async function Page() {
  const contactsData = await prismadb.contacts.findFirst();

  const contactOptions = await prismadb.text.findMany({
    where: {
      contactsId: contactsData?.id,
    },
  });

  if (!contactsData) return null;

  return (
    <Contact
      contactsData={contactsData}
      contactOptions={contactOptions}
    />
  );
}
