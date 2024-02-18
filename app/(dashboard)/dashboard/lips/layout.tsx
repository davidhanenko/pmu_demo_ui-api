export default function LipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='p-4'>
      <div>{children}</div>
    </div>
  );
}
