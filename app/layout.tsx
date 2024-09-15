import React from 'react';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'PMU Artist NYC',
  description:
    'PMU artist, NYC. Permanent makeup artist in New York City & Brooklyn. Brows, lips, eyeliner and more.',
};

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div>{props.children}</div>
        <Analytics />
      </body>
    </html>
  );
}
