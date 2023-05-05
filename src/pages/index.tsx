import { GetStaticProps, NextPage } from 'next';

import { About } from '@/components/about';
import { Brows } from '@/components/brows';
import { Contacts } from '@/components/contacts';
import { Main } from '@/components/main';
import { Lips } from '@/components/lips';
import { Navbar } from '@/components/navbar';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <main>
      <Navbar />
      <Main />
      <Brows />
      <Lips />
      <About />
      <Contacts />
    </main>
  );
}

// export const getStaticProps = async (
//   ctx: GetStaticProps
// ) => {
//   return {
//     props: {},
//   };
// };
