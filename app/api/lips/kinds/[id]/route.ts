import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const { text, imageUrl } = body;

    if (!text) {
      return new NextResponse('Text input is required', {
        status: 400,
      });
    }
    if (!imageUrl) {
      return new NextResponse('Image URL is required', {
        status: 400,
      });
    }

    if (!params.id) {
      return new NextResponse('Id is required', {
        status: 400,
      });
    }

    const KindInput = await prismadb.textWithImage.update({
      where: {
        id: params.id,
      },
      data: {
        text: text,
        image: imageUrl,
      },
    });

    return NextResponse.json(KindInput);
  } catch (error) {
    console.log('[LIPS_KINDS_PATCH]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse('Id is required', {
        status: 400,
      });
    }

    const KindInput = await prismadb.textWithImage.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(KindInput);
  } catch (error) {
    console.log('[LIPS_KINDS_DELETE]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
