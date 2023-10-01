import { ClerkProvider } from '@clerk/nextjs';

import DashboardNav from './components/DashboardNav';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';

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
        <div>{children}</div>
      </div>
    </ClerkProvider>
  );
}
