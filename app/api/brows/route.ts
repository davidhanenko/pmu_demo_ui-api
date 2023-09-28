import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { description } = body;

    const brows = await prismadb.brows.create({
      data: {
        description: {
          create: {
            text: description,
          },
        },
        videoBg: 'default-video-bg', // add the missing property
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

