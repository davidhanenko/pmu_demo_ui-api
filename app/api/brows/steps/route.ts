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

    const brows = await prismadb.brows.findFirst();

    const textWithHeaderInput = await prismadb.brows.update(
      {
        where: {
          id: brows?.id,
        },
        data: {
          steps: {
            create: {
              order: order,
              header: header,
              text: text,
            },
          },
        },
        include: {
          steps: true,
        },
      }
    );

    return NextResponse.json(textWithHeaderInput);
  } catch (error) {
    console.log('[BROWS_STEPS_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
