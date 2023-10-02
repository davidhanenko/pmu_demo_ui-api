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

    const brows = await prismadb.brows.create({
      data: {
        name: name,
      },
      include: {
        description: true,
      },
    });

    return NextResponse.json(brows);
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
      },
    });

    return NextResponse.json(brows);
  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
