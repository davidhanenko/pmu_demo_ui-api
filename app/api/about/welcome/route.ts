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

    const about = await prismadb.about.findFirst();

    const textWithHeaderInput = await prismadb.about.update(
      {
        where: {
          id: about?.id,
        },
        data: {
          welcome: {
            create: {
              order: order,
              header: header,
              text: text,
            },
          },
        },
        include: {
          welcome: true,
        },
      }
    );

    return NextResponse.json(textWithHeaderInput);
  } catch (error) {
    console.log('[ABOUT_WELCOME_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
