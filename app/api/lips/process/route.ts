import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { order, text, header } = body;

    if (!text) {
      return new NextResponse('Text is required', {
        status: 400,
      });
    }

    const lips = await prismadb.lips.findFirst();

    const textWithHeaderInput = await prismadb.lips.update({
      where: {
        id: lips?.id,
      },
      data: {
        process: {
          create: {
            order: order,
            header: header,
            text: text,
          },
        },
      },
      include: {
        process: true,
      },
    });
    revalidatePath('/', 'layout');
    return NextResponse.json(textWithHeaderInput);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
