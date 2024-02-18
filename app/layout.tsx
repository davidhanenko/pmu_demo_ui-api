import './globals.css';

import React from 'react';

export const metadata = {
  title: 'PMU Artist NYC',
  description: 'pmu artist, NYC. Permanent makeup artist in New York City. Brows, lips, eyeliner and more.',
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
