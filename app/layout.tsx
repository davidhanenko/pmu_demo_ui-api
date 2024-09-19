import React from 'react';
import './globals.css';

import Script from 'next/script';
import { WebPage, WithContext } from 'schema-dts';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'PMU Artist NYC',
  description:
    'Permanent Makeup. Lips, Brows, Eyeliner. PMU artist in NYC - specializing in brows, lips, and eyeliner. Enhance your natural beauty with expert permanent makeup in New York City & Brooklyn. Book your appointment today.',
};

const jsonLd: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: metadata.title,
  headline: 'Permanent Makeup Artist NYC',
  description:
    'Permanent Makeup. Lips, Brows, Eyeliner. PMU artist in NYC - specializing in brows, lips, and eyeliner. Enhance your natural beauty with expert permanent makeup in New York City & Brooklyn. Book your appointment today.',
  image: `${process.env.NEXTAUTH_URL}/public/pmu_main.png`,
  datePublished: '2024-09-18',
  dateModified: '2024-09-18',
  provider: {
    '@type': 'LocalBusiness',
    name: 'PMU Artist NYC',
    areaServed: 'New York City, Brooklyn',
  },
};

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta
          name='description'
          content={metadata.description}
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:image'
          content={
            `${process.env.NEXTAUTH_URL}/pmu_main.png` ||
            '/public/pmu_main.png'
          }
        />
        <meta
          property='og:image:type'
          content='image/png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          name='twitter:image'
          content={
            `${process.env.NEXTAUTH_URL}/pmu_main.png` ||
            '/public/pmu_main.png'
          }
        />
        <meta
          name='twitter:image:type'
          content='image/png'
        />
        <meta name='twitter:image:width' content='1200' />
        <meta name='twitter:image:height' content='630' />

        <Script
          id='faq-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>
        <div>{props.children}</div>
        <Analytics />
      </body>
    </html>
  );
}
