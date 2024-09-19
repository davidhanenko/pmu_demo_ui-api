import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

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
    revalidatePath('/', 'layout');
    return NextResponse.json(KindInput);
  } catch (error) {
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
    revalidatePath('/', 'layout');
    return NextResponse.json(KindInput);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
