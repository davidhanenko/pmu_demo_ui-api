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

    const about = await prismadb.about.findFirst();

    const textInput = await prismadb.about.update({
      where: {
        id: about?.id,
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
    console.log('[ABOUT_DESCRIPTION_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}