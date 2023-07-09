import { Brows } from '@/app/components/brows';
import { Contact } from '@/app/components/contact';
import { Lips } from '@/app/components/lips';
import { Navbar } from '@/app/components/navbar';
import { Main } from '@/app/components/main';

export default function Page() {
  return (
    <main className=''>
      {/* <Navbar /> */}
      <Main />
      {/* <div className='bg-gradient-to-b from-black to-slate-900 h-[200px]'></div> */}
      <Brows />
      <Lips />
      <Contact />
    </main>
  );
}
