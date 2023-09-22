import { ClerkProvider } from '@clerk/nextjs';

import DashboardNav from './components/DashboardNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div className='bg-slate-800 h-screen'>
        <DashboardNav />
        <div>{children}</div>
      </div>
    </ClerkProvider>
  );
}
