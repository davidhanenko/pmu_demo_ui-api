import { getServerSession } from 'next-auth';

import { RegisterForm } from './components/RegisterForm';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className='h-screen w-full flex justify-center items-center p-4'>
      {!user && <RegisterForm />}
    </div>
  );
}
