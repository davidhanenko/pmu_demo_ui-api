import React from 'react';

import { Navbar } from './components/navbar';
import { NavStateProvider } from '@/context/navContext';
import { Footer } from './components/footer';

export default function RootLayout(props: {
  children: React.ReactNode;
  brows: React.ReactNode;
  lips: React.ReactNode;
  blog: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <NavStateProvider>
      <Navbar />
      <div className='max-width'>
        {props.children} {props.brows} {props.lips}
        {props.contact}
      </div>
      <Footer />
    </NavStateProvider>
  );
}
