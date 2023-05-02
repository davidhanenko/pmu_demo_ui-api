export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Dashboard nav</h2>
      <div>{children}</div>
    </div>
  );
}
