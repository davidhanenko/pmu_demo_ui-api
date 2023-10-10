import prismadb from '@/lib/prismadb';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/route';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (session) {
    return new NextResponse('Already logged in', {
      status: 403,
    });
  }

  try {
    const { name, email, password, secret } =
      (await req.json()) as {
        name: string;
        email: string;
        password: string;
        secret: string;
      };

    if (!name) {
      return new NextResponse('Name is required', {
        status: 400,
      });
    }

    if (!email) {
      return new NextResponse('Email is required', {
        status: 400,
      });
    }

    if (!password) {
      return new NextResponse('Password is required', {
        status: 400,
      });
    }

    if (!secret) {
      return new NextResponse('Secret is required', {
        status: 400,
      });
    }

    if (secret !== process.env.REGISTER_SECRET) {
      return new NextResponse('Not allowed to register', {
        status: 400,
      });
    }

    const hashed_password = await hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashed_password,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
