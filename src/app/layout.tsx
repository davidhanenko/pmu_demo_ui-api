import '@/styles/globals.css';

import { Navbar } from '@/app/components/navbar';
import React from 'react';
import { NavStateProvider } from '@/context/navContext';
import { LayoutProvider } from './LayoutProvider';

export const metadata = {
  title: 'IH pmu',
  description: 'pmu artist, NYC',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  brows: React.ReactNode;
  lips: React.ReactNode;
  blog: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <LayoutProvider>
          <NavStateProvider>
            {/* <Navbar /> */}
            <div>
              {props.children} {props.brows} {props.lips}
              {props.contact}
            </div>
          </NavStateProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
