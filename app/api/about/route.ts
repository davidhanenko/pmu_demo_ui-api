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

    const about = await prismadb.about.create({
      data: {
        name: name,
      },
    });

    return NextResponse.json(about);
  } catch (error) {
    console.log('[BROWS_POST]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const brows = await prismadb.brows.findFirst({
      include: {
        description: true,
        steps: true,
      },
    });

    return NextResponse.json(brows);
  } catch (error) {
    console.log('[BROWS_GET]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
