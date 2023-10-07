import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { order, text, header } = body;

    if (!text) {
      return new NextResponse('Text is required', {
        status: 400,
      });
    }

    const textWithHeaderInput = await prismadb.lips.update({
      where: {
        name: 'lips',
      },
      data: {
        tips: {
          create: {
            order: order,
            header: header,
            text: text,
          },
        },
      },
      include: {
        tips: true,
      },
    });

    return NextResponse.json(textWithHeaderInput);
  } catch (error) {
    console.log('[LIPS_TIPS_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
