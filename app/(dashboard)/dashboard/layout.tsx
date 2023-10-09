import { ClerkProvider } from '@clerk/nextjs';

import DashboardNav from './components/DashboardNav';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
import ProgressBarProvider from '@/providers/progress-bar-provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div className='bg-slate-800 min-h-screen'>
        <ModalProvider />
        <ToastProvider />
        <DashboardNav />
        <ProgressBarProvider>
          <div className='pt-24'>{children}</div>
        </ProgressBarProvider>
      </div>
    </ClerkProvider>
  );
}
