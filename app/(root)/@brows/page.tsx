// import prismadb from '@/lib/prismadb';
import { Brows } from './components';

export default async function Page() {
  // const brows = await prismadb.brows.findFirst({
  //   include: {
  //     description: true,
  //   },
  // });

  return <Brows />;
}
