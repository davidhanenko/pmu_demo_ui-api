import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (
        req.nextUrl.pathname.startsWith('/dashboard') &&
        token === null
      ) {
        // access to register page if not logged in
        if (
          req.nextUrl.pathname.startsWith(
            '/dashboard/auth/register'
          ) &&
          token === null
        ) {
          return true;
        }
        return false;
      }

      return true;
    },
  },
});
