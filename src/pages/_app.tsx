import { NavStateProvider } from '@/context/navContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <NavStateProvider>
      <Component {...pageProps} />
    </NavStateProvider>
  );
}
