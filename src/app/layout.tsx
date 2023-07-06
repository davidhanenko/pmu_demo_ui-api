import '@/styles/globals.css';

import { Navbar } from '@/components/navbar';
import { NavStateProvider } from '@/context/navContext';

export const metadata = {
  title: 'IH pmu',
  description: 'pmu artist, NYC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavStateProvider>
          <Navbar />
          <div>{children}</div>
        </NavStateProvider>
      </body>
    </html>
  );
}
