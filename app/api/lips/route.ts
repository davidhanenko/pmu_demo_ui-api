import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return new NextResponse('Name is required', {
        status: 400,
      });
    }

    const lips = await prismadb.lips.create({
      data: {
        name: name,
      },
    });

    return NextResponse.json(lips);
  } catch (error) {
    console.log('[LIPS_POST]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const lips = await prismadb.lips.findFirst({
      include: {
        description: true,
        process: true,
        tips: true,
      },
    });

    return NextResponse.json(lips);
  } catch (error) {
    console.log('LIPS_GET]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
