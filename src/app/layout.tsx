import '@/styles/globals.css';

import { Navbar } from '@/app/components/navbar';
import { NavStateProvider } from '@/context/navContext';
import React from 'react';

export const metadata = {
  title: 'IH pmu',
  description: 'pmu artist, NYC',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  brows: React.ReactNode;
  lips: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavStateProvider>
          <Navbar />
          <div>
            {props.children} {props.brows} {props.lips}
          </div>
        </NavStateProvider>
      </body>
    </html>
  );
}
