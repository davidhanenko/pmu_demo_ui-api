import { UserButton } from '@clerk/nextjs';

export default function DashboardNav() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
