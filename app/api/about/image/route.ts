import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { imageUrl } = body;

    if (!imageUrl) {
      return new NextResponse(
        'Image upload url is required',
        {
          status: 400,
        }
      );
    }

    const about = await prismadb.about.findFirst();

    const image = await prismadb.about.update({
      where: {
        id: about?.id,
      },
      data: {
        image: imageUrl,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    console.log('[ABOUT_IMAGE_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
