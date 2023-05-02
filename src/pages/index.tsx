import { About } from '@/components/about';
import { Brows } from '@/components/brows';
import { Contact } from '@/components/contact';
import { Home } from '@/components/home';
import { Lips } from '@/components/lips';
import { Navbar } from '@/components/navbar';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <main>
      <Navbar />
      <Home />
      <Brows />
      <Lips />
      <About />
      <Contact />
    </main>
  );
}
