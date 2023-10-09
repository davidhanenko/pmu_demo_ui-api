import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (
        req.nextUrl.pathname.startsWith('/dashboard') &&
        token === null
      ) {
        return false;
      }

      return true;
    },
  },
});
