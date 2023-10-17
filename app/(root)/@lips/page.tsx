import prismadb from '@/lib/prismadb';

import { Lips } from './components/Lips';

export default async function Page() {
  const lipsData = await prismadb.lips.findFirst();

  const lipsDescription = await prismadb.text.findMany({
    where: {
      lipsId: lipsData?.id,
    },
  });

  const lipsProcess =
    await prismadb.textWithHeader.findMany({
      where: {
        lipsProcessId: lipsData?.id,
      },
    });

  const lipsTips = await prismadb.textWithHeader.findMany({
    where: { lipsTipsId: lipsData?.id },
  });

  const lipsTechniques =
    await prismadb.textWithImage.findMany({
      where: {
        lipsId: lipsData?.id,
      },
    });

  if (!lipsData) return null;

  return (
    <Lips
      lipsDescription={lipsDescription}
      lipsProcess={lipsProcess}
      lipsTips={lipsTips}
      lipsTechniques={lipsTechniques}
      videoUrl={lipsData?.videoBg || ''}
    />
  );
}
