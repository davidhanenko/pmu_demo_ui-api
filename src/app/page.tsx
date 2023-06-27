import { Brows } from '@/components/brows';
import { Contact } from '@/components/contact';
import { Lips } from '@/components/lips';
import { Navbar } from '@/components/navbar';
import { Main } from '@/components/main';

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
