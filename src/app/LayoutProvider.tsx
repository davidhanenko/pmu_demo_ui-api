'use client';

type Props = {
  children?: React.ReactNode;
};

import { usePathname } from 'next/navigation';
import { Navbar } from './components/navbar';

export const LayoutProvider = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/' && <Navbar />}
      {children}
    </>
  );
};
