import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { videoUrl } = body;

    if (!videoUrl) {
      return new NextResponse(
        'Video upload url is required',
        {
          status: 400,
        }
      );
    }

    const brows = await prismadb.brows.findFirst();

    const videoBg = await prismadb.brows.update({
      where: {
        id: brows?.id,
      },
      data: {
        videoBg: videoUrl,
      },
    });

    return NextResponse.json(videoBg);
  } catch (error) {
    console.log('[BROWS_POST]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
