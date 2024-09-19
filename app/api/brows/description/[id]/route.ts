import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

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

    const descriptionText = await prismadb.text.delete({
      where: {
        id: params.id,
      },
    });

    revalidatePath('/', 'layout');

    return NextResponse.json(descriptionText);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const { text } = body;

    if (!text) {
      return new NextResponse('Text input is required', {
        status: 400,
      });
    }

    if (!params.id) {
      return new NextResponse('Id is required', {
        status: 400,
      });
    }

    const textInput = await prismadb.text.update({
      where: {
        id: params.id,
      },
      data: {
        text: text,
      },
    });
    revalidatePath('/', 'layout');

    return NextResponse.json(textInput);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
