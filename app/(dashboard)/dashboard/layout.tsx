import { ClerkProvider } from '@clerk/nextjs';

import DashboardNav from './components/DashboardNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div className='bg-slate-800'>
        <DashboardNav />
        <div>{children}</div>
      </div>
    </ClerkProvider>
  );
}
