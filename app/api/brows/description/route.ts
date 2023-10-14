import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { text } = body;

    if (!text) {
      return new NextResponse('Text is required', {
        status: 400,
      });
    }

    const brows = await prismadb.brows.findFirst();

    const textInput = await prismadb.brows.update({
      where: {
        id: brows?.id,
      },
      data: {
        description: {
          create: {
            text: text,
          },
        },
      },
      include: {
        description: true,
      },
    });

    return NextResponse.json(textInput);
  } catch (error) {
    console.log('[BROWS_DESCRIPTION_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
