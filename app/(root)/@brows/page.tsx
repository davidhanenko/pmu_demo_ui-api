import prismadb from '@/lib/prismadb';

import { Brows } from './components/Brows';

export default async function Page() {
  const browsData = await prismadb.brows.findFirst();

  const browsDescription = await prismadb.text.findMany({
    where: {
      browsId: browsData?.id,
    },
  });

  const browsSteps = await prismadb.textWithHeader.findMany(
    {
      where: {
        browsId: browsData?.id,
      },
    }
  );

  if (!browsData) return null;

  return (
    <Brows
      browsDescription={browsDescription}
      browsSteps={browsSteps}
      videoUrl={browsData?.videoBg || ''}
    />
  );
}
