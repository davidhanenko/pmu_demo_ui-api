export default function BrowsLayout({
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
