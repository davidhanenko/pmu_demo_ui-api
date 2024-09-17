import React from 'react';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'PMU Artist NYC',
  description:
    'PMU artist in NYC - specializing in brows, lips, and eyeliner. Enhance your natural beauty with expert permanent makeup in New York City & Brooklyn. Book your appointment today.',
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
