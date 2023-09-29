import { ModalProvider } from '@/providers/modal-provider';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='p-4'>
      <ModalProvider />
      <div>{children}</div>
    </div>
  );
}
