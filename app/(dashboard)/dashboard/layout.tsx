import DashboardNav from './components/DashboardNav';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
import ProgressBarProvider from '@/providers/progress-bar-provider';
import { NextAuthProvider } from '@/providers/auth-provider';

export default function LipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-slate-800 min-h-screen w-full max-w-[1400px] mx-auto'>
      <ModalProvider />
      <ToastProvider />
      <NextAuthProvider>
        <DashboardNav />
        <ProgressBarProvider>
          <div className='pt-24'>{children}</div>
        </ProgressBarProvider>
      </NextAuthProvider>
    </div>
  );
}
