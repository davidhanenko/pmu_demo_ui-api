import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const { order, header, text } = body;

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

    const tipInput = await prismadb.textWithHeader.update({
      where: {
        id: params.id,
      },
      data: {
        order: order,
        header: header,
        text: text,
      },
    });

    return NextResponse.json(tipInput);
  } catch (error) {
    console.log('[LIPS_TIPS_PATCH]', error);
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

    const tipInput = await prismadb.textWithHeader.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(tipInput);
  } catch (error) {
    console.log('[LIPS_TIPS_DELETE]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
