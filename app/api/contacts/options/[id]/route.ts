import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

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

    return NextResponse.json(textInput);
  } catch (error) {
    console.log('[CONTACTS_OPTION_PATCH]', error);
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

    const option = await prismadb.text.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(option);
  } catch (error) {
    console.log('[CONTACTS_OPTION_DELETE]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
