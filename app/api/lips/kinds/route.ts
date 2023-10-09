import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { text, imageUrl } = body;

    if (!text) {
      return new NextResponse('Text is required', {
        status: 400,
      });
    }

    if (!imageUrl) {
      return new NextResponse('Image URL is required', {
        status: 400,
      });
    }

    const textWithImageInput = await prismadb.lips.update({
      where: {
        name: 'lips',
      },
      data: {
        kinds: {
          create: {
            text: text,
            image: imageUrl,
          },
        },
      },
      include: {
        tips: true,
      },
    });

    return NextResponse.json(textWithImageInput);
  } catch (error) {
    console.log('[LIPS_TIPS_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
