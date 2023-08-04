import './globals.css';

import React from 'react';

export const metadata = {
  title: 'IH pmu',
  description: 'pmu artist, NYC',
};

export default function Layout(props: {
  children: React.ReactNode;
 
}) {
  return (
    <html lang='en'>
      <body>
          <div>
            {props.children}
          </div>
      </body>
    </html>
  );
}
